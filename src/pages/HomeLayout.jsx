import { Outlet, useNavigate } from "react-router-dom";
// import reducer from "../store/useReducer";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useEffect } from "react";
import { useReducer } from "react";
// import employees from "./employeesData";

const HomeLayout = () => {
  // const [state, dispatch] = useReducer(reducer, { employees: employees });

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div>
      <Header />
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default HomeLayout;
