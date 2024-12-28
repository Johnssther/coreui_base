
import React, { Component } from 'react';

import {
    Card, CardBody,
    CardHeader,
    CardColumns,
    Badge,
    Table,
    Pagination,
    PaginationItem,
    PaginationLink,
} from 'reactstrap';

class Datos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            gastoTotal: '',

        }
    }
    componentDidMount() {

    }


    render() {
        const mes = this.props.mes;
        console.log(mes, 'a');

        return (
            <>

                <Card>
                    <CardHeader>
                        <i className="fa fa-align-justify"></i> Mis finanzas en el año. <Badge color="success">Beta</Badge>
                    </CardHeader>
                    <CardBody>
                        <Table responsive striped>
                            <thead>
                                <tr style={{ background:'#FFA73D', color:'white' }}>
                                    <th>2020</th>
                                    <th>Enero</th>
                                    <th>Febrero</th>
                                    <th>Marzo</th>
                                    <th>Abril</th>
                                    <th>Mayo</th>
                                    <th>Junio</th>
                                    <th>Julio</th>
                                    <th>Agosto</th>
                                    <th>Septiembre</th>
                                    <th>Octubre</th>
                                    <th>Noviembre</th>
                                    <th>Diciembre</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <Badge color="success">Ingresos</Badge>
                                    </td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Badge color="danger">Gastos</Badge>
                                    </td>
                                    <td>$600.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$0</td>
                                </tr>
                                <tr>
                                    <td>
                                        <Badge color="warning">Ahorro</Badge>
                                    </td>
                                    <td>$1.800.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$1.000.000</td>
                                    <td>$0</td>
                                </tr>
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </>
        );
    }

}

export default Datos;


