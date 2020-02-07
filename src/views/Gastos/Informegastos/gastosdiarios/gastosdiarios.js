import React, { Component } from 'react';
import { Card, CardText, CardBody, Toast, ToastBody, ToastHeader,
  CardHeader,
  Form,
  Label,
  Input,
  FormGroup,
  CardFooter,
  Button,
 } from 'reactstrap';
import { Progress } from 'reactstrap';

class GastosDiarios extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Card>
              <CardHeader>
                <strong>3 Dic</strong>
              </CardHeader>
              <CardBody>
                Total:
                <hr></hr>
                Lista ingresada
              </CardBody>
              <CardFooter>
                <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Mas información</Button>
              </CardFooter>
            </Card>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default GastosDiarios;