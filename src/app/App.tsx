import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";

import { appRouter } from "./providers/router/index.ts";

const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={appRouter} />;
    </QueryClientProvider>
  );
}

export default App;
