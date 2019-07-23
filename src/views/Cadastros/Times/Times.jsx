import React from "react";
import { Row, Col } from "reactstrap";

import CadastrarTime from "./screens/CadastrarTime";

// import { Container } from './styles';

export default function Times() {
  return (
    <div className="content">
      <Row>
        <Col md="12">
          <CadastrarTime />
        </Col>
      </Row>
    </div>
  );
}
