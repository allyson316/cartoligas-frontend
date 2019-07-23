import React, { Component } from "react";
import { Row, Col } from "reactstrap";

import CadastrarLiga from "./screens/CadastrarLiga";
import ListarLigas from "./screens/ListarLigas";

export default class Ligas extends Component {
  render() {
    return (
      <div className="content">
        <Row>
          <Col md="6">
            <CadastrarLiga />
          </Col>
          <Col md="6">
            <ListarLigas />
          </Col>
        </Row>
      </div>
    );
  }
}
