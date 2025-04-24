import React from "react";
// images
import contact from "../assets/images/contact.jpg";
import ButtonBlue from "../elements/ButtonBlue";
const ContactComponents = () => {
  return (
    <div className="max-w-screen-xl m-auto min-h-screen p-4 lg:py-8 flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="hidden lg:flex">
          <img
            src={contact}
            alt="contact-elevatex"
            className="w-full h-screen object-cover rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-5 h-max">
          <div className="flex flex-col gap-5 mb-2">
            <h2 className="text-3xl font-medium">
              <span>Send us a massage</span>
            </h2>
            <p className="text-gray-600 font-medium dark:text-gray-300 text-lg">
              Your <span>satisfaction</span> is our top priority, and we are{" "}
              <span>committed</span> to providing <span>exceptional</span>{" "}
              service and support
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-base text-gray-700 font-medium dark:text-gray-200"
            >
              Your Name <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="h-12 dark:bg-gray-900  outline-blue-500 rounded-lg border-2 border-gray-100 px-5 placeholder:text-gray-300 placeholder:font-medium font-medium text-gray-400"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-base text-gray-700 font-medium dark:text-gray-200"
            >
              Your Email <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Email"
              className="h-12 dark:bg-gray-900  outline-blue-500 rounded-lg border-2 border-gray-100 px-5 placeholder:text-gray-300 placeholder:font-medium font-medium text-gray-400"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-base text-gray-700 font-medium dark:text-gray-200"
            >
              Your Phone <span>*</span>
            </label>
            <input
              type="number"
              placeholder="Phone"
              className="h-12 dark:bg-gray-900  outline-blue-500 rounded-lg border-2 border-gray-100 px-5 placeholder:text-gray-300 placeholder:font-medium font-medium text-gray-400"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-base text-gray-700 font-medium dark:text-gray-200"
            >
              Your Message <span>*</span>
            </label>
            <textarea
              name=""
              placeholder="Message"
              className=" dark:bg-gray-900 outline-blue-500 rounded-lg border-2 border-gray-100 p-5 placeholder:text-gray-300 placeholder:font-medium font-medium text-gray-400"
              required
              rows={3}
              id=""
            ></textarea>
          </div>
          <a
            href=""
            className="gradient-primary text-center text-white font-medium h-12 flex items-center justify-center rounded-lg shadow-lg"
          >
            Send Message
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactComponents;
