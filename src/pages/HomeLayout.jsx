import { Outlet, useNavigate } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";
import { useEffect } from "react";


const HomeLayout = () => {
    const navigate = useNavigate()

    const token = localStorage.getItem("token") 
    useEffect(()=> {
        
        if (token !== 'true'){
            navigate("/")

        }
    },[token,navigate])
    

    return <div>
    <Header/>
    <Sidebar/>
    <main>
    <Outlet/>
    </main>
    </div>


}

export default HomeLayout;