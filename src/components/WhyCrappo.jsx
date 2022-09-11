import base1 from "../images/base-1.svg";
import base2 from "../images/base-2.svg";
import base3 from "../images/base-3.svg";
import why from "../images/why-img.png";

function WhyCrappo() {
  const items = [
    { num: "$30B", title: "Digital Currency Exchange", src: `${base1}` },
    { num: "190+", title: "Countries Around The World", src: `${base2}` },
    { num: "$10M", title: "Trusted Wallet Investors", src: `${base3}` },
  ];

  return (
    <section className="whyCrappo">
      <ul>
        {items.map((item) => (
          <li key={item.num}>
            <img src={item.src} alt="" />
            <div>
              <h4>{item.num}</h4>
              <p>{item.title}</p>
            </div>
          </li>
        ))}
      </ul>

      <div>
        <img src={why} alt="ethereum logo on a mechanical background" />
        <div>
          <h2>Why you should choose Crappo</h2>
          <p>
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default WhyCrappo;
