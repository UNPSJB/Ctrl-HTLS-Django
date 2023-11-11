import Navigation from "./Navigation";
import SecondNavBar from "./SecondNavBar";

function Header({ secondNavBarChildren }) {
  return (
    <header className="sticky top-0 z-50">
      <Navigation />
      <SecondNavBar>{secondNavBarChildren}</SecondNavBar>
    </header>
  );
}

export default Header;
