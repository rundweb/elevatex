import FooterComponents from "../components/FooterComponents";
import PortfolioComponents from "../components/PortfolioComponents";
import TestimonialComponents from "../components/TestimonialComponents";
import CoverPage from "../elements/CoverPage";

// data
import { services } from "../assets/data/data";

// image
import vertical1 from "../assets/images/vertical_1.jpg";
import vertical2 from "../assets/images/vertical_2.jpg";
import horizontal1 from "../assets/images/horizontal_1.jpg";
import horizontal2 from "../assets/images/horizontal_2.jpg";

//icon

import {
  FaSearch,
  FaLightbulb,
  FaPencilRuler,
  FaCode,
  FaRocket,
  FaHandsHelping,
} from "react-icons/fa";
import ButtonBlue from "../elements/ButtonBlue";

const ourProcess = [
  {
    title: "Discovery & Research",
    description:
      "We dive deep into understanding your business, target audience, and competitors to build a strong foundation.",
    icon: FaSearch,
  },
  {
    title: "Strategy & Planning",
    description:
      "We create a clear, actionable plan that defines the site's structure, user flow, and key goals for maximum impact.",
    icon: FaLightbulb,
  },
  {
    title: "Design & Prototyping",
    description:
      "We craft visually engaging prototypes that bring your brand identity to life and focus on user experience.",
    icon: FaPencilRuler,
  },
  {
    title: "Development",
    description:
      "We transform designs into a live website using React.js and Tailwind CSS, ensuring performance, responsiveness, and SEO optimization.",
    icon: FaCode,
  },
  {
    title: "Testing & Launch",
    description:
      "We rigorously test every element to ensure speed, functionality, and accessibility before launching your website to the world.",
    icon: FaRocket,
  },
  {
    title: "Support & Growth",
    description:
      "After launch, we continue to monitor, optimize, and help your site grow with your business needs.",
    icon: FaHandsHelping,
  },
];

const Service = () => {
  return (
    <div className="mt-20">
      <CoverPage text={"Service Detail"} />
      <section className="max-w-screen-xl m-auto p-4 flex flex-col gap-12">
        <div className="flex flex-col gap-8 md:gap-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-end">
            <div className="flex flex-col gap-5">
              <h1
                className="font-semibold text-2xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span>Elevatex Services</span>
              </h1>
              <h2
                className="text-gray-800 dark:text-white font-semibold text-3xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Your Vision, Brought to Life — with Precision and Purpose.
              </h2>
              <p
                className="text-gray-600 dark:text-gray-400 font-medium"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                At ElevateX, we don't just build websites. We craft digital
                experiences that connect, engage, and convert. Every service we
                offer is tailored to one thing: helping your brand grow with
                style and strategy.
              </p>
              <div className="grid md:grid-cols-2 gap-5 mt-2">
                {services.slice(4, 6).map((item, i) => (
                  <div key={i} data-aos="fade-up" data-aos-duration="1000">
                    <div className="flex flex-col gap-4 items-center justify-center text-center lg:text-left lg:items-start lg:justify-start">
                      <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center text-blue-700 text-2xl">
                        <item.icon />
                      </div>
                      <h1 className="font-bold text-lg text-gray-800 dark:text-white">
                        {item.title}
                      </h1>
                      <p className="text-gray-500 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {services.slice(0, 4).map((item, i) => (
                <div key={i} data-aos="fade-up" data-aos-duration="1000">
                  <div className="flex flex-col gap-4 items-center justify-center text-center lg:text-left lg:items-start lg:justify-start">
                    <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center text-blue-700 text-2xl">
                      <item.icon />
                    </div>
                    <h1 className="font-bold text-lg text-gray-800 dark:text-white">
                      {item.title}
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-5 gap-5 mt-5">
          <div
            className="overflow-hidden rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={vertical1}
              alt="service-elevatex"
              loading="lazy"
              className=" hover:scale-110 duration-300 ease-in-out h-96 w-full object-cover lg:h-full"
            />
          </div>
          <div className="lg:col-span-3 flex flex-col gap-5">
            <div className="flex flex-col gap-5 text-center ">
              <h1
                className="font-semibold text-2xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <span>Why Choose ElevateX?</span>
              </h1>
              <h2
                className="text-gray-800 dark:text-white font-semibold text-3xl"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                Modern, High-Performance Technology
              </h2>
              <p
                className="text-gray-600 dark:text-gray-400 font-medium"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                We use the latest, most reliable tech stack — including
                React.js, Tailwind CSS, GSAP, and SEO best practices — to build
                sites that are fast, responsive, and scalable for your future
                growth.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-5 mt-2">
              <div
                className="overflow-hidden rounded-lg shadow-lg"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={horizontal1}
                  alt="services elevatex"
                  loading="lazy"
                  className="h-52 w-full object-cover hover:scale-110 duration-300 ease-in-out"
                />
              </div>
              <div
                className="overflow-hidden rounded-lg shadow-lg"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={horizontal2}
                  alt="services elevatex"
                  loading="lazy"
                  className="h-52 w-full object-cover hover:scale-110 duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
          <div
            className="overflow-hidden rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={vertical2}
              alt="service-elevatex"
              loading="lazy"
              className=" hover:scale-110 duration-300 ease-in-out h-96 w-full object-cover lg:h-full"
            />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1
            className="text-gray-800 font-bold text-3xl dark:text-white capitalize"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            we build digital experiences designed to drive growth
          </h1>
          <p
            className="text-gray-600 dark:text-gray-400 font-medium"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            At ElevateX, building a custom website isn’t just about creating
            something beautiful — it’s about building a powerful digital asset
            tailored exactly to your business goals. We’ve honed our process to
            make sure every project we take on delivers measurable results,
            every single time.
          </p>
          <div className="flex gap-4 flex-col">
            {ourProcess.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 items-center"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="text-blue-500 text-xl">
                  <item.icon />
                </div>
                <h2 className="font-medium text-gray-600 dark:text-gray-400">
                  <b>{item.title} : </b>
                  {item.description}
                </h2>
              </div>
            ))}
          </div>

          <p
            className="text-gray-600 dark:text-gray-400 font-medium"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            We don’t just build websites — we build digital experiences designed
            to drive growth, spark engagement, and evolve with your business.
            Our proven process ensures clarity, creativity, and measurable
            results from start to finish.
          </p>
          <div className="text-center space-y-4 p-4">
            <h4
              className="text-2xl font-semibold text-gray-800 dark:text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Ready to Elevate Your Brand?
            </h4>
            <p
              className="text-gray-700 dark:text-gray-400"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Let’s collaborate on something exceptional — whether it’s your
              first digital product or a brand reboot.
            </p>
            <a
              href="/contact"
              data-aos="fade-up"
              data-aos-duration="1000"
              className="inline-block px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300 ease-in-out"
            >
              Let’s Talk
            </a>
          </div>
          {/* <ButtonBlue text={"Contact Us"} /> */}
        </div>
      </section>
      <PortfolioComponents />
      <TestimonialComponents />
      <FooterComponents />
    </div>
  );
};

export default Service;
