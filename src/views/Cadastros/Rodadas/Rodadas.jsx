import React from "react";
import { Row, Col } from "reactstrap";
import ListarTimes from "./screens/ListarTimes";
import TimesRodada from "./screens/TimesRodada";

export default function Rodadas() {
  return (
    <div className="content">
      <Row>
        <Col md="4">
          <ListarTimes />
        </Col>
        <Col md="8">
          <TimesRodada />
        </Col>
      </Row>
    </div>
  );
}
