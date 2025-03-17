import React from "react";
import { useQuery } from "@tanstack/react-query";
import useUser from "../../../hooks/useUser";
import Avatar from "../../../components/Avatar";
import { Link } from "react-router";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../components/Loader";

const ManageAppointmentsDoctor = () => {
  const axiosSecure = useAxiosSecure();
  const [, data] = useUser();

  // Fetch appointment history of the logged-in patient id
  const {
    isLoading,
    isFetching,
    data: appointments = [],
    refetch,
  } = useQuery({
    queryKey: ["appointments", data?.email],
    enabled: !!data?.email,
    queryFn: async () => {
      const { data: appointmentData } = await axiosSecure.get(
        `/appointments?doctorEmail=${data?.email}&&status=pending`
      );
      return appointmentData;
    },
  });

  console.log(appointments);

  const handleStatusChange = async (id, status) => {
    try {
      await axiosSecure.patch(
        `/appointments/status/${id}?status=${status}`
      );
      toast.success(`Appointment ${status}`);
      refetch();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update role.");
    }
  };

  const confirmStatusChange = (id, status) => {
    toast((t) => (
      <div className="flex gap-4 items-center justify-center">
        <p className="font-semibold">Are You Sure?</p>
        <button
          className="bg-red-500 rounded-md w-full text-sm font-medium text-white capitalize transition duration-300 transform lg:w-auto hover:bg-gray-500 py-1 px-3"
          onClick={() => {
            toast.dismiss(t.id);
            handleStatusChange(id, status);
          }}
        >
          Sure
        </button>
        <button
          className="bg-teal-600 rounded-md w-full text-sm font-medium text-white capitalize transition duration-300 transform lg:w-auto hover:bg-gray-500 py-1 px-3"
          onClick={() => toast.dismiss(t.id)}
        >
          Cancel
        </button>
      </div>
    ));
  };

  if(isLoading, isFetching) return <Loader />

  return (
    <div className="overflow-x-auto py-24 mx-auto container">
      {appointments.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* Table Header */}
            <thead className="bg-teal-600">
              <tr className="text-white font-semibold">
                <th>#</th>
                <th></th>
                <th>Patient Name</th>
                <th>Email</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr key={appointment._id}>
                  <td className="font-bold">{index + 1}</td>
                  <td>
                    <Avatar
                      image={
                        appointment.patientImage ||
                        "https://i.ibb.co.com/JjMjKfWZ/hand-drawn-doctor-cartoon-illustration-23-2150696182.jpg"
                      }
                      name={appointment.patientName}
                    />
                  </td>
                  <td className="font-bold">{appointment.patientName}</td>
                  <td className="font-bold">{appointment.patientEmail}</td>
                  <th>
                    <div className="mt-2 flex gap-4">
                      <button
                        onClick={() =>
                          confirmStatusChange(appointment._id, "accepted")
                        }
                        className="bg-teal-600 px-4 rounded-lg text-white uppercase cursor-pointer"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() =>
                          confirmStatusChange(appointment._id, "rejected")
                        }
                        className="bg-red-600 px-4 rounded-lg text-white uppercase cursor-pointer"
                      >
                        Reject
                      </button>
                    </div>
                  </th>
                  <td>
                    <Link
                      to={`/doctors/${appointment.doctorId}`}
                      className="bg-teal-600 uppercase text-white px-6 py-1 rounded-lg font-medium"
                    >
                      Patient Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-2xl text-center font-medium uppercase pt-24">
          No Booking Found
        </h1>
      )}
    </div>
  );
};

export default ManageAppointmentsDoctor;
