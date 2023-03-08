const CATS_FACTS_API_URL = `https://catfact.ninja/fact`;

export default async function getRandomFact() {
    const res = await fetch(CATS_FACTS_API_URL);
    const data = await res.json();
    const { fact } = data;
    return fact;
  }