import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Header from "./components/Header";

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route exact path="/sobre" component={ Sobre }/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;