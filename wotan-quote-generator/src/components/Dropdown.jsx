function Dropdown({ label, options, value, onChange, labels }) {
  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        <option value="">--{label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {labels && labels[option] ? labels[option] : option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
