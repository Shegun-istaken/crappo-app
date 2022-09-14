import { useState } from "react";
import hamburger from "../images/hamburger.svg";
import x from "../images/x.svg";
import divider from "../images/divider.svg";

function MobileNav(props) {
  return (
    <nav id="mobile-nav-ul" className={props.classname}>
      <img name="x" onClick={props.OnClick} src={x} alt="X icon" id="x" />
      <ul>
        <li>
          <button>Products</button>
        </li>
        <li>
          <button>Features</button>
        </li>
        <li>
          <button>About</button>
        </li>
        <li>
          <button>Contact</button>
        </li>
        <div>
          <button>Login</button>
          <img src={divider} alt="dividing line" />
          <button>Register</button>
        </div>
      </ul>
    </nav>
  );
}

function MobileMenu() {
  const [nav, setNav] = useState(null);

  function handleClick(e) {
    let name = e.target.name;

    if (name === "hamburger") {
      setNav("active");
    } else {
      setNav("");
    }
  }
  return (
    <>
      <button
      id="ham-button"
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <img
          src={hamburger}
          name="hamburger"
          alt="hamburger menu"
          id="hamburger"
        />
      </button>
      <MobileNav
        classname={`mobile-nav ${nav}`}
        OnClick={(e) => {
          handleClick(e);
        }}
      />
    </>
  );
}

export default MobileMenu;