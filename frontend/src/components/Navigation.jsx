
export default function Navigation({ children }) {
  return (
    <div className="flex justify-center space-x-28 bg-customNavBar text-customLetras py-4 font-navBar font-extralight text-xl">
      {children}
    </div>
  );
}