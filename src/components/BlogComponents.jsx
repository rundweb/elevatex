import React from "react";

// images
import blog1 from "../assets/images/about_1.jpg";
import blog2 from "../assets/images/about_2.jpg";
import blog3 from "../assets/images/portfolio_1.jpg";
import ButtonBlue from "../elements/ButtonBlue";

// data
const blogPosts = [
  {
    id: 1,
    title: "5 Tips for Designing High-Converting Landing Pages",
    slug: "designing-high-converting-landing-pages",
    excerpt:
      "Learn how to optimize your landing page layout, copy, and visuals to boost conversions and grow your business.",
    coverImage: blog3,
    date: "2025-04-20",
    author: "Alexandra Lee",
    category: "Design",
    featured: true,
  },
  {
    id: 2,
    title: "How to Use GSAP for Subtle Micro-Interactions",
    slug: "gsap-micro-interactions",
    excerpt:
      "A step-by-step guide to adding smooth, lightweight animations that delight users without slowing down your site.",
    coverImage: blog2,
    date: "2025-04-15",
    author: "Michael Tan",
    category: "Development",
    featured: false,
  },
  {
    id: 3,
    title: "Building a Strong Visual Brand Identity",
    slug: "building-visual-brand-identity",
    excerpt:
      "From color theory to typography, discover the key elements that make your brand memorable and cohesive.",
    coverImage: blog1,
    date: "2025-04-10",
    author: "Sabrina Wijaya",
    category: "Branding",
    featured: false,
  },
  {
    id: 4,
    title: "SEO Essentials for Front-End Developers",
    slug: "seo-essentials-front-end",
    excerpt:
      "Optimize your markup, meta tags, and performance to rank higher in search engines — even if you’re not an SEO expert.",
    coverImage: "/images/blog/seo-essentials.jpg",
    date: "2025-04-05",
    author: "Rizal Ahmad",
    category: "Development",
    featured: false,
  },
  {
    id: 5,
    title: "Case Study: Transforming Finova’s Online Booking",
    slug: "case-study-finova-booking",
    excerpt:
      "A deep dive into how our digital transformation boosted Finova’s client bookings by 45% in 3 months.",
    coverImage: "/images/blog/case-study-finova.jpg",
    date: "2025-04-01",
    author: "ElevateX Team",
    category: "Case Study",
    featured: false,
  },
];
const BlogComponents = () => {
  return (
    <div className="max-w-screen-xl m-auto p-4 flex items-center justify-center min-h-screen flex-col gap-10">
      <div className="flex flex-col gap-5 text-center">
        <h1 className="text-4xl font-semibold">
          <span>Our recent blogs</span>
        </h1>
        <p className="text-gray-600 font-medium dark:text-gray-400 text-lg">
          Surround yourself with the community and resource to help bring your
          vision to life.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          {blogPosts.slice(0, 1).map((item, i) => (
            <div key={i}>
              <div className="flex flex-col gap-5">
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
              <div className="flex flex-col lg:flex-row gap-8">
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
