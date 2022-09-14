import { useInView } from "react-intersection-observer";
// import bar1 from "../images/bar1.svg";
// import bar2 from "../images/bar2.svg";jg
import logo from "../images/logo.svg";
import divider from "../images/divider.svg";
import hero from "../images/hero.svg";
import right from "../images/right.svg";
import MobileMenu from "./MobileMenu";

function Header() {
  const [myRef, headerVisible] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <header
      ref={myRef}
      className={`${headerVisible && "header-animate header-mobile-animate"}`}
    >
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
          <MobileMenu />
        </ul>
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
