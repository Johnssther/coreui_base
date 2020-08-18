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
import TargetBudget from './component/tagetbudget'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

//services
import { getExpenses } from '../../../../services/expenses/personalexpenses'

getExpenses();

const MainComponent = (props) => {
    const { count, onCreate, success, revenue } = props;

    const [item, setItem] = React.useState([]);
    const [itemname, setItemname] = React.useState('');
    const [itemprecio, setItemprecio] = React.useState('');

    const handleSubmit = (event) => {
        setItem(
            item.concat(
                [{
                    name: itemname,
                    precio: parseInt(itemprecio),
                },]
            )
        )
        setItemname('')
        setItemprecio('')
        event.preventDefault();
    }

    return (
        <Main success={success}>
            <Card>
                <CardHeader>
                    Arma tu presupuesto mensual
                </CardHeader>
                <CardBody>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <div className="row">
                            <div className="col">
                                <input onChange={(event) => setItemname(event.target.value)} value={itemname} name="item_name" id="item_name" type="text" className="form-control" placeholder="Tipo de gasto"></input>
                            </div>
                            <div className="col">
                                <input onChange={(event) => setItemprecio(event.target.value)} value={itemprecio} name="item_precio" id="item_precio" type="number" className="form-control" placeholder="Presupuestado"></input>
                            </div>
                            <div className="col">
                                <button type="submit" className="btn btn-success btn-sm">Agregar</button>
                            </div>
                        </div>
                    </form>
                </CardBody>
            </Card>
            {item.length > 0 ? 
            <div>
                <ReactCSSTransitionGroup transitionName="anim" transitionAppear={true} transitionAppearTimeout={1000} transitionEnter={false} transitionLeave={false}>
                    <TargetBudget item={item}></TargetBudget>
                </ReactCSSTransitionGroup>
            </div> : null }
        </Main>
    );
};

export default MainComponent