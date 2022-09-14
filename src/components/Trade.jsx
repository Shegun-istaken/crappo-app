import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import bit from "../images/bitcon.png";
import eth from "../images/ethereum.png";
import lite from "../images/litecoin.png";
import arrow from "../images/right-arrow-big.svg";
import right from "../images/right-w.svg";

function Trade() {
  const [state, setState] = useState("Bitcoin");

  useEffect(() => {
    Aos.init({ duration:"2000"});
  });

  const [firstDivH2Ref, firstDivH2Visible] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [tradeLiRef, tradeLiVisible] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const coins = [
    {
      name: "Bitcoin",
      acronym: "BTC",
      src: `${bit}`,
      text: "Digital currency in which a record of transactions is maintained.",
    },
    {
      name: "Ethereum",
      acronym: "BTC",
      src: `${eth}`,
      text: "Blockchain technology to create and run decentralized digital applications.",
    },
    {
      name: "LiteCoin",
      acronym: "BTC",
      src: `${lite}`,
      text: "Cryptocurrency that enables instant payments to anyone in the world.",
    },
  ];
  return (
    <section className="trade">
      <h2 data-aos="zoom-in"
      >
        Trade securely and market the high growth cryptocurrencies.
      </h2>
      <ul
        ref={tradeLiRef}
        className={`${tradeLiVisible && "trade-animate trade-mobile-animate"}`}
      >
        {coins.map((coin, i) => (
          <li
            id={state === coin.name ? "selected" : ""}
            key={coin.name}
            style={{ "--i": i }}
            onClick={(e) => {
              setState(coin.name);
            }}
          >
            <img src={coin.src} alt={`${coin.name} symbol`} />
            <div>
              <h3>{coin.name}</h3>
              <h5>{coin.acronym}</h5>
            </div>
            <p>{coin.text}</p>
            {state === coin.name ? (
              <button className="button-01">
                Start Mining <img src={arrow} alt="" />
              </button>
            ) : (
              <button className="button-02">
                <img src={right} alt="button with an arrow pointing right" />
              </button>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Trade;
