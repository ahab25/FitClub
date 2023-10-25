import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
import cross from "../../assets/cross.png";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="header">
      <img src={Logo} className="logo" alt="" />

      {mobile && !menuOpened ? (
        <div
          className="bars"
          style={{
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "2.5rem", height: "1.8rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          {mobile && (
            <li>
              <Link
                onClick={() => setMenuOpened(false)}
                activeClass="active"
                to=""
                smooth={true}
                spy={true}
              >
                <img src={cross} alt="" style={{ height: "2rem" }} />
              </Link>
            </li>
          )}

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="header"
              smooth={true}
              spy={true}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="programs"
              smooth={true}
              spy={true}
            >
              Programs
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="reasons"
              smooth={true}
              spy={true}
            >
              Why Us
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="plans"
              smooth={true}
              spy={true}
            >
              Plans
            </Link>
          </li>

          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to="testimonials"
              smooth={true}
              spy={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
      <button style={{borderRadius: "5",color:"#ff6600"}} className="login">
        <RouterLink
          style={{ textDecoration:"none",color: "white", alignSelf: "center" }}
          to={"/auth/signup"}
        >
         Join Now
        </RouterLink>
      </button>
    </div>
  );
};

export default Header;
