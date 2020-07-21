import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    Container,
    Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import perfil from '../../../assets/img/avatars/6.jpg'

const ShowComponent = (props) => {
    const { onEdit } = props
    return (
        <Container>
            <Card>
                <div className="bg-primary text-center">
                    {/* <img className="img-circle" src="assets/img/avatars/6.jpg" alt="admin@bootstrapmaster.com" width="200"></img> */}
                    <img className="img-circle" src={perfil} alt="admin@bootstrapmaster.com" width="200" height="200"></img>
                    <h1>{JSON.parse(localStorage.getItem('auth')).name}</h1>
                </div>
                <CardHeader style={{ background:'#FFA73D', color:'white' }} className="row">
                    <div className="col-sm">
                        <h2>Profile</h2>
                    </div>
                    <div className="col-sm">
                        <Button className="col-sm-2 m-1" size="sm" onClick={()=>onEdit()}>Edit Profile</Button>
                    </div>
                </CardHeader>
                <CardBody>
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
                                <h4>User</h4>
                            </div>
                            <div className="col-sm">
                                <h4>{JSON.parse(localStorage.getItem('auth')).username}</h4>
                            </div>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </Container>
    );
};

export default ShowComponent