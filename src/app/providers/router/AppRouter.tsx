import { Customers } from "@pages/cutomers";
import { Dashboard } from "@pages/dashboard";
import { Deals } from "@pages/deals";
import { LoginPage } from "@pages/login";
import { MainPage } from "@pages/main";
import { NotFoundPage } from "@pages/not-found";
import { RegisterPage } from "@pages/register";
import { Tasks } from "@pages/tasks/index.ts";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const appRouter = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        index: true,
        element: <Navigate to="dashboard" replace />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "deals",
        element: <Deals />,
      },
      {
        path: "/tasks",
        element: <Tasks />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
