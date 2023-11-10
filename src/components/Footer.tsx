import { BiUpArrowAlt } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &#169; 2023 by Tofik Elias | All Rights Reserved.</p>
      </div>

      <div className="footer-iconTop">
        <a href="#">
          <i>{<BiUpArrowAlt />}</i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
