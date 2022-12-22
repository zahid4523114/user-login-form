import { createBrowserRouter } from "react-router-dom";
import LogIn from "../components/LogIn/LogIn";
import Register from "../components/Register/Register";
import UserInfo from "../components/userInfo/UserInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn></LogIn>,
  },
  {
    path: "/logIn",
    element: <LogIn></LogIn>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/userInfo",
    element: <UserInfo></UserInfo>,
  },
]);
