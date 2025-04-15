import React, { useEffect, useRef } from "react";
import machinelearningLogo from "../images/machinelearning.png";
import sushiclickerLogo from "../images/sushiclicker.png";
import flappybirdLogo from "../images/flappybird.png";
import statifyLogo from "../images/statify.png";
import mygithubLogo from "../images/githubpfp2.png";
import "../components/carousel.css";

const Carousel = () => {
  // Create refs to access DOM elements
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const backButtonRef = useRef(null);
  let unAcceptClickTimeout = useRef(null);

  // Function to handle slider movement
  const showSlider = (type) => {
    if (!carouselRef.current || !listRef.current) return;

    // Disable buttons during animation
    if (nextButtonRef.current)
      nextButtonRef.current.style.pointerEvents = "none";
    if (prevButtonRef.current)
      prevButtonRef.current.style.pointerEvents = "none";

    // Remove existing classes and add the appropriate one
    carouselRef.current.classList.remove("next", "prev");

    // Get all items
    const items = listRef.current.querySelectorAll(".item");

    if (type === "next") {
      // Move first item to end
      if (items.length > 0) {
        listRef.current.appendChild(items[0]);
      }
      carouselRef.current.classList.add("next");
    } else {
      // Move last item to beginning
      if (items.length > 0) {
        listRef.current.prepend(items[items.length - 1]);
      }
      carouselRef.current.classList.add("prev");
    }

    // Re-enable buttons after animation
    clearTimeout(unAcceptClickTimeout.current);
    unAcceptClickTimeout.current = setTimeout(() => {
      if (nextButtonRef.current)
        nextButtonRef.current.style.pointerEvents = "auto";
      if (prevButtonRef.current)
        prevButtonRef.current.style.pointerEvents = "auto";
    }, 2000);
  };

  // Function to show details
  const showDetails = () => {
    if (carouselRef.current) {
      carouselRef.current.classList.remove("next", "prev");
      carouselRef.current.classList.add("showDetail");
    }
  };

  // Function to go back from details
  const goBack = () => {
    if (carouselRef.current) {
      carouselRef.current.classList.remove("showDetail");
    }
  };

  // Set up event listeners after component mounts
  useEffect(() => {
    // Clean up any timeouts when component unmounts
    return () => {
      if (unAcceptClickTimeout.current) {
        clearTimeout(unAcceptClickTimeout.current);
      }
    };
  }, []);

  return (
    <div className="carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        <div className="item">
          <img src={machinelearningLogo} alt="Product 1" />
          <div className="introduce">
            <div className="title">Machine Learning</div>
            <div className="topic">Movielens</div>
            <div className="des">
              In a team of 5, we built a neural network and decision tree to
              discover how selected factors impact how men and women rate
              movies.
            </div>
            <button className="seeMore" onClick={showDetails}>
              SEE DETAILS &#8599;
            </button>
          </div>
          <div className="detail">
            <div className="title">Machine learning project - Movielens</div>
            <div className="des">The specific factors we picked were</div>
            <div className="specifications">
              <div>
                <p>Used Time</p>
                <p>6 hours</p>
              </div>
              <div>
                <p>Charging port</p>
                <p>Type-C</p>
              </div>
              <div>
                <p>Compatible</p>
                <p>Android</p>
              </div>
              <div>
                <p>Bluetooth</p>
                <p>5.3</p>
              </div>
              <div>
                <p>Controlled</p>
                <p>Touch</p>
              </div>
            </div>
            <div className="checkout">
              <button>ADD TO CART</button>
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={sushiclickerLogo} alt="Product 2" />
          <div className="introduce">
            <div className="title">Game Design</div>
            <div className="topic">Sushi Clicker</div>
            <div className="des">
              My favorite food is Sushi and so this was a pet project I made
              based off of cookie clicker!
            </div>
            <button className="seeMore" onClick={showDetails}>
              SEE DETAILS &#8599;
            </button>
          </div>
          <div className="detail">
            <div className="title">Aerphone GHTK</div>
            <div className="des">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              reiciendis suscipit nobis nulla animi, modi explicabo quod
              corrupti impedit illo, accusantium in eaque nam quia adipisci aut
              distinctio porro eligendi. Reprehenderit nostrum consequuntur ea!
              Accusamus architecto dolores modi ducimus facilis quas
              voluptatibus! Tempora ratione accusantium magnam nulla tenetur
              autem beatae.
            </div>
            <div className="specifications">
              <div>
                <p>Used Time</p>
                <p>6 hours</p>
              </div>
              <div>
                <p>Charging port</p>
                <p>Type-C</p>
              </div>
              <div>
                <p>Compatible</p>
                <p>Android</p>
              </div>
              <div>
                <p>Bluetooth</p>
                <p>5.3</p>
              </div>
              <div>
                <p>Controlled</p>
                <p>Touch</p>
              </div>
            </div>
            <div className="checkout">
              <button>ADD TO CART</button>
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={flappybirdLogo} alt="Product 3" />
          <div className="introduce">
            <div className="title">Embedded Systems</div>
            <div className="topic">Flappy Bird</div>
            <div className="des">
              Using an nrf52833 microcontroller, we rebuilt a functional
              'Gameboy' copy that allows you to play flappy bird through either
              touch or audio.
            </div>
            <button className="seeMore" onClick={showDetails}>
              SEE DETAILS &#8599;
            </button>
          </div>
          <div className="detail">
            <div className="title">Aerphone GHTK</div>
            <div className="des">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              reiciendis suscipit nobis nulla animi, modi explicabo quod
              corrupti impedit illo, accusantium in eaque nam quia adipisci aut
              distinctio porro eligendi. Reprehenderit nostrum consequuntur ea!
              Accusamus architecto dolores modi ducimus facilis quas
              voluptatibus! Tempora ratione accusantium magnam nulla tenetur
              autem beatae.
            </div>
            <div className="specifications">
              <div>
                <p>Used Time</p>
                <p>6 hours</p>
              </div>
              <div>
                <p>Charging port</p>
                <p>Type-C</p>
              </div>
              <div>
                <p>Compatible</p>
                <p>Android</p>
              </div>
              <div>
                <p>Bluetooth</p>
                <p>5.3</p>
              </div>
              <div>
                <p>Controlled</p>
                <p>Touch</p>
              </div>
            </div>
            <div className="checkout">
              <button>ADD TO CART</button>
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={statifyLogo} alt="Product 4" />
          <div className="introduce">
            <div className="title">Full-stack</div>
            <div className="topic">Statify</div>
            <div className="des">
              I built a spotify stats app that allows you to login and view
              several statistics: most listened to songs, most listened to
              artists and listening trends!
            </div>
            <button className="seeMore" onClick={showDetails}>
              SEE DETAILS &#8599;
            </button>
          </div>
          <div className="detail">
            <div className="title">Aerphone GHTK</div>
            <div className="des">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              reiciendis suscipit nobis nulla animi, modi explicabo quod
              corrupti impedit illo, accusantium in eaque nam quia adipisci aut
              distinctio porro eligendi. Reprehenderit nostrum consequuntur ea!
              Accusamus architecto dolores modi ducimus facilis quas
              voluptatibus! Tempora ratione accusantium magnam nulla tenetur
              autem beatae.
            </div>
            <div className="specifications">
              <div>
                <p>Used Time</p>
                <p>6 hours</p>
              </div>
              <div>
                <p>Charging port</p>
                <p>Type-C</p>
              </div>
              <div>
                <p>Compatible</p>
                <p>Android</p>
              </div>
              <div>
                <p>Bluetooth</p>
                <p>5.3</p>
              </div>
              <div>
                <p>Controlled</p>
                <p>Touch</p>
              </div>
            </div>
            <div className="checkout">
              <button>ADD TO CART</button>
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>

        <div className="item">
          <img src={mygithubLogo} alt="Product 5" />
          <div className="introduce">
            <div className="title">Web Design</div>
            <div className="topic">This Portfolio</div>
            <div className="des">
              Slightly meta I know, but this website is something that took a
              lot of time. It's still a work in progress but I'm excited to
              continue working on it.
            </div>
            <button className="seeMore" onClick={showDetails}>
              SEE DETAILS &#8599;
            </button>
          </div>
          <div className="detail">
            <div className="title">Aerphone GHTK</div>
            <div className="des">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
              reiciendis suscipit nobis nulla animi, modi explicabo quod
              corrupti impedit illo, accusantium in eaque nam quia adipisci aut
              distinctio porro eligendi. Reprehenderit nostrum consequuntur ea!
              Accusamus architecto dolores modi ducimus facilis quas
              voluptatibus! Tempora ratione accusantium magnam nulla tenetur
              autem beatae.
            </div>
            <div className="specifications">
              <div>
                <p>Used Time</p>
                <p>6 hours</p>
              </div>
              <div>
                <p>Charging port</p>
                <p>Type-C</p>
              </div>
              <div>
                <p>Compatible</p>
                <p>Android</p>
              </div>
              <div>
                <p>Bluetooth</p>
                <p>5.3</p>
              </div>
              <div>
                <p>Controlled</p>
                <p>Touch</p>
              </div>
            </div>
            <div className="checkout">
              <button>ADD TO CART</button>
              <button>CHECKOUT</button>
            </div>
          </div>
        </div>
      </div>
      <div className="arrows">
        <button
          id="prev"
          ref={prevButtonRef}
          onClick={() => showSlider("prev")}
        >
          {"<"}
        </button>
        <button
          id="next"
          ref={nextButtonRef}
          onClick={() => showSlider("next")}
        >
          {">"}
        </button>
        <button id="back" ref={backButtonRef} onClick={goBack}>
          RETURN
        </button>
      </div>
    </div>
  );
};

export default Carousel;
