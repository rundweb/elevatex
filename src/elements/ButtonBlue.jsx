// router-dom
import { Link } from "react-router-dom";

// icons
import { HiArrowNarrowRight } from "react-icons/hi";

const ButtonBlue = ({ text }) => {
  return (
    <div className="gradient-primary w-full md:w-max px-10 flex items-center justify-center h-12 rounded-lg text-white font-medium  shadow-lg before:ease relative before:absolute before:h-12 before:w-6 before:bg-white transition-all before:right-0 before:top-0 before:translate-x-12 before:rotate-6 before:opacity-10 md:before:duration-700 before:duration-1000 hover:before:-translate-x-[30rem] md:hover:before:-translate-x-56 overflow-hidden">
      {text}
      <HiArrowNarrowRight className="relative top-[1px] text-xl ml-4" />
    </div>
  );
};

export default ButtonBlue;
