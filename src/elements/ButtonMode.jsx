import { useEffect, useState } from "react";
import { IoMdMoon } from "react-icons/io";
import { MdSunny } from "react-icons/md";

const ButtonMode = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="">
      <div
        onClick={() => setDarkMode(!darkMode)}
        className="text-gray-400 h-12 w-12 flex items-center justify-center  cursor-pointer group hover:text-gray-900 dark:hover:text-white duration-300 ease-in-out text-lg md:text-base"
      >
        {darkMode ? (
          <MdSunny className="group-hover:scale-110" />
        ) : (
          <IoMdMoon className="group-hover:scale-110" />
        )}
      </div>
    </div>
  );
};

export default ButtonMode;
