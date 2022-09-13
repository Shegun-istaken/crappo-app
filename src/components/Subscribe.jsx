import { useInView } from "react-intersection-observer";

function Subscribe() {

  const [sectionRef, sectionVisible] = useInView({
    threshold:0.3,
    triggerOnce: true,
  })

  return (
    <section className="subscribe" >
      <div ref={sectionRef} style={{animation: sectionVisible && "scale-up 2s ease-in-out both"}}>
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
