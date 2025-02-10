import { BsArrowRightSquareFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import feather from "./Images/feather.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/signup/", formData);
      alert(response.data.message);
      navigate("/"); // Redirect to Home after successful signup
    } catch (error: any) {
      console.error(error);
      alert(error.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-mono p-4">
      <div className="w-full md:w-[30vw] max-w-md h-auto md:h-[90vh] p-4 md:p-8 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] rounded-md">
        <div className="mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl font-bold">Create Your Journal.</h3>
          <h3 className="text-xl md:text-2xl font-light mb-4 md:mb-6">Sign up to start writing.</h3>
        </div>
        <div className="flex justify-center mb-2 md:mb-9">
          <img src={feather} alt="feather" className="h-16 md:h-20" />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex space-x-4 mb-4">
              <div className="w-1/2">
                <label className="block mb-2 text-base md:text-lg">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  value={formData.firstName}
                  className="w-full p-2 rounded text-black border border-black"
                />
              </div>
              <div className="w-1/2">
                <label className="block mb-2 text-base md:text-lg">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  value={formData.lastName}
                  className="w-full p-2 rounded text-black border border-black"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-base md:text-lg">Date of Birth</label>
              <input
                type="date"
                name="dob"
                onChange={handleChange}
                value={formData.dob}
                className="w-full p-2 rounded text-black border border-black"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-2 text-base md:text-lg">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                className="w-full p-2 rounded text-black border border-black"
              />
            </div>

            <div className="mb-8 md:mb-4">
              <label className="block mb-2 text-base md:text-lg">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                className="w-full p-2 rounded text-black border border-black"
              />
            </div>

            <div className="flex justify-center mb-4 md:mb-4">
              <button type="submit">
                <BsArrowRightSquareFill className="h-8 w-8 md:h-10 md:w-10" />
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center mt-4 md:mt-6 space-x-2 cursor-pointer bg-black hover:bg-gray-200 hover:text-black p-2 rounded">
          <FcGoogle className="h-5 w-5 md:h-6 md:w-6" />
          <span className="text-white font-medium text-sm hover:text-black md:text-base">Sign up with Google</span>
        </div>

        <div className="flex items-center justify-center mt-4 md:mt-6">
          <Link to="/login" className="text-black font-medium text-sm md:text-base underline hover:text-gray-300">
            Already Have An Account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
