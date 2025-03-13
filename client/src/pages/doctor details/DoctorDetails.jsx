import { useParams } from "react-router";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import DoctorDetailsCard from "./sections/DoctorDetailsCard";
import Loader from "../../components/Loader";

const DoctorDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  const { data: doctor, isLoading } = useQuery({
    queryKey: ["doctor", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/doctors/${id}`);
      return data;
    },
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-11/12 lg:container mx-auto py-24">
      {doctor && <DoctorDetailsCard doctor={doctor} />}
    </div>
  );
};

export default DoctorDetails;
