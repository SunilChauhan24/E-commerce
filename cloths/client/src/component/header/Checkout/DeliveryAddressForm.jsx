import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../state/Order/Action";
import { useNavigate } from "react-router-dom";

const DeliveryAddressForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store || {});
  console.log("auth", auth.user);
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const address = {
      firstname: data.get("firstname"),
      lastname: data.get("lastname"),
      streetAddress: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipCode: data.get("zipCode"),
      mobile: data.get("PhoneNumber"),
    };

    const orderData = { address, navigate };
    dispatch(createOrder(orderData));

    console.log("address----", orderData);
  };

  return (
    <div className="">
      <Grid container spacing={5}>
        <Grid
          xs={12}
          lg={5}
          className="border rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll"
        >
          <div className="p-5 py-7 border-b cursor-pointer">
            {auth.user?.addresses.map((item) => 
              <AddressCard address={item} />
            )}
            <Button
              sx={{ mt: 2, bgcolor: "RGB(145 85 253)" }}
              size="large"
              variant="contained"
            >
              Deliver Here
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} lg={7}>
          <Box className="border rounded-s-md shadow-md p-5">
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="firstname"
                    name="firstname"
                    label="firstname"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="lastname"
                    name="lastname"
                    label="lastname"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    id="address"
                    name="address"
                    label="Address"
                    fullWidth
                    autoComplete="given-name"
                    multiline
                    rows={4}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    id="state"
                    name="state"
                    label="State\Province/Region"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    id="zipCode"
                    name="zipCode"
                    label="zipCode / Postal Code"
                    fullWidth
                    autoComplete="Shiping Postal Code"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    id="PhoneNumber"
                    name="PhoneNumber"
                    label="PhoneNumber"
                    fullWidth
                    autoComplete="given-name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    sx={{ py: 1.5, mt: 2, bgcolor: "RGB(145 85 253)" }}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Deliver Here
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default DeliveryAddressForm;
