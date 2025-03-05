// icons
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

// data
import { menuItems } from "../assets/data/data";

// link router dom
import { Link } from "react-router-dom";

// usestate
import { useState } from "react";

// gsap
import gsap from "gsap";
import ButtonMode from "../elements/ButtonMode";

const NavbarComponents = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const menuItem = document.querySelectorAll(".menu");
  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      setOpenMenu(true);
    });
  });

  if (openMenu === false) {
    gsap.fromTo(
      ".menu",
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.1,
        delay: 0.1,
        ease: "back.out",
      }
    );

    gsap.fromTo(
      ".btn-x",
      { rotate: 360 },
      { rotate: 0, duration: 1, ease: "back.out" }
    );
  }
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div data-aos="fade-left" data-aos-duration="1000">
          <a
            href="#"
            className="text-2xl md:text-3xl font-semibold whitespace-nowrap text-gray-900 dark:text-white"
          >
            Elevate<span>X</span>
          </a>
        </div>

        {/* mobile menu */}
        <div
          className={`fixed md:hidden  flex-col top-16 left-0 w-full bg-white dark:bg-gray-900 h-max p-4 shadow-lg ${
            openMenu ? "hidden" : "flex"
          }`}
        >
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="block py-2 text-gray-900 dark:text-white menu w-max"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex flex-row items-center gap-4 flex-1 justify-end px-3" data-aos="fade-left" data-aos-duration="1000">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className="text-gray-900 dark:text-white block hover:text-blue-700 ease-in-out duration-300 dark:hover:text-blue-700"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 justify-end md:block md:flex-none" data-aos="fade-left" data-aos-duration="1000">
          <ButtonMode />
        </div>
        <div 
          className="text-3xl text-gray-900 dark:text-white btn-x md:hidden"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <HiOutlineMenuAlt3 data-aos="fade-left" data-aos-duration="1000"/> : <IoClose />}
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponents;
