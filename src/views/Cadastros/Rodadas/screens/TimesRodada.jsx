import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardTitle, CardBody } from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";

import { getTimesRodada } from "../rodadasActions";

export default class TimesRodada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableTimesRodada: []
    };
  }

  async componentDidMount() {
    const timesRodada = await getTimesRodada();
    if (timesRodada.status === 200) {
      this.setState({
        tableTimesRodada: timesRodada.data
      });
    }
  }

  formatter = (cell, row) => {
    return (
      <Row>
        <Col md="2">
          <div className="photo">
            <img alt="..." src={row.time.url_escudo_svg} />
          </div>
        </Col>
        <Col>
          <p>
            <strong>{row.time.nome}</strong>
          </p>
          <p>
            <small>{row.time.nome_cartola}</small>
          </p>
        </Col>
      </Row>
    );
  };

  render() {
    const columns = [
      {
        dataField: "id",
        text: "id",
        hidden: true
      },
      {
        dataField: "time.nome",
        text: "time",
        headerAlign: "center",
        formatter: this.formatter
      },
      {
        dataField: "time.id_time_cartola",
        text: "id cartola",
        headerAlign: "center"
      },
      {
        dataField: "pago",
        text: "pago",
        headerAlign: "center"
      }
    ];
    return (
      <Card className="card-plain">
        <CardHeader>
          <CardTitle>Times na Rodada</CardTitle>
        </CardHeader>
        <CardBody>
          <BootstrapTable
            keyField="id"
            data={this.state.tableTimesRodada}
            columns={columns}
            noDataIndication="nenhum time encontrado"
            bordered={false}
            bootstrap4={true}
            classes="text-center"
          />
        </CardBody>
      </Card>
    );
  }
}
