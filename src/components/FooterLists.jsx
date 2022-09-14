import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function FooterList(props) {
  useEffect(() => {
    Aos.init({ duration: "2000" });
  });

  return (
    <div className={props.className}>
      <h3>{props.heading}</h3>
        {props.list.map((item, i) => (
          <button data-aos="fade-up" data-aos-delay={`${i}00`}>
            {item}
          </button>
        ))}
    </div>
  );
}

export default FooterList;
