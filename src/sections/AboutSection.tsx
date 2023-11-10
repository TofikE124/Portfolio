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
          My name is Tofik Elias, I'm 18 years old and I'm passionate about
          learning new coding skills everyday on my own. I have built a lot of
          professional websites using React.js and Typescript and I will always
          try to keep updated with everything new regarding Frontend
          Development.
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
