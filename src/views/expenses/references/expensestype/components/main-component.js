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
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import moment from 'moment-jalaali'

import InputField from '../../../../components/form/inputField';
import InputCalendar from '../../../../components/form/inputCalendar'
import InputCheckbox from '../../../../components/form/inputCheckbox'
import InputSelect from '../../../../components/form/inputSelect'

//services
// import { getExpenses } from '../services/personalexpenses'

// getExpenses();

const LoginComponent = (props) => {
    const { onCreate } = props;

    return (
        <Container>
            <Card>
                <CardHeader>
                    Tipo de gasto
                </CardHeader>
                <CardBody>
                    <Formik
                        initialValues={{
                            tipogastos_name: 'Gasto de ',
                            tipogastos_active: true,
                        }}
                        validationSchema={Yup.object({
                            tipogastos_name: Yup.string() 
                                .min(11, 'Un gasto debe tener minimo 10 caracteres.')
                                .max(30, 'Un gasto debe tener maximo 30 caracteres.')
                                .required('El gasto es obligatorio'),
                            tipogastos_active: Yup.boolean()
                                .required("Required")
                                .oneOf([true], "El tipo de gasto debe estar activo ."),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            onCreate(values);
                            setSubmitting(true);
                        }}
                    >
                        <Form>
                            <Row>
                                <Col sm="8">
                                    <InputField name="tipogastos_name" type="text" label="Tipo de Gasto" placeholder="Ingrese un tipo de gasto." />
                                </Col>
                                <Col sm="4">
                                    <InputCheckbox name="tipogastos_active" type="checkbox" label="Tipo Activo" />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={{ size: 6, offset: 4 }}>
                                    <Button className="col col-sm-3 m-1" type="reset" color="secondary" size="sm">Reset</Button>
                                    <Button className="col col-sm-3 m-1" type="submit" color="dark" size="sm">Register</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Formik>
                </CardBody>
            </Card>
        </Container>
    );
};

export default LoginComponent