import { RxCross1 } from "react-icons/rx";

const PatientReportModal = ({
  isModalOpen,
  setIsModalOpen,
  appointmentData,
}) => {
  const {
    patientName,
    medicine,
    instruction,
    doctorName,
    doctorContact,
    doctorId,
    appointmentDate,
    isCompleted,
    patientEmail,
    patientId,
  } = appointmentData;

  return (
    <div
      className={`${
        isModalOpen ? " visible" : " invisible"
      } w-full h-screen fixed top-0 left-0 z-[200000000] bg-[#0000002a] flex items-center justify-center transition-all duration-300`}
    >
      <div
        className={`${
          isModalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
        } w-[90%] sm:w-[80%] md:w-[30%] bg-[#fff] rounded-lg p-4 transition-all duration-300`}
      >
        <div className="w-full flex items-end justify-end">
          <RxCross1
            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          />
        </div>

        {/* Doctor Details Section */}
        <div className="text-center border-b pb-4">
          <h3 className="text-xl font-bold text-teal-600 mb-2">
            Doctor Details
          </h3>
          <p className="text-gray-700">
            <strong className="text-gray-900">Name:</strong> {doctorName}
          </p>
          <p className="text-gray-700">
            <strong className="text-gray-900">Contact:</strong> {doctorContact}
          </p>
          <p className="text-gray-700">
            <strong className="text-gray-900">Doctor ID:</strong> {doctorId}
          </p>
        </div>

        {/* Patient Details Section */}
        <div className="text-center mt-4">
          <div className="mt-4 border-b pb-3">
            <h3 className="text-xl font-bold text-teal-600 mb-2">
              Patient Details
            </h3>
            <p>
              <strong>Name:</strong> {patientName}
            </p>
            <p>
              <strong>Email:</strong> {patientEmail}
            </p>
            <p>
              <strong>Patient ID:</strong> {patientId}
            </p>
          </div>

          {/* Appointment Details */}
          <div className="mt-4">
            <h3 className="text-xl font-bold text-teal-600 mb-2">
              Appointment Details
            </h3>
            <p>
              <strong>Date:</strong> {appointmentDate || "N/A"}
            </p>
            <p
              className={`font-semibold ${
                isCompleted ? "text-green-600" : "text-red-600"
              }`}
            >
              <strong>Status:</strong> {isCompleted ? "Completed" : "Pending"}
            </p>
            <p>
              <strong>Medicine:</strong> {medicine || "No medicine prescribed"}
            </p>
            <p>
              <strong>Instruction:</strong>{" "}
              {instruction || "No instructions given"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientReportModal;
