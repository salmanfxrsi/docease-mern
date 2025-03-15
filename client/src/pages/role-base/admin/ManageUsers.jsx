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
    data: users,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data.data;
    },
  });

  if (isLoading) return <Loader />;

  // Handle role change
  const handleRoleChange = async (id, role) => {
    try {
      await axiosSecure.patch(`/users/role/${id}`, { role: role });
      toast.success("Role Updated");
      refetch();
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Change role confirmation
  const changeRoleConfirmation = (id, role) => {
    toast((t) => (
      <div className="flex gap-4 items-center justify-center">
        <p className="font-semibold">Are You Sure?</p>
        <button
          className="bg-red-500 rounded-md w-full text-sm font-medium text-white capitalize transition-colors duration-300 transform lg:w-auto hover:bg-gray-500 text-center py-1 px-3"
          onClick={() => {
            toast.dismiss(t.id);
            handleRoleChange(id, role);
          }}
        >
          Sure
        </button>
        <button
          className="bg-teal-600 rounded-md w-full text-sm font-medium text-white capitalize transition-colors duration-300 transform lg:w-auto hover:bg-gray-500 text-center py-1 px-3"
          onClick={() => toast.dismiss(t.id)}
        >
          Cancel
        </button>
      </div>
    ));
  };

  return (
    <div className="overflow-x-auto py-24 mx-auto container">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table">
          {/* Head */}
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
            {users.map((user) => (
              <tr key={user._id}>
                <td></td>
                <td>
                  <div className="flex items-center gap-3">
                    <Avatar
                      image={
                        user?.image ||
                        "https://i.ibb.co.com/JjMjKfWZ/hand-drawn-doctor-cartoon-illustration-23-2150696182.jpg"
                      }
                      name={user?.name}
                    />
                  </div>
                </td>
                <td>
                  <h1 className="font-bold">{user?.name}</h1>
                </td>
                <td>
                  <h1 className="font-bold">{user?.email}</h1>
                </td>
                <td>
                  <h1 className="font-bold">
                    {user?.role
                      ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
                      : ""}
                  </h1>
                </td>
                {/* User Role Change Button */}
                <th>
                  {user.role === "admin" ? (
                    <NoAccessBadge />
                  ) : (
                    <div className="mt-2">
                      <select
                        id="role"
                        name="role"
                        value={user?.role}
                        onChange={(e) =>
                          changeRoleConfirmation(user._id, e.target.value)
                        }
                        className="w-full p-2.5 border border-gray-300 rounded-md"
                      >
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  )}
                </th>
                {/* View Details Button */}
                <th>
                  <Link
                    className="bg-teal-600 text-white px-5 py-1 rounded-sm cursor-pointer"
                    to={`/doctors/${user?._id}`}
                  >
                    Details
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
