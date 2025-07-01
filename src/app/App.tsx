import { RouterProvider } from "react-router-dom";

import { appRouter } from "./providers/router/index.ts";

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
