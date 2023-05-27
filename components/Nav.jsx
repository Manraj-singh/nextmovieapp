import React from "react";
import Link from "next/link";

import "@styles/nav.css";

const Nav = () => {
  // defining Navbar
  return (
    <nav>
      <div className="nav-container">
        <h1>
          <Link href="/">Next Movie App</Link>
        </h1>
      </div>
    </nav>
  );
};

export default Nav;
