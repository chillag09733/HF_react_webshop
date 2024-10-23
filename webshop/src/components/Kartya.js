import React from "react";
import "./components.css";

export default function Kartya(props) {
  function katt() {
    console.log("katt", props.index);
    props.katt(props.index);
  }

  return (
    <div className="kartya" onClick={() => katt()}>
      <h2>{props.nev.toUpperCase()}</h2>
      <img src={props.kep} alt={props.nev} />
      <p>{props.mufaj}</p>
      <div className="alsosor">
        <p>{props.ar} $</p>
        <button className="kosarBtn">🛒</button>
      </div>
    </div>
  );
}
