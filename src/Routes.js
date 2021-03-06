import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Cadastro from './pages/SignUp';
import AdPage from './pages/AdPages';

export default () => {
    return( 
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/sobre">
                <About/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
            <Route exact path="/Cadastrar">
                <Cadastro/>
            </Route>
            <Route exact path="/ad/:id">
                <AdPage/>
            </Route> 
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}