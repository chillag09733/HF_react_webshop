import logo from "./logo.svg";
import "./App.css";
import {useState} from "react";
import Termekek from "./components/Termekek";
import Kosar from "./components/Kosar";

function App() {
 const [kosarLista, setKosarLista] = useState([]);
  const termekLista = [
    {
      cim: "Final Girls",
      mufaj: "Thriller",
      ar: 9.5,
      kep: `${process.env.PUBLIC_URL}/pics/final_girls.jpg`,
    },
    {
      cim: "The Last Time I Lied",
      mufaj: "Psychological Thriller",
      ar: 10,
      kep: `${process.env.PUBLIC_URL}/pics/last_time_i_lied.jpg`,
    },
    {
      cim: "Lock Every Door",
      mufaj: "Mystery Thriller",
      ar: 9.75,
      kep: `${process.env.PUBLIC_URL}/pics/lock_every_door.jpg`,
    },
    {
      cim: "Home Before Dark",
      mufaj: "Horror",
      ar: 10.2,
      kep: `${process.env.PUBLIC_URL}/pics/home_before_dark.jpg`,
    },
    {
      cim: "Survive the Night",
      mufaj: "Suspense Thriller",
      ar: 8,
      kep: `${process.env.PUBLIC_URL}/pics/survive_the_night.jpg`,
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>BOOKSHOP</h1>
      </header>
      <article className="main">
        <div className="termekek">
          <Termekek termekLista={termekLista} katt={katt} />
        </div>
        <div className="kosar">
          <Kosar kosarLista={kosarLista} torles = {torles} />
        </div>
      </article>
      <footer>Massányi Csilla</footer>
    </div>
  );
}

export default App;