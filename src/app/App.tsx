import { toastSetting } from "@shared/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { appRouter } from "./providers/router";

const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={appRouter} />
      <ToastContainer {...toastSetting} />
    </QueryClientProvider>
  );
}

export default App;
