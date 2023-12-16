const Header = () => {
  return (
    <header className="bg-black border-solid border-t-4 border-red-600">
      <div className="w-3/4 mx-auto">
        <div className="text-gray-600  flex justify-between">
          <ul className="flex gap-6">
            <li className="after:content-['|'] after:text-white after:ml-4">
              <a href="tel:+380505919810">+38 (050) 591-98-10</a>
            </li>
            <li className="after:content-['|'] after:text-white after:ml-4">
              <a href="tel:+380674264526">+38 (067) 426-45-26</a>
            </li>
          </ul>
          <p>lang</p>
          <button className="bg-red-600 text-white py-2.5 px-3.5">
            Заказать обратный звонок
          </button>
        </div>
        <div className="flex justify-between">
          <img
            src="https://sp-ao.shortpixel.ai/client/to_auto,q_lossless,ret_img,w_180,h_63/https://adsolution.biz.ua/wp-content/uploads/2021/02/Adsolution-logo-2X.png"
            alt="Adsolution Logo"
          />
          <ul className="flex items-center text-white gap-6">
            <li>
              <a>Услуги</a>
            </li>
            <li>
              <a>Статьи</a>
            </li>
            <li>
              <a>Наша работа</a>
            </li>
            <li>
              <a>О нас</a>
            </li>
            <li>
              <a>Контакт</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
