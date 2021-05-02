import React, {useState} from 'react';
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

import InputSelect from '../../../components/form/inputSelect'
import InputField from '../../../components/form/inputField';
import InputCalendar from '../../../components/form/inputCalendar'
import TargetBudget from './component/tagetbudget'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
//services
import { getExpenses } from '../../../../services/expenses/personalexpenses'

getExpenses();

const initialDetailBudget = [
    {
        name: '2',
        precio: parseInt(25300),
        gastado:parseInt(25300),
        balance: parseInt(25300) - parseInt(25300)
    },
    {
        name: '2',
        precio: parseInt(70000),
        gastado:parseInt(25300),
        balance: parseInt(70000) - parseInt(25300)
    },
    {
        name: '2',
        precio: parseInt(25300),
        gastado:parseInt(25300),
        balance: parseInt(25300) - parseInt(25300)
    },
    
]

const MainComponent = (props) => {
    const { count, onCreate, success, revenue, expensestype } = props;
    console.log(expensestype);
    const [budget, setBudget] = useState({})
    const [detailBudget, setDetailBudget] = useState([]);
    const [cardbudget, setCardbudget] = useState(false);

    const handleSubmit = (values) => {
        console.log(values);
        setDetailBudget(
            detailBudget.concat(
                [{
                    name: values.item_name,
                    precio: parseInt(values.item_precio),
                    gastado:parseInt(0),
                    balance: parseInt(0)
                },]
            )
        )
    }

    const handleSubmitBudget = (values) => {
        setCardbudget(true);
        setBudget({
            title:values.title,
            description:values.description
        })
    }

    return (
        <Main success={success}>
            <Card>
                <CardHeader>
                    Agrega un titulo y descripcion de tu presupuesto (opcional)
                    <Button className="col-sm-3 m-1" type="submit" color="primary" size="sm">Guardar y Terminar</Button>
                </CardHeader>
                <CardBody>
                    <Formik
                        initialValues={{
                            title: '',
                            description:''
                        }}
                        validationSchema={Yup.object({
                            title: Yup.string(),
                            description: Yup.string(),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            handleSubmitBudget(values);
                            setSubmitting(true);
                        }}
                    >
                        <Form>
                            <Row>
                                <Col sm="6">
                                    <InputField name="title" type="text" label="Titulo" placeholder="Ingrese un titulo." />
                                </Col>
                                <Col sm="6">
                                    <InputField name="description" type="text" label="Description" placeholder="Ingrese un descripción." />
                                </Col>
                            </Row>
                            <hr></hr>
                            <Row>
                                <Col sm={{ size: 6, offset: 4 }}>
                                    <Button className="col-sm-3 m-1" type="reset" color="secondary" size="sm">Reset</Button>
                                    <Button className="col-sm-3 m-1" type="submit" color="dark" size="sm">Continue</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Formik>
                </CardBody>
            </Card>

            { cardbudget ?
            <Card>
                <CardHeader>
                    Detalle presupuesto
                </CardHeader>
                <CardBody>
                <Formik
                        initialValues={{
                            item_name: null,
                            item_precio:0
                        }}
                        validationSchema={Yup.object({
                            item_name: Yup.string()
                                .required('Debe seleccionar un tipo de gasto'),
                            item_precio: Yup.number()
                                .positive('El presupuesto es obligatorio.')
                                .required('Agregue su presupuesto'),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            handleSubmit(values);
                            setSubmitting(true);
                        }}
                    >
                        <Form>
                            <Row>
                                <Col sm="6">
                                    <FormGroup>
                                        <InputSelect type="input" label="Tipo Gasto" name="item_name" expensestype={expensestype} />
                                    </FormGroup>
                                </Col>
                                <Col sm="6">
                                    <InputField name="item_precio" type="text" label="Numero registros" placeholder="Ingrese el presupuesto estimado." />
                                </Col>
                            </Row>
                            <hr></hr>
                            <Row>
                                <Col sm={{ size: 6, offset: 4 }}>
                                    <Button className="col-sm-3 m-1" type="reset" color="secondary" size="sm">Reset</Button>
                                    <Button className="col-sm-3 m-1" type="submit" color="dark" size="sm">Add</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Formik>
                </CardBody>
            </Card> : null}

            {detailBudget.length > 0 ? 
            <div>
                <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={500} transitionEnter={false} transitionLeave={false}>
                    <TargetBudget item={detailBudget}></TargetBudget>
                </ReactCSSTransitionGroup>
            </div> : null }
        </Main>
    );
};

export default MainComponent