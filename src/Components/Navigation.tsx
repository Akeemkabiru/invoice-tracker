import { Home, Menu, Receipt, User, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../Hook/useAuth";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const { userDetails } = useAuth();

  return (
    <nav className="w-full flex items-center justify-between py-5 sm:px-10 px-5 border-gray-100 border-b-2">
      <div className="flex items-center gap-5 text-lg">
        <h1 className=" font-sans-serif text-4xl font-semibold">Fl</h1>{" "}
        <div
          className={`absolute inset-0 bg-black opacity-50 w-[100vw] h-full sm:hidden ${
            open ? "absolute" : "hidden"
          }`}
          onClick={() => setOpen(false)}
        ></div>
        <div
          className={`sm:flex flex flex-col sm:flex-row absolute top-0 sm:relative font-semibold left-0 w-[250px] sm:w-auto h-full sm:h-auto sm:gap-5 text-white sm:text-black bg-black px-5 pt-36 sm:p-0 gap-10 sm:bg-white ${
            open ? "block" : "hidden"
          } z-10 sm:-z-10`}
        >
          <h1 className="absolute top-5 left-5 text-4xl font-semibold sm:hidden">
            Fl
          </h1>
          <X
            className="absolute top-5 right-5 sm:hidden"
            size={`${30}px`}
            onClick={() => setOpen(false)}
          />{" "}
          <div className="flex gap-2">
            <Home color="white" fill="fill" className="sm:hidden" />
            <NavLink to="/">Home</NavLink>{" "}
          </div>
          <div className="flex gap-2">
            <Receipt className="sm:hidden" />
            <NavLink
              to="/invoice"
              className="hover:p-1  hover:bg-gray-300 hover:rounded-md  hover:text-black"
            >
              Invoice
            </NavLink>
          </div>
          <div className="flex gap-2">
            <User className="sm:hidden" />
            <NavLink
              to="/clients"
              className="hover:p-1   hover:bg-gray-300 hover:rounded-md  hover:text-black"
            >
              Clients
            </NavLink>
          </div>
        </div>
      </div>
      <div className="flex items-center sm:gap-10  gap-5 flex-row-reverse">
        <Menu size={`${25}px`} onClick={() => setOpen(true)} />

        <img
          src={`${userDetails?.avatar}`}
          alt=""
          className="w-[35px] h-[35px] rounded-full bg-gray-400"
        />
      </div>
    </nav>
  );
}
