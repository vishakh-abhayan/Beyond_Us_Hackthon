import Home from "./pages/Home";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signin />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
