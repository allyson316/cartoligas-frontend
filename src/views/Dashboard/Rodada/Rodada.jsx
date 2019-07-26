import React, { Component } from "react";
import { Row } from "reactstrap";
import { Redirect } from "react-router";

import Rodadas from "./screens/Rodadas";
import { getRodadas } from "./rodadaActions";

export default class Rodada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rodadas: [],
      redirect: false,
      idRodada: ""
    };
  }

  async componentDidMount() {
    const rodadas = await getRodadas();
    console.log(this.props);
    if (rodadas.status === 200) {
      this.setState({ rodadas: rodadas.data });
    }
  }

  loadRodada = idRodada => {
    this.setState({ idRodada: idRodada, redirect: true });
  };

  render() {
    return (
      <Row>
        {this.state.redirect ? (
          <Redirect to={`/admin/rodadas/${this.state.idRodada}`} />
        ) : null}
        <Rodadas
          rodadas={this.state.rodadas}
          loadRodada={idRodada => this.loadRodada(idRodada)}
        />
      </Row>
    );
  }
}
