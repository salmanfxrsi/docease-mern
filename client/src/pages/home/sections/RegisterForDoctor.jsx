import { useState } from "react";
import { Link } from "react-router";
import RegisterDoctorModal from "../../../components/modals/RegisterDoctorModal";

const RegisterForDoctor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 rounded-md">
      <img
        alt="doctors image"
        src="https://i.ibb.co.com/B5NqpMCG/portrait-smiling-young-doctors-standing-together-portrait-medical-staff-inside-modern-hospital-smili.jpg"
        className="w-full h-full rounded-t-md lg:rounded-l-md"
      />

      <div className="bg-teal-600 lg:rounded-r-md p-5 lg:p-12">
        <p className="text-white text-lg">
          Registering as a doctor on DocEase provides numerous benefits,
          including enhanced visibility among patients, efficient schedule
          management, and direct control over appointment approvals. Doctors can
          set their availability, receive real-time notifications for new
          appointments or cancellations, and access patient details to ensure
          better care. Additionally, they can build credibility through patient
          ratings and reviews, attracting more consultations. The registration
          process is simple: sign up with an email, complete the profile with
          specialty and availability details, undergo admin verification for
          credibility, and start managing appointments seamlessly. By joining
          DocEase, doctors can streamline their practice, improve patient
          engagement, and enhance their professional reach.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="block w-full rounded-sm bg-white px-12 py-3 text-lg text-center font-bold text-teal-600 hover:opacity-80 duration-500 shadow-sm hover:text-teal-600 focus:ring-3 focus:outline-hidden sm:w-auto mt-10 uppercase cursor-pointer"
        >
          Register As A Doctor Now
        </button>
      </div>
      <RegisterDoctorModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
};

export default RegisterForDoctor;
