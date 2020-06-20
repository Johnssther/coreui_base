import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Col,
    Row,
    FormGroup,
    Container,
    Button,
} from 'reactstrap';
import Main from '../../../../layout/main'

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import moment from 'moment-jalaali'

import InputField from '../../../../components/form/inputField';
import InputCalendar from '../../../../components/form/inputCalendar'
import InputCheckbox from '../../../../components/form/inputCheckbox'
import InputSelect from '../../../../components/form/inputSelect'

//services
import { getExpenses } from '../services/personalexpenses'

getExpenses();

const LoginComponent = (props) => {
    const { count, onCreate, expensestype, success, expense } = props;
    console.log(expensestype, 'ju');

    return (
        <Main success={success}>
            <Card>
                <CardHeader>
                    Ingresar Gasto {count-1}
                </CardHeader>
                <CardBody>
                    <Formik
                        initialValues={{
                            gasto: expense.gasto,
                            cantidad: expense.cantidad,
                            precio_unidad: expense.precio_unidad,
                            precio_total: expense.precio_total,
                            fecha: expense.fecha,//moment().format('YYYY/M/D  HH:mm:ss'),
                            tipogasto_id: expense.tipogasto_id,
                            id: expense.id,
                            numeroregistros: 1,
                        }}
                        validationSchema={Yup.object({
                            gasto: Yup.string()
                                .min(3, 'Un gasto debe tener minimo 3 caracteres.')
                                .required('El gasto es obligatorio'),
                            cantidad: Yup.number()
                                .max(99999, 'La cantidad no puede exceder de 99.999')
                                .positive('La cantidad no puede ser negativa.')
                                .required('La cantiad es obligatoria'),
                            precio_unidad: Yup.number()
                                .positive('El precio de la unidad no puede ser negativo.')
                                .required('La cantiad es obligatoria'),
                            precio_total: Yup.number()
                                .positive('La cantidad no puede ser negativa.'),
                            fecha: Yup.date()
                                .required('La fecha es obligatoria'),
                            tipogasto_id: Yup.string()
                                .required('Debe seleccionar un tipo de gasto'),
                            numeroregistros: Yup.number()
                                .max(99999, 'La cantidad no puede exceder de 99.999')
                                .positive('La cantidad no puede ser negativa.')
                            //jobType: Yup.string()
                            // specify the set of valid values for job type
                            // @see http://bit.ly/yup-mixed-oneOf
                            /*  .oneOf(
                                 ["designer", "development", "product", "other"],
                                 "Invalid Job Type"
                             ) */
                            //   .required("Required")
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            onCreate(values);
                            setSubmitting(true);
                        }}
                    >
                        <Form>
                            <Row>
                                <Col sm="3">
                                    <InputField name="numeroregistros" type="text" label="Numero registros" placeholder="Ingrese una numeroregistros." />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6">
                                    <InputCalendar name="fecha" type="text" label="Fecha" placeholder="Ingrese la fecha del gasto." />
                                </Col>
                                <Col sm="6">
                                    <FormGroup>
                                        <InputSelect type="input" label="Tipo Gasto" name="tipogasto_id" expensestype={expensestype} />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="3">
                                    <InputField name="cantidad" type="text" label="Cantidad" placeholder="Ingrese una cantidad." />
                                </Col>
                                <Col sm="9">
                                    <InputField name="gasto" type="text" label="Gasto" placeholder="Ingrese un gasto." />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6">
                                    <InputField name="precio_unidad" type="text" label="Precio unid." placeholder="Ingrese el precio por unidad." />
                                </Col>
                                <Col sm="6">
                                    <InputField name="precio_total" type="text" label="Precio total" placeholder="Ingrese el precio total (opcional)." />
                                </Col>
                            </Row>
                            <hr></hr>
                            <Row>
                                <Col sm={{ size: 6, offset: 4 }}>
                                    <Button className="col-sm-3 m-1" type="reset" color="secondary" size="sm">Reset</Button>
                                    <Button className="col-sm-3 m-1" type="submit" color="dark" size="sm">Register</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Formik>
                </CardBody>
            </Card>
        </Main>
    );
};

export default LoginComponent