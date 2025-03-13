import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Doctor from "../../components/Doctor";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Doctors = () => {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [availability, setAvailability] = useState("");
  const axiosPublic = useAxiosPublic();

  const { data: doctors = [] } = useQuery({
    queryKey: ["doctors", search, specialty, availability],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/doctors?search=${search}&&specialty=${specialty}&&availability=${availability}`
      );
      return data;
    },
  });

  // Reset all search and sort
  const handleReset = () => {
    setSearch("");
    setSpecialty("");
    setAvailability("");
  };

  const specialties = [
    "Cardiologist",
    "Dermatologist",
    "Neurologist",
    "Pediatrician",
    "Orthopedic Surgeon",
    "Ophthalmologist",
    "General Physician",
    "Psychiatrist",
    "Endocrinologist",
    "Gynecologist",
    "Oncologist",
    "Pulmonologist",
    "Urologist",
    "Dentist",
    "Nephrologist",
    "ENT Specialist",
    "Gastroenterologist",
    "Radiologist",
    "Hematologist",
    "Plastic Surgeon",
  ];

  return (
    <div className="w-11/12 mx-auto py-24">
      {/* Search and Sort Functionality */}
      <div className="mb-16 lg:flex justify-between items-center">
        {/* Search Bar */}
        <div className="flex items-center border-2 lg:w-[500px] rounded-lg p-1">
          <FaSearch className="text-gray-600 mx-3 text-xl" />
          <input
            type="text"
            placeholder="Search by Location"
            className="w-full py-2 outline-none text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Specialty Filter & Buttons */}
        <div className="flex gap-3 justify-center">
          {/* Specialty Dropdown */}
          <select
            className="bg-teal-600 text-white px-6 py-2 rounded-sm cursor-pointer"
            onChange={(e) => setSpecialty(e.target.value)}
            value={specialty}
          >
            <option value="">Category</option>
            {specialties.map((specialty, index) => (
              <option key={index} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>

          {/* Available Doctors Button */}
          <select
            className="bg-teal-600 text-white px-6 py-2 rounded-sm cursor-pointer"
            onChange={(e) => setAvailability(e.target.value)}
            value={availability}
          >
            <option value="">All Doctors</option>
            <option value="Available">Available Doctors</option>
            <option value="Unavailable">Unavailable Doctors</option>
          </select>

          {/* Reset Button */}
          <button
            onClick={handleReset}
            className="bg-teal-600 text-white px-8 rounded-sm cursor-pointer"
          >
            Reset
          </button>
        </div>
      </div>

      {/* All Doctors Showcase */}
      {doctors.length > 0 ? (
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-12">
          {doctors.map((doctor) => (
            <Doctor key={doctor._id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <h1 className="text-2xl font-medium text-center pt-12">
          No Doctor Found
        </h1>
      )}
    </div>
  );
};

export default Doctors;
