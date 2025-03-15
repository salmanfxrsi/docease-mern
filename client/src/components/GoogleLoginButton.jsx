import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const GoogleLoginButton = () => {
  const { googleSignIn, setUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await googleSignIn();
      const { email, displayName, photoURL } = result.user;

      // Update user state
      setUser(result.user);

      // Send user data to the server
      await axiosPublic.post("/users", {
        email,
        name: displayName,
        image: photoURL,
        role: "patient",
      });

      toast.success("Welcome to DocEase!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      disabled={loading}
      className={`inline-flex items-center justify-center shrink-0 rounded-md border px-12 py-3 text-sm font-medium transition focus:outline-none w-full ${
        loading ? "opacity-50 cursor-not-allowed" : "hover:bg-transparent"
      }`}
    >
      <FcGoogle className="mr-2 text-xl" />
      {loading ? "Signing in..." : "Google Login"}
    </button>
  );
};

export default GoogleLoginButton;
