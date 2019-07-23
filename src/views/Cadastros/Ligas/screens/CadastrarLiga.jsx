import React, { Component } from "react";
import Select from "react-select";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  CardFooter,
  FormGroup,
  Input,
  Label,
  Button
} from "reactstrap";
import NotificationAlert from "react-notification-alert";

import { createLiga } from "../LigasActions";
import { validateInput } from "../../../../utils/validationInputs";

export default class CadastrarLiga extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectTipoLiga: null,
      nomeLiga: ""
    };
  }

  handleChange = async e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  onSubmit = async () => {
    const nomeLiga = this.state.nomeLiga;
    const tipoLiga = this.state.selectTipoLiga
      ? this.state.selectTipoLiga.value
      : "";

    if (validateInput(nomeLiga) && validateInput(tipoLiga)) {
      const values = {
        nomeLiga,
        tipoLiga
      };
      const ligaResult = await createLiga(values);
      if (ligaResult.status === 200) {
        const options = {
          place: "tr",
          message: (
            <div>
              <div>
                Liga{" "}
                <b>
                  <strong>{values.nomeLiga}</strong>
                </b>{" "}
                adicionada ao sistema!
              </div>
            </div>
          ),
          type: "success",
          icon: "tim-icons icon-check-2",
          autoDismiss: 6
        };
        this.refs.notificationAlert.notificationAlert(options);
      }
    } else {
      const options = {
        place: "tr",
        message: (
          <div>
            <div>
              Há campos vazios no cadastro da liga, favor preencher com nome da
              liga e tipo!
            </div>
          </div>
        ),
        type: "danger",
        icon: "tim-icons icon-alert-circle-exc",
        autoDismiss: 6
      };
      this.refs.notificationAlert.notificationAlert(options);
    }
  };

  render() {
    return (
      <Card>
        <div className="rna-container">
          <NotificationAlert ref="notificationAlert" />
        </div>
        <CardHeader>
          <CardTitle tag="h4">Cadastrar Liga</CardTitle>
        </CardHeader>
        <CardBody>
          <Label>Nome da liga</Label>
          <FormGroup>
            <Input
              name="nomeLiga"
              value={this.state.nomeLiga}
              onChange={this.handleChange}
              type="text"
              placeholder="Nome do time"
            />
          </FormGroup>
          <Label>Tipo da liga</Label>
          <FormGroup>
            <Select
              className="react-select info"
              classNamePrefix="react-select"
              name="singleSelect"
              value={this.state.selectTipoLiga}
              onChange={value => this.setState({ selectTipoLiga: value })}
              options={[
                { value: 0, label: "Liga por rodada" },
                { value: 1, label: "Liga mensal" },
                { value: 2, label: "Liga anual" }
              ]}
              placeholder="Selecione o tipo da liga"
            />
          </FormGroup>
        </CardBody>
        <CardFooter>
          <Button className="btn-fill" color="primary" onClick={this.onSubmit}>
            Cadastrar
          </Button>
        </CardFooter>
      </Card>
    );
  }
}
