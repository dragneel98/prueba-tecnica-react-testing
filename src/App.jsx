import React, { useEffect, useState } from "react";
import getRandomFact from "./services/getRandomFacts";
import "/src/App.css"


export default function App() {
  const [catFact, setCatFact] = useState()
  const [catFactImg, setCatFactImg] = useState()

  
  // const CATS_IMG_API_URL = `https://cataas.com/cat/says/${firstWords}?size=50&color=red&json=true`
  const CATS_IMG_HTTPS_URL = `https://cataas.com/`

  

  useEffect(() => {
    getRandomFact().then(setCatFact())
  }, [])

  useEffect(() => {
    if(!catFact) return
    const firstWords = catFact?.split(" ", 3).join(" ")
    console.log(catFact);
    fetch(`https://cataas.com/cat/says/${firstWords}?size=50&color=red&json=true`)
        .then((res) => res.json())
      .then((data) => {
        const {url} = data
        console.log(url);
        setCatFactImg(url)
        const catFactForImg= catFact
          })
  }, [catFact])
  
  const handleClick = () => {
    getRandomFact().then(setCatFact())
  }

  return (
    <main>
      <button onClick={handleClick}>get random fact</button>
      {catFact && <p> {catFact} </p>}
      {catFactImg && <img src={`${CATS_IMG_HTTPS_URL}${catFactImg}`} 
                          alt={`imagen de gatos extraida usando las primeras palabra de ${catFact}`}></img>}

    </main>
  );
}
