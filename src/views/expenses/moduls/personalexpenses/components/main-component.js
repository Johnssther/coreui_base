import React, { useState } from 'react';
import {
    Card,
    CardBody,
    CardHeader,
} from 'reactstrap';
import { Formik, Form } from 'formik';
import InputField from './input';
import * as Yup from 'yup';

import "react-datepicker/dist/react-datepicker.css";

//services
import { getExpenses } from '../services/personalexpenses'

getExpenses();

const MainComponent = (props) => {
    const { onCreate } = props;
    return (
        <div className="container">
            <Card>
                <CardHeader>
                    Ingresar GastoI
                </CardHeader>
                <CardBody>
                    <Formik
                        initialValues={{ gasto: '', cantidad: '', precio_unidad: '', precio_total: '', fecha: '', tipo_gasto: '' }}
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
                            tipo_gasto: Yup.date()
                                .required('El tipo de gasto es obligatorio'),
                        })}
                        onSubmit={(values, { setSubmitting }) => {
                            onCreate(values);
                            setSubmitting(true);
                        }}
                    >
                        <Form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <InputField name="fecha" type="date" label="Fecha" placeholder="Ingrese la fecha." />
                                </div>
                                <div className="col-sm-6">
                                    <InputField name="tipo_gasto" type="text" label="Tipo Gasto" placeholder="Ingrese el tipo de gasto." />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <InputField name="cantidad" type="text" label="Cantidad" placeholder="Ingrese una cantidad." />
                                </div>
                                <div className="col-sm-9">
                                    <InputField name="gasto" type="text" label="Gasto" placeholder="Ingrese un gasto." />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <InputField name="precio_unidad" type="text" label="Precio unid." placeholder="Ingrese el precio por unidad." />
                                </div>
                                <div className="col-sm-6">
                                    <InputField name="precio_total" type="text" label="Precio total" placeholder="Ingrese el precio total (opcional)." />
                                </div>
                            </div>
                            <button className="btn btn-success btn-sm" type="submit">Enviar</button>
                        </Form>
                    </Formik>
                </CardBody>
            </Card>
        </div>
    );
};

export default MainComponent