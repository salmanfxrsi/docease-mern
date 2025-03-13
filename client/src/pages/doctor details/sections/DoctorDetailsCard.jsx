import toast from "react-hot-toast";

const DoctorDetailsCard = ({ doctor }) => {
  const handleAppointments = () => toast.success("Appointment request sent");
  const handleNotAvailable = () => toast.error("Doctor is not available");

  return (
    <div className="relative block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
            {doctor?.name}
          </h3>
          <div className="badge">{doctor?.specialty}</div>
          <div className="badge">Rating: {doctor?.rating}</div>
        </div>
        <img
          alt="Doctor"
          src={
            doctor.image ||
            "https://i.ibb.co.com/JjMjKfWZ/hand-drawn-doctor-cartoon-illustration-23-2150696182.jpg"
          }
          className="hidden sm:block size-16 rounded-lg object-cover shadow-xs"
        />
      </div>

      <dl className="mt-4 flex flex-wrap gap-4 sm:gap-6">
        {[
          { label: "Location", value: doctor?.location },
          { label: "Time", value: doctor?.time },
          { label: "Contact", value: doctor?.contact },
          { label: "Email", value: doctor?.email },
        ].map((item, index) => (
          <div key={index} className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">{item.value}</dt>
            <dd className="text-xs text-gray-500">{item.label}</dd>
          </div>
        ))}
      </dl>

      <div className="mt-8">
        <button
          onClick={
            doctor?.availability?.toLowerCase() === "available"
              ? handleAppointments
              : handleNotAvailable
          }
          className={`px-5 py-1 text-white text-sm uppercase font-medium rounded-sm cursor-pointer ${
            doctor?.availability?.toLowerCase() === "available"
              ? "bg-teal-600"
              : "bg-red-600"
          }`}
        >
          {doctor?.availability?.toLowerCase() === "available"
            ? "Take Appointment"
            : "Not Available"}
        </button>
      </div>
    </div>
  );
};

export default DoctorDetailsCard;
