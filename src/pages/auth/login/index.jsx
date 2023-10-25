import "./style.scss";
import { useState, React } from "react";
import Logo from "../../../assets/logo.png";
import hero_image from "../../../assets/hero_image.png";
import hero_image_back from "../../../assets/hero_image_back.png";
import { motion } from "framer-motion";
import {Link as RouterLink} from 'react-router-dom'

const LoginPage = () => {
  const transition = { type: "spring", duration: 3 };
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // You can implement your authentication logic here.
    // For this example, we'll just check if the username and password are not empty.
    if (username.trim() !== "" && password.trim() !== "") {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="login" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <div className="login-container">
          {isLoggedIn ? (
            <div className="login-box">
              <h2>Welcome, {username}!</h2>
              <button onClick={() => setIsLoggedIn(false)}>Logout</button>
            </div>
          ) : (
            <div className="login-box">
               <img src={Logo} className="logo" alt="" />
              <h2>Login</h2>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button onClick={handleLogin}>Login</button>
              <h4 style={{color:"white"}}>Don't Have an Account?<RouterLink style={{textDecoration: "none",color:"#F6A21E"}} to={"/auth/signup"}>Sign Up</RouterLink></h4>
            </div>
          )}
        </div>
      </div>
      <div className="right-h">
        {/*hero images*/}

        <img src={hero_image} alt="" className="hero-image" />
        <motion.img
          src={hero_image_back}
          alt=""
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          className="hero-image-back"
        />
      </div>
    </div>
  );
};
export default LoginPage;
