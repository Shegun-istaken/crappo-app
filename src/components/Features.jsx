import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import feature1 from "../images/feature-1-img.png";
import feature2 from "../images/feature-2-img.png";
import feature3 from "../images/feature-3-img.png";

function Features() {
  useEffect(() => {
    Aos.init({ duration: "3000" });
  });

  const sections = [
    {
      src: `${feature1}`,
      text: "Get full statistic information about the behaviour of buyers and sellers will help you to make the decision.",
      heading: "Invest Smart",
    },
    {
      src: `${feature2}`,
      text: "View all mining related information in realtime, at any point at any location and decide which polls you want to mine in.",
      heading: "Detailed Statistics",
    },
    {
      src: `${feature3}`,
      text: "Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.",
      heading: "Grow your profit and track your investments",
    },
  ];

  return (
    <section className="features">
      <h2>
        Market sentiments, portfolio, and run the infrastructure of your choice
      </h2>
      {sections.map((section, i) => (
        <div key={section.heading.slice(7)}>
          <div data-aos="slide-up">
            <h3>{section.heading}</h3>
            <p>{section.text}</p>
            <button>Learn More</button>
          </div>
          <img src={section.src} alt="" data-aos="zoom-in" />
        </div>
      ))}
    </section>
  );
}

export default Features;
