import React, { Component } from 'react';

class Produto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: ''
        }
    }

    componentDidMount() {
        console.log(this.props);
        const { id } = this.props.match.params;
        this.setState({ id })
    }

    render() {
        return (
            <div>
                <h1>Produto: { this.state.id}</h1>
            </div>
        );
    }
}

export default Produto;