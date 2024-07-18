import { useNavigate } from "react-router-dom";
import HeroImage from "../assets/kv-login.jpeg";
import Logo from "../assets/kv-logo.png";
import Button from "../components/Button";
import TextField from "../components/TextField";
import "../styles/LoginStyles.scss";
import { useState, useEffect, useRef } from "react";
import { useLoginMutation } from "./login/api";
import alert from "../components/toastify-component";

const Login = () => {
  // const [userName, setUserName] = useState("");

  const [message, setMessage] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const [login, { isSuccess, data, error }] = useLoginMutation();

  const navigate = useNavigate();

  const [creds, setCreds] = useState({ username: "", password: "" });

  useEffect(() => {
    if (creds.username.length > 100) {
      setMessage("Maximum length for username exceeded");
    } else {
      setMessage("");
    }
  }, [creds]);

  const onChange = (name, value) => {
    setCreds((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(creds);
  };

  useEffect(() => {
    console.log("isSucces and data");
    if (isSuccess && data?.data?.token) {
      console.log(isSuccess, data.data.token);
      localStorage.setItem("token", data.data.token);
      console.log("kittiuo");
      navigate("/employees");
    }
  }, [isSuccess, data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (creds.username == "") {
      alert("Please enter username !");
    } else if (creds.password == "") {
      alert("Please enter password !")
    }
    else {
      login({
        email: creds.username,
        password: creds.password,
      });
    }
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
        <form method="post">
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
          <Button
            text="Login"
            buttonClassName="login-button"
            handleSubmit={handleSubmit}
          />
          <label className="message">{loginStatus}</label>
        </form>
      </div>
    </div>
  );
};

export default Login;
