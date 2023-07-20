/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import "./Header.css";
import logo from "../../assets/images/apneck.png";
import Shop from "../../pages/shop/Shop";

function Header() {
  return (
    <>
      <header className="header-top-strip  p-1 shadow-sm ">
        <div className="container-xxl ">
          <div className="row d-flex align-item-center">
            <div className="col-6">
              <p>The tranding outlets at 100% off</p>
            </div>
            <div className="col-6 d-flex justify-content-between">
              <div>
                <a href="tel:+770249214"> Call Us +770249214</a>
              </div>
              <div>
                <Link>
                  <BiPhoneCall className="fs-3 mx-4" />
                </Link>
                <Link>
                  <AiOutlineMail className="fs-3 mx-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper mx-4">
        <div className="conteiner-xxl">
          <div className="row">
            <div className="col-2">
              <Link to={"/"}>
                <img src={logo} alt="" className="img-fluid logo" />
              </Link>
            </div>
            <div className="col-3 d-flex align-items-center ">
              <span className="input-group" id="basic-addon2">
                All
              </span>
              <input
                type="text"
                className="form-control "
                placeholder="Search"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <button className="input-group-text" id="basic-addon2">
                Search
              </button>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-between">
              <Link to={"/"}>Home</Link>
              <Link to={"/shop"}>Shop</Link>
              <Link to={"/blog"}>Blog</Link>
              <Link to={"/about"}>About</Link>
              <Link to={"/contact"}>Contact</Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
