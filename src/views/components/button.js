import React from 'react'
import {
    Button,
} from 'reactstrap';

function ButtonComponent(props) {
    const { name, onPress } = props;
    return(
        <Button color="success" className="btn-sm" onClick={onPress}>{name}</Button>
    );
}
export default ButtonComponent