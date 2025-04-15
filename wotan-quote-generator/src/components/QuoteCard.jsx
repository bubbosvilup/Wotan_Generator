function QuoteCard({ quote }) {
  return (
    <div>
      <p>{quote.parts.before}</p>
      <p>
        <em>{quote.parts.smart}</em>
      </p>
      <p>{quote.parts.smart}</p>
    </div>
  );
}

export default QuoteCard;
