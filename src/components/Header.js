import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Logo from "../Logo.png";

export default function Header() {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="header-container">
      <header className="header navbar navbar-expand-sm">
        <a href="#!" className="sidebarCollapse" data-placement="bottom">
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
            className="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </a>

        <div className="nav-logo align-self-center">
          <a className="navbar-brand" href="index.html">
            <img className="badge-collapsed-img" alt="logo" src={Logo} />
            <span className="navbar-brand-name">CoruApp</span>
          </a>
        </div>

        <ul className="navbar-item flex-row mr-auto">
          <li className="nav-item align-self-center search-animated">
            <form
              className="form-inline search-full form-inline search"
              role="search"
            >
              <div className="search-bar">
                <input
                  type="text"
                  className="form-control search-form-control  ml-lg-auto"
                  placeholder="Search..."
                />
              </div>
            </form>
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
              className="feather feather-search toggle-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </li>
        </ul>

        <ul className="navbar-item flex-row nav-dropdowns">
          <li className="nav-item dropdown user-profile-dropdown order-lg-0 order-1">
            <a
              href="/"
              className="nav-link dropdown-toggle user"
              id="user-profile-dropdown"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="media">
                <div className="media-body align-self-center">
                  <h6>{user.displayName || user.email}</h6>
                  <p>Admin</p>
                </div>
                <img
                  src={user.photoURL || "assets/img/90x90.jpg"}
                  className="img-fluid"
                  alt="admin-profile"
                />
                <span className="badge badge-success"></span>
              </div>
            </a>

            <div
              className="dropdown-menu position-absolute"
              aria-labelledby="userProfileDropdown"
            >
              <div className="dropdown-item">
                <a href="user_profile.html">
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
                    className="feather feather-user"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>{" "}
                  <span> Profile</span>
                </a>
              </div>
              <div className="dropdown-item d-flex justify-content-center py-3">
                <button
                  className="btn btn-xl btn-danger"
                  onClick={handleLogOut}
                >
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
                    className="feather feather-log-out"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          </li>
        </ul>
      </header>
    </div>
  );
}
