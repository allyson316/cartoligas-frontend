import React, { Component } from "react";
import {
  Col,
  Row,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Input,
  FormGroup,
  Button
} from "reactstrap";
import NotificationAlert from "react-notification-alert";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

import { getTimesByCartolaFc, post } from "../TimesActions";

export default class CadastrarTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nomeTime: "",
      tableTimes: [],
      timeAdd: ""
    };
  }

  handleChange = async e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
    const times = await getTimesByCartolaFc(this.state.nomeTime);
    if (times.status === 200) {
      this.setState({ tableTimes: times.data });
    }
    if (this.state.nomeTime === "") {
      this.setState({ tableTimes: [], timeAdd: "" });
    }
  };

  rowEvents = {
    onClick: (e, row, rowIndex) => {
      this.setState({ timeAdd: row });
    }
  };

  formatter = (cell, row) => {
    return (
      <Row>
        <Col md="1">
          <div className="photo">
            <img alt="..." src={row.url_escudo_svg} />
          </div>
        </Col>
        <Col md="6">
          <CardTitle tag="h4">{row.nome}</CardTitle>
        </Col>
        <Col md="5">
          <CardTitle className="text-center" tag="h4">
            {row.nome_cartola}
          </CardTitle>
        </Col>
      </Row>
    );
  };

  onSubmit = async () => {
    const time = this.state.timeAdd;
    if (time !== "") {
      const timeResult = await post(time);
      console.log(timeResult);
      if (timeResult.status === 200) {
        const options = {
          place: "tr",
          message: (
            <div>
              <div>
                Time{" "}
                <b>
                  <strong>{time.nome}</strong>
                </b>{" "}
                adicionado no sistema, siga para cadastro de rodadas para
                adicioná - lo a uma rodada
              </div>
            </div>
          ),
          type: "success",
          icon: "tim-icons icon-check-2",
          autoDismiss: 6
        };
        this.refs.notificationAlert.notificationAlert(options);
      } else {
        const options = {
          place: "tr",
          message: (
            <div>
              <div>{timeResult.data.error}</div>
            </div>
          ),
          type: "danger",
          icon: "tim-icons icon-alert-circle-exc",
          autoDismiss: 6
        };
        this.refs.notificationAlert.notificationAlert(options);
      }
    } else {
      const options = {
        place: "tr",
        message: (
          <div>
            <div>
              Não há time selecionado para ser adicionado ao sitema! Favor
              selecionar um time e clicar em cadastrar.
            </div>
          </div>
        ),
        type: "danger",
        icon: "tim-icons icon-alert-circle-exc",
        autoDismiss: 6
      };
      this.refs.notificationAlert.notificationAlert(options);
    }
  };

  render() {
    const columns = [
      {
        dataField: "time_id",
        text: "Selecione um time",
        headerAlign: "center",
        formatter: this.formatter
      }
    ];
    const selectRow = {
      mode: "radio",
      clickToSelect: true,
      hideSelectColumn: true,
      style: { backgroundColor: "#1d8cf8" }
    };

    const pagination = {
      hideSizePerPage: true,
      sizePerPageList: [
        {
          text: "4",
          value: 4
        }
      ]
    };

    return (
      <Card className="card-plain">
        <div className="rna-container">
          <NotificationAlert ref="notificationAlert" />
        </div>
        <CardHeader>
          <CardTitle tag="h4">Cadastrar Time</CardTitle>
        </CardHeader>
        <CardBody>
          <Col className="text-center">
            <Button
              onClick={this.onSubmit}
              className="btn-fill"
              color="primary"
            >
              Cadastrar
            </Button>
          </Col>
          <Col>
            <FormGroup>
              <Input
                name="nomeTime"
                value={this.state.nomeTime}
                onChange={this.handleChange}
                type="text"
                placeholder="Nome do time"
                style={{ height: "40px", fontSize: "18px" }}
              />
              <BootstrapTable
                keyField="time_id"
                data={this.state.tableTimes}
                columns={columns}
                noDataIndication="nenum time encontrado"
                bordered={false}
                bootstrap4={true}
                rowEvents={this.rowEvents}
                selectRow={selectRow}
                pagination={paginationFactory(pagination)}
              />
            </FormGroup>
          </Col>
        </CardBody>
      </Card>
    );
  }
}
