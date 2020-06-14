import React, { Component } from 'react';
import { Card, CardText, CardBody, Toast, ToastBody, ToastHeader } from 'reactstrap';
import { Progress } from 'reactstrap';

class Informegastos extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div>
        <Toast>
              <ToastHeader>
                Reactstrap
              </ToastHeader>
              <ToastBody>
                  This is a toast on a----llllllllllllll white background — check it out!
              </ToastBody>
            </Toast>

          <Card>
            <CardBody>
              <CardText>Módulo no disponible en el moento</CardText>
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

export default Informegastos;
