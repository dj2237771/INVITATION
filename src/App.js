import "./App.css"; // Create an App.css file and put the CSS styles from the original styles.css in it
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import image1 from "./Assets/L1000880.JPG";
import image2 from "./Assets/L1001136.JPG";
import image3 from "./Assets/L1000872.JPG";

const MyStyledText = styled.p`
  font-family: "Josefin Sans", sans-serif; /* Replace 'Josefin Sans' with the desired font family */
  font-weight: 300;
`;

function App() {
  const [showContactPopup, setShowContactPopup] = useState(false);

  function showPopup() {
    setShowContactPopup(true);
  }

  function hidePopup() {
    setShowContactPopup(false);
  }
  return (
    <div>
      {/* intro start */}
      <header>
        <section className="title-box">
          <h1 className="title" id="title1">
            INVITATION
          </h1>
          {/* <button className="btn" id="btn0">Get Started</button> */}
        </section>
        <section className="header-info-box">
          <article className="header-info">
            <h2 className="header-sub-title">Daniel weds Anreetta </h2>
            <p>
              I am my beloved’s, and my beloved is mine. Song of Solomon 2:16
            </p>
          </article>
          <div className="img">
            <figure className="image-1">
              <img src={image1} alt="my_photo" />
              <figcaption>A Wonderful Day</figcaption>
            </figure>
          </div>
          {/* <button className="btn">Get Started</button> */}
        </section>
      </header>
      {/* intro end */}
      {/* focus start */}
      <section className="focus">
        <div className="phone">
          <figure className="image-2">
            <img src={image2} alt="my_photo" />
            <figcaption>A Wonderful Day</figcaption>
          </figure>
        </div>
        <article className="info-box">
          <p className="focus-info">
            Mr. James Ozhathil George and Mrs. Sindhu James
            <br />
            warmly extend their heartfelt invitation to share in the celebration
            of the Engagement and Wedding
            <br />
            of their beloved Son
          </p>
          <h2 className="focus-title">
            Daniel James <span>with</span> <span>Anreetta Maria Mathew </span>{" "}
          </h2>
          <p className="focus-info">
            the precious Daughter of Mathachan Vilangadan and Mrs. Binu
            Mathachan
          </p>
          <h2 className="focus-title">
            -<span>Engagement</span>
            <span>-</span>
          </h2>
          <h2 className="focus-title">St. Mary's Forane Church</h2>
          <p className="focus-info">
            27th December, 3pm
            <br />
            <a href="https://www.google.com/maps/dir//W8VX%2BVCP,+Ettumanoor-Ernakulam+Rd+Thrippunithura,+East+Fort+Gate,+Junction,+Kochi,+Kerala+682301,+India/@25.9911773,0.3167477,4z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3b08736e37f4faf1:0x13bf049ee5a83f07!2m2!1d76.3485766!2d9.944715?entry=ttu">
              Ernakulam Rd, Tripunithura
            </a>
          </p>
          <h2 className="focus-title">
            -<span>Reception</span>
            <span>-</span>
          </h2>
          <h2 className="focus-title">Shoba Auditorium</h2>
          <p className="focus-info">
            27th December, 5.30pm
            <br />
            <a href="https://www.google.com/maps/dir//SHOBA+AUDITORIUM27th+December,+5.30pmThiruvankulam,+Tripunithura+,+Ernakulam/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3b0875407245fde1:0x600340d17d84c3e9?sa=X&ved=2ahUKEwjHqpqqm6-AAxUtWEEAHVlbAisQ9Rd6BAgzEAA&ved=2ahUKEwjHqpqqm6-AAxUtWEEAHVlbAisQ9Rd6BAhCEAU">
              Tripunithura, Ernakulam Thiruvankulam
            </a>
          </p>
        </article>
        <div className="phone-small">
          <figure className="image-2">
            <img
              src={image2}
              alt="my_photo"
              style={{ transform: "rotate(-0.5deg)" }}
            />
            <figcaption>A Wonderful Day</figcaption>
          </figure>
        </div>
      </section>
      <section className="focus">
        <article className="info-box">
          <h2 className="focus-title">
            -<span>Wedding</span>
            <span>-</span>
          </h2>
          <h2 className="focus-title">-St. Mary's Forane Church</h2>
          <p className="focus-info">
            30th December, 11.30pm
            <br />
            <a href="https://www.google.com/maps/dir//-ST.+MARY'S+FORANE+CHURCH30th+December,+11.30pmWynad+Rd,+Punnakkadu,+Kodenchery,+Keral/@26.6813271,0.2448596,4z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba66bc2ce587d31:0x88c9052303fbc6ec!2m2!1d76.004858!2d11.433076?entry=ttu">
              Wynad Rd, Punnakkadu, Kodenchery, Kerala
            </a>
          </p>
          <h2 className="focus-title">
            -<span>Reception</span>
            <span>-</span>
          </h2>
          <h2 className="focus-title">K H Club</h2>
          <p className="focus-info">
            30th December, 5.30pm
            <br />
            <a href="https://www.google.com/maps/dir//K+H+Club/@26.6831466,0.2513663,4z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba66b953fc5d10f:0x395d41dda8f8460f!2m2!1d76.017358!2d11.4368356?entry=ttu">
              Thiruvambady - Adivaram Rd, Kodenchery, Kerala
            </a>
          </p>{" "}
          <br />
          <p className="focus-info">
            Your presence at both the Engagement and Wedding would truly make
            these celebrations even more special and memorable. We look forward
            to cherishing these moments with you.
          </p>
        </article>
        <div className="phone-small">
          <figure className="image-2">
            <img src={image3} alt="my_photo" />
            <figcaption>A Wonderful Day</figcaption>
          </figure>
        </div>
        <div className="phone">
          <figure style={{ transform: "rotate(-0.5deg)" }} className="image-2">
            <img src={image3} alt="my_photo" />
            <figcaption>A Wonderful Day</figcaption>
          </figure>
        </div>
      </section>
      {/* focus end */}
      {/* hello start */}
      <section className="hello">
        <h2 className="hello-title">Best compliments from Samuel James</h2>
        <h3 className="hello-sub-title">Information</h3>
        <div className="hello-box">
          <article className="unity">
            <i className="fa-brands fa-unity">
              <FontAwesomeIcon icon={faHeart} />
            </i>
            <h3>Engagement</h3>
            <p>
              Families preferably wearing matching Indian attire for both
              engagement and reception.
              <br />
              -- Parking provided at venue --
            </p>
          </article>
          <article className="privacy">
            <i className="fa-brands fa-unity">
              <FontAwesomeIcon icon={faHeart} />
            </i>
            <h3>Wedding</h3>
            <p>
              The wedding theme would consist of pastel colours.
              <br />
              -- Parking provided at venue --
            </p>
          </article>
          <article className="clarity">
            <i className="fa-brands fa-unity">
              <FontAwesomeIcon icon={faHeart} />
            </i>
            <h3>Reception</h3>
            <p>
              The wedding reception will have a colour theme consisting of
              metallic colours such as Bronze, Silver, and Gold as it is an
              evening function.
              <br />
              -- Parking provided at venue --
            </p>
          </article>
        </div>
      </section>
      {/* hello end */}
      {/* hello start */}
      <footer>
        <h1 className="footer-title">Social</h1>
        <div className="links">
          <li onClick={() => showPopup("Daniel")}>number</li>
          <li>
            <a href="https://www.instagram.com/anreetta_m">Instagram</a>
          </li>
          <li>
            <a href="https://www.facebook.com/Djames07944">Facebook</a>
          </li>
        </div>
        <div className="popup" id="popup">
          <article className="privacy">
            <h3> Contact Information</h3>
            <h3>
              <br />
              Daniel: +44 07944671196 <br />
              Anreetta: +44 7852947337
            </h3>
          </article>
          <button onClick={hidePopup}>Close</button>
        </div>
        <p>© FakeBook 2022</p>
      </footer>
      {/* hello end */}
    </div>
  );
}

export default App;
