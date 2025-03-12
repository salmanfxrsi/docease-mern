import logo from "../../assets/shared/logo.png";
import toast from "react-hot-toast";
import GoogleLoginButton from "../../components/GoogleLoginButton";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const {
      first_name,
      last_name,
      email,
      password,
      password_confirmation,
      image,
      role,
    } = form;
    const user_info = {
      name: first_name.value + " " + last_name.value,
      email: email.value,
      image: image.value,
      role: role.value,
    };

    if (password.value !== password_confirmation.value) {
      return toast.error("Password Not Matched");
    }

    console.log(user_info);
  };

  return (
    <section className="bg-white lg:py-24 lg:container lg:mx-auto">
      <div className="lg:grid lg:grid-cols-12">
        {/* Left Section */}
        <section className="relative flex h-32 items-end bg-teal-600 lg:col-span-5 lg:h-full xl:col-span-6">
          <div className="hidden lg:relative lg:block lg:p-12">
            <img className="w-20" src={logo} alt="" />
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Welcome to DocEase 🩺
            </h2>
            <p className="mt-4 leading-relaxed text-white/90">
              DocEase – Effortless doctor appointments, smarter healthcare, and
              seamless patient-doctor connections.
            </p>
          </div>
        </section>

        {/* Right Section (Form) */}
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            {/* Logo and Text For Mobile View */}
            <div className="relative -mt-16 block lg:hidden">
              <img className="w-20" src={logo} alt="" />
              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                Welcome to DocEase 🩺
              </h1>
              <p className="mt-4 leading-relaxed text-gray-500">
                DocEase – Effortless doctor appointments, smarter healthcare,
                and seamless patient-doctor connections.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 grid grid-cols-6 gap-6"
            >
              {/* First Name */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="FirstName"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="FirstName"
                  name="first_name"
                  required
                  className="mt-1 py-2 px-4 border-2 w-full rounded-md bg-white text-sm text-gray-700 shadow-xs"
                />
              </div>

              {/* Last Name */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="LastName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="LastName"
                  name="last_name"
                  required
                  className="mt-1 py-2 px-4 border-2 w-full rounded-md bg-white text-sm text-gray-700 shadow-xs"
                />
              </div>

              {/* Email */}
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

              {/* Image */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Image"
                  className="block text-sm font-medium text-gray-700"
                >
                  Image
                </label>
                <input
                  type="url"
                  id="image"
                  name="image"
                  required
                  className="mt-1 py-2 px-4 w-full rounded-md border-2 bg-white text-sm text-gray-700 shadow-xs"
                />
              </div>

              {/* Role */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="Role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  className="mt-1 py-2 px-4 w-full rounded-md border-2 bg-white text-sm text-gray-700 shadow-xs"
                >
                  <option value="patient">Please select</option>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>

              {/* Password */}
              <div className="col-span-6 sm:col-span-3">
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
                  className="mt-1 py-2 px-4 w-full rounded-md border-2 bg-white text-sm text-gray-700 shadow-xs"
                />
              </div>

              {/* Password Confirmation */}
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="PasswordConfirmation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password Confirmation
                </label>
                <input
                  type="password"
                  id="PasswordConfirmation"
                  name="password_confirmation"
                  required
                  className="mt-1 px-4 py-2 border-2 w-full rounded-md bg-white text-sm text-gray-700 shadow-xs"
                />
              </div>

              {/* Account Create Button */}
              <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <button
                  type="submit"
                  className="inline-block shrink-0 rounded-md border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-teal-700 focus:ring-3 focus:outline-hidden w-full"
                >
                  Create an account
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

export default Register;
