function QuoteCard({ quote }) {
  if (!quote) {
    return (
      <div>
        <p style={{ fontStyle: "italic", color: "gray" }}>
          Seleziona i filtri e clicca su <strong>Nuova</strong> per generare una
          frase di Wotan.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p>{quote.parts.before}</p>
      <p>
        <em>{quote.parts.smart}</em>
      </p>
      <p>{quote.parts.after}</p>
    </div>
  );
}

export default QuoteCard;
