import React from "react";

const SkillsSection = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
        <span
          className="animate scroll"
          style={{ "--i": 1 } as React.CSSProperties}
        ></span>
      </h2>

      <div className="skills-row">
        <div className="skills-column">
          <h3 className="title">
            Coding Skills
            <span
              className="animate scroll"
              style={{ "--i": 2 } as React.CSSProperties}
            ></span>
          </h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>
                  HTML <span>90%</span>
                </h3>
                <div className="bar">
                  <span style={{ width: "90%" }}></span>
                </div>
              </div>

              <div className="progress">
                <h3>
                  CSS <span>80%</span>
                </h3>
                <div className="bar">
                  <span style={{ width: "80%" }}></span>
                </div>
              </div>

              <div className="progress">
                <h3>
                  JavaScript <span>90%</span>
                </h3>
                <div className="bar">
                  <span style={{ width: "90%" }}></span>
                </div>
              </div>

              <div className="progress">
                <h3>
                  React.js <span>100%</span>
                </h3>
                <div className="bar">
                  <span style={{ width: "100%" }}></span>
                </div>
              </div>

              <div className="progress">
                <h3>
                  Typescript <span>90%</span>
                </h3>
                <div className="bar">
                  <span style={{ width: "90%" }}></span>
                </div>
              </div>

              <div className="progress">
                <h3>
                  Git <span>80%</span>
                </h3>
                <div className="bar">
                  <span style={{ width: "80%" }}></span>
                </div>
              </div>
            </div>

            <span
              className="animate scroll"
              style={{ "--i": 3 } as React.CSSProperties}
            ></span>
          </div>
        </div>

        <div className="skills-column">
          <h3 className="title">
            Professional Skills
            <span
              className="animate scroll"
              style={{ "--i": 5 } as React.CSSProperties}
            ></span>
          </h3>
          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>
                  Web Development <span>95%</span>
                </h3>
                <div className="bar">
                  <span style={{ width: "95%" }}></span>
                </div>
              </div>

              <div className="progress">
                <h3>
                  Web Design<span>65%</span>
                </h3>
                <div className="bar">
                  <span style={{ width: "65%" }}></span>
                </div>
              </div>
            </div>
            <span
              className="animate scroll"
              style={{ "--i": 6 } as React.CSSProperties}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
