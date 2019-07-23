import React from "react";
import { Row, Col } from "reactstrap";
import ListarLigas from "./screens/ListarLigas";

export default function Rodadas() {
  return (
    <div className="content">
      <Row>
        <Col md="4">
          <ListarLigas />
        </Col>
        <Col md="4">
          <h5>Listar Rodadas</h5>
        </Col>
        <Col md="4">
          <h5>Listar Times</h5>
        </Col>
      </Row>
    </div>
  );
}
