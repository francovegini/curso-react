import React, { Component } from 'react';

class TodoItems extends Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <div>
                <ul>
                    { this.props.lista.map((item) => {
                        return (
                            <li key={ item.key }>{ item.text }</li>
                        );
                    }) }
                </ul>
            </div>
        );
    }
}

export default TodoItems;
