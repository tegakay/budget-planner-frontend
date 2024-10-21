import { FaGoogle, FaFacebookF } from "react-icons/fa";
import LoginIllustration from "../assets/Login/LoginIllustration.png";
import Budget from "../assets/Login/budget.jpg";

const Login = () => {
  return (
    <div className="  flex p-5 flex-col md:flex-row items-center gap-5 md:justify-around">
      {/* first half */}
      <div className="">
      <div className="header text-2xl mb-4">
        <h1>Hi! <span className="font-bold">Welcome Back</span></h1>
        
      </div>
      <div className="imageheader  md:max-w-2xl ">
        <img src={Budget} />
      </div>
      </div>


      <div className="w-full md:max-w-sm">
        <div className="grid gap-2 ">
          <button className="  text-sm my-2 inline-flex justify-center items-center shadow p-3 rounded-lg border border-2 font-bold text-gray-800">
            {" "}
            <FaGoogle /> <span className="ml-2">Login with Google</span>{" "}
          </button>
          <button className=" text-sm my-2 inline-flex justify-center  items-center shadow p-3 rounded-lg border border-2 font-bold bg-blue-400 text-white">
            {" "}
            <FaFacebookF />
            <span className="ml-2 ">Login with Facebook</span>
          </button>
        </div>

         <p className="text-center">or</p>
            <form className="grid">
              <label className="text-xs" >Email</label>
                <input  type="email" placeholder="Email address" name=""  className="my-2 border border-2 shadow p-3 rounded-lg" />
                <label className="text-xs" >Password</label>
                <input type="password" placeholder="Password" name=""  className="my-2 border border-2 shadow p-3 rounded-lg" />
                <div className="flex justify-between">
                    <p className="text-xs"><input type="checkbox" name=""  /> Remember me?</p>
                    <a href="#" rel="noopener noreferrer" className="text-red-700 text-xs">Forgot Password</a>
                </div>
                <button className=" my-2 inline-flex justify-center  shadow p-3 rounded-lg border border-2 bg-blue-600 text-white text-lg">Log in</button>
            </form>

            <p className="text-sm">Dont have an account? <span>Register</span></p>
      </div>
    </div>
  );
};

export default Login;
