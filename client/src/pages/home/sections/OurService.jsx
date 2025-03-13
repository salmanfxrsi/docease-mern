import ServiceCard from "../../../components/ServiceCard";

const services = [
  {
    image:
      "https://i.ibb.co.com/KcBxPpqC/doctor-examining-patient-clinic-illustrated-23-2148856559.jpg",
    title: "Appointment Booking",
    description:
      "Patients can effortlessly book appointments with their preferred doctors based on availability, specialty, and location. The platform ensures a seamless scheduling experience, allowing users to view available slots, reschedule if necessary, and receive instant confirmations.",
  },
  {
    image:
      "https://i.ibb.co.com/fYGxcC6t/thanks-doctors-nurses-physician-nurses-staff-profession-occupation-medical-24640-62408.jpg",
    title: "Doctor Management",
    description:
      "Doctors have complete control over their schedules, enabling them to set availability, approve or reject appointments, and access patient details. This feature enhances efficiency, reducing manual scheduling efforts and ensuring optimal patient management.",
  },
  {
    image:
      "https://i.ibb.co.com/Ng2g9sXN/illustrated-woman-being-intern-company-23-2148726151.jpg",
    title: "Admin Oversight",
    description:
      "The admin panel provides comprehensive system monitoring, allowing administrators to manage users, approve doctor registrations, and oversee appointment analytics. This ensures a well-regulated platform, maintaining service quality and operational transparency.",
  },
];

const OurService = () => {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </div>
  );
};

export default OurService;
