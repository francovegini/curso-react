import React, {Component} from 'react';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                {id: 1, username: 'Matheus', curtidas: 10, comentarios: 2},
                {id: 2, username: 'Lucas', curtidas: 147, comentarios: 31},
                {id: 2, username: 'Marina', curtidas: 202, comentarios: 24}
            ]
        };

    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default App;
