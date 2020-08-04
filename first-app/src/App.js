import React from 'react';

const Bemvindo = (props) => {
    return (
        <div>
            <h2>Bem vindo(a) {props.nome}</h2>
            <h3>Tenho {props.idade} anos</h3>
        </div>
    );
}

function App() {
    return (
        <div>
            Olá mundo!
            <Bemvindo nome="Matheus" idade="19"/>
            <Bemvindo nome="Pedro" idade="22"/>
        </div>
    )
}

export default App;
