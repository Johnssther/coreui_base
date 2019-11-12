import React, { Component } from 'react';
import {
  Button, Card, CardBody, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row,

} from 'reactstrap';
import API from '../../../api/api'
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
      errors_example:'',
    }
    this.validateForm = this.validateForm.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }
  componentDidMount() {
    // API.registerUser()
    console.log('usuario registrado');

  }

  validateForm(event) {
    let key = event.target.name
    let value = event.target.value
    switch (key) {
      case 'name':
        this.setState({ name: value })
        break;
      case 'username':
        this.setState({ username: value })
        break;
      case 'email':
        this.setState({ email: value })
        break;
      case 'password':
        this.setState({ password: value })
        break;
      case 'password_confirmation':
        this.setState({ password_confirmation: value })
        break;
    }
  }
  registerUser() {

    let data = {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
    }

    const validForm = () => {
      //validacion de correo
      let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

      let valid_email = regex.test(data.email) ? true : false;
      let minimo_name = data.name.length > 4 ? true : false
      let minimo_username = data.username.length > 4 ? true : false
      let minimo_password = data.password.length > 7 ? true : false
      let valid_password = data.password === data.password_confirmation ? true : false

      if (!minimo_name) {
        this.setState({ errors_example: 'Nombre minimo 4 caracteres'});
        return false
      }
      if (!minimo_username) {
        this.setState({ errors_example: 'Usuario minimo 4 caracteres'});
        return false
      }
      if (!valid_email) {
        this.setState({ errors_example: 'Correo invalido'});
        return false
      }
      if (!minimo_password) {
        this.setState({ errors_example: 'La contraceña debe tener minimo 8 caracteres'});
        return false
      }
      if (!valid_password) {
        this.setState({ errors_example: 'La contraceñas con considen'});
        return false
      }
      return true
    }
    if (validForm(data) === true) {
      this.setState({ errors_example: 'Campos validos, puede continuar'});
      API.registerUser(data)
      this.props.history.push('/login')
    }


  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
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
                      <Input type="text" placeholder="Ingresa un usuario" autoComplete="username" name='username' onChange={this.validateForm} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Ingresa correo electrónico" autoComplete="email" name='email' onChange={this.validateForm} />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Ingresa Contraceña" autoComplete="new-password" name='password' onChange={this.validateForm} />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repita tu  contraceña" autoComplete="new-password" name='password_confirmation' onChange={this.validateForm} />
                    </InputGroup>
                    <Button color="success" block onClick={this.registerUser}>Registrarme</Button>
                    <p>{ this.state.errors_example }</p>
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
