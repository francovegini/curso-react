import React, { Component } from 'react';
import Feed from "./components/Feed";

/**
 * Trabalhando com listas.
 */
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                { id: 1, username: 'Matheus', curtidas: 10, comentarios: 2 },
                { id: 2, username: 'Lucas', curtidas: 147, comentarios: 31 },
                { id: 3, username: 'Marina', curtidas: 0, comentarios: 24 },
                { id: 4, username: 'Pietro', curtidas: 25, comentarios: 0 }
            ]
        };

    }

    render() {
        return (
            <div>
                { this.state.feed.map((item) => {
                    return (
                        <Feed id={ item.id }
                              username={ item.username }
                              curtidas={ item.curtidas }
                              comentarios={ item.comentarios }/>
                    )
                }) }

            </div>
        );
    }
}

export default App;
