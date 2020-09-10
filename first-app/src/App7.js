import React, { Component } from 'react';

/**
 * Renderização condicional
 */
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: false
        };

        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }

    sair() {
        this.setState({ status: false })
    }

    entrar() {
        this.setState({ status: true })
    }

    render() {
        return (
            <div>
                {/*{this.state.status === 1 &&*/ }
                {/*    <h1>Bem-vindo ao sistema!</h1>*/ }
                {/*}*/ }

                {/*<div>*/ }
                {/*    <h2>Curso React JS</h2>*/ }
                {/*</div>*/ }

                { this.state.status ?
                    <div>
                        <h2> Bem-vindo ao sistema </h2>
                        <button onClick={ this.sair }>
                            Sair do sistema
                        </button>
                    </div> :
                    <div>
                        <h2>Olá visitante, faça login!</h2>
                        <button onClick={ this.entrar }>
                            Entrar no sistema
                        </button>
                    </div>
                }
            </div>
        );
    }
}

export default App;
