import React from "react";
import "./App.css";

export default function Kartya(props){
    function katt(){
        console.log("katt", props.index);
        props.katt(props.index)
    }

    return (
        <div className="kartya" onClick={() => katt()}>
          <img src={props.kep} alt={props.nev} />
          <h2>{props.nev.toUpperCase()}</h2>
          <p>{props.mufaj}</p>
          <p>{props.ar} $</p>
          <button className="kosarBtn">Add to cart</button>
        </div>
      );
}