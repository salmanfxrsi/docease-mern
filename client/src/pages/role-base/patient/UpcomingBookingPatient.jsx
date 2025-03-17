import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useUser from "../../../hooks/useUser";
import Loader from "../../../components/Loader";
import Avatar from "../../../components/Avatar";
import { Link } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const UpcomingBookingPatient = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [, data] = useUser();

  // Fetch appointment history of the logged-in patient id
  const {
    isLoading,
    isFetching,
    data: appointmentData = [],
    refetch,
  } = useQuery({
    queryKey: ["appointmentHistoryPatient", data?._id],
    enabled: !!data?._id,
    queryFn: async () => {
      const { data: appointmentData } = await axiosPublic.get(
        `/appointments?isCompleted=false&&patientId=${data._id}&&status=accepted`
      );
      return appointmentData;
    },
  });

  if ((isLoading, isFetching)) return <Loader />;

  const handleCancelBooking = async (id) => {
    try {
      const response = await axiosSecure.delete(`/appointments/${id}`);
      toast.success(response.data.message);
      refetch();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An error occurred while canceling the booking.";
      toast.error(errorMessage);
    }
  };

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
                <th>Contact No</th>
                <th>Doctor Specialty</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {appointmentData.map((appointment, index) => (
                <tr key={appointment._id}>
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
                  <td className="font-bold">{appointment.doctorContact}</td>
                  <td className="font-bold">{appointment.doctorSpecialty}</td>
                  <td>
                    <button className="bg-teal-600 uppercase text-white px-6 py-1 rounded-lg font-medium cursor-pointer">
                      Reschedule
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleCancelBooking(appointment._id)}
                      className="bg-red-600 uppercase text-white px-6 py-1 rounded-lg font-medium cursor-pointer"
                    >
                      Cancel Booking
                    </button>
                  </td>
                  <td>
                    <Link
                      to={`/doctors/${appointment.doctorId}`}
                      className="bg-teal-600 uppercase text-white px-6 py-1 rounded-lg font-medium"
                    >
                      Doctor Details
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

export default UpcomingBookingPatient;
