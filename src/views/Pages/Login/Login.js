import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { onLogin } from '../../../api/login';

import { LinearProgress } from '@material-ui/core';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputUsername: '',
      inputPassword: '',
      errorLogin: false,
      auth: localStorage.getItem('token') != null ? true : false,
      loading: false,
    }
    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.onLogin = this.onLogin.bind(this);
  }

  async onLogin() {
    this.setState({ loading: true, errorLogin: false })
    try {
      const data = await onLogin(this.state.inputUsername, this.state.inputPassword);
      if (data.username) {
        localStorage.setItem('auth', JSON.stringify(data));
        localStorage.setItem('token', data.api_token);
        this.props.history.push('/')
      }

      if (data.message === "The given data was invalid.") {
        this.setState({ errorLogin: true, loading: false })
      }

    } catch (err) {
      this.setState({ loading: false })
      console.log(err);
    }

  
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          {
            this.state.errorLogin === true ?
              <div className="alert alert-warning" role="alert">
                Error: Credenciales incorrectas
                          </div>
              :
              <div />
          }
          <Row className="justify-content-center">
            <Col md="8">
              {this.state.loading === true ?
                <LinearProgress />
                :
                ''
              }

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
                      <Row>
                        <Col xs="6">
                          {/* <Link to="/"> */}
                          <Button color="warning" className="px-4" onClick={this.onLogin}>Iniciar sesón</Button>
                          {/* </Link> */}
                        </Col>
                        <Col xs="6" className="text-right">
                          <Link to="/register">
                            Crear una cuenta.
                          </Link><br></br>
                          <a href="http://coysa.herokuapp.com/password/reset" target="blank">Olvidé mi contraseña</a>
                          {/* <Button color="link" className="px-0">Olvide mi contraceña</Button> */}
                        </Col>
                      </Row>

                    </Form>
                  </CardBody>
                </Card>
                <Card className="text-white py-5 d-md-down-none" style={{ background:'#FFA73D' ,width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Crea tu cuenta</h2>
                      <p>Registrate y vive una verdadera experiencia para llevar el control de tus finanzas personales</p>
                      <Link to="/register">
                        <Button color="warning" className="mt-3" active tabIndex={-1}>Registrate Ahora!</Button>
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
