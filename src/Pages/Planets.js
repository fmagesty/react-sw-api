import React, { useState } from "react";

const Planets = () => {
  const [planets, setPlanets] = useState("");
  const [info, setInfo] = useState("");

  const FunctionFetchPlanets = async () => {
    const response = await fetch("https://swapi.dev/api/planets/");
    const responseBody = await response.json();
    let nomePlanets = responseBody.results.map((resultado, key) => (
      <button
        className="planets-btn"
        key={key}
        onClick={() => FunctionFetchPlanetsInfo(key)}
      >
        {resultado.name}
      </button>
    ));
    return setPlanets(nomePlanets); // Returns name of planets
  };
  const FunctionFetchPlanetsInfo = async (props) => {
    const response = await fetch(`https://swapi.dev/api/planets/`);
    const responseBody = await response.json();
    let result = responseBody.results[props];
    console.log(Object.entries(result)[props]);

    return setInfo(
      Object.entries(result).map((items, key) => (
        <li className="planets-info" key={key}>
          {items[0] + " : " + items[1]}{" "}
        </li>
      ))
    );
  };
  return (
    <div className="nav-bar">
      <button
        className="planets-search"
        onClick={() => FunctionFetchPlanets(planets)}
      >
        Fetch planets
      </button>
      <p>{planets}</p>
      <ul className="planets-info-ul">{info}</ul>
    </div>
  );
};

export default Planets;
