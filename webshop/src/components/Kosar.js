import React from "react";
import "./components.css";

export default function Kosar(props) {
  const qty = props.kosarLista.length;
  const subtotal = props.kosarLista.reduce((acc, aktualisTermek) => acc + aktualisTermek.ar, 0);


    return (
      <div>
        <h3>WHAT'S IN MY CART?</h3>
        <ul>
          {props.kosarLista.map((termek, index) => (
            <li key={index}>
              {termek.cim} - {termek.ar}$
              <button className="delBtn" onClick={() => props.torles(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <div className="subtotal">
          <p>QTY: {qty}</p>
          <p>SUBTOTAL: {subtotal}$</p>
        </div>
      </div>
    );
  }
  

