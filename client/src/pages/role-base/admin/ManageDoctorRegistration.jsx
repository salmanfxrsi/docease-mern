import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageDoctorRegistration = () => {
  const axiosSecure = useAxiosSecure();

  const { data: doctors } = useQuery({
    queryKey: ["pendingDoctors"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/doctors/pending");
      return data;
    },
  });

  return <div>Hello</div>;
};

export default ManageDoctorRegistration;
