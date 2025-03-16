// react icons
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useUser from "../../hooks/useUser";
import Loader from "../Loader";

const RegisterDoctorModal = ({ isModalOpen, setIsModalOpen }) => {
  const { user } = useAuth();
  const [, data] = useUser();
  const axiosPublic = useAxiosPublic();
  const [specialty, setSpecialty] = useState("Cardiologist");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const userId = data._id;
    const name = user.displayName;
    const availability = "Available";
    const status = "pending";
    const experience = form.experience.value;
    const rating = 5.0;
    const image = form.image.value;
    const time = form.time.value;
    const location = form.location.value;
    const contact = form.contact.value;
    const email = user.email;

    if (contact.length !== 11) return toast.error("Your Number Is Wrong");

    const doctorInfo = {
      userId,
      name,
      specialty,
      availability,
      status,
      experience,
      rating,
      image,
      time,
      location,
      contact,
      email,
    };

    try {
      const { data } = await axiosPublic.post("/doctors", doctorInfo);
      toast.success(data.message);
      e.target.reset();
      setIsModalOpen(false);
    } catch (error) {
      toast.error(error.message);
    }
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
    <div
      className={`${
        isModalOpen ? " visible" : " invisible"
      } w-full h-screen fixed top-0 left-0 z-[200000000] bg-[#0000002a] transition-all duration-300 flex items-center justify-center`}
    >
      <div
        className={`${
          isModalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
        } w-[90%] sm:w-[80%] md:w-[35%] bg-[#fff] rounded-lg transition-all duration-300 mx-auto mt-8`}
      >
        <div className="w-full flex items-end p-4 justify-between border-b border-[#d1d1d1]">
          <h1 className="text-[1.5rem] font-bold uppercase">
            Register as a Doctor
          </h1>
          <RxCross1
            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-4">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="location"
                className="text-[1rem] font-[500] text-[#464646]"
              >
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full mt-1"
                required
              />
            </div>

            <div>
              <label
                htmlFor="time"
                className="text-[1rem] font-[500] text-[#464646]"
              >
                Time
              </label>
              <input
                type="text"
                name="time"
                id="time"
                className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full mt-1"
                required
              />
            </div>

            <div>
              <label
                htmlFor="image"
                className="text-[1rem] font-[500] text-[#464646]"
              >
                Image
              </label>
              <input
                type="url"
                name="image"
                id="image"
                className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full mt-1"
                required
              />
            </div>

            <div>
              <label
                htmlFor="contact"
                className="text-[1rem] font-[500] text-[#464646]"
              >
                Contact
              </label>
              <input
                type="number"
                name="contact"
                id="contact"
                className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full mt-1"
                required
              />
            </div>

            <div>
              <label
                htmlFor="experience"
                className="text-[1rem] font-[500] text-[#464646]"
              >
                Experience
              </label>
              <input
                type="text"
                name="experience"
                id="experience"
                className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full mt-1"
                required
              />
            </div>

            <div>
              <label
                htmlFor="Specialty"
                className="text-[1rem] font-[500] text-[#464646]"
              >
                Specialty
              </label>
              <select
                className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full mt-1"
                onChange={(e) => setSpecialty(e.target.value)}
                value={specialty}
              >
                {specialties.map((specialty, index) => (
                  <option key={index} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="py-2 px-4 w-full bg-teal-600 text-[#fff] rounded-md uppercase font-medium cursor-pointer"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterDoctorModal;
