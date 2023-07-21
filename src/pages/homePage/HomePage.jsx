/* eslint-disable no-unused-vars */
import React from "react";
import "./HomePage.css";
import Hero from "../../components/hero/hero";
import FeatureProducts from "../../components/FeatureProducts/FeatureProducts";

function HomePage() {
  return (
    <>
      <section className="banner">
        <div className="container-xxl">
          <div className="row">
            <div className="banner-details">
              <div className="text-set">
                <span className="box shadow-lg p-2 text-white">
                  Trade your Offer
                </span>
                <h1 className="super-text my-2">Super Value Deals</h1>
                <h2 className="my-2">On all products</h2>
                <p>Save more with Apneck</p>
                <button className="button-primary">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Hero />

      <section className="festure-products p-5">
        <div className="container-xxl">
          <div className="row">
            <div className="text-center">
              <h1>Our Featured Products</h1>
              <p>All Wheter Modern Designs</p>
            </div>
            <div className="d-flex justify-content-around">
              <div className="col-4">
                <FeatureProducts />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
