import aboutImg from "/images/about.jpg";
import React from "react";

const AboutSection = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">
        About
        <span>Me</span>
        <span
          className="animate scroll"
          style={{ "--i": 1 } as React.CSSProperties}
        ></span>
      </h2>
      <div className="about-img">
        <img src={aboutImg} alt="Image of tofik elias" />
        <span className="circle-spin"></span>
        <span
          className="animate scroll"
          style={{ "--i": 2 } as React.CSSProperties}
        ></span>
      </div>

      <div className="about-content">
        <h3>
          Frontend Developer!{" "}
          <span
            className="animate scroll"
            style={{ "--i": 3 } as React.CSSProperties}
          ></span>
        </h3>
        <p>
          Hey there, I'm Tofik Elias, an 18-year-old self-driven coder
          passionate about continual learning. I thrive on mastering new coding
          skills independently, specializing in building professional websites
          with React.js and Typescript.
          <br />
          My commitment to staying updated in Frontend Development is
          unwavering—I make it a point to embrace every new advancement. I'm
          dedicated to constant skill growth in the Frontend realm, fueled by my
          love for creating innovative digital experiences.
          <br />I will always try to grow my skills in Frontend
          <span
            className="animate scroll"
            style={{ "--i": 4 } as React.CSSProperties}
          ></span>
        </p>

        <div className="btn-box btns">
          <a href="#" className="btn">
            Read More
          </a>
          <span
            className="animate scroll"
            style={{ "--i": 5 } as React.CSSProperties}
          ></span>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
