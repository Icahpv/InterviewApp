import KuvaLogo from "../media/KuvaLogo.png";
import { BrowserRouter as Router, Link } from "react-router-dom"
import NavLinks from './NavLinks'

function NavigationBar() {
  return (
    <div className="nav-container">
      <img className="logo" src={KuvaLogo} />
      <NavLinks />
    </div>
  );
}

export default NavigationBar;
