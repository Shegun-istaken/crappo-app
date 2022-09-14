import FooterList from "./FooterLists";
import logo from "../images/logo.svg";
import visa from "../images/visa.svg";
import mastercard from "../images/mastercard.svg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import bitcoin from "../images/bitcoin.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import youtube from "../images/youtube.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: "2000" });
  });
  const links = ["Home", "Products", "About", "Features", "Contact"];

  const resources = ["Resources", "Download Whitepaper", "Smart Token", "Blockchain Developer", "Crypto API", "Interest"]

  const payment = [ <img src={visa} alt="visa logo" />, <img src={mastercard} alt="mastercard logo" />,               <img src={bitcoin} alt="bitcoin logo" />]
  return (
    <footer>
      <div>
        <button>
          <img src={logo} alt="Crappo Logo" />
        </button>
        <FooterList list={links} heading="Quick Link" className="links"/>
        <FooterList list={resources} heading="Resources" className="resources"/>
        <div>
          <h3>We accept the following payment systems</h3>
          <div className="payments">
            <button data-aos="fade-up">
              <img src={visa} alt="visa logo" />
            </button>
            <button data-aos="fade-up">
              <img src={mastercard} alt="mastercard logo" />
            </button>
            <button data-aos="fade-up">
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
