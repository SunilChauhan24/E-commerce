import React, { useEffect } from "react";
import CartItems from "./CartItems";
import { Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { get } from "../../../state/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const { cart } = useSelector((store) => store);
  console.log("cart------------", cart);
  // const { products } = useSelector((store) => store || {});
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };

  useEffect(() => {
    dispatch(get());
  }, [cart.updateCartItem,cart.deleteCartItem]);

  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative mt-5">
        {
          <div className="col-span-2">
            {cart.cart?.cartItems.map((item) => (
              <CartItems item={item} />
            ))}
          </div>
        }

        <div className="px-5 sticky top-0 h-[100vh] mt-3 lg:mt-0">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-2 ">
              Price Details
            </p>
            <hr />
            <div className="space-y-3 font-semibold mb-5">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{cart.cart?.totalPrice}</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">-₹{cart.cart?.discounte}</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivery Charge</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Total Ammount</span>
                <span className="text-green-600 font-bold">
                  ₹{cart.cart?.totalDiscountedPrice}
                </span>
              </div>
            </div>
            <Button
              onClick={handleCheckout}
              color="secondary"
              className="w-full mt-3"
              variant="contained"
              sx={{ px: "2.5rem", py: ".7rem" }}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
