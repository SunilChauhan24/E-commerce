import React from "react";
import "./offer.css";
const Offer = () => {
  return (
    <div>
      <div className="container-fluid offer">
        <div className="row">
          <div className="col trans">
            <div className="position-relative  text-center">
              <img src="./img/cloth7.jpg" alt="" />
              <h5 className="textcollor ">20% off on all orders</h5>
              <div className="position-relative">
                <h1 className="mb-4">Spring Collection</h1>
                <a href="/spring-collection" className="btn">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="position-relative text-center">
              <img src="./img/winter.jpg" alt="" />
              <div className="position-relative" style={{ zIndex: 1 }}>
                <h5 className="textcollor">20% off on all orders</h5>
                <h1 className="mb-4">Winter Collection</h1>
                <a
                  href="/winter-collection"
                  className="btn"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
