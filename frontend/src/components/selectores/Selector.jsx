function Selector({
  value,
  handleChange,
  options,
  disabled,
  defaultOption,
  getValue,
  getLabel,
}) {
  return (
    <select
      className="text-Letras bg-FondoHotel w-full p-2 rounded-md"
      value={value}
      onChange={handleChange}
      disabled={disabled}
    >
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
