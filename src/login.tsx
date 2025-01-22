import feather from "./Images/feather.png";
import { BsArrowRightSquareFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen font-mono">
        <div className="w-[30vw] h-[80vh] p-8 shadow-[0px_5px_15px_rgba(0,0,0,0.35)] rounded-md">
          <div className="mb-12">
            <h3 className="text-2xl font-bold">Think it. Make it.</h3>
            <h3 className="text-2xl font-light mb-6">Log in to your journal.</h3>
          </div>
          <div className="flex justify-center mb-9">
            <img src={feather} className="h-20" />
          </div>
          <div>
            <form>
              <div className="mb-4">
                <label className="block mb-2 text-lg">Enter Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="emaill"
                  className="w-full p-2 rounded text-black border border-black"
                />
              </div>
              <div className="mb-12">
                <label className="block mb-2 text-lg">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full p-2 rounded text-black border border-black"
                />
              </div>
              <div className="flex justify-center mb-12">
                <BsArrowRightSquareFill size={40} />
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center mt-6 space-x-2 cursor-pointer bg-black hover:bg-gray-200 p-2 rounded">
            <FcGoogle size={24} />
            <span className="text-white font-medium">Login with Google</span>
          </div>
          <div className="flex items-center justify-center mt-6 space-x-2 cursor-pointer bg-black  hover:bg-black p-2 rounded">
            <span className="text-white font-medium">Forgot Password ?</span>
          </div>
        </div>
      </div>
    </>
  );
}
