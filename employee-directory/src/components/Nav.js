import React from "react";
import SearchName from "./SearchName.js";
import "../styles/Nav.css";

const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div id="navbarNav">
     <div className="search-area" col-4>
         <SearchName />
    
    </div>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </nav>
)

export default Nav;