import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Container,
    Row,
    Col,
    Button,
} from 'reactstrap';

const ShowComponent = (props) => {
    const { expense } = props
    return (
        <Container>
            <Card>
                <CardHeader>
                    Show Expense
                </CardHeader>
                <CardBody>
                    <Container>
                        <Row xs="2">
                            <Col className="text-right mb-23" sm={{ size: 5 }}> <b><label>Código:</label> </b></Col>
                            <Col>{expense.id}</Col>
                        </Row>
                        <Row xs="1" sm="2" md="4">
                            <Col className="text-right" sm={{ size: 5 }}><b><label>Fecha:</label></b></Col>
                            <Col>{expense.fecha}</Col>
                        </Row>
                        <Row xs="1" sm="2" md="4">
                            <Col className="text-right" sm={{ size: 5 }}><b><label>Tipo de Gasto:</label></b></Col>
                            <Col>{expense.tipogasto.gasto}</Col>
                        </Row>
                        <Row xs="3">
                            <Col className="text-right" sm={{ size: 5 }}><b><label>Gasto:</label></b></Col>
                            <Col>{expense.gasto}</Col>
                        </Row>
                        <Row xs="4">
                            <Col className="text-right" sm={{ size: 5 }}><b><label>Cantidad:</label></b></Col>
                            <Col>{expense.cantidad}</Col>
                        </Row>
                        <Row xs="4">
                            <Col xs="6" className="text-right" sm={{ size: 5 }}><b><label>Precio:</label></b></Col>
                            <Col xs="6">{`$${new Intl.NumberFormat().format(expense.precio_unidad)}`}</Col>

                        </Row>
                        <Row xs="1" sm="2" md="4">
                            <Col className="text-right" sm={{ size: 5 }}><b><label>Precio Total:</label></b></Col>
                            <Col xs="6">{`$${new Intl.NumberFormat().format(expense.precio_total)}`}</Col>
                        </Row>
                    </Container>
                </CardBody>
                <CardFooter>
                    <Row>
                        <Col sm={{ size: 6, offset: 4 }}>
                            <Button className="col-sm-3 m-1" color="secondary" size="sm">To return</Button>
                            <Button className="col-sm-3 m-1" color="dark" size="sm">Edit</Button>
                        </Col>
                    </Row>
                </CardFooter>
            </Card>
        </Container>
    );
};

export default ShowComponent