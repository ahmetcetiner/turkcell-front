import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="container justify-content-center sticky-top bg-body-tertiary p-0">
      <div class="nav-bar page">
        <div class="text-center">
          <div class="row justify-content-md-center m-auto">
            <div class="col-md-2">
              <Link to="/" class="text-light text-underline-none wrap-text">
                <img class="logoImg" alt="App_logo" width="115px" height="105px" />
              </Link>
            </div>
            <div class="col-md-7 mt-auto mb-auto">
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/addCar">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/car">mamut</a>
                </li>
              </ul>
            </div>
            <div class="col-md-2 d-flex justify-content-end mt-auto mb-auto me-5">
              <Link to="/login" class="text-light text-underline-none wrap-text">
                <img class="userImg" alt="User_Img" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Navbar;