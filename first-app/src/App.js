import React, {Component} from 'react';

/**
 * Manipulando formulários
 */
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: 'teste@teste.com',
            password: '',
            gender: 'MALE'
        };

        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeGender = this.changeGender.bind(this);
    }

    changeEmail(e) {
        let value = e.target.value;
        this.setState({email: value});
    }

    changePassword(e) {
        let value = e.target.value;
        this.setState({password: value});
    }

    changeGender(e) {
        let value = e.target.value;
        this.setState({gender: value});
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                Email:
                <input type="email" name="email"
                       value={this.state.email} onChange={this.changeEmail}/>
                <br/>
                Senha:
                <input type="password" name="senha" value={this.state.password}
                       onChange={this.changePassword}/>
                <br/>
                Gender:
                <select name="gender" value={this.state.gender} onChange={this.changeGender}>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                </select>

                <hr/>
                <div>
                    <h3>{this.state.email}</h3>
                    <h3>{this.state.password}</h3>
                    <h3>{this.state.gender}</h3>
                </div>

            </div>
        );
    }
}

export default App;
