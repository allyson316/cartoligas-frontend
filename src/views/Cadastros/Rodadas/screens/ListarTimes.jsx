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
import { getTimes } from "../rodadasActions";

export default class ListarTimes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listLigas: []
    };
  }

  async componentDidMount() {
    const times = await getTimes();
    if (times.status === 200) {
      this.setState({
        listLigas: times.data
      });
    }
  }
  render() {
    return (
      <Card className="card-plain">
        <CardHeader>
          <CardTitle>Times Cadastrados</CardTitle>
        </CardHeader>
        <CardBody>
          {this.state.listLigas.map(item => (
            <Row
              key={item.id}
              style={{
                width: "100%",
                lineHeight: "50px",
                float: "left",
                textAlign: "center"
              }}
            >
              <Col md="10">
                <Row>
                  <Col className="photo" md="2">
                    <img alt="..." src={item.url_escudo_svg} />
                  </Col>
                  <Col className="text-left" md="10">
                    <p>
                      <strong>{item.nome}</strong>
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col md="2">
                <Button className="btn-link btn-icon" color="success" size="sm">
                  <i className="tim-icons icon-simple-add" />
                </Button>
              </Col>
            </Row>
          ))}
        </CardBody>
      </Card>
    );
  }
}
