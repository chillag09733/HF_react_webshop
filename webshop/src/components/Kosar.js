import React from "react";
import "./components.css";
import { useKivalasztContext } from "./context/KivalasztContext";

export default function Kosar() {

const {torles, kosarLista} = useKivalasztContext()

  const qty = kosarLista.length;
  const subtotal = kosarLista.reduce((acc, aktualisTermek) => acc + aktualisTermek.ar, 0);


    return (
      <div>
        <h3>WHAT'S IN MY CART?</h3>
        <ul>
          {kosarLista.map((termek, index) => (
            <li key={index}>
              {termek.cim} - {termek.ar}$
              <button className="delBtn" onClick={() => torles(index)}>Delete</button>
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
  

