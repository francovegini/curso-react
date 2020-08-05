import React, {Component} from 'react';

class Membro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: props.nome
        };

        this.mudarNome = this.mudarNome.bind(this);
        this.sair = this.sair.bind(this);
    }

    mudarNome() {
        this.setState({nome: "Matheus"});
    }

    sair() {
        this.setState({nome: "Visitante"})
    }

    render() {
        return (
            <div>
                <h2>Bem vindo(a), {this.state.nome}</h2>
                <button onClick={this.mudarNome}>
                    Entrar como Matheus
                </button>
                <button onClick={this.sair}>
                    Sair
                </button>
            </div>
        );
    }
}

export default Membro;
