import React from "react";

import ButtonBlue from "../elements/ButtonBlue";

// data
import { blogPosts } from "../assets/data/data";
const BlogComponents = () => {
  return (
    <div className="max-w-screen-xl m-auto p-4 flex items-center justify-center min-h-screen flex-col gap-10">
      <div className="flex flex-col gap-5 text-center">
        <h1
          className="text-4xl font-semibold"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span>Our recent blogs</span>
        </h1>
        <p
          className="text-gray-600 font-medium dark:text-gray-400 text-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Surround yourself with the community and resource to help bring your
          vision to life.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          {blogPosts.slice(0, 1).map((item, i) => (
            <div key={i}>
              <div
                className="flex flex-col gap-5"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={item.coverImage}
                  alt="blog-elevatex"
                  className="h-72 w-full object-cover rounded-xl"
                />
                <p>
                  <span>{item.category}</span>
                </p>
                <h1 className="text-gray-800 font-bold text-2xl dark:text-white">
                  {item.title}
                </h1>
                <h2 className="text-gray-600 font-medium text-sm">
                  {item.excerpt}
                </h2>

                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">
                    <span>{item.date}</span>
                  </p>
                  <p className="text-sm font-medium">
                    <span>{item.author}</span>
                  </p>
                </div>
                <ButtonBlue text={"Read More"} />
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-2 flex flex-col gap-8">
          {blogPosts.slice(1, 3).map((item, i) => (
            <div key={i}>
              <div
                className="flex flex-col lg:flex-row gap-8"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={item.coverImage}
                  alt="blog-elevatex"
                  className="h-72 w-full object-cover rounded-xl"
                />
                <div className="flex flex-col gap-4">
                  <p>
                    <span>{item.category}</span>
                  </p>
                  <h1 className="text-gray-800 font-bold text-2xl dark:text-white">
                    {item.title}
                  </h1>
                  <h2 className="text-gray-600 font-medium text-sm">
                    {item.excerpt}
                  </h2>

                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">
                      <span>{item.date}</span>
                    </p>
                    <p className="text-sm font-medium">
                      <span>{item.author}</span>
                    </p>
                  </div>
                  <ButtonBlue text={"Read More"} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogComponents;
