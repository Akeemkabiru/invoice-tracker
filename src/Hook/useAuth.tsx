import { useEffect, useReducer } from "react";

export default function useAuth() {
  function reducer(state, action) {
    switch (action.type) {
      case "getUserLogin":
        return { ...state, userDetails: action.payload };
      case "login":
        return { ...state, login: action.payload };
        break;

      default:
        break;
    }
  }
  const initialState = {
    userDetails: null,
    login: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function getUserDetails() {
      try {
        const response = await fetch("http://localhost:3000/user");
        if (response.ok) {
          const data = await response.json();
          dispatch({ type: "getUserLogin", payload: data });
          console.log(data);
        } else {
          console.error("Error fetching user details:", response.status);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    }

    getUserDetails();
  }, []);

  const { userDetails, login } = state;

  function handleLogin(password: number, username: "string") {
    if (password === userDetails?.id && username === userDetails?.username) {
      dispatch({ type: "login", payload: true });
    }
  }

  return { handleLogin, login, userDetails };
}
