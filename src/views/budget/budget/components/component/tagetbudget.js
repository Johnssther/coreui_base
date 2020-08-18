import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    FormGroup,
    Button,
} from 'reactstrap';

const TargetBudget = (props) => {
    const { item } = props;

    return (
        <Card>
            <CardHeader>
                Agosto 2020
        </CardHeader>
            <CardBody>
                <div className="row mb-2">
                    <div className="offset-sm-4 col-sm-5 text-center">
                        <ul class="list-group list-group-horizontal-xl">
                            <li class="list-group-item list-group-item-success">Presupuestado: ${new Intl.NumberFormat().format(item.reduce((prev, next) => prev + next.precio, 0))}</li>
                            <li class="list-group-item list-group-item-danger">Gastado: $0</li>
                            <li class="list-group-item list-group-item-primary">Balance: $0</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <table className="table ">
                        <thead>
                            <tr className="">
                                <th scope="col">Item</th>
                                <th scope="col">Gasto</th>
                                <th scope="col">Presupuestado</th>
                                <th scope="col">Gastado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                item.map((value, index) => {
                                    const { name, precio } = value
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{name}</td>
                                            <td>${new Intl.NumberFormat().format(precio)}</td>
                                            <td>$0</td>
                                        </tr>
                                    )
                                })

                            }
                            <tr className="bg-ligth">
                                <th scope="row"></th>
                                <th>TOTAL</th>
                                <th>${ new Intl.NumberFormat().format(item.reduce((prev, next) => prev + next.precio, 0)) }</th>
                                <th>$0</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default TargetBudget