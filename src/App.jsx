// import "./styles.module.scss";

import Login from "./pages/Login";
import CreateEmployee from "./pages/Create";
import { useState } from "react";

const App = () => {
  const [stateValue, setState] = useState(true);

  const handleLogin = () => {
    setState(true);
    console.log("set state to true")
  }
  return (
    <main>
          {
      stateValue ? <CreateEmployee/> : <Login handleSubmit={handleLogin}/>
    }
    </main>


  );
};

export default App;
