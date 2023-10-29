function Selector({ value, handleChange, options, disabled, defaultOption, getValue, getLabel }) {
  return (
    <select value={value} onChange={handleChange} disabled={disabled}>
      <option value="">{defaultOption}</option>
      {options.map((optionItem) => (
        <option key={getValue(optionItem)} value={getValue(optionItem)}>
          {getLabel(optionItem)}
        </option>
      ))}
    </select>
  );
}

export default Selector;
