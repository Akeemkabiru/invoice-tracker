import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full flex items-center justify-between py-5 sm:px-10 px-5 border-gray-100 border-b-2">
      <div className="flex items-center gap-5 text-lg">
        <h1 className=" font-sans-serif text-4xl font-semibold">Fl</h1>{" "}
        <div
          className={`sm:flex flex flex-col sm:flex-row fixed top-0 sm:relative font-semibold left-0 w-[250px] sm:w-auto h-full sm:h-auto sm:gap-5 text-white sm:text-black bg-black px-5 pt-20 sm:p-0 gap-10 sm:bg-white ${
            open ? "block" : "hidden"
          } `}
        >
          <X
            className="absolute top-5 right-5"
            size={`${30}px`}
            onClick={() => setOpen(false)}
          />{" "}
          <NavLink
            to="/"
            className="hover: p-1 hover:bg-gray-300 hover:rounded-md"
          >
            Home
          </NavLink>{" "}
          <NavLink
            to="/invoice"
            className="hover: p-1 hover:bg-gray-300 hover:rounded-md"
          >
            Invoice
          </NavLink>
          <NavLink
            to="/clients"
            className="hover: p-1 hover:bg-gray-300 hover:rounded-md"
          >
            Clients
          </NavLink>
        </div>
      </div>
      <div className="flex items-center sm:gap-10  gap-5 flex-row-reverse">
        <Menu size={`${25}px`} onClick={() => setOpen(true)} />
        <div className="h-10 w-10 rounded-full bg-gray-400"></div>
      </div>
    </nav>
  );
}
