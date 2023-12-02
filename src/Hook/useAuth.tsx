import { useEffect, useReducer } from "react";

interface User {
  password: number;
  username: string;
  firstName: string;
}

interface AuthState {
  userDetails: User | null;
  login: boolean;
}

type AuthAction =
  | { type: "getUserLogin"; payload: User }
  | { type: "login"; payload: boolean };

export default function useAuth() {
  function reducer(state: AuthState, action: AuthAction): AuthState {
    switch (action.type) {
      case "getUserLogin":
        return { ...state, userDetails: action.payload };
      case "login":
        return { ...state, login: action.payload };
      default:
        return state;
    }
  }

  const initialState: AuthState = {
    userDetails: null,
    login: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function getUserDetails() {
      try {
        const response = await fetch(
          `http://localhost:3000/?${userDetails?.username}`
        );
        if (response.ok) {
          const data: User = await response.json();
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

  function handleLogin(password: number, username: string) {
    if (
      userDetails &&
      password === userDetails.password &&
      username === userDetails.username
    ) {
      dispatch({ type: "login", payload: true });
    }
  }

  return { handleLogin, login, userDetails };
}
