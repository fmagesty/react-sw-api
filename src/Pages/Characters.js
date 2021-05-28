import React, { useState } from "react";

const Characters = () => {
  const [people, setPeople] = useState("");
  const [info, setInfo] = useState("");

  const FunctionFetchPeople = async () => {
    const response = await fetch("https://swapi.dev/api/people/");
    const responseBody = await response.json();
    let nomePeople = responseBody.results.map((resultado, key) => (
      <button
        className="people-btn"
        key={key}
        onClick={() => FunctionFetchPeopleInfo(key)}
      >
        {resultado.name}
      </button>
    ));
    return setPeople(nomePeople); // Returns name of people
  };
  const FunctionFetchPeopleInfo = async (props) => {
    const response = await fetch(`https://swapi.dev/api/people/`);
    const responseBody = await response.json();
    let result = responseBody.results[props];
    console.log(Object.entries(result)[props]);

    return setInfo(
      Object.entries(result).map((items, key) => (
        <li className="people-info" key={key}>
          {items[0] + " : " + items[1]}{" "}
        </li>
      ))
    );
  };
  return (
    <div className="nav-bar">
      <button
        className="people-search"
        onClick={() => FunctionFetchPeople(people)}
      >
        Fetch characters
      </button>
      <p>{people}</p>
      <ul className="people-info-ul">{info}</ul>
    </div>
  );
};

export default Characters;
