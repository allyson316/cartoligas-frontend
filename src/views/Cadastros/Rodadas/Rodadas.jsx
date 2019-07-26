import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import ListarTimes from "./screens/ListarTimes";
import TimesRodada from "./screens/TimesRodada";

export default class Rodadas extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    console.log(id);
  }
  render() {
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
}
