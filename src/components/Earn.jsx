import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"

function Earn() {

  useEffect(() => {
    Aos.init({ duration:"2000"});
  });


  return (
    <section className="earn">
      <div data-aos="slide-up"
      >
        <h2>Check how much you can earn</h2>
        <p   data-aos="slide-up" >
          Let&apos;s check your hash rate to see how much you will earn today,
          Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>

      <div className="calculate" data-aos="zoom-in-down" >
        <form
          action="submit"
          onSubmit={(e) => {
            // e.preventDefault();
          }}
        >
          <input type="text" placeholder="Enter your hash rate" />
          <select name="hash" id="hash">
            <option value="th">TH/s</option>
            <option value="mh">MH/s</option>
          </select>
          <button>Calculate</button>
        </form>

        <div>
          <h3>ESTIMATED 24 HOUR REVENUE:</h3>
          <h4>
            0.055 130 59 ETH <span>($1275)</span>
          </h4>
          <p>
            Revenue will change based on mining difficulty and Ethereum price.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Earn;
