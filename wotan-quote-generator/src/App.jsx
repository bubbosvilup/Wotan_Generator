import { useState } from "react";
import "./data/style/App.css";
import quotes from "./data/quotes";

function App() {
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  const [selectedStat, setSelectedStat] = useState("");

  const [selectedCheck, setSelectedCheck] = useState("");

  const [selectedCategory, useSelectedCategory] = useState("");

  const availableCategories = quotes
    .filter((q) => q.stat === selectedStat)
    .map((q) => q.category)
    .filter((value, index, self) => self.indexOf(value) === index);

  const getNewQuote = () => {
    const filteredQuotes = quotes.filter(
      (q) => q.stat === selectedStat && q.check === selectedCheck
    );

    if (filteredQuotes.length === 0) return;

    const random = Math.floor(Math.random() * filteredQuotes.length);
    setQuote(filteredQuotes[random]);
  };

  // TO DO NEXT: aggiungere select delle categorie e popolarlo con le categorie
  // ancora disponibili dopo il .filter.map.filter

  return (
    <div>
      <select onChange={(e) => setSelectedStat(e.target.value)}>
        <option value="">-- Scegli Stat</option>
        <option value="INT">Intelligenza</option>
        <option value="SAG">Saggezza</option>
        <option value="CAR">Carisma</option>
      </select>
      <select onChange={(e) => setSelectedCheck(e.target.value)}>
        <option value="">--Esito Check--</option>
        <option value="Passed">Passato</option>
        <option value="Failed">Fallito</option>
      </select>
      <h1>Wotan Quote Generator</h1>
      <p>{quote.parts.before}</p>
      <p>
        <em>{quote.parts.smart}</em>
      </p>
      <p>{quote.parts.after}</p>
      <button onClick={getNewQuote}>Nuova</button>
    </div>
  );
}

export default App;
