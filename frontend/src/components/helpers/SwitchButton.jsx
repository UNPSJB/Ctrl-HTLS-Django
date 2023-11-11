const SwitchButton = ({ isToggled, toggle }) => {
  return (
    <div
      onClick={toggle}
      className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out cursor-pointer ${
        isToggled ? "justify-end bg-green-500" : ""
      }`}
    >
      <div className="bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out"></div>
    </div>
  );
};

export default SwitchButton;
