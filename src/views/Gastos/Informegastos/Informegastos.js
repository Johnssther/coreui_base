import React, { Component } from 'react';
import { Badge, Card, CardText, CardBody } from 'reactstrap';
import { Progress } from 'reactstrap';
import Modals from '../../Notifications/Modals/Modals';

class Informegastos extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div>
          <Card>
            <CardBody>
              <CardText>Módulo no disponible en el moento</CardText>
              <Progress multi>
                <Progress bar animated color="success" value="98">100% cargado</Progress>
              </Progress>
            </CardBody>
          </Card>
          <Modals />
        </div>
      </div>
    );
  }
}

export default Informegastos;
