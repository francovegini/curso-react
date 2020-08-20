import React, {Component} from 'react';

/**
 * Manipulando formulários
 */
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: 'Matheus',
                email: 'matheus@hotmail.com',
                passwrod: 'matheus123',
                gender: 'MALE'
            }
        };

        this.dadosForm = this.dadosForm.bind(this);
    }

    dadosForm(e) {
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({form: form})
    }


    render() {
        return (
            <div>
                <h2>Login</h2>
                Nome:
                <input type="text" name="name"
                       value={this.state.form.name}
                       onChange={this.dadosForm}/>
                <br/>
                Email:
                <input type="email" name="email"
                       value={this.state.form.email}
                       onChange={this.dadosForm}/>
                <br/>
                Senha:
                <input type="password" name="password"
                       value={this.state.form.password}
                       onChange={this.dadosForm}/>
                <br/>
                Gender:
                <select name="gender"
                        value={this.state.form.gender}
                        onChange={this.dadosForm}>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                </select>

                <hr/>
                <div>
                    <h3>{this.state.form.email}</h3>
                    <h3>{this.state.form.password}</h3>
                    <h3>{this.state.form.gender}</h3>
                </div>

            </div>
        );
    }
}

export default App;
