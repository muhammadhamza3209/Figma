import React from "react";
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <div className="d-flex gap-2">
              <img src={logo} alt="" />
              <p className="fs-3 text-success">
                <span className="text-info">Health</span>care
              </p>
            </div>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active p-4 fw-bold"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active p-4 fw-bold"
                  aria-current="page"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active p-4 fw-bold"
                  aria-current="page"
                  href="#"
                >
                  Contect
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active p-4 fw-bold"
                  aria-current="page"
                  href="#"
                >
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active p-4 fw-bold"
                  aria-current="page"
                  href="#"
                >
                  Blog
                </a>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <button className="btn btn-light">Sign Up</button>
              <button className="btn btn-success px-4 py-1">Log In</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
