import OutInteriorAdvert from "@/components/outInteriorAdvert/OutInteriorAdvert";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <section className="w-full h-max py-52 bg-hero-pattern bg-no-repeat bg-cover">
          <div className="w-1/2 ml-auto mr-26 p-20">
            <h1 className="text-5xl text-center font-semibold">
              Наружная реклама Харьков
            </h1>
            <p className="text-4xl text-center border-solid border-t-4 border-red-600">
              Вывески
              <br />
              Обьемные буквы
              <br />
              Таблички
            </p>
          </div>
        </section>
        <OutInteriorAdvert />
      </main>
    </>
  );
}
