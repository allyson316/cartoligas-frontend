import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Badge,
  Button
} from "reactstrap";
import BootstrapTable from "react-bootstrap-table-next";
import { ClipLoader } from "react-spinners";
import { getLigas } from "../LigasActions";

export default class ListarLigas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableLigas: [],
      loading: false
    };
  }
  formatterTipoLiga = (cell, row) => {
    if (cell === 0) {
      return (
        <Badge color="success" pill>
          Rodada
        </Badge>
      );
    } else if (cell === 1) {
      return (
        <Badge color="info" pill>
          Mensal
        </Badge>
      );
    }
    return (
      <Badge color="primary" pill>
        Anual
      </Badge>
    );
  };

  formatterAction = () => {
    return (
      <>
        <Button className="btn-icon btn-link like" color="warning" size="sm">
          <i className="tim-icons icon-pencil" title="Editar" />
        </Button>
        <Button className="btn-icon btn-link like" color="danger" size="sm">
          <i className="tim-icons icon-simple-remove" title="Excluir" />
        </Button>
      </>
    );
  };

  noDataIndication = () => (
    <ClipLoader
      color={"#e14eca"}
      loading={this.state.loading}
      sizeUnit={"px"}
      size={50}
    />
  );

  async componentDidMount() {
    this.setState({ loading: true });
    const tableResult = await getLigas();
    if (tableResult.status === 200) {
      this.setState({ tableLigas: tableResult.data, loading: false });
    }
  }

  render() {
    const columns = [
      {
        dataField: "idLiga",
        text: "Id"
      },
      {
        dataField: "nomeLiga",
        text: "Nome"
      },
      {
        dataField: "tipoLiga",
        text: "Tipo da liga",
        formatter: this.formatterTipoLiga
      },
      {
        dataField: "action",
        text: "Ação",
        formatter: this.formatterAction
      }
    ];
    return (
      <Card>
        <CardHeader>
          <CardTitle tag="h4">Listar Ligas</CardTitle>
        </CardHeader>
        <CardBody>
          <BootstrapTable
            keyField="idLiga"
            data={this.state.tableLigas}
            columns={columns}
            noDataIndication={() => <this.noDataIndication />}
            bordered={false}
            bootstrap4={true}
            classes="text-center"
          />
        </CardBody>
      </Card>
    );
  }
}
