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
import Main from '../../../layout/main'

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import InputField from '../../../components/form/inputField';
import InputCalendar from '../../../components/form/inputCalendar'

//services
import { getExpenses } from '../../../../services/expenses/personalexpenses'

getExpenses();

const MainComponent = (props) => {
    const { count, onCreate, success, revenue } = props;

    return (
        <Main success={success}>
            <Card>
                <CardHeader className="bg-success">
                    Registrar Ingreso {count - 1}
                </CardHeader>
                <CardBody>
                    <Formik
                        initialValues={{
                            revenue_name: revenue.revenue_name,
                            revenue_description: revenue.revenue_description,
                            revenue_amount: revenue.revenue_amount,
                            revenue_dt: revenue.revenue_dt,//moment().format('YYYY/M/D  HH:mm:ss'),
                            revenue_saving_percentaje: 1,
                            numeroregistros: 1,
                        }}
                        validationSchema={Yup.object({
                            revenue_name: Yup.string()
                                .required('El ingreso es obligatorio'),
                            revenue_description: Yup.string()
                                .min(3, 'Agrega una descripcion')
                                .required('El ingreso es obligatorio'),
                            revenue_amount: Yup.number()
                                .positive('Ingreso de dinero.')
                                .required('La cantiad es obligatoria'),
                            revenue_dt: Yup.date()
                                .required('La fecha es obligatoria'),
                            revenue_saving_percentaje: Yup.number()
                                .max(99999, 'La ahorro no puede exceder de 99.999')
                                .positive('La ahorro no puede ser negativa.')
                                .required('La cantiad es obligatoria'),
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
                                    <InputCalendar name="revenue_dt" type="text" label="Fecha" placeholder="Ingrese la fecha del ingreso." />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="3">
                                    <InputField name="revenue_saving_percentaje" type="text" label="Porcentaje de ahorro" placeholder="Ingrese un porcentaje de ahorro." />
                                </Col>
                                <Col sm="4">
                                    <InputField name="revenue_name" type="text" label="Nombre del ingreso" placeholder="Nombre del ingreso." />
                                </Col>
                                <Col sm="4">
                                    <InputField name="revenue_description" type="text" label="Descripción del ingreso" placeholder="Ingrese una descripción." />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm="6">
                                    <InputField name="revenue_amount" type="text" label="Monto del ingreso" placeholder="Ingrese el monto del ingreso." />
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

export default MainComponent