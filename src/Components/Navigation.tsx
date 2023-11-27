import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="w-full flex items-center justify-between py-5 sm:px-10 px-5 border-gray-100 border-b-2">
      <div className="flex items-center gap-5 text-lg">
        <h1 className=" font-sans-serif text-4xl font-semibold">Fl</h1>{" "}
        <div className="sm:flex hidden font-semibold gap-5">
          <NavLink
            to="/"
            className="hover: p-1 hover:bg-gray-300 hover:rounded-md"
          >
            Home
          </NavLink>
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
        <Menu size={`${25}px`} />
        <div className="h-10 w-10 rounded-full bg-gray-400"></div>
      </div>
    </nav>
  );
}
