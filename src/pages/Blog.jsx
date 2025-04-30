import FooterComponents from "../components/FooterComponents";
import CoverPage from "../elements/CoverPage";

// data
import { blogPosts } from "../assets/data/data";
import ButtonBlue from "../elements/ButtonBlue";

const Blog = () => {
  return (
    <div className="mt-20">
      <CoverPage text={"Our Blogs"} />
      <section className="max-w-screen-xl m-auto p-4 grid lg:grid-cols-4 gap-5">
        <div className="lg:col-span-3 p-4 pt-8 border-2 rounded-xl border-gray-100 dark:border-gray-800 flex flex-col gap-10 relative mb-5">
          <div className="absolute bg-white dark:bg-gray-900 py-2 px-6 rounded-lg -top-6 z-10 left-4 border-2 border-gray-100 dark:border-gray-800">
            <h1 className="text-gray-800 dark:text-white  font-medium text-lg">
              Latest Blogs
            </h1>
          </div>
          <div>
            {blogPosts.slice(0, 1).map((item, i) => (
              <div key={i}>
                <div className="grid lg:grid-cols-2 gap-5 lg:gap-10 items-center cursor-pointer group">
                  <div className="overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={item.coverImage}
                      alt="blogs"
                      className="h-80 w-full object-cover group-hover:scale-110 duration-300 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-col h-full justify-between gap-5">
                    <p className="text-lg font-semibold">
                      <span>{item.category}</span>
                    </p>
                    <h1 className="text-gray-800 dark:text-white font-bold text-4xl">
                      {item.title}
                    </h1>
                    <h2 className="text-gray-600 dark:text-gray-400 font-medium">
                      {item.excerpt}
                    </h2>
                    <div className="flex items-center justify-between">
                      <p className="text-blue-500 font-medium">{item.author}</p>
                      <p className="text-blue-500 font-medium">{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            {blogPosts.slice(1, 10).map((item, i) => (
              <div key={i}>
                <div className="flex flex-col gap-5 cursor-pointer">
                  <div className="overflow-hidden rounded-lg shadow-lg group">
                    <img
                      src={item.coverImage}
                      alt="blogs"
                      className="h-60 w-full object-cover group-hover:scale-110 duration-300 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-col h-full justify-between gap-4">
                    <p className="text-lg font-semibold">
                      <span>{item.category}</span>
                    </p>
                    <h1 className="text-gray-800 dark:text-white font-bold text-2xl">
                      {item.title}
                    </h1>
                    <h2 className="text-gray-600 dark:text-gray-400 font-medium">
                      {item.excerpt}
                    </h2>
                    <div className="flex items-center justify-between">
                      <p className="text-blue-500 font-medium">{item.author}</p>
                      <p className="text-blue-500 font-medium">{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-10 h-max">
          <div className=" p-4 pt-8 border-2 rounded-xl border-gray-100 dark:border-gray-800 flex flex-col gap-10 relative h-max">
            <div className="absolute bg-white dark:bg-gray-900 py-2 px-6 rounded-lg -top-6 z-10 left-4 border-2 border-gray-100 dark:border-gray-800">
              <h1 className="text-gray-800 dark:text-white text-base font-medium">
                Popular
              </h1>
            </div>
            <div className="flex flex-col gap-5">
              {blogPosts.slice(5, 9).map((item, i) => (
                <div key={i}>
                  <div className="grid grid-cols-2 gap-5 items-center">
                    <div>
                      <img
                        src={item.coverImage}
                        alt="blog"
                        className="w-full h-28 object-cover rounded-md"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-sm">
                        <span>{item.date}</span>
                      </p>
                      <h1 className="text-gray-800 dark:text-white font-bold">
                        {item.title.split(" ").slice(0, 4).join(" ")}
                        {item.title.split(" ").length > 4 ? "..." : ""}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" p-4 pt-8 border-2 rounded-xl border-gray-100 dark:border-gray-800 flex flex-col gap-10 relative h-max">
            <div className="absolute bg-white dark:bg-gray-900 py-2 px-6 rounded-lg -top-6 z-10 left-4 border-2 border-gray-100 dark:border-gray-800">
              <h1 className="text-gray-800 dark:text-white font-medium text-base">
                Category
              </h1>
            </div>
            <div>
              {[...new Set(blogPosts.map((item) => item.category))].map(
                (category, i) => (
                  <div key={i}>
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full">

                      </div>
                      <h1 className="text-lg font-medium">
                        <span>{category}</span>
                      </h1>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>
      <FooterComponents />
    </div>
  );
};

export default Blog;
