import { Link } from "react-router";

const Doctor = ({ doctor }) => {
  const { _id, name, image, availability, specialty, location, time } = doctor;

  return (
    <Link
      to={`/doctor/${_id}`}
      className="flex flex-row items-stretch gap-4 shadow-sm py-4 rounded-lg hover:shadow-xl duration-300"
    >
      {/* Doctor Image */}
      <img
        src={
          image ||
          "https://i.ibb.co.com/JjMjKfWZ/hand-drawn-doctor-cartoon-illustration-23-2150696182.jpg"
        }
        alt={`${name}'s profile`}
        className="aspect-square w-20 rounded-lg object-cover"
      />

      {/* Doctor Info */}
      <div>
        {/* Name & Availability */}
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-medium text-gray-900">{name}</h3>

          {/* Availability Badge */}
          <div
            className={`inline-flex items-center justify-center rounded-full border px-2.5 py-0.5 ${
              availability === "Available"
                ? "text-teal-700 border-teal-500"
                : "text-red-500 border-red-500"
            }`}
          >
            <p className="whitespace-nowrap text-sm">{availability}</p>
          </div>

          {/* Specialty Badge */}
          <div className="inline-flex items-center justify-center rounded-full border border-amber-500 px-2.5 py-0.5 text-amber-700">
            <p className="whitespace-nowrap text-sm">{specialty}</p>
          </div>
        </div>

        {/* Location & Time */}
        <div className="mt-2 text-gray-700 text-sm">
          <p>
            <span className="font-medium">Location:</span> {location}
          </p>
          <p>
            <span className="font-medium">Time:</span> {time}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Doctor;
