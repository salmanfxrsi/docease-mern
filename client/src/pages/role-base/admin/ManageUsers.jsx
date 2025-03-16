import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../components/Loader";
import toast from "react-hot-toast";
import { Link } from "react-router";
import NoAccessBadge from "../../../components/NoAccessBadge";
import Avatar from "../../../components/Avatar";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const {
    isLoading,
    data: users = [],
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const { data } = await axiosSecure.get("/users");
        return data.data;
      } catch (error) {
        toast.error("Failed to fetch users.");
        return [];
      }
    },
  });

  if (isLoading) return <Loader />;

  const handleRoleChange = async (id, role) => {
    try {
      await axiosSecure.patch(`/users/role/${id}`, { role });
      toast.success("Role Updated");
      refetch();
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update role.");
    }
  };

  const confirmRoleChange = (id, role) => {
    toast((t) => (
      <div className="flex gap-4 items-center justify-center">
        <p className="font-semibold">Are You Sure?</p>
        <button
          className="bg-red-500 rounded-md text-sm font-medium text-white py-1 px-3"
          onClick={() => {
            toast.dismiss(t.id);
            handleRoleChange(id, role);
          }}
        >
          Sure
        </button>
        <button
          className="bg-teal-600 rounded-md text-sm font-medium text-white py-1 px-3"
          onClick={() => toast.dismiss(t.id)}
        >
          Cancel
        </button>
      </div>
    ));
  };

  return (
    <div className="overflow-x-auto py-24 mx-auto container">
      {users.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table">
            <thead className="bg-teal-600">
              <tr className="text-white font-semibold">
                <th></th>
                <th>User Photo</th>
                <th>User Name</th>
                <th>User Id</th>
                <th>Current Role</th>
                <th>Change Role</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ _id, image, name, email, role }) => (
                <tr key={_id}>
                  <td></td>
                  <td>
                    <Avatar
                      image={
                        image ||
                        "https://i.ibb.co.com/JjMjKfWZ/hand-drawn-doctor-cartoon-illustration-23-2150696182.jpg"
                      }
                      name={name}
                    />
                  </td>
                  <td className="font-bold">{name}</td>
                  <td className="font-bold">{email}</td>
                  <td className="font-bold">
                    {role?.charAt(0).toUpperCase() + role?.slice(1)}
                  </td>
                  <th>
                    {role === "admin" ? (
                      <NoAccessBadge />
                    ) : (
                      <select
                        className="w-full p-2.5 border border-gray-300 rounded-md"
                        value={role}
                        onChange={(e) => confirmRoleChange(_id, e.target.value)}
                      >
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                        <option value="admin">Admin</option>
                      </select>
                    )}
                  </th>
                  <th>
                    <Link
                      className="bg-teal-600 text-white px-5 py-1 rounded-sm"
                      to={`/doctors/${_id}`}
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
          No User Found
        </h1>
      )}
    </div>
  );
};

export default ManageUsers;
