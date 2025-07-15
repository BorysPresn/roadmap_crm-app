import { toastSetting } from "@shared/config/index.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { appRouter } from "./providers/router/index.ts";

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
