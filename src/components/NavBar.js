import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  let location = useLocation();
  return (
    <div className="topbar-nav header navbar" role="banner">
      <nav id="topbar">
        <ul className="navbar-nav theme-brand flex-row text-center">
          <li className="nav-item theme-logo">
            <Link to="/">
              <img
                src="assets/img/90x90.jpg"
                className="navbar-logo"
                alt="logo"
              />
            </Link>
          </li>
          <li className="nav-item theme-text">
            <Link to="/" className="nav-link">
              CoruAPP
            </Link>
          </li>
        </ul>

        <ul className="list-unstyled menu-categories" id="topAccordion">
          <li
            className={`menu single-menu ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            <Link
              to="/"
              aria-expanded="true"
              className="dropdown-toggle autodroprown"
            >
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-home"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                  <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <span>Dashboard</span>
              </div>
            </Link>
          </li>

          <li
            className={`menu single-menu ${
              location.pathname === "/users" ? "active" : ""
            }`}
          >
            <Link to="/users" aria-expanded="false" className="nav-item">
              <div className="">
                <span>Users</span>
              </div>
            </Link>
          </li>
          <li
            className={`menu single-menu ${
              location.pathname === "/sessions" ? "active" : ""
            }`}
          >
            <Link to="/sessions" aria-expanded="false" className="nav-item">
              <div className="">
                <span>Sesions</span>
              </div>
            </Link>
          </li>
          <li
            className={`menu single-menu ${
              location.pathname === "/habits" ? "active" : ""
            }`}
          >
            <Link to="/habits" aria-expanded="false" className="nav-item">
              <div className="">
                <span>Habits</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
