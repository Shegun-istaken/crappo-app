import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Subscribe() {

  useEffect(() => {
    Aos.init({ duration:"3000"});
  });


  return (
    <section className="subscribe">
      <div data-aos="flip-up"
      >
        <div>
          <h2>Start mining now</h2>
          <p>
            Join now with CRAPPO to get the latest news and start mining now
          </p>
        </div>
        <div>
          <input type="text" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
