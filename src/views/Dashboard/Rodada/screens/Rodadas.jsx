import React from "react";
import { Row, Col, Card, CardBody, CardTitle, Badge, Button } from "reactstrap";
import moment from "moment";
export default function screens(props) {
  return (
    <>
      {props.rodadas.map(item => (
        <Col key={item.id} md="3">
          <Card>
            <CardBody>
              <Row>
                <Col className="text-center">
                  <CardTitle style={{ color: "#32CD32" }}>{`# RODADA ${
                    item.id_rodada_cartola
                  }`}</CardTitle>
                  <Badge
                    style={
                      moment(item.inicio).isSameOrBefore(new Date())
                        ? { backgroundColor: "#ffd600", fontSize: "16px" }
                        : { backgroundColor: "#e14eca", fontSize: "16px" }
                    }
                    pill
                  >
                    {moment(item.inicio).isSameOrBefore(new Date())
                      ? "Finalizada"
                      : "Aberta"}
                  </Badge>
                  <p
                    style={{
                      color: "#32CD32",
                      fontSize: "24px"
                    }}
                  >
                    <strong>{item.qtdTimes}</strong>
                  </p>
                  <p style={{ color: "#32CD32" }}>Times</p>
                  <Button
                    className="btn-sm"
                    color="info"
                    onClick={() => props.loadRodada(item.id)}
                  >
                    Acessar
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
}
