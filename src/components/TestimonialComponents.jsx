// data
import { testimonials } from "../assets/data/data";

// icon
import { FaStar } from "react-icons/fa6";

// image
import testi from "../assets/images/testi.svg";

const TestimonialComponents = () => {
  return (
    <section className="max-w-screen-xl m-auto p-4 min-h-screen flex flex-col gap-10 justify-center">
      <div className="flex flex-col gap-5 items-center justify-center">
        <h1
          className="font-semibold text-xl"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span>What Our Clients Say</span>
        </h1>
        <h2
          className="text-neutral-800 font-bold text-3xl md:text-4xl md:max-w-3xl text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Hear from the <span>professionals</span> and <span>businesses</span>{" "}
          we've helped elevate.
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.slice(0, 6).map((item, i) => (
            <div key={i} data-aos="fade-up" data-aos-duration="1000">
              <div className="flex flex-col gap-6 py-8 px-6 border-gray-100 dark:border-gray-500 border-2 rounded-xl group hover:scale-105 duration-300 ease-in-out hover:border-violet-400 hover:bg-violet-50">
                <div>
                  <p className="text-gray-800 dark:text-white font-semibold">
                    {item.testimonial}
                  </p>
                </div>
                <div className="flex items-center justify-between gap-4 border-t-2 pt-6 dark:border-gray-500">
                  <img src={testi} alt="" className="w-12 h-12" />
                  <div className="flex-1">
                    <h1 className="text-gray-800 dark:text-white font-bold text-lg">
                      {item.name}
                    </h1>
                    <h2 className="text-blue-500 text-sm">{item.username}</h2>
                  </div>
                  <div className="flex gap-2 items-center">
                    <div>
                      <FaStar className="text-yellow-500" />
                    </div>
                    <h3 className="font-semibold text-blue-500">4.9</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponents;
