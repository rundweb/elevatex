// router-dom
import { Link } from "react-router-dom";

// icons
import { HiArrowNarrowRight } from "react-icons/hi";

const ButtonBlue = ({ text }) => {
  return (
    <Link className="bg-blue-600 w-full md:w-max px-10 flex items-center justify-center h-12 rounded-lg text-white font-medium hover:bg-blue-700 ease-in-out duration-300">
      {text}
      <HiArrowNarrowRight className="relative top-[1px] text-xl ml-4" />
    </Link>
  );
};

export default ButtonBlue;
