import React from 'react';
import InfiniteCarousel from 'react-leaf-carousel';

import {
    Card, CardBody,
    CardHeader,
} from 'reactstrap';

function Carrucelinfinite(props) {
    const { data, color } = props
    console.log(data, 'data');
    console.log(color, 'color');

    let mes_nombre = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre',]

    return (
        <div className="row">
        {
            data.map((item, index) => {
                return (
                    <div className="col" key={index}>
                        <Card style={{ borderRadius: 20 }}>
                            <CardHeader className="text-white" style={{ background: color, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                                <h4> {mes_nombre[item.mes - 1]} {item.anio} </h4>
                            </CardHeader>
                            <CardBody className="text-white" style={{ background: color, borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                                Gastos: <h3> {`$ ${new Intl.NumberFormat().format(item.precio_total_mes)}`} </h3>
                                <hr></hr>
                            </CardBody>
                        </Card>
                    </div>
                )
            })
        }
        </div>

    );
}

export default Carrucelinfinite;
