import React from "react";
import Kartya from "./Kartya";

export default function Termekek(props){
    function katt(adat){
        console.log("termekek", adat)
        props.katt(adat)
    }

    return (
        <>
          {props.termekLista.map((termek, i) => (
            <Kartya
              key={i}
              index={i}
              katt={katt}
              nev={termek.cim}
              ar={termek.ar}
              mufaj={termek.mufaj}
              kep={termek.kep}
            />
          ))}
        </>
      );
}