import React, { Component } from 'react';
import "./App.css";
import { Container, Head, Titulo } from "./styles";

class App extends Component {
  render() {
    return (
        <Container>
            <Head>
                <Titulo>Projeto Styled</Titulo>
            </Head>
        </Container>
    );
  }
}

export default App;



/*
<div className="container">
    <header className="header">
        <a className="titulo">Projeto Styled</a>
    </header>

    <h1>Bem vindo ao sistema!</h1>
</div>
*/
