import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button
} from "reactstrap";

// import { Container } from './styles';

export default class screens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listLigas: [{ id: 6, nome: "Chute Certo" }]
    };
  }
  render() {
    return (
      <>
        <Card>
          <CardHeader>
            <CardTitle>Ligas</CardTitle>
          </CardHeader>
          <CardBody>
            {this.state.listLigas.map(item => (
              <Row>
                <Col>
                  <h5>{item.nome}</h5>
                </Col>
                <Col>
                  <Button>Rodadas</Button>
                </Col>
              </Row>
            ))}
          </CardBody>
        </Card>
      </>
    );
  }
}
