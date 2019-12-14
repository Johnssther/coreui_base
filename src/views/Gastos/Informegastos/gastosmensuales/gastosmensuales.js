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

 import API from '../../../../api/api'

class GastosMensuales extends Component {
  constructor(props) {
    super(props)
    this.state = {
      noviembre:0,
    }
  }
  componentDidMount() {
    let data = {
      mes:11,
    }
    API.getExpenses(data)
      .then((response)=>{
        console.log(response);
        this.setState({
          noviembre:response
        })
      })
      .catch(e=>console.log(e))
  }
  render() {
    return (
      <div className="animated fadeIn">
        <div>
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <Card>
                  <CardHeader>
                    <strong>Noviembre 2019</strong>
                  </CardHeader>
                  <CardBody>
                    Tus gastos del noviembre fueron de: { `$ ${new Intl.NumberFormat().format(this.state.noviembre)}`}
                  <hr></hr>
                    
                  </CardBody>
                  <CardFooter>
                    {/* <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Mas información</Button> */}
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

export default GastosMensuales;
