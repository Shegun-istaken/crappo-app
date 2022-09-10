import logo from "../images/logo.svg";
import visa from "../images/visa.svg";
import mastercard from "../images/mastercard.svg";
import bitcoin from "../images/bitcoin.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import youtube from "../images/youtube.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";

function Footer() {
  return (
    <footer>
      <div>
        <button><img src={logo} alt="Crappo Logo" /></button>
        <div className="links">
          <h3>Quick Link</h3>
          <button>Home</button>
          <button>Products</button>
          <button>About</button>
          <button>Features</button>
          <button>Contact</button>
        </div>
        <div className="resources">
          <h3>Resources</h3>
          <button>Download Whitepaper</button>
          <button>Smart Token</button>
          <button>Blockchain Developer</button>
          <button>Crypto API</button>
          <button>Interest</button>
        </div>
        <div>
          <h3>We accept the following payment systems</h3>
          <div className="payments">
            <button>
              <img src={visa} alt="visa logo" />
            </button>
            <button>
              <img src={mastercard} alt="mastercard logo" />
            </button>
            <button>
              <img src={bitcoin} alt="bitcoin logo" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <small>©2021 CRAPPO. All rights reserved</small>
        <div>
          <button>
            <img src={facebook} alt="facebook logo" />
          </button>
          <button>
            <img src={instagram} alt="instagram logo" />
          </button>
          <button>
            <img src={youtube} alt="youtube logo" />
          </button>
          <button>
            <img src={twitter} alt="twitter logo" />
          </button>
          <button>
            <img src={linkedin} alt="linkedin logo" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
