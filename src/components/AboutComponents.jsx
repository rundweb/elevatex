// images
import { Link } from "react-router-dom";
import about1 from "../assets/images/about_1.jpg";
import about2 from "../assets/images/about_2.jpg";

// icons
import { HiArrowNarrowRight } from "react-icons/hi";
const AboutComponents = () => {
  const aboutContent = [
    {
      name: "Our Vision",
      title:
        "Empowering businesses and professionals to establish a strong digital presence with modern, responsive, and high-quality design.",
      images: about1,
    },
    {
      name: "Our Goal",
      title:
        "To provide a seamless and professional website solution that enhances credibility, boosts conversions, and adapts to diverse.",
      images: about2,
    },
  ];

  const countAbout = [
    {
      count: "92%",
      title: "Happy Clients",
    },
    {
      count: "24",
      title: "Year of Experience",
    },
    {
      count: "14.2k+",
      title: "Completed Project",
    },
    {
      count: "12+",
      title: "Awards Won",
    },
  ];
  return (
    <section className="max-w-screen-xl m-auto p-4 min-h-screen flex flex-col gap-10 justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-center">
        <div>
          <h1
            className="text-lg font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span>Who We Are</span>
          </h1>
          <h2
            className="text-4xl font-bold text-gray-900 dark:text-white max-w-lg leading-tight"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Your Partner in Sustainable Digital Transformation.
          </h2>
        </div>
        <div>
          <p
            className="text-base font-normal text-gray-500 dark:text-gray-400"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            With years of experience, Porest V2 delivers digital expertise and
            strategic insights for your business. We understand challenges and
            offer proven, innovative solutions. Your success is the priority,
            with top-tier service, integrity, and professionalism.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {aboutContent.map((item, i) => (
          <div
            key={i}
            className="relative cursor-pointer group"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={item.images}
                alt="about images"
                className="rounded-xl h-72 lg:h-96 w-full object-cover group-hover:scale-110 ease-in-out duration-300"
              />
            </div>
            <div className="absolute bg-white dark:bg-gray-900 z-10 w-[95%] p-4 bottom-3 left-2/4 -translate-x-2/4 rounded-lg">
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.name}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 lg:hidden">
                {item.title.slice(0, 80) + "...."}
              </p>
              <p className="text-gray-500 dark:text-gray-400 hidden lg:inline-block">
                {item.title}
              </p>
              <Link className="hidden items-center gap-3 text-blue-700 mt-4 group-hover:flex">
                Learn More <HiArrowNarrowRight className="relative top-[1px]" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-5">
        {countAbout.map((item, i) => (
          <div key={i} data-aos="fade-up" data-aos-duration="1000">
            <div className="flex items-center justify-center flex-col gap-2 p-5 border border-gray-300 rounded-xl text-center cursor-pointer relative before:absolute before:h-80 before:w-80 before:translate-y-56 before:bg-blue-500 before:rounded-full  before:duration-700 transition-all hover:before:translate-y-0 overflow-hidden group">
              <h1 className="text-3xl font-semibold relative z-10 ">
                <span className="group-hover:text-white duration-300 ease-in-out">
                  {item.count}
                </span>
              </h1>
              <p className="text-gray-500 dark:text-gray-400 relative z-10 group-hover:text-gray-100 duration-300 ease-in-out">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutComponents;
