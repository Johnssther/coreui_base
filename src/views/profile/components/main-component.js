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
import Main from '../../layout/main'

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import moment from 'moment-jalaali'

import InputField from '../../components/form/inputField';

// import InputCheckbox from '../../../../components/form/inputCheckbox'

//services
import { getExpenses } from '../services/personalexpenses'

const LoginComponent = (props) => {
    const { onCreate, expensestype, success, expense } = props;

    return (
        <Main success={success}>
            <Card>
                <div className="bg-primary text-center">
                    <img className="img-circle" src="assets/img/avatars/6.jpg" alt="admin@bootstrapmaster.com" width="200"></img>
                    <h1>{JSON.parse(localStorage.getItem('auth')).name}</h1>
                </div>
                <CardHeader className="row bg-success">
                    <div className="col-sm">
                        <h2>Profile</h2>
                    </div>
                </CardHeader>
                <CardBody>
                    <Formik
                        initialValues={{
                            name: JSON.parse(localStorage.getItem('auth')).name,
                            username: JSON.parse(localStorage.getItem('auth')).username,
                            id: JSON.parse(localStorage.getItem('auth')).id,
                        }}
                        validationSchema={Yup.object({
                            name: Yup.string()
                                .min(3, 'Ingrese su nombre.')
                                .required('El nombre es requerido'),
                            username: Yup.string()
                                .min(3, 'Ingrese su username.')
                                .required('El usuario es requerido'),

                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            onCreate(values);
                            setSubmitting(true);
                        }}
                    >
                        <Form>
                            <div class="">
                                <div class="row">
                                    <div class="col-sm"><h4>ID</h4></div>
                                    <div class="col-sm">
                                        AAB747CD65W2-{JSON.parse(localStorage.getItem('auth')).id}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm"><h4>E-mail</h4></div>
                                    <div class="col-sm">
                                        {JSON.parse(localStorage.getItem('auth')).email}
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm">
                                        <h4>Name</h4>
                                    </div>
                                    <div class="col-sm">
                                        <InputField name="name" type="text" label={false} placeholder="Ingrese su nombre." />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm">
                                        <h4>User</h4>
                                    </div>
                                    <div class="col-sm">
                                        <InputField name="username" type="text" label={false} placeholder="Ingrese su usuario." />
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <Row>
                                <Col sm={{ size: 6, offset: 4 }}>
                                    <Button className="col-sm-3 m-1" type="reset" color="secondary" size="sm">Reset</Button>
                                    <Button className="col-sm-3 m-1" type="submit" color="primary" size="sm">Save</Button>
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