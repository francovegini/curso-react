import React, { Component } from 'react';

class TodoList extends Component {

    constructor() {
        super();
        this.state = {
            tarefa: ''
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Nova tarefa" name="tarefa"
                           value={ this.state.tarefa }
                           onChange={ (e) => this.setState({ tarefa: e.target.value }) }/>
                </form>

                {this.state.tarefa}
            </div>
        );
    }
}

export default TodoList;
