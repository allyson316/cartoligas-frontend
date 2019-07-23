import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button
} from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import Select from "react-select";
import NotificationAlert from "react-notification-alert";

import { listTimes, getRodadasByLiga } from "../rodadasActions";

export default class ListarTimes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listLimes: [],
      listRodadas: [],
      selectRodada: null,
      time: ""
    };
  }

  addTime(time) {
    if (this.state.selectRodada === null) {
      const options = {
        place: "tr",
        message: (
          <div>
            <div>
              É necessário selecionar uma rodada para poder adicionar um time!
            </div>
          </div>
        ),
        type: "danger",
        icon: "tim-icons icon-alert-circle-exc",
        autoDismiss: 6
      };
      this.refs.notificationAlert.notificationAlert(options);
    } else {
      const values = {
        idTime: time.idTime,
        idRodada: this.state.selectRodada.value
      };
      console.log(values);
    }
  }

  formatter = (cell, row) => {
    return (
      <Row>
        <Col md="1">
          <div className="photo">
            <img alt="..." src={row.urlEscudoSvg} />
          </div>
        </Col>
        <Col md="9">
          <CardTitle tag="h4">{row.nome}</CardTitle>
        </Col>
        <Col md="2">
          <Button
            className="btn-link"
            color="info"
            size="sm"
            onClick={e => this.addTime(row)}
          >
            <i className="tim-icons icon-simple-add" />
          </Button>
        </Col>
      </Row>
    );
  };

  async componentDidMount() {
    const timesResult = await listTimes();
    if (timesResult.status === 200) {
      this.setState({ listLimes: timesResult.data });
    }
    const rodadasResult = await getRodadasByLiga();
    if (rodadasResult.status === 200) {
      const rodadas = rodadasResult.data.map(item => {
        return {
          value: item.idRodada,
          label: `Rodada ${item.idCartola}`
        };
      });
      this.setState({ listRodadas: rodadas });
    }
  }

  render() {
    const columnsTimes = [
      {
        dataField: "idTime",
        text: "Times",
        headerAlign: "center",
        formatter: this.formatter
      }
    ];

    return (
      <Row>
        <div className="rna-container">
          <NotificationAlert ref="notificationAlert" />
        </div>
        <Col md="6">
          <Card>
            <CardHeader>
              <CardTitle>Listar Times</CardTitle>
            </CardHeader>
            <CardBody>
              <BootstrapTable
                keyField="idTime"
                data={this.state.listLimes}
                columns={columnsTimes}
                noDataIndication="nenhum time encontrado"
                bordered={false}
                bootstrap4={true}
              />
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
          <Card>
            <CardHeader>
              <CardTitle>Listar Rodadas</CardTitle>
            </CardHeader>
            <CardBody>
              <Select
                className="react-select info"
                classNamePrefix="react-select"
                name="singleSelect"
                value={this.state.selectRodada}
                onChange={value => this.setState({ selectRodada: value })}
                options={this.state.listRodadas}
                placeholder="Selecione a Rodada"
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}
