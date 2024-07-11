import HeroImage from "../assets/kv-login.jpeg";
import Logo from "../assets/kv-logo.png";
import Button from "../components/Button";
import TextField from "../components/TextField";
import "../styles.scss";
import { useState, useEffect, useRef } from "react";

const Login = ({ handleSubmit }) => {
  const [userName, setUserName] = useState("");

  const [message, setMessage] = useState("");
  const userNameRef = useRef()
  useEffect(()=>{
    userNameRef.current.focus()
  })
  useEffect(() => {
    console.log(userName);

    if (userName.length > 10) {
      setMessage("Max Length: 10 characters");
    } else {
      setMessage("");
    }
  }, [userName]);

  return (
    <div className="login-page">
      {/* <!-- Hero Section --> */}
      <div className="hero">
        <div className="wrapper-hero">
          <img src={HeroImage} alt="Login Image" className="login-image" />
        </div>
      </div>
      {/* <!-- Login Section --> */}
      <div className="login">
        <form action="/" method="post">
          <h4>login</h4>
          <img src={Logo} alt="Logo" className="logo" />
          <label>{message}</label>
          <TextField
            label="Username"
            type="text"
            value={userName}
            onChange={setUserName}
            ref={userNameRef}
          />
          <TextField label="Password" type="password" />
          <Button text="Login" buttonClassName="" handleSubmit={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default Login;
