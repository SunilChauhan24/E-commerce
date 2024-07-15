import { Grid } from '@mui/material'
import React from 'react'
import { color } from './../Filterdata';
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';


const OrderCard = ({item,order}) => {

  const navigate=useNavigate();
  // console.log("items ", item);

  return (
    <div
      onClick={() => navigate(`/account/order/${order?._id}`)}
      className="mt-5 p-3 hover:shadow-2xl shadow-black shadow-md border"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[7rem] h-[7rem] object-cover object-top "
              src={item?.product.imageUrl}
              alt=""
            />

            <div className="ml-5 space-y-2">
              <p className="mb-2">{item.product?.title} </p>
              <p className="opacity-50 text-xs font-semibold ">
                Size:{item.size}
              </p>
              <p className="opacity-50 text-xs font-semibold ">
                color:{item.product?.color}
              </p>
            </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>₹{item.price}</p>
        </Grid>

        <Grid item xs={4}>
          {true && (
            <div>
              <p>
                <AdjustIcon
                  sx={{ width: "15px", height: "15px" }}
                  className="text-green-600 mr-2    
             text-sm"
                />
                <span>Delivered On June 15</span>

                <p className="text-xs">Your Item Has Been Delivered</p>
              </p>
            </div>
          )}
          {false && (
            <p>
              <span>Expected Delivery On June 15</span>
            </p>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderCard
