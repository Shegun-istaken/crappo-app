import "./App.css";
import Header from "./components/Header";
import WhyCrappo from "./components/WhyCrappo";

function Earn() {
  return (
    <section className="earn">
      <div>
        <h2>Check how much you can earn</h2>
        <p>
          Let&apos;s check your hash rate to see how much you will earn today,
          Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>

      <div className="calculate">
        <form
          action="submit"
          onSubmit={(e) => {
            // e.preventDefault();
          }}
        >
          <input type="text" placeholder="Enter your hash rate" />
          <select name="hash" id="hash">
            <option value="th" selected>
              TH/s
            </option>
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

function App() {
  return (
    <>
      <Header />
      <WhyCrappo />
      <Earn />
    </>
  );
}

export default App;
