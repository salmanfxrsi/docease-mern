import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import Loader from "../components/Loader";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <Loader></Loader>;

  if (user) return children;

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoutes;
