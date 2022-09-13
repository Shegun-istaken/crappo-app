import { useInView } from "react-intersection-observer";

function Earn() {
  const [firstDivRef, firstDivVisible] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [firstDivPRef, firstDivPVisible] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const [firstDivCalcRef, firstDivCalcVisible] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });


  return (
    <section className="earn">
      <div
        ref={firstDivRef}
        style={{ animation: firstDivVisible && "slide-up 2s ease-in-out both" }}
      >
        <h2>Check how much you can earn</h2>
        <p         ref={firstDivPRef}
        style={{ animation: firstDivPVisible && "scale-up 1.5s ease-in-out both 0.5s" }}>
          Let&apos;s check your hash rate to see how much you will earn today,
          Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>

      <div className="calculate" ref={firstDivCalcRef}
        style={{ animation: firstDivCalcVisible && "scale-up 2s ease-in-out both" }}>
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
