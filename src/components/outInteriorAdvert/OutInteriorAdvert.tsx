const advertArray = [
  {
    index: "1",
    name: "Обьемные буквы",
    img: "https://adsolution.biz.ua/wp-content/uploads/2021/03/Obyomnye-bukvy.jpg.pagespeed.ce.YeZ15xItP5.jpg",
  },
  {
    index: "2",
    name: "Офисные таблички",
    img: "https://adsolution.biz.ua/wp-content/uploads/2021/03/Ofisnye-tablichki-8.jpg.pagespeed.ce.n8C8sou5i0.jpg",
  },
  {
    index: "3",
    name: "Лайтбокс",
    img: "https://adsolution.biz.ua/wp-content/uploads/2021/03/Lajtboks-2-1.jpg.pagespeed.ce.d5pio58qje.jpg",
  },
  {
    index: "4",
    name: "Стенды",
    img: "https://adsolution.biz.ua/wp-content/uploads/2021/03/Informatsionnyj-stend-3.jpg.pagespeed.ce.-SSe71loW.jpg",
  },
  {
    index: "5",
    name: "Вывески таблички",
    img: "https://adsolution.biz.ua/wp-content/uploads/2021/03/Vyveski-tablichki-10.jpg.pagespeed.ce.Yf1BwdXP2I.jpg",
  },
  {
    index: "6",
    name: "Широкоформатная печать",
    img: "https://adsolution.biz.ua/wp-content/uploads/2021/03/SHirokoformatnaya-pechat.jpg.pagespeed.ce.2C_Nrx1ZUo.jpg",
  },
];

const OutInteriorAdvert = () => {
  return (
    <section className="w-[1100px] mt-10 mx-auto">
      <h3 className="text-3xl text-center border-b-4 border-solid border-red-500 uppercase">
        наружная и интерьерная реклама
      </h3>
      <ul className="flex flex-wrap justify-between gap-5 my-20">
        {advertArray.map((item) => (
          <li key={item.index}>
            <div
              className="h-72 w-80 bg-cover"
              style={{ backgroundImage: `url(${item.img})` }}
            ></div>
            <p className="text-center uppercase">{item.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OutInteriorAdvert;
