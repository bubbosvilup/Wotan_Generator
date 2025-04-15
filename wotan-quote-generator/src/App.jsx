import { useState } from "react";
import "./data/style/App.css";
import quotes from "./data/quotes";

function App() {
  const [quote, setQuote] = useState(
    quotes[Math.floor(Math.random() * quotes.length)]
  );

  // stati filtri selezione
  const [selectedStat, setSelectedStat] = useState("");

  const [selectedCheck, setSelectedCheck] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");
  // filtro dinamico per le categorie (ex. int non rende disponibile car)
  const availableCategories = quotes
    .filter((q) => q.stat === selectedStat)
    .map((q) => q.category)
    .filter((value, index, self) => self.indexOf(value) === index);
  // quote disponibili dopo filtri
  const getNewQuote = () => {
    const filteredQuotes = quotes.filter(
      (q) =>
        q.stat === selectedStat &&
        q.check === selectedCheck &&
        q.category === selectedCategory
    );
    //safe check
    if (filteredQuotes.length === 0) return;

    const random = Math.floor(Math.random() * filteredQuotes.length);
    setQuote(filteredQuotes[random]);
  };
  //disabilita bottone se le stat non sono selezionate
  const isButtonDisabled = !selectedStat || !selectedCheck || !selectedCategory;
  const missingFields = [];

  if (!selectedStat) missingFields.push("Stat");
  if (!selectedCheck) missingFields.push("Esito");
  if (!selectedCategory) missingFields.push("Categoria");

  //reset richiamando gli stati con parametri vuoti
  const resetFilters = () => {
    setSelectedStat("");
    setSelectedCheck("");
    setSelectedCategory("");
  };

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

      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">--Categoria--</option>
        {availableCategories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <div>
        <p>
          <strong>Stat:</strong> {selectedStat || "-"} | <strong>Esito:</strong>{" "}
          {selectedCheck || "-"} | <strong>Categoria:</strong>{" "}
          {selectedCategory || "-"}
        </p>
      </div>
      <h1>Wotan Quote Generator</h1>
      <p>{quote.parts.before}</p>
      <p>
        <em>{quote.parts.smart}</em>
      </p>
      <p>{quote.parts.after}</p>
      <button onClick={getNewQuote} disabled={isButtonDisabled}>
        Nuova
      </button>
      {isButtonDisabled && (
        <p style={{ color: "red" }}>
          Seleziona:{" "}
          {missingFields.map((field, index) => (
            <strong key={field}>
              {field}
              {index < missingFields.length - 1 ? ", " : ""}
            </strong>
          ))}
        </p>
      )}
      <button onClick={resetFilters}>Reset</button>
    </div>
  );
}

export default App;
