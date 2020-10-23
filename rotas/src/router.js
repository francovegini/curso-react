import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

const Routes = () => {
    return (
        <BrowserRouter>
            <!-- Switch faz com que apenas um componente seja carregado ao mesmo tempo -->
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route exact path="/sobre" component={ Sobre }/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;