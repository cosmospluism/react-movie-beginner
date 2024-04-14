import Home from "./routes/Home";
import Detail from "./routes/Detail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/movie/:id",
      element: <Detail />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
