import { Navigate } from "react-router";
import Loader from "../components/Loader";
import useUser from "../hooks/useUser";

const DoctorRoutes = ({ children }) => {
  const [isLoading, data] = useUser();

  if (isLoading) return <Loader></Loader>;

  console.log(data.role)
  if (data.role === "doctor") return children;

  return <Navigate to="/"></Navigate>;
};

export default DoctorRoutes;