import { Link } from "react-router-dom";
import "./Footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import google from "../../assets/images/pay/play.jpg";
import appStore from "../../assets/images/pay/app.jpg";
import pay from "../../assets/images/pay/pay.png";

function Footer() {
  return (
    <>
      <footer className="footer py-4 shadow-s">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-4 d-flex flex-column">
              <h3 className="mb-5">
                <ins>Contact Us</ins>
              </h3>
              <div className="footer-details">
                <p className="mb-3">
                  <b>Address: </b>2nd lane, mount Lavinia, colombo
                </p>
                <p className="mb-3">
                  <b>Phone: </b>
                  <a href="tell:+770249214">call Us: +770249214</a>
                </p>
                <p className="mb-5">
                  <b>Hours Open: </b>8.00 Am to 7.00 Pm
                </p>
                <p className="mb-3">
                  <b>Follow Us: </b>
                </p>
                <div className="col-3 social-icons d-flex justify-content-around ">
                  <Link>
                    <AiFillTwitterCircle className="fs-4" />
                  </Link>
                  <Link>
                    <BsFacebook className="fs-5" />
                  </Link>
                  <Link>
                    <AiFillInstagram className="fs-4" />
                  </Link>
                  <Link>
                    <AiFillLinkedin className="fs-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-2 d-flex flex-column">
              <h3 className="mb-5">
                <ins>About</ins>
              </h3>
              <div className="footer-details">
                <p className="mb-3">
                  <Link>About Us</Link>
                </p>
                <p className="mb-3">
                  <Link>Delivary</Link>
                </p>
                <p className="mb-3">
                  <Link>Privacy policy</Link>
                </p>
                <p className="mb-3">
                  <Link>Tax policy</Link>
                </p>
                <p className="mb-3">
                  <Link>Fee policy</Link>
                </p>
                <p className="mb-3">
                  <Link>Terms and Condition</Link>
                </p>
              </div>
            </div>

            <div className="col-2 d-flex flex-column">
              <h3 className="mb-5">
                <ins>Account</ins>
              </h3>
              <div className="footer-details">
                <p className="mb-3">
                  <Link>Profile</Link>
                </p>
                <p className="mb-3">
                  <Link>View Cart</Link>
                </p>
                <p className="mb-3">
                  <Link>My Orders</Link>
                </p>
                <p className="mb-3">
                  <Link>My Wishlist</Link>
                </p>
                <p className="mb-3">
                  <Link>Help</Link>
                </p>
                <p className="mb-3">
                  <Link>Coupns</Link>
                </p>
              </div>
            </div>

            <div className="col-4 flex-column">
              <h3 className="mb-3">
                <ins>Install App</ins>
              </h3>
              <div className="footer-details">
                <p>Available On Google Play Services & App Store</p>
                <div className="pay d-flex">
                  <Link>
                    <img src={google} alt="" className="img-fluid p-4 " />
                  </Link>
                  <Link>
                    <img src={appStore} alt="" className="img-fluid p-4 " />
                  </Link>
                </div>
              </div>
              <div className="footer-details">
                <p>Payment Method</p>
                <div className="pay">
                  <Link>
                    <img src={pay} alt="" className="img-fluid p-4 " />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr />

          <div className="row d-flex justify-content-between">
            <div className="col-3">
              <p>&copy: Develop by Gayan Developers 2023</p>
            </div>
            <div className="col-4 d-flex justify-content-around ">
              <Link className="text-dark ">Privacy policy</Link>
              <Link className="text-dark">Terms and Condition</Link>
              <Link className="text-dark">Contact Me</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
