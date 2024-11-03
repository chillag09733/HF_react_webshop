import React from "react";
import "./components.css";
import { useKivalasztContext } from "./context/KivalasztContext";

export default function Kartya(props) {
 const {katt} = useKivalasztContext()

 function kattintasKezeles(){
  katt(props.index)
 }

  return (
    <div className="kartya" onClick={kattintasKezeles}>
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
