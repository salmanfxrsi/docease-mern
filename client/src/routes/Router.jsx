import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/authentication/Register";
import Login from "../pages/authentication/Login";
import Doctors from "../pages/doctors/Doctors";
import DoctorDetails from "../pages/doctor details/DoctorDetails";
import PrivateRoutes from "./PrivateRoutes";
import ManageUsers from "../pages/role-base/admin/ManageUsers";
import ManageDoctorRegistration from "../pages/role-base/admin/ManageDoctorRegistration";
import AppointmentHistoryPatient from "../pages/role-base/patient/AppointmentHistoryPatient";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />

        {/* Common Routes */}
        <Route path="doctors" element={<Doctors />} />
        <Route
          path="doctors/:id"
          element={
            <PrivateRoutes>
              <DoctorDetails />
            </PrivateRoutes>
          }
        />

        {/* Patient Routes */}
        <Route path="appointment-history" element={<AppointmentHistoryPatient />} />

        {/* Admin Routes */}
        <Route path="manage-users" element={<ManageUsers />} />
        <Route path="manage-doctor-registration" element={<ManageDoctorRegistration />} />

        {/* Auth Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Router;
