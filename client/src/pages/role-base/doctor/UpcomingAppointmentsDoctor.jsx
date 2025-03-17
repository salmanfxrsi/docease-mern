import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useUser from "../../../hooks/useUser";
import Avatar from "../../../components/Avatar";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../components/Loader";
import DoctorInstructionModal from "../../../components/modals/DoctorInstructionModal";

const UpcomingAppointmentsDoctor = () => {
  const axiosSecure = useAxiosSecure();
  const [, data] = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch appointment history of the logged-in doctor email
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
        `/appointments?doctorEmail=${data?.email}&&status=accepted&&isCompleted=false`
      );
      return appointmentData;
    },
  });

  console.log(appointments);

  if ((isLoading, isFetching)) return <Loader />;

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
                    <div className="mt-2">
                      <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-teal-600 px-4 rounded-lg text-white uppercase cursor-pointer"
                      >
                        Mark as Complete
                      </button>
                      {/* Doctor Instruction Modal */}
                      <DoctorInstructionModal
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                        appointment={appointment}
                        refetch={refetch}
                      />
                    </div>
                  </th>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-2xl text-center font-medium uppercase pt-24">
          No Upcoming Appointment Found
        </h1>
      )}
    </div>
  );
};

export default UpcomingAppointmentsDoctor;
