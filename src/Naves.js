import React, { useState } from 'react';


const Naves = () => {
    const [nave, setNave] = useState('')
    const [info, setInfo] = useState('')

    const FunctionFetchNaves = async () => {
        const response = await fetch('https://swapi.dev/api/starships/')
        const responseBody = await response.json();
        let nomeNaves = responseBody.results.map((resultado, key) => <button className="nave-btn" key={key} onClick={() => FunctionFetchNavesInfo(key)}>{resultado.name}</button> );
        return setNave(nomeNaves); // Returns name of ships
    }
    const FunctionFetchNavesInfo = async (props) => {
        const response = await fetch(`https://swapi.dev/api/starships/`)
        const responseBody = await response.json();
        let result = responseBody.results[props]
        console.log(Object.entries(result)[props]);

        return setInfo(Object.entries(result).map((items, key) => <li className="nave-info" key={key}>{items[0] + ' : ' + items[1]} </li>));
    }
    return (
        <div className="nav-bar">
        <button className="nave-search" onClick={() => FunctionFetchNaves(nave)}>Buscar as naves</button>
        <p>{nave}</p>
        <ul className="nave-info-ul">
            {info}
        </ul>
        </div>
    )
}

export default Naves
