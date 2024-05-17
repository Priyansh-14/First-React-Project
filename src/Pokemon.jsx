import React from "react";
import "./Pokemon.css";

export default function Pokemon() {
  const randNum = Math.floor(Math.random() * 151) + 1;
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randNum}.png`;
  return (
    <div className="pokemon">
      <h1> You are Pokemon #{randNum}</h1>
      <img src={url} alt="Pokemon Image" width="200" height="200" />
    </div>
  );
}
