import { Button, Container } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import CardTable from '../components/CardTable';
import Content from '../components/Content';
import NavbarCom from '../components/NavbarCom';


const CardPage = () => {
    return (
        <>
            <NavbarCom/>
            <div className="rott">

            <Container>
                <div className="card">
                    <h3 className="card-title">Избранное</h3>

                    <CardTable />

                </div>
                <Link to="/buy">
                    <Button>Оплата</Button>
                </Link>
                 {/* <Content/> */}
            </Container>
            </div>

        </>
    );
};

export default CardPage;