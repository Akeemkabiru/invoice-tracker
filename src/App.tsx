import { BrowserRouter, Routes, Route } from "react-router-dom";

import Invoice from "./Pages/Invoice";
import Clients from "./Pages/Clients";
import HomePage from "./Pages/HomePage";
import Login from "./Components/Login";
import useAuth from "./Hook/useAuth";

export default function App() {
  const { login, handleLogin, userDetails } = useAuth();
  console.log(login, userDetails);

  <Login onClick={handleLogin} />;
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={login ? <HomePage /> : <Login onClick={handleLogin} />}
        />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/clients" element={<Clients />} />
      </Routes>
    </BrowserRouter>
  );
}
