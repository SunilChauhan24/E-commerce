import React from "react";
// import Header from './component/header/Header'
// import RoutesWork from './RoutesWork'
import Home from "./component/header/Home";
import { Route, Routes } from "react-router-dom";
import CoustemerRoutes from "./Routers/CoustemerRoutes";
import AdminRouters from "./Routers/AdminRouters";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<CoustemerRoutes />}></Route>
        <Route path="/admin/*" element={<AdminRouters />}></Route>
      </Routes>

      <Home />
      {/* <RoutesWork /> */}
    </div>
  );
};

export default App;
