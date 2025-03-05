// images
import about1 from "../assets/images/about_1.jpg";
import about2 from "../assets/images/about_2.jpg";
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
            className="relative"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div>
              <img
                src={item.images}
                alt="about images"
                className="rounded-xl h-72 lg:h-96 w-full object-cover "
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
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10"></div>
    </section>
  );
};

export default AboutComponents;
