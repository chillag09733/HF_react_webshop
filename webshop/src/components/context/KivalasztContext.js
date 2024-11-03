import { createContext, useContext, useState } from "react";
export const KivalasztContext = createContext("")

export const useKivalasztContext = () => useContext(KivalasztContext)

export const KivalasztProvider = ({children}) => {
    const [kosarLista, setKosarLista] = useState([]);
  const termekLista = [
    {
      cim: "Final Girls",
      mufaj: "Thriller",
      ar: 9.5,
      kep: `${process.env.PUBLIC_URL}/pics/final_girls.png`,
    },
    {
      cim: "The Last Time I Lied",
      mufaj: "Psychological Thriller",
      ar: 10,
      kep: `${process.env.PUBLIC_URL}/pics/last_time_i_lied.png`,
    },
    {
      cim: "Lock Every Door",
      mufaj: "Mystery Thriller",
      ar: 9.75,
      kep: `${process.env.PUBLIC_URL}/pics/lock_every_door.png`,
    },
    {
      cim: "Home Before Dark",
      mufaj: "Horror",
      ar: 10.2,
      kep: `${process.env.PUBLIC_URL}/pics/home_before_dark.png`,
    },
    {
      cim: "Survive the Night",
      mufaj: "Suspense Thriller",
      ar: 8,
      kep: `${process.env.PUBLIC_URL}/pics/survive_the_night.png`,
    },
  ];

  function katt(adat){
    console.log("app", adat)
    const kiválasztottTermek = termekLista[adat];
    setKosarLista([...kosarLista, kiválasztottTermek]);
  }
  
  function torles(index) {
    const ujKosarLista = [...kosarLista];
    ujKosarLista.splice(index, 1);
    setKosarLista(ujKosarLista);
  }

  return(
    <KivalasztContext.Provider value = {{kosarLista, termekLista, katt, torles}}>
        {children}
    </KivalasztContext.Provider>
  )
}