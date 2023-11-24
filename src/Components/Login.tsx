import { Facebook, X, EyeOff, Eye } from "lucide-react";
import { useState } from "react";
interface onClickProps {
  onClick: (password: number, username: string) => void;
}
export default function Login({ onClick }: onClickProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setusername] = useState<string>("");

  return (
    <div className=" bg-gray-500 h-[100vh] w-[100vw] text-gray-600 flex items-center justify-center">
      <form className="bg-white flex flex-col gap-5 w-[300px] sm:w-[400px] items-center rounded-lg py-5">
        <h2 className="text-2xl font-bold text-center mb-5">Login</h2>
        <div>
          <label htmlFor="username" className="text-normal font-semibold">
            Username
          </label>
          <div>
            <input
              type="text"
              value={username}
              name=""
              id="two"
              placeholder="Enter your username"
              className="border-2 bg-transparent rounded placeholder:text-gray-300 placeholder:font-semibold placeholder:text-normal w-[250px] sm:w-[350px] placeholder:text-center placeholder:sm:text-left border-gray-500 outline-none transition-colors duration-500 p-1 sm:pb-0"
              onChange={(e) => setusername(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="text-normal font-semibold">
            Password
          </label>
          <div className="flex">
            {" "}
            <input
              type={`${showPassword ? "text" : "password"}`}
              value={password}
              name=""
              id="one"
              placeholder="Enter your password"
              className="border-2 bg-transparent rounded placeholder:text-gray-300 placeholder:font-semibold placeholder:text-normal w-[250px] sm:w-[350px] placeholder:text-center p-1 sm:pb-0 border-gray-500 transition-colors duration-1000 outline-none placeholder:sm:text-left"
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <Eye
                className="absolute transform sm:translate-x-80 translate-x-56 top-[43.25%]"
                onClick={() => setShowPassword(!showPassword)}
              />
            ) : (
              <EyeOff
                className="absolute transform sm:translate-x-80 translate-x-56 top-[43.25%]"
                onClick={() => setShowPassword(!showPassword)}
              />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="bg-black text-white font-bold py-2  text-lg w-[250px] sm:w-[350px] rounded-full text-center"
          onClick={function (e) {
            e.preventDefault();
            onClick(Number(password), username);
          }}
        >
          Log in
        </button>
        <div className="mt-20">
          <h3 className="text-sm font-semibold mb-3 text-center">
            Or sign in with
          </h3>
          <div className="flex items-center justify-center gap-2">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 48 48"
            >
              <path
                fill="#039be5"
                d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
              ></path>
              <path
                fill="#fff"
                d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 48 48"
            >
              <path
                fill="#212121"
                fill-rule="evenodd"
                d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#fff"
                d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"
              ></path>
              <polygon
                fill="#fff"
                points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"
              ></polygon>
              <polygon
                fill="#fff"
                points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"
              ></polygon>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="35"
              height="35"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
          </div>
        </div>
      </form>
    </div>
  );
}
