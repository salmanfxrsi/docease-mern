import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useUser from "../../../hooks/useUser";
import Loader from "../../../components/Loader";
import Avatar from "../../../components/Avatar";
import PatientReportModal from "../../../components/modals/PatientReportModal";
import { useState } from "react";
import { Link } from "react-router";

const AppointmentHistoryPatient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const axiosPublic = useAxiosPublic();
  const [, data] = useUser();

  // Fetch appointment history of the logged-in patient
  const { isLoading, data: appointmentData = [] } = useQuery({
    queryKey: ["appointmentHistoryPatient", data?._id], 
    enabled: !!data?._id,
    queryFn: async () => {
      const { data: appointmentData } = await axiosPublic.get(
        `/appointments?isCompleted=true&&patientId=${data._id}`
      );
      return appointmentData;
    },
  });

  if (isLoading) return <Loader />;

  return (
    <div className="overflow-x-auto py-24 mx-auto container">
      {appointmentData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            {/* Table Header */}
            <thead className="bg-teal-600">
              <tr className="text-white font-semibold">
                <th>#</th>
                <th></th>
                <th>Doctor Name</th>
                <th>doctorSpecialty</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {appointmentData.map((appointment, index) => (
                <tr key={appointment.doctorId}>
                  <td className="font-bold">{index + 1}</td>
                  <td>
                    <Avatar
                      image={
                        appointment.doctorImage ||
                        "https://i.ibb.co.com/JjMjKfWZ/hand-drawn-doctor-cartoon-illustration-23-2150696182.jpg"
                      }
                      name={appointment.doctorName}
                    />
                  </td>
                  <td className="font-bold">{appointment.doctorName}</td>
                  <td className="font-bold">{appointment.doctorSpecialty}</td>
                  <td>
                    <Link to={`/doctors/${appointment.doctorId}`}
                    className="bg-teal-600 uppercase text-white px-6 py-1 rounded-lg font-medium"
                    >
                      Doctor Details
                    </Link>
                  </td>
                  <td>
                    <button
                      className="bg-teal-600 uppercase text-white px-6 py-1 rounded-lg font-medium cursor-pointer"
                      onClick={() => {
                        setSelectedAppointment(appointment); 
                        setIsModalOpen(true); 
                      }}
                    >
                      See Report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-2xl text-center font-medium uppercase pt-24">
          No Appointments Found
        </h1>
      )}

      {/* Report Modal */}
      {selectedAppointment && (
        <PatientReportModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          appointmentData={selectedAppointment}
        />
      )}
    </div>
  );
};

export default AppointmentHistoryPatient;
