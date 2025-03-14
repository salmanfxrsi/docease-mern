import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useUser = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const userEmail = user?.email;

  const { isLoading, data } = useQuery({
    queryKey: ["role", userEmail],
    queryFn: async () => {
      if (!userEmail) return null;
      const response = await axiosSecure.get(`/users/${userEmail}`);
      return response.data.user;
    },
    enabled: !!userEmail,
  });

  return [isLoading, data];
};

export default useUser;
