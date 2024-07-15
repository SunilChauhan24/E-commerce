import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import { Button } from "@mui/material";
import CartItems from "./../Cart/CartItems";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../state/Order/Action";
import { useLocation } from "react-router-dom";
import { createPayment } from "../../../state/Payment/Action";

const OrderSummary = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  //  const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);

  // const handleCheckou=()=>{
    
  // }

  const handleCreatePayment = () => {
    // const data = { orderId: order.order?._id, jwt };
    dispatch(createPayment(orderId));
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress} />
      </div>

      <div>
        <div className="lg:grid grid-cols-3  relative mt-5">
          <div className="col-span-2">
            {order.order?.orderItems.map((item) => (
              <CartItems item={item} />
            ))}
          </div>

          <div className="px-5 sticky top-0 h-[100vh] mt-3 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-2 ">
                Price Details
              </p>
              <hr />
              <div className="space-y-3 font-semibold mb-5">
                <div className="flex justify-between pt-3 text-black">
                  <span>Price</span>
                  <span>₹{order.order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Discount</span>
                  <span className="text-green-600">
                    -₹{order.order.discounte}
                  </span>
                </div>
                <div className="flex justify-between pt-3 ">
                  <span>Delivery Charge</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Total Ammount</span>
                  <span className="text-green-600 font-bold">
                    ₹{order.order?.totalDiscountedPrice}
                  </span>
                </div>
              </div>
              <Button
                onClick={handleCreatePayment}
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
    </div>
  );
};

export default OrderSummary;
