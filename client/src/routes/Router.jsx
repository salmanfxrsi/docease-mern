import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/authentication/Register";
import Login from "../pages/authentication/Login";
import Doctors from "../pages/doctors/Doctors";
import DoctorDetails from "../pages/doctor details/DoctorDetails";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        {/* Common Routes */}
        <Route path="doctors" element={<Doctors />} />
        <Route path="doctors/:id" element={<DoctorDetails />} />

        {/* Auth Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Router;
