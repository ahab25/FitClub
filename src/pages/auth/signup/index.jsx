import "./style.scss";
import { useState, React } from "react";
import Logo from "../../../assets/logo.png";
import hero_image from "../../../assets/hero_image.png";
import hero_image_back from "../../../assets/hero_image_back.png";
import { motion } from "framer-motion";
import {Link as RouterLink} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const transition = { type: "spring", duration: 3 };
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate()

  const handleSignup = () => {
    // You can implement your signup logic here.
    // For this example, we'll just set isRegistered to true.
    setIsRegistered(true);
  };
  return (
    <div className="signup" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
      <div className="signup-container">
      {isRegistered ? (
        <div className="signup-box">
          <h2>Registration Successful!</h2>
          <p>Your username: {username}</p>
          <p>Your email: {email}</p>
          <button to={navigate} onClick={() => setIsRegistered(false)}>Now Login</button>
        </div>
      ) : (
        <div className="signup-box">
           <img src={Logo} className="logo" alt="" />
          <h2>Signup</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSignup}>Sign Up</button>
          <h4 style={{color:"white"}}>Already have a Account?<RouterLink style={{textDecoration: "none",color:"#F6A21E"}} to={"/auth/login"}>Log In</RouterLink></h4>
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
export default SignupPage;
