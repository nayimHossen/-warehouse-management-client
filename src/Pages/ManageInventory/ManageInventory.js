import React from 'react';
import { useNavigate } from 'react-router-dom';
import useServices from '../../Hooks/useServices';
import ManageEachItem from '../ManageEachItem/ManageEachItem';
import { Container } from 'react-bootstrap';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const ManageInventory = () => {
    const navigate = useNavigate();
    const [services, setServices] = useServices();

    return (
        <Container>
            <PageTitle title="Manage Items"></PageTitle>
            <h2>This is manage inventory page</h2>
            <button className='main-button' onClick={() => navigate('/addItems')}>Add new item</button>
            {
                services.map(service => <ManageEachItem key={service._id} service={service}></ManageEachItem>)
            }
        </Container >
    );
};

export default ManageInventory;