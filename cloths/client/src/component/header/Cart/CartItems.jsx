import { Button, IconButton } from "@mui/material";
import React from "react";
import { IoRemoveCircleOutline, IoAddCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../state/Cart/Action";

const CartItems = ({ item }) => {
  // const { products } = useSelector((store) => store || {});
  const dispatch = useDispatch();
  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: item?.quantity + num },
      cartItemId: item?._id,
    };
    dispatch(updateCartItem(data));
  };

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem(item._id));
  };
  return (
    <div className="p-5 shadow-lg border rounded-lg">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product?.imageUrl}
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1 ">
          <p className="font-semibold">{item.product?.title}</p>
          <p className="opacity-70">Size: {item.product?.size},Grey White</p>
          <p className="opacity-70 mt-2">Seller: {item.products?.brand}</p>

          <div className="flex space-x-5 items-center text-gray-900 pt-6">
            <p className="font-semibold">₹{item.product?.price}</p>
            <p className="opacity-50 line-through">
              ₹{item.product?.discountedPrice}
            </p>
            <p className="text-green-600 font-semibold">
              {item.product?.discountPersent}% Off
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="items-center flex space-x-2">
          <IconButton
            onClick={() => handleUpdateCartItem(-1)}
            disabled={item?.quantity <= 1}
          >
            <IoRemoveCircleOutline />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">{item?.quantity}</span>
          <IconButton
            onClick={() => handleUpdateCartItem(1)}
            sx={{ color: "RGB(156 39 176)" }}
          >
            <IoAddCircleOutline />
          </IconButton>
        </div>

        <div>
          <Button
            onClick={handleRemoveCartItem}
            sx={{ color: "RGB(156 39 176)" }}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
