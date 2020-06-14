import React, { Component } from 'react'
import API from '../../../../api/api'

import {
    Button,
    CardBody,
    CardHeader,
    Card,
} from 'reactstrap';

class ComponentDate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            delete:''
        }
        this.delete = this.delete.bind(this);
    }
    delete() {
        const delt = window.confirm("¿Realmente deseas eliminar este gasto? " + this.props.data.id);
        if (delt === true) {
            API.deleteExpense(this.props.data.id)
                .then((resp) => {
                    this.setState({delete:''})
                })
        }

    }

    render() {
        return (
            <div>
                <Card>
                    <CardHeader>
                        Codigo: {this.props.data.id}
                    </CardHeader>
                    <CardBody>
                        Gasto: {this.props.data.gasto} <br></br>
                        Acciones:
                        <Button key="delete" className="btn-sm btn-danger" onClick={this.delete}>Eliminar Gasto</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
export default ComponentDate