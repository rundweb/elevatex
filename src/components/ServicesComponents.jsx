import { Link } from "react-router-dom";
import { services } from "../assets/data/data";
import ButtonBlue from "../elements/ButtonBlue";

const ServicesComponents = () => {
  return (
    <section className="max-w-screen-xl m-auto min-h-screen p-4 flex flex-col justify-center gap-10">
      <div>
        <p
          className="text-lg font-bold mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span>Our Service</span>
        </p>
        <h2
          className="text-3xl font-semibold text-gray-900 dark:text-white"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          We Offer Tailored <span>Solutions</span> for Your{" "}
          <span>Business</span> Growth.
        </h2>
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.slice(0, 4).map((item, i) => (
            <div key={i} data-aos="fade-up" data-aos-duration="1000">
              <div className="p-6 py-8 border border-gray-300 rounded-xl flex flex-col gap-8 group cursor-pointer relative before:absolute before:bg-blue-500 before:h-0 before:w-[200%] before:rotate-12 sm:before:rotate-45 before:top-1/2 before:-left-1/2 hover:before:h-[200%] before:duration-500 transition-all hover:before:-top-1/2 overflow-hidden">
                <div className="relative z-10">
                  <item.icon className="text-3xl text-blue-600 group-hover:text-white duration-200" />
                </div>
                <div className="relative z-10">
                  <h1 className="font-bold mb-2 text-gray-900 dark:text-white group-hover:text-white duration-200">
                    {item.title}
                  </h1>
                  <h2 className="text-gray-500 dark:text-gray-400 group-hover:text-white duration-200">
                    {item.description}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 grid-flow-dense">
          <div className="sm:col-span-2 flex flex-col justify-center order-3 lg:order-1 md:items-center md:text-center lg:items-start lg:text-start">
            <div className="hidden md:inline-block mb-10">
              <p
                className="font-medium text-gray-600 text-lg dark:text-gray-300 "
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                We provide tailored solutions to help your business grow and
                thrive in the digital landscape.
              </p>
            </div>
            <Link to={'/service'} data-aos="fade-up" data-aos-duration="1000">
              <ButtonBlue text={"Service Detail"} />
            </Link>
          </div>
          {services.slice(4, 6).map((item, i) => (
            <div
              key={i}
              className={`${"order" + i} lg:order-3`}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="p-6 py-8 border border-gray-300 rounded-xl flex flex-col gap-8 group cursor-pointer relative before:absolute before:bg-blue-500 before:h-0 before:w-[200%] before:rotate-12 sm:before:rotate-45 before:top-1/2 before:-left-1/2 hover:before:h-[200%] before:duration-500 transition-all hover:before:-top-1/2 overflow-hidden">
                <div className="relative z-10">
                  <item.icon className="text-3xl text-blue-600 group-hover:text-white duration-200" />
                </div>
                <div className="relative z-10">
                  <h1 className="font-bold mb-2 text-gray-900 dark:text-white group-hover:text-white duration-200">
                    {item.title}
                  </h1>
                  <h2 className="text-gray-500 dark:text-gray-400 group-hover:text-white duration-200">
                    {item.description}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesComponents;
