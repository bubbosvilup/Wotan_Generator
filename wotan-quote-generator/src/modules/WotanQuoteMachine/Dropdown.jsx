function Dropdown({ label, options, value, onChange, labels }) {
  return (
    <div>
      <label>{label}</label>
      <select value={value} onChange={onChange}>
        <option value="">--{label}</option>
        {options.map((option) => {
          const value = typeof option === "object" ? option.value : option;
          const label =
            typeof option === "object"
              ? option.label
              : labels?.[option] || option;
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;
