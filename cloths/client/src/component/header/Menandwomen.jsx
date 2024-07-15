import React from 'react'
import './Menandwomen.css'
// import { useEffect } from 'react'
import { men22 } from '../../asserts/img/Images'
import { women44 } from '../../asserts/img/Images'
import { kids22 } from '../../asserts/img/Images'
import { useNavigate } from 'react-router-dom'


const Menandwomen = () => {
  const navigate = useNavigate();
  const handleWomen = () => {
    navigate("/women/clothing/top");
  };
  const handleMen = () => {
    navigate("/men/clothing/mens_kurta");
  };
  const handleKids = () => {
    navigate("/Kids/clothing/T-shirts");
  };
  const handleMakup = () => {
    navigate("Makup/MAKEUP/LipstickLip");
  };
  return (
    <div>
      <div className="choice-main-contents">
        <div className="choice-main">
          <div className="choice-text">
            <h1>Which Are You Looking for </h1>
          </div>
          <div className="choice-sub">
            <div className="choice">
              <div className="choice-img">
                <img src={men22} alt="" />
              </div>
              <div className="choice-button">
                <div className="display" onClick={handleMen}>
                  Shop For Men
                  <div className="icons">
                    <i className="bx bx-right-arrow-alt" />
                  </div>
                </div>
              </div>
            </div>
            <div className="choice">
              <div className="choice-img">
                <img src={women44} alt="" />
              </div>
              <div className="choice-button">
                <div className="display" onClick={handleWomen}>
                  Shop For Women
                  <div className="icons">
                    <i className="bx bx-right-arrow-alt" />
                  </div>
                </div>
              </div>
            </div>
            <div className="choice">
              <div className="choice-img">
                <img src={kids22} alt="" />
              </div>
              <div className="choice-button">
                <div className="display" onClick={handleKids}>
                  Shop For Kids
                  <div className="icons">
                    <i className="bx bx-right-arrow-alt" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menandwomen