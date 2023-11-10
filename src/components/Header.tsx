import { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [menuActive, setMneuActive] = useState(false);

  useEffect(() => {
    // // scroll sections
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll("header nav a");

    window.addEventListener("scroll", handleWindowScroll);
    function handleWindowScroll() {
      sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
          // active navbar links
          navLinks.forEach((link) => {
            link.classList.remove("active");
            document
              .querySelector(`header nav a[href*=${id}]`)
              ?.classList.add("active");
          });
          // active sections for animation scroll
          sec.classList.add("show-animate");
        }
      });

      header?.classList.toggle("sticky", window.scrollY > 100);
    }

    // sticky header
    let header = document.querySelector("header");

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  function toggleMneuActive() {
    setMneuActive(!menuActive);
  }

  return (
    <header className="header">
      <a href="" className="logo">
        Tofik.
        <span
          className="animate"
          style={{ "--i": 1 } as React.CSSProperties}
        ></span>
      </a>
      <div onClick={toggleMneuActive} id="menu-icon">
        <span
          className="animate"
          style={{ "--i": 2 } as React.CSSProperties}
        ></span>
        {menuActive ? <BiX /> : <BiMenu />}
      </div>
      <nav className={`navbar ${menuActive ? "active" : ""}`}>
        <a href="#home" className="active">
          Home
        </a>
        <HashLink onClick={toggleMneuActive} to="/#about">
          About
        </HashLink>
        <HashLink onClick={toggleMneuActive} to="#project">
          Projects
        </HashLink>
        <HashLink onClick={toggleMneuActive} to="#skills">
          Skills
        </HashLink>
        {/* <HashLink onClick={toggleMneuActive} to="#contact">
          Contact
        </HashLink> */}

        <span className="active-nav"></span>
        <span
          className="animate"
          style={{ "--i": 2 } as React.CSSProperties}
        ></span>
      </nav>
    </header>
  );
};

export default Header;
