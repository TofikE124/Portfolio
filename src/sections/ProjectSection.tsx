import { BsArrowUpRight } from "react-icons/bs";
import { BiLogoGithub } from "react-icons/bi";

import React, { useEffect, useState } from "react";
import Projects from "../data/Projects";

const ProjectSection = () => {
  const [projectElements, setProjectElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    setProjectElements(() => {
      return [...Projects].map((project) => {
        return (
          <div className="project-content">
            <div className="content">
              <h3>{project.title}</h3>
              <a href={project.websiteURL} target="_blank">
                <img src={project.imageURL} />
              </a>
              <div className="project-btn-box btn-box">
                <a className="btn" href={project.codeURL} target="_blank">
                  <BiLogoGithub />
                </a>
                <a className="btn" href={project.websiteURL} target="_blank">
                  <BsArrowUpRight />
                </a>
              </div>
            </div>
          </div>
        );
      });
    });
  }, []);

  return (
    <section className="project" id="project">
      <h2 className="heading">
        My <span>Projects</span>
        <span
          className="animate scroll"
          style={{ "--i": 1 } as React.CSSProperties}
        ></span>
      </h2>
      <div className="project-row">
        <div className="project-box"> {projectElements}</div>
      </div>
    </section>
  );
};

export default ProjectSection;
