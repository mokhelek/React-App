import React, { useState } from "react";

import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" style={{ textDecoration: "none" }} to={"/"}>
            N 0 T E S
          </Link>

          <button style={{boxShadow:"none",border:"none"}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" style={{ textDecoration: "none" }} to={"/"}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" style={{ textDecoration: "none" }} to={"/add-book"}>
                  Add Book
                </Link>
              </li>
           
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
             
            </ul>
            <form className="d-flex">
              <input id="search" onChange={props.searchValue} type="text" style={{ borderRadius: "8px", border: "1px solid gray" }} className="form-control me-2 form-control-sm" placeholder="Search " aria-label="Search" />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

// <button className="btn btn-outline-success btn-sm " >Search</button>
