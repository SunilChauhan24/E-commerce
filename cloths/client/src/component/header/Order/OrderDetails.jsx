import React, { useEffect } from 'react'
import AddressCard from './../AddressCard/AddressCard';
import OrderTracker from './OrderTracker';
import { Box, Button, Grid } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { FaRegStar } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOrderById } from '../../../state/Order/Action';

const OrderDetails = () => {
     const dispatch = useDispatch();
      const jwt = localStorage.getItem("jwt");
      const { orderId } = useParams();
        const { order } = useSelector((store) => store);
        console.log("order", order.order);
        useEffect(() => {
          dispatch(getOrderById(orderId));
        }, []);
        const navigate=useNavigate();
  return (
    <div className="px:5  lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-10">Delivery Address</h1>
        <AddressCard address={order.order?.shippingAddress} />
      </div>

      <div className="py-20">
        <OrderTracker
          activeStep={
            order.order?.orderStatus === "PLACED"
              ? 1
              : order.order?.orderStatus === "CONFIRMED"
              ? 2
              : order.order?.orderStatus === "SHIPPED"
              ? 3
              : 5
          }
        />
      </div>

      <Grid container className="space-y-5">
        {order.order?.orderItems?.map((item) => (
          <Grid
            item
            container
            className="shadow-xl rounded-md p-7 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-5">
                <img
                  className="w-[7rem] h-[7rem] object-cover object-top"
                  src={item?.product.imageUrl}
                  alt=""
                />

                <div className="spce-y-2  ml-5">
                  <p className="font-semibold">{item?.product.title}</p>
                  <p className="space-x-5 opacity-50 text-xs font-semibold">
                    {" "}
                    <span>Color : {item.orderItems?.product?.color}</span>{" "}
                    <span> Size : {item.size}</span>
                  </p>
                  <p>Seller: {item.product.brand}</p>
                  <p>₹{item.price}</p>
                </div>
              </div>
            </Grid>

            <Grid item>
              <Box
                // onClick={() => navigate(`/account/rate/${item.product._id}`)}
                sx={{ color: deepPurple[500] }}
              >
                <FaRegStar />

                <p>Rate & Review Product</p>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default OrderDetails
