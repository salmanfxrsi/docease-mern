import React from "react";

// react icons
import { IoIosCall } from "react-icons/io";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div
      className="w-full h-full rounded-md"
    >
      {/* Header */}
      <header className="flex lg:flex-row flex-col gap-[50px] lg:gap-0 items-center lg:mt-3">
        <div className="px-8 mt-8 lg:mt-0 w-full lg:w-[50%]">
          <h1 className="text-[40px] lg:text-[60px] leading-[45px] lg:leading-[65px] font-[500] up">
            Smart Scheduling For Smarter Healthcare
          </h1>
          <p className="text-[16px] mt-2">
            DocEase is an online platform designed to facilitate seamless
            communication between patients and doctors. Patients can book
            appointments, while doctors can manage their schedules efficiently.
          </p>

          <div className="flex items-center flex-wrap gap-[20px] mt-6">
            <Link
              to="doctors"
              className="py-2 px-6 min-w-fit bg-teal-600 text-white rounded-full hover:bg-transparent hover:border-black hover:text-black transition-all duration-200 border"
            >
              Get Started
            </Link>

            <a
              href="#contact"
              className="bg-gray-200 min-w-fit rounded-full py-1.5 px-2 flex items-center gap-[10px] "
            >
              <IoIosCall className="text-white bg-black rounded-full py-2 text-[2rem]" />
              Get In Touch
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-[50%]">
          <img
            src="https://i.ibb.co.com/LzXCtBT5/successful-medical-team-329181-9252.jpg"
            alt="image"
            className="w-full rounded-3xl"
          />
        </div>
      </header>
    </div>
  );
};

export default Banner;
