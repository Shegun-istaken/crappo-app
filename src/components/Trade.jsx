import bit from "../images/bitcon.png";
import eth from "../images/ethereum.png";
import lite from "../images/litecoin.png";
import arrow from "../images/right-arrow-big.svg";

function Trade() {
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
      <h2>Trade securely and market the high growth cryptocurrencies.</h2>
      <ul>
        {coins.map((coin) => (
          <li key={coin.name}>
            <img src={coin.src} alt={`${coin.name} symbol`} />
            <div>
              <h3>{coin.name}</h3>
              <h5>{coin.acronym}</h5>
            </div>
            <p>{coin.text}</p>
            <button>
              <img src={arrow} alt="button with an arrow pointing right" />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Trade;