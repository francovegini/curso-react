import React, { Component } from 'react';

class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            tarefa: '',
            items: []
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        let state = this.state;
        if(this._tarefaInput.value !== ''){
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            }
            this.setState({ items: [...state.items, newItem]});
        }

        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.addItem }>
                    <input type="text" placeholder="Nova tarefa" name="tarefa"
                           value={ this.state.tarefa }
                           onChange={ (e) => this.setState({ tarefa: e.target.value }) }
                           ref={ (e) => this._tarefaInput = e }/>
                    <button type="submit">Adicionar tarefa</button>
                </form>

                {this.state.tarefa}
            </div>
        );
    }
}

export default TodoList;
