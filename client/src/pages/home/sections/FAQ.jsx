import React from "react";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer:
      "To book an appointment, sign in to your account, search for a doctor by specialty or location, select an available slot, and confirm your booking. You will receive a confirmation email once the appointment is scheduled.",
  },
  {
    question: "Can I reschedule or cancel my appointment?",
    answer:
      "Yes, you can reschedule or cancel your appointment from your dashboard. Simply navigate to your scheduled appointments and select the appropriate option. Please note that cancellation policies may vary depending on the doctor's preferences.",
  },
  {
    question: "How do doctors manage their schedules?",
    answer:
      "Doctors can set their availability, approve or reject appointment requests, and access patient details through their dashboard. The system provides real-time updates on new bookings and cancellations.",
  },
  {
    question: "Is there a verification process for doctors?",
    answer:
      "Yes, all doctors must complete the registration process and undergo an admin verification check. This ensures credibility and trust within the platform before they can start accepting appointments.",
  },
  {
    question: "How can I contact my doctor before the appointment?",
    answer:
      "Patients can send inquiries to doctors through the platform's messaging system, if enabled by the doctor. Otherwise, contact details will be provided after the appointment is confirmed.",
  },
  {
    question: "What happens if a doctor cancels an appointment?",
    answer:
      "If a doctor cancels an appointment, you will be notified immediately, and you can reschedule with the same doctor or choose another available doctor from the platform.",
  },
  {
    question: "Are my medical details safe on DocEase?",
    answer:
      "Yes, we prioritize security and confidentiality. Patient data is encrypted and securely stored, ensuring compliance with healthcare data protection regulations.",
  },
  {
    question: "How do admins oversee the platform?",
    answer:
      "Admins manage doctor registrations, oversee user activities, handle complaints, and monitor appointment analytics to ensure smooth platform operations.",
  },
  {
    question: "Does DocEase support emergency consultations?",
    answer:
      "Currently, DocEase is designed for scheduled appointments. However, some doctors may offer urgent consultations based on their availability.",
  },
  {
    question: "Is there a mobile app for DocEase?",
    answer:
      "At the moment, DocEase is accessible via web browsers on both desktop and mobile devices. A mobile app may be introduced in the future.",
  },
];

const FAQ = () => {
  return (
    <div className="space-y-4">
      {faqs.slice(0, 5).map((faq, index) => (
        <details
          key={index}
          className="group border-s-4 border-teal-600 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-lg font-medium text-gray-900">
              {faq.question}
            </h2>

            <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
};

export default FAQ;
