import "./App.css";
// import {useState} from "react";
import Termekek from "./components/Termekek";
import Kosar from "./components/Kosar";
// import { useKivalasztContext } from "./components/context/KivalasztContext";

function App() {
 
  // const {kosarLista, termekLista, katt, torles} = useKivalasztContext()

  return (
    <div className="App">
      <header className="App-header">
        <h1>BOOKSHOP</h1>
      </header>
      <article className="main">
        <div className="termekek">
          <Termekek />
        </div>
        <div className="kosar">
          <Kosar />
        </div>
      </article>
      <footer>@massanyicsilla</footer>
    </div>
  );
}

export default App;
