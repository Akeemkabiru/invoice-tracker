import { Facebook, X } from "lucide-react";

export default function Login() {
  return (
    <div className="bg-blue-900 h-[100vh] w-[100vw] text-gray-600 flex items-center justify-center">
      <form className="bg-white flex flex-col gap-5 w-[300px] items-center rounded-lg py-5">
        <h2 className="text-3xl font-bold text-center mb-5">Login</h2>
        <div>
          <label htmlFor="username" className="text-lg font-semibold">
            Username
          </label>
          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your username"
              className="border-b-4 bg-transparent rounded placeholder:text-gray-300 placeholder:font-semibold placeholder:text-lg w-[250px] p-2  placeholder:text-center focus:border-blue-900 outline-none transition-colors duration-1000"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="text-lg font-semibold">
            Password
          </label>
          <div>
            {" "}
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter your password"
              className="border-b-4 bg-transparent rounded placeholder:text-gray-300 placeholder:font-semibold placeholder:text-lg w-[250px] p-1 placeholder:text-center focus:border-blue-900 transition-colors duration-1000 outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-black text-white font-bold py-2 text-lg w-[250px] rounded-full text-center"
        >
          Log in
        </button>
        <div className="mt-20">
          <h3 className="text-normal font-semibold mb-3">Or sign in with</h3>
          <div className="flex items-center justify-center gap-2">
            {" "}
            <span className="bg-blue p-2 rounded-full bg-blue-600">
              <Facebook size={`${25}px`} color="white" />
            </span>
            <span className="bg-blue p-2 rounded-full bg-black">
              <X size={`${25}px`} color="white" strokeWidth={`${3}px`} />
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
