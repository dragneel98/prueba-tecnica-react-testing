import React, { useEffect, useState } from 'react'

export default function App() {
    const [catFact, setCatFact] = useState()
    
    const CATS_FACTS_API_URL = `https://catfact.ninja/fact`

    useEffect(() => {
      fetch(CATS_FACTS_API_URL)
        .then(res => res.json())
        .then(data =>{
          const {fact} = data
          setCatFact(data.fact)
          const firstWords = fact.split(" ", 3).join(" ")
          console.log(firstWords);
          })
          
        
        
    }, [])
    
  return (
    <main>
        <p> {catFact && {catFact}} </p>
    </main>
  )
}
