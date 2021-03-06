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
import { getExpenses } from '../../../services/expenses/personalexpenses'
import perfil from '../../../assets/img/avatars/6.jpg'

const LoginComponent = (props) => {
    const { onCreate, expensestype, success, expense } = props;

    return (
        <Main success={success}>
            <Card>
                <div className="bg-primary text-center">
                <img className="img-circle" src={perfil} alt="admin@bootstrapmaster.com" width="200" height="200"></img>
                    <h1>{JSON.parse(localStorage.getItem('auth')).name}</h1>
                </div>
                <CardHeader style={{ background:'#FFA73D', color:'white' }} className="row">
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
                            <div className="">
                                <div className="row">
                                    <div className="col-sm"><h4>ID</h4></div>
                                    <div className="col-sm">
                                        AAB747CD65W2-{JSON.parse(localStorage.getItem('auth')).id}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm"><h4>E-mail</h4></div>
                                    <div className="col-sm">
                                        {JSON.parse(localStorage.getItem('auth')).email}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
                                        <h4>Name</h4>
                                    </div>
                                    <div className="col-sm">
                                        <InputField name="name" type="text" label={false} placeholder="Ingrese su nombre." />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
                                        <h4>User</h4>
                                    </div>
                                    <div className="col-sm">
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