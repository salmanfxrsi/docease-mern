import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Doctor from "../../components/Doctor";

const Doctors = () => {
  const [search, setSearch] = useState("");
  const [specialty, setSpecialty] = useState("");

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

  const doctors = [
    {
      id: 1,
      name: "Dr. Ayaan Rahman",
      specialty: "Cardiologist",
      availability: true,
      experience: "12 years",
      rating: 4.8,
      image: "",
      time: "10:00 AM - 2:00 PM",
      location: "Apollo Hospital, Dhaka",
    },
    {
      id: 2,
      name: "Dr. Sofia Islam",
      specialty: "Dermatologist",
      availability: false,
      experience: "8 years",
      rating: 4.5,
      image: "",
      time: "3:00 PM - 7:00 PM",
      location: "Square Hospital, Dhaka",
    },
    {
      id: 3,
      name: "Dr. Rohan Ahmed",
      specialty: "Neurologist",
      availability: true,
      experience: "15 years",
      rating: 4.9,
      image: "",
      time: "4:00 PM - 8:00 PM",
      location: "Ibn Sina Hospital, Dhanmondi",
    },
    {
      id: 4,
      name: "Dr. Farah Karim",
      specialty: "Pediatrician",
      availability: false,
      experience: "10 years",
      rating: 4.6,
      image: "",
      time: "9:00 AM - 1:00 PM",
      location: "United Hospital, Dhaka",
    },
    {
      id: 5,
      name: "Dr. Zayed Chowdhury",
      specialty: "Orthopedic Surgeon",
      availability: true,
      experience: "14 years",
      rating: 4.7,
      image: "",
      time: "6:00 PM - 10:00 PM",
      location: "Popular Diagnostic Center, Uttara",
    },
    {
      id: 6,
      name: "Dr. Aisha Noor",
      specialty: "Ophthalmologist",
      availability: false,
      experience: "9 years",
      rating: 4.3,
      image: "",
      time: "2:00 PM - 6:00 PM",
      location: "Labaid Hospital, Banani",
    },
    {
      id: 7,
      name: "Dr. Adnan Hossain",
      specialty: "General Physician",
      availability: true,
      experience: "7 years",
      rating: 4.2,
      image: "",
      time: "9:00 AM - 12:00 PM",
      location: "Dhaka Medical College Hospital",
    },
    {
      id: 8,
      name: "Dr. Meherin Jahan",
      specialty: "Psychiatrist",
      availability: false,
      experience: "13 years",
      rating: 4.8,
      image: "",
      time: "5:00 PM - 9:00 PM",
      location: "Green Life Hospital, Dhaka",
    },
    {
      id: 9,
      name: "Dr. Imran Kabir",
      specialty: "Endocrinologist",
      availability: true,
      experience: "11 years",
      rating: 4.4,
      image: "",
      time: "2:00 PM - 6:00 PM",
      location: "BRB Hospital, Dhaka",
    },
    {
      id: 10,
      name: "Dr. Rehnuma Akter",
      specialty: "Gynecologist",
      availability: false,
      experience: "16 years",
      rating: 4.9,
      image: "",
      time: "11:00 AM - 3:00 PM",
      location: "Central Hospital, Dhaka",
    },
    {
      id: 11,
      name: "Dr. Tasnim Haque",
      specialty: "Oncologist",
      availability: true,
      experience: "18 years",
      rating: 5.0,
      image: "",
      time: "8:00 AM - 12:00 PM",
      location: "Bangabandhu Sheikh Mujib Medical University",
    },
    {
      id: 12,
      name: "Dr. Salman Hasan",
      specialty: "Pulmonologist",
      availability: false,
      experience: "10 years",
      rating: 4.3,
      image: "",
      time: "1:00 PM - 5:00 PM",
      location: "Ibn Sina Hospital, Uttara",
    },
    {
      id: 13,
      name: "Dr. Mahbub Alam",
      specialty: "Urologist",
      availability: true,
      experience: "12 years",
      rating: 4.7,
      image: "",
      time: "3:00 PM - 7:00 PM",
      location: "Labaid Hospital, Mirpur",
    },
    {
      id: 14,
      name: "Dr. Anika Sultana",
      specialty: "Dentist",
      availability: false,
      experience: "6 years",
      rating: 4.0,
      image: "",
      time: "10:00 AM - 2:00 PM",
      location: "City Dental Clinic, Dhanmondi",
    },
    {
      id: 15,
      name: "Dr. Jubayer Rahman",
      specialty: "Nephrologist",
      availability: true,
      experience: "14 years",
      rating: 4.6,
      image: "",
      time: "5:00 PM - 9:00 PM",
      location: "Square Hospital, Dhaka",
    },
    {
      id: 16,
      name: "Dr. Fahim Alam",
      specialty: "ENT Specialist",
      availability: false,
      experience: "9 years",
      rating: 4.1,
      image: "",
      time: "8:00 AM - 12:00 PM",
      location: "Popular Diagnostic Center, Banani",
    },
    {
      id: 17,
      name: "Dr. Nusrat Jahan",
      specialty: "Gastroenterologist",
      availability: true,
      experience: "11 years",
      rating: 4.5,
      image: "",
      time: "7:00 PM - 10:00 PM",
      location: "Ibn Sina Hospital, Dhanmondi",
    },
    {
      id: 18,
      name: "Dr. Rayhan Siddique",
      specialty: "Radiologist",
      availability: false,
      experience: "13 years",
      rating: 4.8,
      image: "",
      time: "9:00 AM - 1:00 PM",
      location: "BRB Hospital, Dhaka",
    },
    {
      id: 19,
      name: "Dr. Humaira Rahman",
      specialty: "Hematologist",
      availability: true,
      experience: "15 years",
      rating: 4.9,
      image: "",
      time: "2:00 PM - 6:00 PM",
      location: "Apollo Hospital, Dhaka",
    },
    {
      id: 20,
      name: "Dr. Sarfaraz Ahmed",
      specialty: "Plastic Surgeon",
      availability: false,
      experience: "20 years",
      rating: 5.0,
      image: "",
      time: "6:00 PM - 10:00 PM",
      location: "United Hospital, Dhaka",
    },
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
            placeholder="Search"
            className="w-full py-2 outline-none text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Specialty Filter & Buttons */}
        <div className="flex gap-3 justify-center mt-6">
          {/* Specialty Dropdown */}
          <select
            className="bg-teal-600 text-white px-6 py-2 rounded-sm"
            onChange={(e) => setSpecialty(e.target.value)}
          >
            {specialties.map((specialty, index) => (
              <option key={index} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>

          {/* Available Doctors Button */}
          <button
            onClick={() => setSearch("")}
            className="bg-teal-600 text-white px-8 rounded-sm"
          >
            Available Doctors
          </button>

          {/* Reset Button */}
          <button
            onClick={() => setSearch("")}
            className="bg-teal-600 text-white px-8 rounded-sm"
          >
            Reset
          </button>
        </div>
      </div>

      {/* All Doctors Showcase */}
      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-12">
        {doctors.map((doctor) => (
          <Doctor key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
};

export default Doctors;
