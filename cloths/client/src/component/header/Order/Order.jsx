import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { innertwo } from "./../../../asserts/img/Images";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./../Cart/CartItems";
import { getOrderHistory } from "../../../state/Order/Action";

// const orderStatus = [
//   { lable: "On The Way", value: "on_the_way" },
//   { lable: "Delivered", value: "delivered" },
//   { lable: "Cancelled", value: "cancelled" },
//   { lable: "Returned", value: "returned" },
// ];

const Order = () => {
  const dispatch = useDispatch();
  // const order = useSelector((store) => store.products);
   const order = useSelector((store) => store.order);
  console.log("orders----", order);

  useEffect(() => {
    dispatch(getOrderHistory());
  }, [dispatch]);
  return (
    <div className="px:5 lg:px-20">
      <Grid container sx={{ justifyContent: "space-between" }}>
        {/* Removed filter section */}

        <Grid item xs={9}>
          <Box className="space-y-5 ">
            {order.order?.length > 0 &&
              order.order?.map((order) => {
                return order.orderItems?.map((item, index) => (
                  <OrderCard key={item._id} item={item} order={order} />
                ));
              })}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;
