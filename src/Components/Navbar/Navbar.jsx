import React from "react";
import logo from './logo-light.png'
import style from './Navbar.module.css'

function Navbar() {
  return (
    <>
      <nav className={`${style.zIndex} position-fixed  w-100 navbar navbar-expand-lg  navbar-dark bg-transparent `}>
        <div className="container-fluid">
          <a className= 'navbar-brand mx-5'  href="#">
            <img src={logo} className={`${style.img}`} alt='light logo'/>
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
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5 mx-5 ">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Pages
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-white" href="#">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Elements
                </a>
              </li>
              <li className="nav-item m-1 ">
                <button className="btn text-white">
                  <i class="fa-solid fa-cart-shopping  mx-1"></i>
                </button>
                <button className="btn text-white">
                  <i class="fa-solid fa-magnifying-glass  px-1"></i>
                </button>
                <button className="btn text-white">
                  <i class="fa-solid fa-bars  px-1"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
