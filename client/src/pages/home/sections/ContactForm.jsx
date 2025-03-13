import React from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const details = { name, email, message };
    toast.success("Thanks, We'll Reach You Soon")
    e.target.reset();
  };

  return (
    <section id="contact" className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
      {/* Form Area */}
      <form onSubmit={handleSubmit} className="w-full">
        <div className="text-gray-800">
          <h1 className="text-2xl font-semibold uppercase">
            Get in <span className="text-teal-600">touch</span>
          </h1>
          <p className="text-sm mt-2 mb-8">
            Let’s connect with DocEase! Reach out and our dedicated team is
            always ready for an instant reply.
          </p>
        </div>

        {/* Name and Email Inputs */}
        <div className="flex sm:flex-row flex-col items-center gap-5">
          <div className="flex flex-col gap-2 w-full sm:w-1/2">
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition duration-300"
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full sm:w-1/2">
            <input
              type="email"
              placeholder="Email address"
              name="email"
              className="border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition duration-300"
              required
            />
          </div>
        </div>

        {/* Message Input */}
        <div className="flex flex-col gap-2 w-full mt-5">
          <textarea
            placeholder="Write your message"
            name="message"
            className="border-gray-300 border rounded-md outline-none px-4 py-3 w-full text-gray-400 transition duration-300 min-h-[200px]"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-sm mt-4 hover:bg-teal-700 focus:ring-3 focus:outline-none"
        >
          Submit
        </button>
      </form>

      {/* Map Area */}
      <div className="h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57903.02583821205!2d91.81983571134349!3d24.900058347354335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f67382!2sSylhet!5e0!3m2!1sen!2sbd!4v1723916219404!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full rounded-md"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactForm;
