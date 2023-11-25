import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="w-full flex items-center justify-between py-5 px-10 border-gray-100 border-b-2">
      <div className="flex items-center gap-5 font-semibold text-lg">
        <h1 className="text-3xl font-sans-serif">Fl</h1>{" "}
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
      <div className="flex items-center gap-10">
        <Menu />
        <div className="p-2 h-8 w-8 rounded-full bg-gray-400"></div>
      </div>
    </nav>
  );
}
