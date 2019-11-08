import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import API from '../../../api/api'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputUsername: '',
      inputPassword: '',
      errorLogin: false,
      auth: localStorage.getItem('token') != null ? true:false
    }
    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.onLogin = this.onLogin.bind(this);
  }
  
  onLogin() {

    return new Promise((resolve, reject) => {
      API.onLogin(this.state.inputUsername, this.state.inputPassword).then((data) => {  //username, password:%koi.ti% or admin

        //Valida si existe un username valido
        if (data.username) {
          localStorage.setItem('auth', JSON.stringify(data));
          localStorage.setItem('token', data.api_token);
          console.log(data.api_token);
          // localStorage.clear()
          this.props.history.push('/')

        }
        if (data.message !== "The given data was invalid.") {

          //Valida si el usuario esta o no bloqueado.

        } else { this.setState({ errorLogin: true }) }
        resolve(data);
      }, (error) => {
        reject(error);
      });
    });
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Iniciar Sesión</h1>
                      <p className="text-muted">Ingresa si ya tienes una cuenta</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Usuario" autoComplete="username" onChange={(event) => this.setState({ inputUsername: event.target.value })} />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Contraceña" autoComplete="current-password" onChange={(event) => this.setState({ inputPassword: event.target.value })} />
                      </InputGroup>
                      {
                        this.state.errorLogin === true ?
                          <div className="alert alert-danger" role="alert">
                            Error: Credenciales incorrectas
                          </div>
                          :
                          <div />
                      }
                      <Row>
                        <Col xs="6">
                          {/* <Link to="/"> */}
                          <Button color="primary" className="px-4" onClick={this.onLogin}>Iniciar sesón</Button>
                          {/* </Link> */}
                        </Col>
                        <Col xs="6" className="text-right">
                          {/* <Button color="link" className="px-0">Olvide mi contraceña</Button> */}
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
        {this.state.auth === true &&
          <Redirect from="/" to="/" />
        }
      </div>
    );
  }
}

export default Login;
