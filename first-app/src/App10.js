import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            error: ''

        };

        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar(event) {
        const { name, email, password } = this.state;

        if (name !== '' && email !== '' && password !== '') {
            alert(`Nome: ${ name } \nEmail: ${ email } \nSenha: ${ password }`);
        } else {
            this.setState({ error: 'Ops! Parece que está faltando algo!' });
        }

        // Não deixa atualizar a página
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>Novo usuário</h1>
                { this.state.error && <p>{ this.state.error }</p> }
                <form onSubmit={ this.cadastrar }>
                    <label>Nome:</label>
                    <input type="text" value={ this.state.name }
                           onChange={ (e) => this.setState({ name: e.target.value }) }/>
                    <br/>
                    <label>Email:</label>
                    <input type="text" value={ this.state.email }
                           onChange={ (e) => this.setState({ email: e.target.value }) }/>
                    <br/>
                    <label>Senha:</label>
                    <input type="password" value={ this.state.password }
                           onChange={ (e) => this.setState({ password: e.target.value }) }/>

                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        );
    }
}

export default App;
