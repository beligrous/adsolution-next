import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <ul className="flex items-center text-white gap-6">
        <li>
          <Link href="/servise">Услуги</Link>
        </li>
        <li>
          <Link href="/posts">Статьи</Link>
        </li>
        <li>
          <Link href="/ourJob">Наша работа</Link>
        </li>
        <li>
          <Link href="/aboutUs">О нас</Link>
        </li>
        <li>
          <Link href="/contacts">Контакт</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
