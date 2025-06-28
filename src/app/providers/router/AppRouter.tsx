import { Customers } from "@pages/cutomers/index.ts";
import { Dashboard } from "@pages/dashboard/index.ts";
import { Deals } from "@pages/deals/index.ts";
import { MainPage } from "@pages/main/index.ts";
import { NotFoundPage } from "@pages/notFound/index.ts";
import { Tasks } from "@pages/tasks/index.ts";
import { Navigate, createBrowserRouter } from "react-router-dom";

export const appRouter = createBrowserRouter([
  //TODO: add AuthPage
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
