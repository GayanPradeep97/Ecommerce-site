/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import "./Header.css";
import logo from "../../assets/images/apneck.png";
import Shop from "../../pages/shop/Shop";
import { HiOutlineInboxIn } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Header() {
  const location = useLocation();
  return (
    <>
      <header className="header-top-strip p-1 px-4 shadow-md ">
        <div className="container-xxl ">
          <div className="row align-items-center">
            <div className="col-6 ">
              <p>The tranding outlets at 100% off</p>
            </div>
            <div className="col-6 d-flex justify-content-between ">
              <div>
                <a href="tel:+770249214"> Call Us +770249214</a>
              </div>
              <div>
                <Link>
                  <BiPhoneCall className="fs-3 mx-2 mx-4" />
                </Link>
                <Link>
                  <AiOutlineMail className="fs-3 mx-2 mx-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper ">
        <div className="conteiner-xxl mx-4 py-2">
          <div className="row">
            <div className="col-2 m-auto">
              <Link to={"/"}>
                <img src={logo} alt="" className="img-fluid logo m-auto" />
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
            <div className="nav-links col-4 d-flex align-items-center justify-content-between">
              <Link
                to={"/"}
                className={location.pathname === "/" ? "active" : "inactive"}
              >
                Home
              </Link>
              <Link
                to={"/shop"}
                className={
                  location.pathname === "/shop" ? "active" : "inactive"
                }
              >
                Shop
              </Link>
              <Link
                to={"/blog"}
                className={
                  location.pathname === "/blog" ? "active" : "inactive"
                }
              >
                Blog
              </Link>
              <Link
                to={"/about"}
                className={
                  location.pathname === "/about" ? "active" : "inactive"
                }
              >
                About
              </Link>
              <Link
                to={"/contact"}
                className={
                  location.pathname === "/contact" ? "active" : "inactive"
                }
              >
                Contact
              </Link>
            </div>

            <div className="icon-list col-3 d-flex align-items-center justify-content-between ">
              <Link
                to={"/wishlist"}
                className={
                  location.pathname === "/wishlist" ? "active" : "inactive"
                }
              >
                <HiOutlineInboxIn className="link mx-2" />
                <span>wishiList</span>
              </Link>
              <Link
                to={"/login"}
                className={
                  location.pathname === "/login" ? "active" : "inactive"
                }
              >
                <VscAccount className="link mx-2" />
                <span>Account</span>
              </Link>
              <Link
                to={"/cart"}
                className={
                  location.pathname === "/cart" ? "active" : "inactive"
                }
              >
                <AiOutlineShoppingCart className="link mx-2" />
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
