import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/sobre" component={ Sobre }/>
        </BrowserRouter>
    );
}

export default Routes;