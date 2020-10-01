import React, { Component } from 'react';
import TodoItems from "../TodoItems";

class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            tarefa: '',
            items: []
        }

        this.addItem = this.addItem.bind(this);
        this.log = this.log.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
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

        this.setState({ tarefa: '' })
        e.preventDefault();
    }

    log() {
        console.log(this.state.items);
    }

    deleteItem(key){
        let filter = this.state.items.filter((item) => {
            return(item.key !== key);
        });

        this.setState({items: filter});
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

                <button onClick={ this.log }>Log</button>

                <TodoItems lista={ this.state.items } delete={this.deleteItem}/>
            </div>
        );
    }
}

export default TodoList;
