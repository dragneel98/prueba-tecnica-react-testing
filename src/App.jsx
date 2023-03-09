import React from "react";
import useCatFact from "./hooks/useCatFact";
import useCatImg from "./hooks/useCatImg";
import "/src/App.css"

export default function App() {
  const {catFact, refreshFact} = useCatFact()
  const {catFactImg} = useCatImg(catFact)
  
  // const CATS_IMG_API_URL = `https://cataas.com/cat/says/${firstWords}?size=50&color=red&json=true`
  

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <button onClick={handleClick}>get random fact</button>
      {catFact && <p> {catFact} </p>}
      {catFactImg && <img src={catFactImg} 
                          alt={`imagen de gatos extraida usando las primeras palabras de ${catFact}`}></img>}

    </main>
  );
}
