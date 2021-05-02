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
                Presupuesto
        </CardHeader>
            <CardBody>
                <div className="row mb-2">
                    <div className="offset-sm-4 col-sm-5 text-center">
                        <ul className="list-group list-group-horizontal-xl">
                            <li className="list-group-item list-group-item-success">Presupuestado: ${new Intl.NumberFormat().format(item.reduce((prev, next) => prev + next.precio, 0))}</li>
                            <li className="list-group-item list-group-item-danger">Gastado: ${new Intl.NumberFormat().format(item.reduce((prev, next) => prev + next.gastado, 0))}</li>
                            <li className="list-group-item list-group-item-primary">Balance: ${new Intl.NumberFormat().format(item.reduce((prev, next) => prev + next.balance, 0))}</li>
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
                                    const { name, precio, gastado } = value
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{name}</td>
                                            <td>${new Intl.NumberFormat().format(precio)}</td>
                                            <td>${new Intl.NumberFormat().format(gastado)}</td>
                                        </tr>
                                    )
                                })

                            }
                            <tr className="bg-ligth">
                                <th scope="row"></th>
                                <th>TOTAL</th>
                                <th>${ new Intl.NumberFormat().format(item.reduce((prev, next) => prev + next.precio, 0)) }</th>
                                <th>${ new Intl.NumberFormat().format(item.reduce((prev, next) => prev + next.gastado, 0)) }</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

export default TargetBudget