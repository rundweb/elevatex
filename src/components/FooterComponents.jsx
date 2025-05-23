import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { menuItems } from "../assets/data/data";
import ButtonBlue from "../elements/ButtonBlue";
import { Link } from "react-router-dom";

const FooterComponents = () => {
  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "West Jakarta, Indonesia",
    },
    {
      icon: FaPhoneAlt,
      title: "+6281-1234-5678",
    },
    {
      icon: FaEnvelope,
      title: "elevatex@gmail.com",
    },
  ];
  const products = [
    { name: "Blog", path: "/blog" },
    { name: "Case Studies", path: "/portfoliodetail" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Pricing", path: "/pricing" },
  ];

  const resources = [
    { name: "Portfolio Detail", path: "/portfoliodetail" },
    { name: "Blog Detail", path: "/blogdetail" },
    { name: "Service Detail", path: "/service" },
  ];

  return (
    <div className="mt-5">
      <div className="max-w-screen-xl m-auto p-4 grid grid-cols-1 md:grid-cols-3 items-center">
        <div className="col-span-2 md:pr-16 flex flex-col gap-5 md:border-r-2 border-gray-100 dark:border-gray-600">
          <div className="flex flex-col gap-5 items-center sm:items-start">
            <h1
              className="text-2xl font-semibold"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span>Contact</span>
            </h1>
            <div className="flex items-center justify-around sm:justify-between flex-wrap gap-5">
              {contactInfo.map((item, i) => (
                <div key={i} data-aos="fade-up" data-aos-duration="1000">
                  <div className="flex items-center gap-3">
                    <item.icon className="text-blue-500 text-lg" />
                    <p className="text-gray-500 font-medium">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-start justify-between border-t-2 border-gray-100 dark:border-gray-600 pt-10 mt-5">
            <div
              className="flex flex-col gap-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="text-gray-800 dark:text-white text-lg font-semibold mb-2">
                Menu
              </h1>
              {menuItems.map((item, i) => (
                <div key={i}>
                  <Link
                    to={item.path}
                    className="text-gray-500 font-medium hover:text-blue-500 duration-300 ease-in-out cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
            <div
              className="flex flex-col gap-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="text-gray-800 dark:text-white text-lg font-semibold mb-2">
                Pages
              </h1>
              {products.map((item, i) => (
                <div key={i}>
                  <Link
                    to={item.path}
                    className="text-gray-500 font-medium hover:text-blue-500 duration-300 ease-in-out cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
            <div
              className="flex flex-col gap-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1 className="text-gray-800 dark:text-white text-lg font-semibold mb-2">
                Detail
              </h1>
              {resources.map((item, i) => (
                <div key={i}>
                  <Link
                    to={item.path}
                    className="text-gray-500 font-medium hover:text-blue-500 duration-300 ease-in-out cursor-pointer"
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:col-span-1 mt-10 md:mt-0 md:pl-16 flex flex-col gap-5">
          <h1
            className="text-gray-800 font-semibold text-3xl dark:text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Elevate<span>X</span>
          </h1>
          <h2
            className="text-gray-800 font-medium text-2xl capitalize dark:text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Join Our Newsletter exclusive updates{" "}
          </h2>
          <p
            className="capitalize text-gray-500 dark:text-gray-400 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Subscribe to our exclusive newsletter for the latest updates
          </p>
          <div data-aos="fade-up" data-aos-duration="1000">
            <input
              type="email"
              placeholder="yourmail@gmail.com"
              className="h-12 border-2 border-gray-300 w-full rounded-lg px-5 text-gray-600 dark:bg-gray-900 outline-blue-500"
            />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="cursor-pointer">
            <ButtonBlue text={"Subscribe"} />
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl m-auto p-4">
        <div className=" border-t-2 border-gray-100 dark:border-gray-600 flex items-center justify-center pt-4 ">
          <p className="text-sm font-normal text-gray-500">
            &#169;elevatex 2025, All right reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterComponents;
