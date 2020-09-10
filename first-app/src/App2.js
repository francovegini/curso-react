import React from 'react';

const Bemvindo = (props) => {
    return (
        <div>
            <h2>Bem vindo(a) { props.nome }</h2>
            <h3>Tenho { props.idade } anos</h3>
        </div>
    );
}

const Equipe = (props) => {
    return (
        <div>
            <Sobre nome={ props.nome }
                   cargo={ props.cargo }
                   idade={ props.idade }/>
            <Social fb={ props.facebook }
                    yt={ props.youtube }
                    linkedin={ props.linkedin }/>
            <hr/>
        </div>
    );
}

const Sobre = (props) => {
    return (
        <div>
            <h2>Olá, sou o { props.nome }</h2>
            <h3>Cargo: { props.cargo }</h3>
            <h3>Idade: { props.idade }</h3>
        </div>
    );
}

const Social = (props) => {
    return (
        <div>
            <a href={ props.fb }>Facebook </a>
            <a href={ props.linkedin }>LinkedIn </a>
            <a href={ props.yt }>YouTube </a>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Lucas"
                    cargo="Programador"
                    idade="20"
                    facebook="http://www.facebook.com"
                    linkedin="http://www.linkedin.com"
                    youtube="http://www.youtube.com"/>
            <Equipe nome="Lucas"
                    cargo="Programador"
                    idade="20"
                    facebook="http://www.facebook.com"
                    linkedin="http://www.linkedin.com"
                    youtube="http://www.youtube.com"/>
        </div>
    )
}

export default App;
