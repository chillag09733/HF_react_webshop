import React from "react";
import Kartya from "./Kartya";
import { useKivalasztContext } from "./context/KivalasztContext";

export default function Termekek(){
   const {termekLista, katt} = useKivalasztContext()

    return (
        <>
          {termekLista.map((termek, i) => (
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