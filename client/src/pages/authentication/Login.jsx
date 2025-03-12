import React from "react";
import GoogleLoginButton from "../../components/GoogleLoginButton";
import logo from "../../assets/shared/logo.png";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <section className="bg-white lg:py-24 lg:container lg:mx-auto">
      <div className="lg:grid lg:grid-cols-12">
        {/* Image Section */}
        <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
          <img
            alt=""
            src="https://i.ibb.co.com/Ndh0TKpv/login-concept-illustration-114360-739.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </aside>

        {/* Login Form Section */}
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <img className="w-20" src={logo} alt="" />

            <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Login To DocEase Now 🔐
            </h1>

            <p className="mt-4 leading-relaxed text-gray-500">
              DocEase – Effortless doctor appointments, smarter healthcare, and
              seamless patient-doctor connections.
            </p>

            {/* Login Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              {/* Email Input */}
              <div className="col-span-6">
                <label
                  htmlFor="Email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="Email"
                  name="email"
                  required
                  className="mt-1 py-2 px-4 border-2 w-full rounded-md bg-white text-sm text-gray-700 shadow-xs"
                />
              </div>

              {/* Password Input */}
              <div className="col-span-6">
                <label
                  htmlFor="Password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="password"
                  required
                  className="mt-1 py-2 px-4 border-2 w-full rounded-md bg-white text-sm text-gray-700 shadow-xs"
                />
              </div>

              {/* Login Button */}
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-teal-700 focus:ring-3 focus:outline-hidden w-full"
                >
                  Log In
                </button>
              </div>

              {/* Google Login Button */}
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <GoogleLoginButton />
              </div>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Login;
