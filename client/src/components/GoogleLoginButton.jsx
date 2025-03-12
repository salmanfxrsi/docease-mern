import { FcGoogle } from "react-icons/fc";

const GoogleLoginButton = () => {
  return (
    <button className="inline-flex items-center justify-center shrink-0 rounded-md border px-12 py-3 text-sm font-medium transition hover:bg-transparent focus:outline-hidden w-full">
      <FcGoogle className="mr-2 text-xl" /> Google Login
    </button>
  );
};

export default GoogleLoginButton;
