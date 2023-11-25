import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./Components/Login";
// import useAuth from "./Hook/useAuth";

import Invoice from "./Pages/Invoice";
import Clients from "./Pages/Clients";
import HomePage from "./Pages/HomePage";

export default function App() {
  // const { login, handleLogin, userDetails } = useAuth();
  // <Login onClick={handleLogin} />
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </BrowserRouter>
  );
}
