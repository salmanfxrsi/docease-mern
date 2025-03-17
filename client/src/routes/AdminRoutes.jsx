import { Navigate } from "react-router";
import Loader from "../components/Loader";
import useUser from "../hooks/useUser";

const AdminRoutes = ({ children }) => {
  const [isLoading, data] = useUser();

  if (isLoading) return <Loader></Loader>;

  console.log(data.role)
  if (data.role === "admin") return children;

  return <Navigate to="/"></Navigate>;
};

export default AdminRoutes;