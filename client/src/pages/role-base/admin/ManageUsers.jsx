import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loader from "../../../components/Loader";
import toast from "react-hot-toast";
import { Link } from "react-router";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { isLoading, data: users, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/users");
      return data.data;
    },
  });

  const handleRoleChange = async (id, role) => {
    try {
      await axiosSecure.patch(`/users/role/${id}`, { role });
      toast.success("Role Updated");
      refetch();
    } catch (error) {
      toast.error("Failed to update role");
    }
  };

  const confirmRoleChange = (id, role) => {
    toast(
      (t) => (
        <div className="flex gap-4 items-center">
          <p className="font-semibold">Are you sure?</p>
          <ActionButton
            text="Sure"
            onClick={() => {
              toast.dismiss(t.id);
              handleRoleChange(id, role);
            }}
            className="bg-red-500 hover:bg-gray-500"
          />
          <ActionButton
            text="Cancel"
            onClick={() => toast.dismiss(t.id)}
            className="bg-teal-600 hover:bg-gray-500"
          />
        </div>
      ),
      { duration: 5000 }
    );
  };

  if (isLoading) return <Loader />;

  return (
    <div className="py-24 mx-auto container">
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-teal-600 text-white font-semibold">
            <tr>
              <th>#</th>
              <th>User Photo</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Current Role</th>
              <th>Change Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td className="font-bold">{index + 1}</td>
                <td>
                  <Avatar image={user?.image} name={user?.name} />
                </td>
                <td className="font-bold">{user?.name}</td>
                <td className="font-bold">{user?.email}</td>
                <td className="font-bold">
                  {user?.role
                    ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
                    : ""}
                </td>
                <td>
                  {user.role === "admin" ? (
                    <NoAccessBadge />
                  ) : (
                    <RoleSelect
                      currentRole={user.role}
                      onChange={(e) => confirmRoleChange(user._id, e.target.value)}
                    />
                  )}
                </td>
                <td>
                  <Link
                    className="bg-teal-600 text-white px-5 py-1 rounded-sm"
                    to={`/doctors/${user?._id}`}
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Avatar = ({ image, name }) => (
  <div className="avatar">
    <div className="mask mask-squircle h-12 w-12">
      <img src={image} alt={name} />
    </div>
  </div>
);

const NoAccessBadge = () => (
  <div className="bg-red-500 text-white text-xs font-black uppercase px-2 py-1 rounded-full w-[160px] flex justify-center">
    No Access
  </div>
);

const RoleSelect = ({ currentRole, onChange }) => (
  <select
    className="w-full p-2.5 border border-gray-300 rounded-md"
    value={currentRole}
    onChange={onChange}
  >
    <option value="patient">Patient</option>
    <option value="doctor">Doctor</option>
    <option value="admin">Admin</option>
  </select>
);

const ActionButton = ({ text, onClick, className }) => (
  <button
    className={`rounded-md w-full text-sm font-medium text-white capitalize transition-colors duration-300 transform lg:w-auto px-3 py-1 ${className}`}
    onClick={onClick}
  >
    {text}
  </button>
);

export default ManageUsers;

