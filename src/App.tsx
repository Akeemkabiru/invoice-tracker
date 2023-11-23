import Login from "./Components/Login";
import useAuth from "./Hook/useAuth";

export default function App() {
  const { login, handleLogin, userDetails } = useAuth();

  return (
    <div>
      {login ? (
        `You are welcome ${userDetails?.firstName}`
      ) : (
        <Login onClick={handleLogin} />
      )}
    </div>
  );
}
