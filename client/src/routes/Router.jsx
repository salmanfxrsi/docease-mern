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
import UpcomingBookingPatient from "../pages/role-base/patient/UpcomingBookingPatient";
import ManageAppointmentsDoctor from "../pages/role-base/doctor/ManageAppointmentsDoctor";
import UpcomingAppointmentsDoctor from "../pages/role-base/doctor/UpcomingAppointmentsDoctor";
import DoctorRoutes from "./DoctorRoutes";
import AdminRoutes from "./AdminRoutes";
import PatientRoutes from "./PatientRoutes";

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
        <Route
          path="appointment-history"
          element={
            <PrivateRoutes>
              <PatientRoutes>
                <AppointmentHistoryPatient />
              </PatientRoutes>
            </PrivateRoutes>
          }
        />
        <Route
          path="upcoming-booking"
          element={
            <PrivateRoutes>
              <PatientRoutes>
                <UpcomingBookingPatient />
              </PatientRoutes>
            </PrivateRoutes>
          }
        />

        {/* Doctor Routes */}
        <Route
          path="manage-appointments-doctor"
          element={
            <PrivateRoutes>
              <DoctorRoutes>
                <ManageAppointmentsDoctor />
              </DoctorRoutes>
            </PrivateRoutes>
          }
        />
        <Route
          path="upcoming-appointments-doctor"
          element={
            <PrivateRoutes>
              <DoctorRoutes>
                <UpcomingAppointmentsDoctor />
              </DoctorRoutes>
            </PrivateRoutes>
          }
        />

        {/* Admin Routes */}
        <Route path="manage-users" element={<ManageUsers />} />
        <Route
          path="manage-doctor-registration"
          element={
            <PrivateRoutes>
              <AdminRoutes>
                <ManageDoctorRegistration />
              </AdminRoutes>
            </PrivateRoutes>
          }
        />

        {/* Auth Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default Router;
