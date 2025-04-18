import quotes from "../../data/quotes";
import Dropdown from "./Dropdown";
import QuoteCard from "./QuoteCard";
import { useState, useEffect } from "react";
import styles from "./WotanQuoteMachine.module.css";

const statOptions = [
  { value: "INT", label: "🧠 Intelligenza" },
  { value: "SAG", label: "🧙 Saggezza" },
  { value: "CAR", label: "🗣️ Carisma" },
];

function WotanQuoteMachine() {
  const [quote, setQuote] = useState(null);
  const [selectedStat, setSelectedStat] = useState("");
  const [selectedCheck, setSelectedCheck] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const availableCategories = quotes
    .filter((q) => q.stat === selectedStat)
    .map((q) => q.category)
    .filter((value, index, self) => self.indexOf(value) === index);

  const getNewQuote = () => {
    const filteredQuotes = quotes.filter(
      (q) =>
        q.stat === selectedStat &&
        q.check === selectedCheck &&
        q.category === selectedCategory
    );
    if (filteredQuotes.length === 0) return;
    const random = Math.floor(Math.random() * filteredQuotes.length);
    setQuote(filteredQuotes[random]);
  };

  useEffect(() => {
    getNewQuote();
  }, [selectedStat, selectedCheck, selectedCategory]);

  const isButtonDisabled = !selectedStat || !selectedCheck || !selectedCategory;
  const missingFields = [];
  if (!selectedStat) missingFields.push("Stat");
  if (!selectedCheck) missingFields.push("Esito");
  if (!selectedCategory) missingFields.push("Categoria");

  //nel caso ci serve in futuro
  const resetFilters = () => {
    setSelectedStat("");
    setSelectedCheck("");
    setSelectedCategory("");
    setQuote(null);
  };

  const statLabels = {
    INT: "Intelligenza",
    SAG: "Saggezza",
    CAR: "Carisma",
  };

  const randomizeAll = () => {
    const stats = STAT_OPTIONS;
    const randomStat =
      STAT_OPTIONS[Math.floor(Math.random() * STAT_OPTIONS.length)];
    const randomCheck = ["Passed", "Failed"][Math.floor(Math.random() * 2)];
    const availableCat = quotes
      .filter((q) => q.stat === randomStat)
      .map((q) => q.category)
      .filter((value, index, self) => self.indexOf(value) === index);
    const randomCategory =
      availableCat[Math.floor(Math.random() * availableCat.length)];
    setSelectedStat(randomStat);
    setSelectedCheck(randomCheck);
    setSelectedCategory(randomCategory);
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Wotan Quote Generator</h1>
      <div className={styles.dropdownGroup}>
        <Dropdown
          label="Scegli Stat "
          options={statOptions}
          value={selectedStat}
          onChange={(e) => setSelectedStat(e.target.value)}
          labels={statLabels}
        />
        <Dropdown
          label="Esito del check "
          options={["Passed", "Failed"]}
          value={selectedCheck}
          onChange={(e) => setSelectedCheck(e.target.value)}
        />
        <Dropdown
          label="Categoria "
          options={availableCategories}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        />
      </div>
      <div className={styles.quoteBox}>
        <QuoteCard quote={quote} />
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={randomizeAll}>Mi sento Barbaro!</button>
        <button onClick={resetFilters}>Reset</button>
      </div>
      <div className={styles.summary}>
        <p>
          <strong>Stat:</strong> {selectedStat || "-"} | <strong>Esito:</strong>{" "}
          {selectedCheck || "-"} | <strong>Categoria:</strong>{" "}
          {selectedCategory || "-"}
        </p>
      </div>
    </div>
  );
}

export default WotanQuoteMachine;
