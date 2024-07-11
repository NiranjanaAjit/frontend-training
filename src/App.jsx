// import "./styles.module.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import CreateEmployee from "./pages/Create";
import WelcomeEmployee from "./pages/Welcome";
import HomeLayout from "./pages/HomeLayout";
import ListEmployee from "./pages/ListEmployee";
import { useState } from "react";

// const handleSubmit = () => {
//   console.log("hello")
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/employees",
    element: <HomeLayout />,
    children: [
      { index: true, element: <WelcomeEmployee /> },
      { path: "create", element: <CreateEmployee /> },
      { path: "list", element: <ListEmployee /> },
    ],
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
