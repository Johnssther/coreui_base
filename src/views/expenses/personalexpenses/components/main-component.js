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
import Main from '../../../layout/main';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import InputField from '../../../components/form/inputField';
import TextareaField from '../../../components/form/textareaField';
import InputCalendar from '../../../components/form/inputCalendar';
import InputSelect from '../../../components/form/inputSelect';
import File from '../../../components/file/File';
//services
import { getExpenses } from '../../../../services/expenses/personalexpenses';

getExpenses();

const MainComponent = (props) => {
    const { count, onCreate, expensestype, success, expense } = props;

    return (
        <Main success={success}>
            <Formik
                initialValues={{
                    gasto: expense.gasto,
                    justification: expense.justification === null ? '' : expense.justification,
                    urlfile: expense.urlfile === null ? '' : expense.urlfile,
                    cantidad: expense.cantidad,
                    precio_unidad: expense.precio_unidad,
                    precio_total: expense.precio_total,
                    fecha: expense.fecha, // moment().format('YYYY/M/D  HH:mm:ss'),
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
                        .required('La cantidad es obligatoria'),
                    precio_unidad: Yup.number()
                        .positive('El precio de la unidad no puede ser negativo.')
                        .required('La cantidad es obligatoria'),
                    precio_total: Yup.number()
                        .positive('La cantidad no puede ser negativa.'),
                    fecha: Yup.date()
                        .required('La fecha es obligatoria'),
                    tipogasto_id: Yup.string()
                        .required('Debe seleccionar un tipo de gasto'),
                    numeroregistros: Yup.number()
                        .max(99999, 'La cantidad no puede exceder de 99.999')
                        .positive('La cantidad no puede ser negativa.'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(true); // Activar estado de carga
                    onCreate(values).finally(() => {
                        setSubmitting(false); // Desactivar estado de carga después de finalizar
                    });
                }}
            >
                {({ setFieldValue, isSubmitting }) => (
                    <Form>
                        {/* <h3> Ingresar Gasto {count - 1} </h3> */}
                        <Card>
                            <CardBody>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#1f2937', marginBottom: '0.5rem' }}>
                                    1. Ingresar Gasto
                                </h3>
                                <h5 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#4b5563' }}>
                                    Ingrese el detalle del gasto que va a registrar
                                </h5>
                            </CardBody>
                        </Card>

                        <Card>
                            <CardBody>
                                <Row>
                                    <Col sm="12">
                                        <InputField
                                            name="numeroregistros"
                                            type="text"
                                            label="Numero registros"
                                            placeholder="Ingrese una numeroregistros."
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm="6">
                                        <InputCalendar
                                            name="fecha"
                                            type="text"
                                            label="Fecha"
                                            placeholder="Ingrese la fecha del gasto."
                                        />
                                    </Col>
                                    <Col sm="6">
                                        <FormGroup>
                                            <InputSelect
                                                type="input"
                                                label="Tipo Gasto"
                                                name="tipogasto_id"
                                                expensestype={expensestype}
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm="3">
                                        <InputField
                                            name="cantidad"
                                            type="text"
                                            label="Cantidad"
                                            placeholder="Ingrese una cantidad."
                                        />
                                    </Col>
                                    <Col sm="9">
                                        <InputField
                                            name="gasto"
                                            type="text"
                                            label="Gasto"
                                            placeholder="Ingrese un gasto."
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm="6">
                                        <InputField
                                            name="precio_unidad"
                                            type="text"
                                            label="Precio unid."
                                            placeholder="Ingrese el precio por unidad."
                                        />
                                    </Col>
                                    <Col sm="6">
                                        <InputField
                                            name="precio_total"
                                            type="text"
                                            label="Precio total"
                                            placeholder="Ingrese el precio total (opcional)."
                                        />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <hr></hr>
                        <Card>
                            <CardBody>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#1f2937', marginBottom: '0.5rem' }}>
                                    1. Justificación
                                </h3>
                                <h5 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#4b5563' }}>
                                    Justifique porque va a registrar el gasto y da el porque
                                </h5>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col sm="12">
                                        <TextareaField
                                            rows={8}
                                            name="justification"
                                            type="text"
                                            label="Justificacion"
                                            placeholder="Ingrese un justificacion."
                                        />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <hr></hr>
                        <Card>
                            <CardBody>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#1f2937', marginBottom: '0.5rem' }}>
                                    3. Agregue archivos de evidencia
                                </h3>
                                <h5 style={{ fontSize: '1.125rem', fontWeight: 500, color: '#4b5563' }}>
                                    Ingresa los archivos nesesarios que requieras mantener guardados
                                </h5>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                <Row>
                                    <File
                                        onFileUploadComplete={(url) => {
                                            console.log('Archivo subido:', url);
                                            setFieldValue('urlfile', url);
                                        }}
                                    />
                                </Row>
                                <Row>
                                    <Col sm="12">
                                        <InputField
                                            name="urlfile"
                                            type="text"
                                            label="Url Evidencia"
                                            placeholder="Ingrese un url del archivo."
                                        />
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>

                        <Card style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "8px", padding: "16px" }}>
                            <CardBody>
                                <Row>
                                    <Col sm={{ size: 6, offset: 4 }} style={{ display: "flex", justifyContent: "space-between" }}>
                                        <Button
                                            className="m-1"
                                            type="reset"
                                            color="secondary"
                                            size="sm"
                                            style={{
                                                backgroundColor: "#f3f4f6", // Gris claro
                                                color: "#111827", // Texto gris oscuro
                                                border: "none",
                                                borderRadius: "4px",
                                                padding: "8px 16px",
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                transition: "all 0.3s ease",
                                            }}
                                            onMouseOver={(e) => {
                                                e.target.style.backgroundColor = "#e5e7eb"; // Gris más claro al pasar el mouse
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.style.backgroundColor = "#f3f4f6"; // Color original
                                            }}
                                        >
                                            Reset
                                        </Button>
                                        {/* <Button
                                            className="m-1"
                                            type="submit"
                                            color="dark"
                                            size="sm"
                                            style={{
                                                backgroundColor: "#1f2937", // Gris oscuro
                                                color: "#f9fafb", // Blanco
                                                border: "none",
                                                borderRadius: "4px",
                                                padding: "8px 16px",
                                                fontSize: "14px",
                                                fontWeight: "500",
                                                transition: "all 0.3s ease",
                                            }}
                                            onMouseOver={(e) => {
                                                e.target.style.backgroundColor = "#111827"; // Más oscuro al pasar el mouse
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.style.backgroundColor = "#1f2937"; // Color original
                                            }}
                                        >
                                            Register
                                        </Button> */}
                                        <Button
                                            className="m-1"
                                            type="submit"
                                            color="dark"
                                            size="sm"
                                            style={{
                                                backgroundColor: "#1f2937",
                                                color: "#f9fafb",
                                                border: "none",
                                                borderRadius: "4px",
                                                padding: "8px 16px",
                                                fontSize: "14px",
                                                fontWeight: "500",
                                            }}
                                            disabled={isSubmitting} // Deshabilitar botón mientras se envía
                                        >
                                            {isSubmitting ? 'Enviando...' : 'Registrar'} {/* Cambiar texto según el estado */}
                                        </Button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>

                    </Form>
                )}
            </Formik>
        </Main>
    );
};

export default MainComponent;
