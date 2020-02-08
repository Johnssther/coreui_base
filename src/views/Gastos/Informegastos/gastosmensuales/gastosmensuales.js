import React, { Component } from 'react';

import {
  Card, CardText, CardBody, Toast, ToastBody, ToastHeader,
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
      mes: [],
    }
  }
  componentDidMount() {
    let data = {
      mes: 11,
    }
    API.getExpenses(data)
      .then((response) => {
        console.log(response);
        this.setState({
          mes: response
        })
      })
      .catch(e => console.log(e))
  }
  render() {
    let mes_nombre = ['Enero', 'Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre',]
    
    return (
      <div className="animated fadeIn">
        <div>
          <div className="container">
            <div className="row">
              {this.state.mes.map(
                (item, index) =>
                  <div className="col-sm" key={index}>
                    <Card>
                      <CardHeader>
                        <strong>{ mes_nombre[item.mes-1] } { item.anio }</strong>
                      </CardHeader>
                      <CardBody>
                        Tus gastos del {mes_nombre[item.mes-1]} del { item.anio } fueron de: { `$ ${new Intl.NumberFormat().format(item.precio_total_mes)}`}
                      <hr></hr>

                      </CardBody>
                      <CardFooter>
                        <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Imprimir Gastos</Button>
                      </CardFooter>
                    </Card>
                  </div>
                )
              }

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GastosMensuales;
