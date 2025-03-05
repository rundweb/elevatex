import { Link } from "react-router-dom";

// icons
import { FiBookOpen } from "react-icons/fi";

const ButtonGray = ({ text }) => {
  return (
    <Link className="bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-500 dark:text-gray-200 text-gray-900 w-full md:w-max px-10 flex items-center justify-center h-12 rounded-lg  font-medium dark:hover:bg-gray-800 dark:hover:text-white duration-300 ease-in-out hover:bg-gray-100 hover:text-blue-700">
      {text}
      <FiBookOpen className="relative top-[1px] text-xl ml-3" />
    </Link>
  );
};

export default ButtonGray;
