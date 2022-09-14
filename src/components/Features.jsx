import { useInView } from "react-intersection-observer";
import feature1 from "../images/feature-1-img.png";
import feature2 from "../images/feature-2-img.png";
import feature3 from "../images/feature-3-img.png";

function Features() {
  const [firstDivH2Ref, firstDivH2Visible] = useInView({
    threshold: 0.00000001,
    triggerOnce: true,
  });

  const [divRef, divVisible] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [imgRef, imgVisible] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [div1Ref, div1Visible] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [img1Ref, img1Visible] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [div2Ref, div2Visible] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [img2Ref, img2Visible] = useInView({
    threshold: 0.3,
    triggerOnce: true,
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
      <h2
        ref={firstDivH2Ref}
        style={{
          animation: firstDivH2Visible && "scale-up 1.5s ease-in-out both",
        }}
      >
        Market sentiments, portfolio, and run the infrastructure of your choice
      </h2>
      <div>
        <div
          ref={divRef}
          style={{ animation: divVisible && "slide-up 2s ease-in-out both" }}
        >
          <h3>{sections[0].heading}</h3>
          <p>{sections[0].text}</p>
          <button>Learn More</button>
        </div>
        <img
          src={sections[0].src}
          alt=""
          ref={imgRef}
          style={{ animation: imgVisible && "scale-up 2s ease-in-out both" }}
        />
      </div>
      <div>
        <div
          ref={div1Ref}
          style={{ animation: div1Visible && "slide-up 2s ease-in-out both" }}
        >
          <h3>{sections[1].heading}</h3>
          <p>{sections[1].text}</p>
          <button>Learn More</button>
        </div>
        <img
          src={sections[1].src}
          alt=""
          ref={img1Ref}
          style={{ animation: img1Visible && "scale-up 2s ease-in-out both" }}
        />
      </div>
      <div>
        <div
          ref={div2Ref}
          style={{ animation: div2Visible && "slide-up 2s ease-in-out both" }}
        >
          <h3>{sections[2].heading}</h3>
          <p>{sections[2].text}</p>
          <button>Learn More</button>
        </div>
        <img
          src={sections[2].src}
          alt=""
          ref={img2Ref}
          style={{ animation: img2Visible && "scale-up 2s ease-in-out both" }}
        />
      </div>
    </section>
  );
}

export default Features;
