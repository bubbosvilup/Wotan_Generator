import { useState } from "react";
import "./data/style/App.css";
import quotes from "./data/quotes";
import QuoteCard from "./components/QuoteCard";
import Dropdown from "./components/Dropdown";

function App() {
  const [quote, setQuote] = useState(null);

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
  //costante grezza per labels leggibili
  const statLabels = {
    INT: "Intelligenza",
    SAG: "Saggezza",
    CAR: "Carisma",
  };
  return (
    <div>
      <Dropdown
        label="Scegli Stat"
        options={["INT", "SAG", "CAR"]}
        value={selectedStat}
        onChange={(e) => setSelectedStat(e.target.value)}
        labels={statLabels}
      />
      <Dropdown
        label="Esito del Check"
        options={["Passed", "Failed"]}
        value={selectedCheck}
        onChange={(e) => setSelectedCheck(e.target.value)}
      />
      <Dropdown
        label="Categoria"
        options={availableCategories}
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      />
      <div>
        <p>
          <strong>Stat:</strong> {selectedStat || "-"} | <strong>Esito:</strong>{" "}
          {selectedCheck || "-"} | <strong>Categoria:</strong>{" "}
          {selectedCategory || "-"}
        </p>
      </div>
      <h1>Wotan Quote Generator</h1>
      <QuoteCard quote={quote} />
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
