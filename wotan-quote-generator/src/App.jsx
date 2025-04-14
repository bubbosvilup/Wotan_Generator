import { useState } from "react";
import "./data/style/App.css";
import quotes from "./data/quotes";

function App() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const [quote, setQuote] = useState;
  return (
    <div>
      <h1>Wotan Quote Generator</h1>
      <p>{randomQuote.parts.before}</p>
      <p>{randomQuote.parts.smart}</p>
      <p>{randomQuote.parts.after}</p>
    </div>
  );
}

export default App;
