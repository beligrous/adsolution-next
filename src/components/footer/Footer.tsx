import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-[#bfbfbf] h-[545px] text-center pt-10 px-8">
      <div className="w-[1130px] mx-auto">
        <div className="flex justify-center items-center gap-2 my-5">
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{ color: "#bdbfc2", width: "15px" }}
          />
          <span>Украина, г.Харьков</span>
        </div>
        <div className="flex mx-auto py-5 justify-center gap-52">
          <a href="tel:+380674264526" target="_blanc" rel="noopener noreferrer">
            +38 (067) 426-45-26
          </a>
          <a href="tel:+380505919810" target="_blanc" rel="noopener noreferrer">
            +38 (050) 591-98-10
          </a>
        </div>
        <div className="flex justify-between my-5">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_180,h_63/https://adsolution.biz.ua/wp-content/uploads/2021/02/Adsolution-logo-2X.png"
            alt="Adsolution Logo"
          />
          <a
            href="mailto:info@adsolution.biz.ua"
            target="_blanc"
            rel="noopener noreferrer"
          >
            info@adsolution.biz.ua
          </a>
          <button className="py-4 px-5 bg-red-600 text-white">
            Связаться с нами
          </button>
        </div>
        <div className="flex mx-auto py-5 justify-center gap-52">
          <a href="tel:+380674264526" target="_blanc" rel="noopener noreferrer">
            ADSOLUTION
          </a>
          <a
            className="before:content-['\f17e']"
            href="tel:+380505919810"
            target="_blanc"
            rel="noopener noreferrer"
          >
            +38 (050) 591-98-10
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
