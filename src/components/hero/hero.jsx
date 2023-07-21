/* eslint-disable no-unused-vars */
import React from "react";
import "./hero.css";
import icon1 from "../../assets/images/icons/icon1.png";
import icon2 from "../../assets/images/icons/icon2.png";
import icon3 from "../../assets/images/icons/icon3.png";
import icon4 from "../../assets/images/icons/icon4.png";
import icon5 from "../../assets/images/icons/icon5.png";

function hero() {
  return (
    <>
      <section className="hero p-2">
        <div className="container-xxl">
          <div className="row">
            <div className="hero-details d-flex justify-content-around align-items-center">
              <div className="card-details mx-3">
                <div className="card p-2 d-flex flex-column align-items-center">
                  <img src={icon1} alt="" className="img-fluid m-auto" />
                  <p>past orders</p>
                </div>
              </div>
              <div className="card-details mx-3">
                <div className="card p-2 d-flex flex-column align-items-center">
                  <img src={icon2} alt="" className="img-fluid m-auto" />
                  <p>Quick Shiping</p>
                </div>
              </div>
              <div className="card-details mx-3">
                <div className="card p-2 d-flex flex-column align-items-center">
                  <img src={icon3} alt="" className="img-fluid m-auto" />
                  <p>High Saves</p>
                </div>
              </div>
              <div className="card-details mx-3">
                <div className="card p-2 d-flex flex-column align-items-center">
                  <img src={icon4} alt="" className="img-fluid m-auto" />
                  <p>24/7 Support</p>
                </div>
              </div>
              <div className="card-details mx-3">
                <div className="card p-2 d-flex flex-column align-items-center">
                  <img src={icon5} alt="" className="img-fluid m-auto" />
                  <p>Discounts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default hero;
