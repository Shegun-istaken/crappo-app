import { useState } from "react";
import bar1 from "../images/bar1.svg";
import bar2 from "../images/bar2.svg";
import logo from "../images/logo.svg";
import divider from "../images/divider.svg";
import hero from "../images/hero.svg";
import right from "../images/right.svg";
import hamburger from "../images/hamburger.svg";
import x from "../images/x.svg";

function MobileNav(props) {
  return (
    <nav className="mobile-nav">
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

function Header() {
  const [nav, setNav] = useState(null);

  function handleClick(e) {
    let name = e.target.name;

    if (name === "hamburger") {
      setNav(
        <MobileNav
          OnClick={(e) => {
            handleClick(e);
          }}
        />
      );
    } else {
      setNav(null);
    }
  }

  return (
    <header>
      <nav>
        <ul className="nav-ul">
          <li>
            <button>
              <img src={logo} alt="crappo logo" />
            </button>
          </li>
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
          <li>
            <button>Login</button>
          </li>
          <img src={divider} alt="dividing line" className="divide" />
          <li>
            <button>Register</button>
          </li>
          <button
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
        </ul>
        {nav}
      </nav>

      <div className="hero">
        <div className="hero-text">
          <div className="save-icon">
            <p>75% SAVE</p>
            <p>For the Best Black Friday Weekend</p>
          </div>
          <h1>Fastest &amp; Secure Platform To Invest In Crypto</h1>
          <p>
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </p>
          <button>
            Try for free <img src={right} alt="right arrow" />
          </button>
        </div>
        <img src={hero} alt="bitcoin icon for dashboard hero" />
      </div>
      {/* <img className="bar1" src={bar1} alt="" />
        <img className="bar2" src={bar2} alt="" /> */}
    </header>
  );
}

export default Header;
