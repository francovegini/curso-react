import React, { Component } from 'react'

class Filme extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filme: []
        }
    }

    componentDidMount() {
        this.loadFilmeById();
    }

    loadFilmeById() {
        const { id } = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${ id }`
        fetch(url)
            .then((r) => r.json())
            .then((json) => {
                this.setState({ filme: json });
                console.log(json);
            })
    }

    render() {
        return (
            <div>
                <h1>Filme Único</h1>
            </div>
        )
    }
}

export default Filme;