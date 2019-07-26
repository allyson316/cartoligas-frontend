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
          <ul className="list-unstyled">
            {this.state.listLigas.map(item => (
              <li key={item.id}>
                <Row
                  style={{
                    width: "100%",
                    lineHeight: "50px",
                    float: "left",
                    textAlign: "center"
                  }}
                >
                  <Col className="text-right" md="2">
                    <div className="photo">
                      <img alt="..." src={item.url_escudo_svg} width="30px" />
                    </div>
                  </Col>
                  <Col className="text-left">
                    <p>{item.nome}</p>
                  </Col>
                  <Col md="1">
                    <Button
                      className="btn-link btn-icon"
                      color="success"
                      size="sm"
                    >
                      <i className="tim-icons icon-simple-add" />
                    </Button>
                  </Col>
                </Row>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    );
  }
}
