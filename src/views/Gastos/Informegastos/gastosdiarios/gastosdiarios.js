import React, { Component } from 'react';
import { Card, CardText, CardBody, Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Progress } from 'reactstrap';

class GastosDiarios extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div>
        <Toast>
              <ToastHeader>
                Reactstrap
              </ToastHeader>
              <ToastBody>
                  Gastos diarios
              </ToastBody>
            </Toast>
            
          <Card>
            <CardBody>
              <CardText>Gastos diarios</CardText>
              <Progress multi>
                <Progress bar animated color="success" value="98">100% cargado</Progress>
              </Progress>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default GastosDiarios;
