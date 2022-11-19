import React, { useState } from "react";
import "./Header.css";
import logo from "../../../assets/logo.png";
import Bars from "../../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuopened] = useState(false);
  return (
    <div className="header">
      <img className="logo" src={logo} alt="error loading" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => {
            setMenuopened(true);
          }}
        >
          <img
            src={Bars}
            alt=""
            style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuopened(false)}
              to="home"
              spy={true}
              smooth={true}
              activeClass="active"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuopened(false)}
              to="programs"
              spy={true}
              smooth={true}
            >
              Programs
            </Link>
          </li>
          <li>
            {" "}
            <Link
              onClick={() => setMenuopened(false)}
              to="reasons"
              spy={true}
              smooth={true}
            >
              why us
            </Link>
          </li>
          <li>
            {" "}
            <Link
              onClick={() => setMenuopened(false)}
              to="plans"
              spy={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuopened(false)}
              to="testimonials"
              spy={true}
              smooth={true}
            >
              Testimonials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
