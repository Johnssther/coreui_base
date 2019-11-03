import React, { Component } from 'react';
import { Badge, CardBody } from 'reactstrap';
import { Progress } from 'reactstrap';

class Informegastos extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <CardBody>
          <Badge className="mr-1" href="#" color="primary">Primary</Badge>
          <Badge className="mr-1" href="#" color="secondary">Secondary</Badge>
          <Badge className="mr-1" href="#" color="success">Success</Badge>
          <Badge className="mr-1" href="#" color="danger">Danger</Badge>
          <Badge className="mr-1" href="#" color="warning">Warning</Badge>
          <Badge className="mr-1" href="#" color="info">Info</Badge>
          <Badge className="mr-1" href="#" color="light">Light</Badge>
          <Badge className="mr-1" href="#" color="dark" pill>Dark</Badge>
        </CardBody>
        <div>
          <div className="text-center">Stripes and Animations</div>
          <Progress multi>
            <Progress bar animated color="success" value="98">98%</Progress>
          </Progress>
        </div>
      </div>
    );
  }
}

export default Informegastos;
