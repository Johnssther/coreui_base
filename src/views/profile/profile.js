import React from 'react';
import { Button, Card, CardHeader, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

function Index(props) {
    return (
        <>
            <Card>
                <div className="bg-primary text-center">
                    <img className="img-circle" src="assets/img/avatars/6.jpg" alt="admin@bootstrapmaster.com" width="200"></img>
                    <h1>{JSON.parse(localStorage.getItem('auth')).name}</h1>
                </div>
                <CardHeader className="row bg-success">
                    <div className="col-sm">
                        <h2>My data</h2>
                    </div>
                    <div className="col-sm">
                        {/* <Button>Edit</Button> */}
                    </div>
                </CardHeader>
                <CardBody>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm"><h4>E-mail</h4></div>
                            <div class="col-sm">
                                {JSON.parse(localStorage.getItem('auth')).email}
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm">
                                <h4>User</h4>
                            </div>
                            <div class="col-sm">
                                <h4>{JSON.parse(localStorage.getItem('auth')).username}</h4>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}

export default (Index)