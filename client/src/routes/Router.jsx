import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
    </Routes>
  );
};

export default Router;
