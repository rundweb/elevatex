// data
import { pricing } from "../assets/data/data";

// icon
import { FaCheck } from "react-icons/fa6";
import ButtonBlue from "../elements/ButtonBlue";

const PricingComponents = () => {
  return (
    <div className="max-w-screen-xl m-auto p-4 min-h-screen flex flex-col gap-10 justify-center">
      <div className="flex md:items-center justify-between flex-col md:flex-row md:mb-5 gap-5">
        <div>
          <h1
            className="text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span>Our Pricing</span>
          </h1>
          <h2
            className="text-gray-400 dark:text-white font-normal text-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Select a package and let’s build something great together.
          </h2>
        </div>
        <div className="flex items-center gap-5">
          <a
            href=""
            className="gradient-primary px-4 py-2 rounded-lg text-base font-medium text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Monthly
          </a>
          <a
            href=""
            className="bg-gray-100 px-4 py-2 rounded-lg text-base font-medium text-gray-400"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Yearly
          </a>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricing.map((item, i) => (
            <div key={i} data-aos="fade-up" data-aos-duration="1000">
              <div className="flex flex-col gap-7 shadow-xl rounded-2xl p-5 py-10 md:p-10 border-t-8 border-t-blue-500 relative overflow-hidden bg-white transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-blue-500 before:duration-500 before:ease-linear hover:bg-white hover:before:border-[200px] group dark:bg-gray-800">
                <div className="flex flex-col gap-5 relative z-10">
                  <h1 className="text-xl font-semibold ">
                    <span className="group-hover:text-white duration-300 ease-in-out">{item.title}</span>
                  </h1>
                  <h2 className="font-bold text-5xl text-gray-800 dark:text-white group-hover:text-white duration-300 ease-in-out">
                    {item.price}{" "}
                    <strong className="text-base font-medium text-gray-600 dark:text-white group-hover:text-white duration-300 ease-in-out">
                      / Month
                    </strong>
                  </h2>
                </div>
                <div className="flex items-center justify-center mt-2">
                  <a
                    href=""
                    className="gradient-primary w-full px-10 flex items-center justify-center h-12 rounded-lg text-white font-medium  shadow-lg before:ease relative before:absolute before:h-12 before:w-6 before:bg-white transition-all before:right-0 before:top-0 before:translate-x-12 before:rotate-6 before:opacity-10 md:before:duration-700 before:duration-1000 hover:before:-translate-x-[30rem] md:hover:before:-translate-x-80 overflow-hidden"
                  >
                    Select Plan
                  </a>
                </div>
                <div className="border-t-2 pt-7 border-gray-200 dark:border-gray-700 relative z-10">
                  <div className="flex flex-col gap-4">
                    {item.features.map((feature, i) => (
                      <div key={i}>
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-100 dark:bg-gray-800 w-6 h-6 rounded-full  flex items-center justify-center">
                            <FaCheck className="text-[12px] text-blue-500" />
                          </div>
                          <p className="font-medium text-gray-700 dark:text-white group-hover:text-white duration-300 ease-in-out">
                            {feature}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingComponents;
