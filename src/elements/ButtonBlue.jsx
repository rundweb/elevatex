// router-dom
import { Link } from "react-router-dom";

// icons
import { HiArrowNarrowRight } from "react-icons/hi";

const ButtonBlue = ({ text }) => {
  return (
    <Link className="gradient-primary w-full md:w-max px-10 flex items-center justify-center h-12 rounded-lg text-white font-medium  shadow-lg hover:from-blue-600 hover:to-violet-600">
      {text}
      <HiArrowNarrowRight className="relative top-[1px] text-xl ml-4" />
    </Link>
  );
};

export default ButtonBlue;
