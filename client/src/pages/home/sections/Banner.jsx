import React from "react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <section className="relative bg-[url(https://i.ibb.co.com/d0xk0Fs4/doctor-nurses-special-equipment-23-2148980721.jpg)] bg-cover bg-center lg:bg-top bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-50 sm:px-6 lg:flex lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Smart Scheduling for
            <strong className="block font-extrabold text-teal-600">
              {" "}
              Smarter Healthcare{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed">
            DocEase – Effortless doctor appointments, smarter healthcare, and
            seamless patient-doctor connections.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              to="doctors"
              className="block w-full rounded-sm bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow-sm 
                         hover:bg-teal-700 focus:ring-3 focus:outline-hidden sm:w-auto"
            >
              Get Started
            </Link>

            <Link
              to=""
              className="block w-full rounded-sm bg-white px-12 py-3 text-sm font-medium text-teal-600 shadow-sm 
                         hover:text-teal-600 focus:ring-3 focus:outline-hidden sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
