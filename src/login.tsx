import React, { useState } from 'react';
import { BsArrowRightSquareFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import feather from "./Images/feather.png";
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        setMessage('Login successful!');
        // Optionally redirect or store token
        // localStorage.setItem('token', response.data.token);
      }
    } catch (error: any) {
      console.error('Error:', error.response?.data || error.message);
      setMessage(error.response?.data?.error || 'An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-mono p-4">
      <div className="w-full md:w-[30vw] max-w-md h-auto md:h-[80vh] p-4 md:p-8 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] rounded-md">
        <div className="mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl font-bold">Think it. Make it.</h3>
          <h3 className="text-xl md:text-2xl font-light mb-4 md:mb-6">Log in to your journal.</h3>
        </div>
        
        <div className="flex justify-center mb-6 md:mb-9">
          <img src={feather} alt="feather" className="h-16 md:h-20" />
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 text-base md:text-lg">Enter Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded text-black border border-black"
                required
              />
            </div>
            <div className="mb-8 md:mb-12">
              <label className="block mb-2 text-base md:text-lg">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 rounded text-black border border-black"
                required
              />
            </div>
            <div className="flex justify-center mb-8 md:mb-12">
              <button type="submit">
                <BsArrowRightSquareFill className="h-8 w-8 md:h-10 md:w-10" />
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center mt-4 md:mt-6 space-x-2 cursor-pointer bg-black hover:bg-gray-200 p-2 rounded">
          <FcGoogle className="h-5 w-5 md:h-6 md:w-6" />
          <span className="text-white font-medium text-sm md:text-base">Login with Google</span>
        </div>

        <div className="flex items-center justify-center mt-4 md:mt-6 space-x-2 cursor-pointer bg-black hover:bg-black p-2 rounded">
          <span className="text-white font-medium text-sm md:text-base">Forgot Password ?</span>
        </div>

        {message && <p className="mt-4 text-center text-red-500">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
