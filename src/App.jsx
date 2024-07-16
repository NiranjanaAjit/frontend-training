// import "./styles.module.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import CreateEmployee from "./pages/Create";
import WelcomeEmployee from "./pages/Welcome";
import HomeLayout from "./pages/HomeLayout";
import ListEmployee from "./pages/ListEmployees";
import { useReducer, useState } from "react";
import EditEmployee from "./pages/EditEmployee";
import DetailsOfEmployee from "./pages/DetailsOfEmployee"
import employees from "./pages/employeesData";
import reducer from "./pages/useReducer.jsx";

// const handleSubmit = () => {
//   console.log("hello")
// }



const App = () => {
  
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
        {path: "edit/:id", element: <EditEmployee/>},
        {path: "details/:id", element: <DetailsOfEmployee/>}
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;


