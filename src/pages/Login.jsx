import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/kv-login.jpeg";
import Logo from "../assets/kv-logo.png";
import Button from "../components/Button";
import TextField from "../components/TextField";
import "../styles/LoginStyles.scss";
import { useState, useEffect, useRef } from "react";

const Login = () => {
  // const [userName, setUserName] = useState("");

  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const [creds, setCreds] = useState({ username: "", password: "" });

  useEffect(() => {
    if (creds.username.length > 10) {
      setMessage("Maximum length for username exceeded");
    } else {
      setMessage("");
    }
    console.log("ahhhhhh");
  }, [creds]);

  const onChange = (name, value) => {
    setCreds((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(creds);
  };

  const handleSubmit = () => {
    localStorage.setItem("token", "true");
    navigate("/employees");
  };

  const userNameRef = useRef();

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
          <img src={Logo} alt="Logo" className="logo" />
          <TextField
            label="Username"
            type="text"
            name="username"
            onChange={onChange}
            ref={userNameRef}
          />
          <label className="message">{message}</label>

          <TextField
            label="Password"
            type="password"
            name="password"
            onChange={onChange}
          />
          <Button text="Login" buttonClassName="login-button" handleSubmit={handleSubmit} />
        </form>
      </div>
    </div>
  );
};

export default Login;
