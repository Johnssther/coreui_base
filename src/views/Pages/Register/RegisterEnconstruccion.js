import React, { Component } from 'react';
import {
  Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row,
  FormGroup, Label, FormFeedback, FormText
} from 'reactstrap';
import validateForm from '../../../utils/validateForms'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      //errors
      name_error: '',
    }
    this.validateForm = this.validateForm.bind(this);
  }
  componentDidMount() {

  }

  validateForm(event) {
    this.setState({
      name_error: validateForm.formRegisterUsers(event)
    })

    // onChange={(event) => this.setState({ inputPassword: event.target.value.length })}
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">

                  <FormGroup>
                    <Label for="exampleEmail">Nombre</Label>
                    <Label htmlFor="inputIsValid">Input is valid</Label>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" valid id="inputIsValid" />
                      {/* <Input type="text" placeholder="Ingresa tu Nombre" autoComplete="name" name='name' onChange={this.validateForm} /> */}
                    </InputGroup>
                    <FormFeedback valid>Cool! Input is valid</FormFeedback>
                    <FormText>Example help text that remains unchanged.</FormText>
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="inputIsValid">Input is valid</Label>
                    <Input type="text" valid id="inputIsValid" />
                    <FormFeedback valid>Cool! Input is valid</FormFeedback>
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="inputIsInvalid">Input is invalid</Label>
                    <Input type="text" invalid id="inputIsInvalid" />
                    <FormFeedback>Houston, we have a problem...</FormFeedback>
                  </FormGroup>

                  <Form>
                    <h1>Registrate</h1>
                    <p className="text-muted"></p>Crea tu cuenta
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Ingresa tu Nombre" autoComplete="name" name='name' onChange={this.validateForm} />
                    </InputGroup>
                    <p>{this.state.name_error}</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Ingresa un usuario" autoComplete="username" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Ingresa correo electrónico" autoComplete="email" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Ingresa Contraceña" autoComplete="new-password" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repita tu  contraceña" autoComplete="new-password" />
                    </InputGroup>
                    <Button color="success" block>Registrarme</Button>
                  </Form>
                </CardBody>
                {/* <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block><span>facebook</span></Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block><span>twitter</span></Button>
                    </Col>
                  </Row>
                </CardFooter> */}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
