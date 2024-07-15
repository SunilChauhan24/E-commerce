import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo3 from "../../asserts/img/logo3-removebg-preview.png";
import { innerone } from "../../asserts/img/Images";
import { innertwo } from "../../asserts/img/Images";
import { innerfour } from "../../asserts/img/Images";
import { innerfive } from "../../asserts/img/Images";
import { innerseven } from "../../asserts/img/Images";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { Avatar, Button } from "@mui/material";
import AuthModel from "./../Auth/AuthModel";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "./../../state/Auth/Action";
import { deepOrange } from "@mui/material/colors";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [openAuthModel, setOpenAuthModel] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const { auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenAuthModel(true);
  };

  const handleClose = () => {
    setOpenAuthModel(false);
  };

  const handleCategoryClick = (category, section, item, close) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
    close();
  };

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
     // dispatch(getCart(jwt));
    }
  }, [jwt]); // ,auth.jwt

  useEffect(() => {
    if (auth.user) {
      handleClose();
    }
    if( auth.user?.role!=="ADMIN" && (location.pathname==="/login" || location.pathname==="/register")){
      navigate(-1)
    }
  }, [auth.user]);

  const handleLogout = () => {
    dispatch(logout());
    handleCloseUserMenu();
    // localStorage.clear();
  };

  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">
            {/* <img src="./img/logo3-removebg-preview.png" width="120px" /> */}
            <img src={Logo3} width="120px" alt="" />
          </div>
          <nav>
            <ul>
              <li>
                <Link>HOME</Link>
              </li>
              <li>
                <Link to="/men">MEN</Link>
                <div className="megamenu">
                  <div className="megamenuitems">
                    <h3>Topwear</h3>
                    <ul>
                      <li>T-Shirt</li>
                      <li>
                        <Link to="/mens/casualshirt">Casuak shirt</Link>
                      </li>
                      <li>Formal Shirt</li>
                      <li>Sweater</li>
                      <li>Jackets</li>
                      <li>Suits</li>
                      <li>Blazers &amp; Coats</li>
                      <li>RainCoat</li>
                      <li>Hoodies</li>
                    </ul>
                  </div>
                  <div className="megamenuitems">
                    <h3>Bottomwear</h3>
                    <ul>
                      <li>Jeans</li>
                      <li>Track Pants</li>
                      <li>Trousers &amp; pants</li>
                      <li>Formals Pants</li>
                      <li>Shorts</li>
                      <li>Baggy Pants</li>
                      <li>Cropped Trouser</li>
                    </ul>
                  </div>
                  <div className="megamenuitems">
                    <h3>Footwear</h3>
                    <ul>
                      <li>Casual Shoes</li>
                      <li>Sports Shoes</li>
                      <li>Formal Shoes</li>
                      <li>Sneakers</li>
                      <li>Sandals</li>
                      <li>Flip Flops &amp; Slippers</li>
                      <li>Socks</li>
                      <li>Loafer</li>
                      <li>Football Shoes</li>
                    </ul>
                  </div>
                  <div className="megamenuitems">
                    <h3>Festival wear</h3>
                    <ul>
                      <li>Kurtas &amp; Kurats Sets</li>
                      <li>Dhoti</li>
                      <li>Shervani</li>
                      <li>Nehru Jackets</li>
                    </ul>
                    <hr />
                    <h5>Sunglasses</h5>
                    <h5>Watches</h5>
                  </div>
                  <div className="megamenuitems">
                    <div className="megamenu-img">
                      <img src={innerone} alt="" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link>WOMEN</Link>
                <div className="megamenu">
                  <div className="megamenuitems">
                    <h3 className="women-color">Indian Fusion Wear</h3>
                    <ul>
                      <li>Kurtas &amp; Suits</li>
                      <li>Kurtis</li>
                      <li>Leggings</li>
                      <li>Top &amp; Shirts</li>
                      <li>Lahengas Choli</li>
                      <li>Duppatas</li>
                    </ul>
                  </div>
                  <div className="megamenuitems">
                    <h3 className="women-color">Western Wear</h3>
                    <ul>
                      <li>Tops</li>
                      <li>T-shirts</li>
                      <li>Jeans</li>
                      <li>Shirts</li>
                      <li>Track Pants</li>
                      <li>Skirts</li>
                      <li>Sweaters</li>
                      <li>Jumpsuits</li>
                      <li>Jackets</li>
                      <li>Joggers</li>
                    </ul>
                  </div>
                  <div className="megamenuitems">
                    <h3 className="women-color">Footwear</h3>
                    <ul>
                      <li>Casual Shoes</li>
                      <li>Flats</li>
                      <li>Heels</li>
                      <li>Flip-Flops &amp; Slippers</li>
                      <li>Sports Shoes</li>
                    </ul>
                    <hr />
                    <h5 className="women-color">Sunglasses</h5>
                    <h5 className="women-color">Watches</h5>
                  </div>
                  <div className="megamenuitems">
                    <h3 className="women-color">Acceessories</h3>
                    <ul>
                      <li>Belts</li>
                      <li>perfume</li>
                      <li>Watches</li>
                      <li>Socks</li>
                      <li>Cap</li>
                      <li>Hand Begs</li>
                    </ul>
                    {/* <div class="megamenuitems">

                              <div class="megamenuwomen-img">
                              <img src="./img/inner2.jpg" alt="">
                              </div>
    
                          </div> */}
                  </div>
                  <div className="megamenuitems">
                    <div className="megamenuwomen-img">
                      <img src={innertwo} alt="" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link>KIDS</Link>
                <div className="megamenu">
                  <div className="megamenuitems">
                    <h3 className="kids-color">Boys</h3>
                    <ul>
                      <li>Shirt</li>
                      <li>T-Shirt</li>
                      <li>Jeans</li>
                      <li>Shorts</li>
                      <li> Denims &amp; Trousers</li>
                      <li>Jackets &amp; Sweaters</li>
                      <li>Track Pants</li>
                    </ul>
                  </div>
                  <div className="megamenuitems">
                    <h3 className="kids-color">Girls</h3>
                    <ul>
                      <li>Dresses &amp; Froks</li>
                      <li>Tops</li>
                      <li>Lehenga Choli</li>
                      <li>Shirts &amp; T-Shirts</li>
                      <li>Skirts &amp; Shorts</li>
                      <li>Leggings</li>
                      <li>Jeans &amp; Trousers</li>
                    </ul>
                  </div>
                  <div className="megamenuitems">
                    <h3 className="kids-color">Footwear</h3>
                    <ul>
                      <li>Casual Shoes</li>
                      <li>Sports Shoes</li>
                      <li>Sandals</li>
                      <li>Socks</li>
                      <li>School Shoes</li>
                    </ul>
                    <hr />
                    <h5 className="kids-color">Sunglasses</h5>
                    <h5 className="kids-color">Watches</h5>
                  </div>
                  <div className="megamenuitems">
                    <h3 className="kids-color">Toys</h3>
                    <ul>
                      <li>Soft Toys</li>
                      <li>Activity Toys</li>
                      <li>Educational Toys</li>
                      <li>Guns Toys</li>
                    </ul>
                  </div>
                  <div className="megamenuitems">
                    <div className="megamenukids-img">
                      <img src={innerfour} alt="" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link>BEAUTY</Link>
                <div className="megamenu">
                  <div className="megamenuitems">
                    <h3 className="Beauty-color">Makeup</h3>
                    <ul>
                      <li>Lipstick</li>
                      <li>Lip Gloss</li>
                      <li>Mascara</li>
                      <li>Eyeliner</li>
                      <li>Kajal</li>
                      <li>Eyeshadow</li>
                      <li>Foundation</li>
                      <li>Nailpolish</li>
                    </ul>
                  </div>
                  <div className="megamenuitems">
                    <h3 className="Beauty-color">Skincare</h3>
                    <ul>
                      <li>Facewash</li>
                      <li>Scrub</li>
                      <li>Bodylotion</li>
                      <li>Sunscreem</li>
                      <li>Moisturiser</li>
                      <li>Lipbalm</li>
                    </ul>
                  </div>
                  <div className="megamenuitems">
                    <h3 className="Beauty-color">Haircare</h3>
                    <ul>
                      <li>Shampoo</li>
                      <li>Conditionar</li>
                      <li>oil</li>
                      <li>haircolor</li>
                      <li>serum</li>
                    </ul>
                    <hr />
                    <h3 className="Beauty-color perfume">Fragnance</h3>
                    <ul>
                      <li>perfume</li>
                      <li>Deodorant</li>
                    </ul>
                  </div>
                  <div className="megamenuitems">
                    <div className="megamenubeauty-img">
                      <img src={innerfive} alt="" />
                      <img src={innerseven} alt="" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          <div className="input-group">
            <input
              type="search"
              placeholder="Search For Products,brand And More"
            />
            <button type="button" className="btnnn">
              search
            </button>
          </div>
          <div></div>
          <div className="icons1">
            <div className="icons2">
              <div className="dropdown-container ">
                <FaUserAlt className="icon" />
                <ul className="dropdown-menu">
                  <li>My Profile</li>
                  <li onClick={() => navigate("/account/order")}>My Orders</li>
                  <li onClick={handleLogout}>Log Out</li>
                </ul>
              </div>
            </div>
            <FaShoppingBag />

            <div className="pt-1 ml-3">
              {auth.user?.firstname ? (
                <div>
                  <Avatar
                    className="text-white"
                    onClick={handleUserClick}
                    aria-aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-aria-expanded={open ? "true" : undefined}
                    sx={{
                      bgcolor: deepOrange[500],
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    {auth.user?.firstname[0].toUpperCase()}
                  </Avatar>
                </div>
              ) : (
                <Button
                  onClick={handleOpen}
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Signin
                </Button>
              )}
            </div>
          </div>
        </div>
      </header>
      <AuthModel handleClose={handleClose} open={openAuthModel} />
    </div>
  );
};
{
  /* <FaShoppingBag /> */
}

export default Header;
