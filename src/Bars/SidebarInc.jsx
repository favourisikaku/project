import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const SidebarInc = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <nav
      className="flex-none navbar navbar-vertical navbar-expand-lg show vh-lg-100 bg-color-10 px-0 py-2 navbar-dark"
      id="sidebar"
    >
      <div className="flex-lg-column align-items-lg-start d-flex align-items-center justify-content-between w-100">
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list bi-2 text-dark cursor-pointer"></i>
        </button>

        <Link
          className="navbar-brand me-0 ps-lg-4 text-bold"
          to="/organisation-admin/dashboard"
        >
          <img
            src="/images/logo-scholastica-white.svg"
            className="img-fluid h-icon-50"
            alt="logo"
          />
        </Link>

        <div className="navbar-user d-lg-none">
          <a
            className="nav-link no-caret d-flex align-items-center no-caret dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <div className="avatar-sm rounded-circle me-2">
              <img
                src="/images/download.png"
                className="img-fluid object-fit-cover object-position-center w-100 h-100"
              />
            </div>
            <div className="d-flex align-items-center">
              <p className="text-truncate text-main-4 d-lg-inline-block d-none text-medium mb-0">
                Hi, Ray
              </p>
            </div>
          </a>
          <ul
            className="dropdown-menu drop-size-2 cat-list border-0 py-0 right-0"
            aria-labelledby="navbarDropdown"
          >
            <li>
              <a className="dropdown-item pt-custom-1 pb-custom-1" href="#">
                My Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item pt-custom-1 pb-custom-1" href="#">
                Account Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item pt-custom-1 pb-custom-1" href="#">
                Log out
              </a>
            </li>
          </ul>
        </div>

        <div
          className="offcanvas offcanvas-end bg-color-10"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header justify-content-between align-items-center">
            <div className="offcanvas-title">
              <Link
                className="navbar-brand me-0 text-bold"
                to="/organisation-admin/dashboard"
              >
                <img
                  src="/images/download.png"
                  className="img-fluid h-icon-50 rounded-circle"
                  alt="Logo"
                />
              </Link>
            </div>

            <i
              className="bi bi-x-lg"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></i>
          </div>

          <div className="offcanvas-body flex-column custom-offcanvas-h">
            <ul className="navbar-nav flex-column sidebar-list m-4 pt-5">
              <li className="nav-item">
                <Link
                  className="nav-link 
                    d-flex align-items-center"
                >
                  <img
                    src="/images/bar-chart-2.svg"
                    className="img-fluid me-2"
                    alt="icon"
                  />{" "}
                  Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link 
                    d-flex align-items-center"
                >
                  <img
                    src="/images/bar-chart-2.svg"
                    className="img-fluid me-2"
                    alt="icon"
                  />{" "}
                  Analytics
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link 
                    d-flex align-items-center"
                >
                  <img
                    src="/images/bar-chart-2.svg"
                    className="img-fluid me-2"
                    alt="icon"
                  />{" "}
                  Connect
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link 
                    d-flex align-items-center"
                >
                  <img
                    src="/images/bar-chart-2.svg"
                    className="img-fluid me-2"
                    alt="icon"
                  />{" "}
                  Dealroom
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link 
                    d-flex align-items-center"
                >
                  <img
                    src="/images/bar-chart-2.svg"
                    className="img-fluid me-2"
                    alt="icon"
                  />{" "}
                  Profile
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link 
                    d-flex align-items-center"
                >
                  <img
                    src="/images/bar-chart-2.svg"
                    className="img-fluid me-2"
                    alt="icon"
                  />{" "}
                  Settings
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SidebarInc;
