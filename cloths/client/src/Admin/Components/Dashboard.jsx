import { Grid } from "@mui/material";
import React from "react";
import Achivements from "./Achivements";
import MonthlyOverview from "./MonthlyOverview";
import OrdersTable from "../View/OrderTableView";
import ProductsTable from "./ProductsTable";
import ProductTableView from "../View/ProductTableView";

const AdminDashboard = () => {
  return (
    <div className="p-10  bg-gray-100">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <div className="shadow-lg shadow-gray-900">
            <Achivements />
          </div>
        </Grid>
        <Grid item xs={12} md={8}>
          <div className="shadow-lg shadow-gray-900">
            {" "}
            <MonthlyOverview />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-900">
            <OrdersTable />
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <div className="shadow-lg shadow-gray-900">
            <ProductTableView />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminDashboard;
