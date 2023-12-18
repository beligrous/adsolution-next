import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhoneFlip,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faViber,
  faSkype,
  faSquareFacebook,
  faSquareInstagram,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Navbar from "../navbar/Navbar";

const Footer = () => {
  return (
    <footer className="bg-black text-[#bfbfbf] h-[545px] text-center pt-10 px-8">
      <section className="w-[1130px] mx-auto border-b-1 border-solid border-inherit">
        <div className="flex justify-center items-center gap-2 my-5">
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{ color: "#bdbfc2", width: "15px" }}
          />
          <span>Украина, г.Харьков</span>
        </div>
        <div className="flex mx-auto py-5 justify-center gap-52">
          <a
            className="flex items-center gap-1"
            href="tel:+380674264526"
            target="_blanc"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faPhoneFlip}
              style={{ color: "#e73718", width: "20px" }}
            />
            <span>+38 (067) 426-45-26</span>
          </a>
          <a
            className="flex items-center gap-1"
            href="tel:+380505919810"
            target="_blanc"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faPhoneFlip}
              style={{ color: "#e73718", width: "20px" }}
            />
            <span>+38 (050) 591-98-10</span>
          </a>
        </div>
        <div className="flex justify-between my-5">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_180,h_63/https://adsolution.biz.ua/wp-content/uploads/2021/02/Adsolution-logo-2X.png"
            alt="Adsolution Logo"
          />
          <a
            className="flex items-center gap-1"
            href="mailto:info@adsolution.biz.ua"
            target="_blanc"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: "#d92612", width: "20px" }}
            />
            <span>info@adsolution.biz.ua</span>
          </a>
          <button className="py-4 px-5 bg-red-600 text-white">
            Связаться с нами
          </button>
        </div>
        <div className="flex mx-auto py-5 justify-center gap-52">
          <a
            className="flex items-center gap-1"
            href="tel:+380674264526"
            target="_blanc"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faSkype}
              style={{ color: "#009EDC", width: "20px" }}
            />
            <span>ADSOLUTION</span>
          </a>
          <a
            className="flex items-center gap-1"
            href="tel:+380505919810"
            target="_blanc"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faViber}
              style={{ color: "#7360f2", width: "20px" }}
            />
            <span>+38 (050) 591-98-10</span>
          </a>
        </div>
      </section>
      <section className="flex justify-center gap-3 my-5">
        <a href="https://www.facebook.com/ADSOLUTIONSPACE">
          <FontAwesomeIcon
            icon={faSquareFacebook}
            style={{ color: "#0856dd", width: "34px" }}
          />
        </a>
        <a href="https://www.instagram.com/adsolution">
          <FontAwesomeIcon
            icon={faSquareInstagram}
            style={{ color: "#dd3c92", width: "34px" }}
          />
        </a>
        <a href="https://www.youtube.com/channel/UCPMiCuFBuksWb5U9Z1NodUg?view_as=subscriber">
          <FontAwesomeIcon
            icon={faSquareYoutube}
            style={{
              color: "#c4302b",
              width: "34px",
            }}
          />
        </a>
      </section>
      <section className="flex justify-center">
        <Navbar />
      </section>
    </footer>
  );
};

export default Footer;
