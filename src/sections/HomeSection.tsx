import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
} from "react-icons/bi";

export const HomeSection = () => {
  return (
    <section className="home show-animate" id="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span>Tofik Elias</span>{" "}
          <span
            className="animate"
            style={{ "--i": 2 } as React.CSSProperties}
          ></span>
        </h1>
        <div className="text-animate">
          <h3>Frontend Developer</h3>
          <span
            className="animate"
            style={{ "--i": 3 } as React.CSSProperties}
          ></span>
        </div>
        <p>
          Junior Front-End Developer adept in React and Next.js, passionate
          about crafting user-centric web experiences. Dedicated over 500 hours
          to comprehensive Web Development courses, combining technical
          proficiency with a commitment to personal growth.
          <br />
          Collaborative by nature, I thrive on learning from seasoned developers
          while contributing fresh perspectives. Strong communication skills and
          a problem-solving mindset drive my ability to create polished
          solutions.
          <br />
          Eager to leverage my coding passion and skills within a talented
          engineering team, I aim to deliver high-quality, innovative solutions.
          <span
            className="animate"
            style={{ "--i": 4 } as React.CSSProperties}
          ></span>
        </p>
        <div className="btn-box">
          <a
            href="https://www.linkedin.com/in/tofike124/"
            target="_blank"
            className="btn"
          >
            Hire Me
          </a>
          <a href="mailto:tofikelias77@gmail.com" className="btn">
            Let's Talk
          </a>
          <span
            className="animate"
            style={{ "--i": 5 } as React.CSSProperties}
          ></span>
        </div>
      </div>
      <div className="home-sci">
        <a href="https://www.facebook.com/tofik.elias.7/" target="_blank">
          {<BiLogoFacebookCircle />}
        </a>
        <a href="https://twitter.com/EliasTofik" target="_blank">
          {<BiLogoTwitter />}
        </a>
        <a href="https://www.linkedin.com/in/tofike124/" target="_blank">
          {<BiLogoLinkedinSquare />}
        </a>
        <span
          className="animate"
          style={{ "--i": 6 } as React.CSSProperties}
        ></span>
      </div>
      <div className="home-imgHover"></div>
      <span
        className="animate home-img"
        style={{ "--i": 7 } as React.CSSProperties}
      ></span>
    </section>
  );
};
