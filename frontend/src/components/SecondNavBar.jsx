function SecondNavBar({ children }) {
  return (
    <div className="flex sticky top-16 z-10 p-2 font-hoteles justify-evenly bg-FondoHotel text-Letras">
      {children}
    </div>
  );
}

export default SecondNavBar;
