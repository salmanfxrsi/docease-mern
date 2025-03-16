import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Avatar from "../../../components/Avatar";
import { Link } from "react-router";
import toast from "react-hot-toast";

const ManageDoctorRegistration = () => {
  const axiosSecure = useAxiosSecure();

  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["pendingDoctors"],
    queryFn: async () => {
      try {
        const { data } = await axiosSecure.get("/doctors/pending");
        return data;
      } catch (error) {
        toast.error("Failed to fetch doctors.");
        return [];
      }
    },
  });

  const handleStatusChange = async (id, status, userId) => {
    try {
      await axiosSecure.patch(
        `/doctors/manage-request/${id}?status=${status}&&userId=${userId}`
      );
      toast.success("Satus Updated Updated");
      refetch();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update role.");
    }
  };

  const confirmStatusChange = (id, status, userId) => {
    toast((t) => (
      <div className="flex gap-4 items-center justify-center">
        <p className="font-semibold">Are You Sure?</p>
        <button
          className="bg-red-500 rounded-md w-full text-sm font-medium text-white capitalize transition duration-300 transform lg:w-auto hover:bg-gray-500 py-1 px-3"
          onClick={() => {
            toast.dismiss(t.id);
            handleStatusChange(id, status, userId);
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

  return (
    <div className="overflow-x-auto py-24 mx-auto container">
      {doctors.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-teal-600">
              <tr className="text-white font-semibold">
                <th></th>
                <th>User Photo</th>
                <th>User Name</th>
                <th>UserId</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {doctors.map(({ _id, image, name, location, userId }) => (
                <tr key={_id}>
                  <td></td>
                  <td>
                    <div className="flex items-center gap-3">
                      <Avatar
                        image={
                          image ||
                          "https://i.ibb.co.com/JjMjKfWZ/hand-drawn-doctor-cartoon-illustration-23-2150696182.jpg"
                        }
                        name={name}
                      />
                    </div>
                  </td>
                  <td>
                    <h1 className="font-bold">{name}</h1>
                    <div className="text-sm opacity-70">{location}</div>
                  </td>
                  <td>
                    <h1 className="font-bold">{userId}</h1>
                  </td>
                  <th>
                    <div className="mt-2 flex gap-4">
                      <button
                        onClick={() =>
                          confirmStatusChange(_id, "accepted", userId)
                        }
                        className="bg-teal-600 px-4 rounded-lg text-white uppercase cursor-pointer"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() =>
                          confirmStatusChange(_id, "rejected", userId)
                        }
                        className="bg-red-600 px-4 rounded-lg text-white uppercase cursor-pointer"
                      >
                        Reject
                      </button>
                    </div>
                  </th>
                  <th>
                    <Link
                      to={`/doctors/${_id}`}
                      className="bg-teal-600 px-4 rounded-lg text-white uppercase cursor-pointer"
                    >
                      Details
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-2xl text-center font-medium uppercase pt-24">
          No Request Pending
        </h1>
      )}
    </div>
  );
};

export default ManageDoctorRegistration;
