import React, { Component } from 'react';
import { Card, CardText, CardBody, Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Progress } from 'reactstrap';

class GastosMensuales extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div>
        <Toast>
              <ToastHeader>
                Reactstrap
              </ToastHeader>
              <ToastBody>
                  Gastos GastosMensuales
              </ToastBody>
            </Toast>
            
          <Card>
            <CardBody>
              <CardText>Gastos mensuales</CardText>
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

export default GastosMensuales;
