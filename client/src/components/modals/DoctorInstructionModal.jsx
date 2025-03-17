// react icons
import { RxCross1 } from "react-icons/rx";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import toast from "react-hot-toast";

const DoctorInstructionModal = ({
  isModalOpen,
  setIsModalOpen,
  appointment,
  refetch,
}) => {
  const axiosPublic = useAxiosPublic();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const medicine = form.medicine.value;
    const instruction = form.instruction.value;
    const data = { medicine, instruction };

    try {
      const response = await axiosPublic.patch(
        `/appointments/make-prescription/${appointment?._id}`,
        data
      );
      refetch();
      toast.success("Prescription created successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
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
            Make A Prescription
          </h1>
          <RxCross1
            className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => setIsModalOpen(false)}
          />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-4">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label
                htmlFor="medicine"
                className="text-[1rem] font-[500] text-[#464646]"
              >
                Medicine
              </label>
              <input
                type="text"
                name="medicine"
                id="medicine"
                className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full mt-1"
                required
              />
            </div>

            <div>
              <label
                htmlFor="instruction"
                className="text-[1rem] font-[500] text-[#464646]"
              >
                Instruction
              </label>
              <textarea
                rows={6}
                type="text"
                name="instruction"
                id="instruction"
                className="py-2 px-3 border border-[#d1d1d1] rounded-md w-full mt-1"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="py-2 px-4 w-full bg-teal-600 text-[#fff] rounded-md uppercase font-medium cursor-pointer"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default DoctorInstructionModal;
