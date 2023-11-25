import React from "react";
import { Link } from "react-router-dom";
 function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Pair 4 Rent A Car 
         </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link to="/addcar" className="btn btn-outline-light" >Kullanıcı Ekle</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;