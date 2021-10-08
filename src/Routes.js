import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ClientContextProvider from './context/ClientContext';
import AdminContextProvider from './context/AdminContext';
import SinginPage from './pages/SinginPage';
import MainPage from './pages/MainPage';
import AdminPage from './pages/AdminPage';
import EditPage from './pages/EditPage';
import CardPage from './pages/CardPage';
import SingUpPage from './pages/SingUpPage';
const Routes = () => {
    return (
        <ClientContextProvider>
            <AdminContextProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/singin" component={SinginPage} />
                        <Route exact path="/main" component={MainPage} />
                        <Route exact path="/admin" component={AdminPage} />
                        <Route exact path="/edit/:id" component={EditPage} />
                        <Route exact path="/corz" component={CardPage} />
                        <Route exact path="/" component={SingUpPage} />
                        
                    </Switch>
                </BrowserRouter>
            </AdminContextProvider>
        </ClientContextProvider>
    );
};

export default Routes;