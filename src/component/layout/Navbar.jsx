import { NavLink } from "react-router-dom";

import "./Navbar.scss";

function Navbar() {
  return (
    <nav>
      <>
        <div className="navItem">
          <NavLink to="/">Dashboard</NavLink>
        </div>
      </>
    </nav>
  );
}

export default Navbar;
