import { useEffect, useState } from "react"

export default function useCatImg(catFact) {
    const [catFactImg, setCatFactImg] = useState()

    const CATS_IMG_HTTPS_URL = `https://cataas.com/`

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
          
            })
    }, [catFact])
    return { catFactImg: `${CATS_IMG_HTTPS_URL}${catFactImg}`}
  }
  