function SecondNavBar({ children }) {
  return (
    <div className="flex bg-red-500 p-3 justify-around items-center">
      {children}
    </div>
  );
}

export default SecondNavBar;
