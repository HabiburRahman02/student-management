
import { useState } from "react";
import { Link } from "react-router-dom";

import { IoClose } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import img from '../../assets/login2.png'
import SocialLogin from "../SocialLogin";

const Login = () => {

  const [showPass, setShowPass] = useState(false);

  return (
    <div className="py-20">
      <div className="lg:flex max-w-7xl mx-auto items-center justify-between gap-6 p-1 lg:px-24 bg-ray-100">
        <div >
          <img className="w-full" src={img} alt="" />
        </div>
        <div className="lg:w-1/2 bg-white shadow-2xl p-4 lg:p-12">
          <div className="flex justify-end relative">
            <Link to='/'>
              <button className="absolute top-3 right-3">
                <IoClose className="text-3xl text-red-600 hover:text-red-700"></IoClose>
              </button>
            </Link>
          </div>
          <div>
            <div className="text-center space-y-1 mb-4">
              <h3 className="text-4xl font-bold">Login</h3>
              <p className="font-medium">Login into your pages account</p>
            </div>
            <form className="mb-6 ">

              <div className="form-control mb-3">
                <label className="label">
                  <span className="label-text text-lg text-gray-500">Email Address*</span>
                </label>
                <input type="email" name='email' placeholder="ami@tmi.com" className="border-2 p-4" required />
              </div>
              <div className="form-control relative mb-4">
                <label className="label">
                  <span className="label-text text-lg text-gray-500">Password*</span>
                </label>
                <input type={showPass ? "text" : "password"} name='password' placeholder="*********" className="border-2 p-4" required />
                <span className='absolute top-[60px] right-2'
                  onClick={() => setShowPass(!showPass)}>
                  {
                    showPass ? <FaEyeSlash className='text-2xl'></FaEyeSlash>
                      : <FaEye className='text-2xl'></FaEye>
                  }
                </span>
              </div>
              <div className="form-control mt-6">
                <button className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-5 text-white font-bold">Login</button>
              </div>

              <div className="divider text-gray-400">Login With</div>
              <SocialLogin></SocialLogin>
              <div className='mt-3 text-center font-medium text-gray-500 text-lg'>
                <p>Are you new? got to! <Link to='/registrations' className='text-blue-500 hover:text-green-500'>Register</Link></p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;