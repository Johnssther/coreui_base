import React, { useEffect } from 'react';

//redux
import ShowComponent from '../components/show-component'


function Show(props) {

    const onEdit = async (values) => {
        console.log('edi');
        let id = JSON.parse(localStorage.getItem('auth')).id
        props.history.push(`/profile/edit/${id}`)
    }
    return (
        <>
            <ShowComponent onEdit={onEdit} />

        </>
    );
}

export default Show