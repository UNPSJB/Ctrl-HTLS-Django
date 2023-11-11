const SwitchButton = ({ isToggled, toggle }) => {
  return (
    <div
      onClick={toggle}
      className={`w-12 h-6 flex items-center bg-ModificarToggle rounded-full border-spacing-0  p-1 duration-600 ease-in-out transition cursor-pointer ${
        !isToggled ? "justify-end bg-gray-300" : ""
      }`}
    >
      <div
        className={`w-5 h-5 rounded-full shadow-md transform duration-600 ease-in-out ${
          !isToggled ? "bg-ModificarToggle " : "bg-white"
        }`}
      ></div>
    </div>
  );
};

export default SwitchButton;
