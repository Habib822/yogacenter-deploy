import React from "react";

function Navbar() {
  const currentUser = localStorage.getItem("currentUser");
  const user = currentUser !== "undefined" ? JSON.parse(currentUser) : "";

  function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/Login";
  }

  return (
    <div>
      <nav className="navbar navbar-expand-xl ">
        <a className="navbar-brand" href="/Main">
          <img className="Logo" src="/images/logo.png" alt="small" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/Main">
                <i className="fas fa-home"></i> Home
              </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link" href="/sessions">
                <i className="fas fa-calendar-alt"></i>
                Sessions
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contactus">
                <i className="fas fa-envelope"></i>
                Contact us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about-us">
                <i className="fas fa-info-circle"></i>
                About us
              </a>
            </li>
          </ul>
          {user ? (
            <>
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fas fa-user"></i> {user.name}
                </button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/profile">
                    <i className="fas fa-user-circle"></i> Profile
                  </a>
                  <a className="dropdown-item" href="/." onClick={logout}>
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </a>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Login */}
              <div className="navbar-login">
                <a className="nav-link" href="/Login">
                  <i className="fas fa-sign-in-alt"></i> Login
                </a>
              </div>
              {/* Register */}
              <div className="navbar-register">
                <a className="nav-link" href="/Register">
                  <i className="fas fa-user-plus"></i> Register
                </a>
              </div>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
