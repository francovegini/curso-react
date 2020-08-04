import React from 'react';

const Bemvindo = (props) => {
    return (
        <div>
            <h2>Bem vindo(a) {props.nome}</h2>
        </div>
    );
}

function App() {
    return (
        <div>
            Olá mundo!
            <Bemvindo nome="Matheus"/>
            <Bemvindo nome="Pedro"/>
            <p>Curso React</p>
        </div>
    )
}

export default App;
