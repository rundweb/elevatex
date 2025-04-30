import FooterComponents from "./FooterComponents";

import blog3 from "../assets/images/bg.jpg";
import BlogComponents from "./BlogComponents";

const BlogDetailsComponents = () => {
  return (
    <div className="mt-20">
      <section className="max-w-6xl m-auto flex flex-col gap-5 lg:gap-10 p-4 pt-10">
        <div className="flex flex-col gap-5 text-center">
          <p
            className="uppercase font-semibold text-lg text-gray-800 dark:text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Design • 20 Apr, 2025
          </p>
          <h1
            className="text-gray-800 dark:text-white font-bold text-3xl lg:text-5xl lg:leading-tight"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            5 Tips for Designing High-Converting Landing Pages For Your Business
          </h1>
          <p
            className="font-semibold text-gray-800 dark:text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            By <span>Alexandra Lee</span>
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <img
            src={blog3}
            alt="blog detail"
            className="w-full h-60 lg:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="max-w-3xl m-auto flex flex-col gap-5">
          <p
            className="text-justify text-gray-700 dark:text-gray-300"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            A landing page is more than just a digital welcome mat—it's the
            turning point where visitors decide whether to engage or leave.
            Great landing pages combine persuasive design, clear messaging, and
            a deep understanding of user behavior to drive conversions.
          </p>

          <div
            className="bg-gray-100 dark:bg-gray-800 p-5 border-l-4 border-blue-500"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="text-gray-800 dark:text-white font-bold">
              "Design isn’t just what it looks like and feels like. Design is
              how it works." – <span>Steve Jobs</span>
            </p>
          </div>
        </div>

        <div className="max-w-3xl m-auto flex flex-col gap-5">
          <h1
            className="text-gray-800 dark:text-white font-bold text-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Keep It Focused
          </h1>
          <p
            className="text-justify text-gray-700 dark:text-gray-300"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            The most effective landing pages are simple and direct. Stick to one
            clear goal—whether it’s collecting emails, selling a product, or
            booking a demo. Remove any distractions like extra navigation links
            or unrelated offers. Every element on the page should guide users
            toward the CTA.
          </p>
          <h1
            className="text-gray-800 dark:text-white font-bold text-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Craft a Clear Value Proposition
          </h1>
          <p
            className="text-justify text-gray-700 dark:text-gray-300"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tell users exactly what they’ll get and why it matters. Instead of
            vague phrases like “Sign up now,” use specific, benefit-driven copy
            like “Start your 14-day free trial and get instant access.” Your
            value should be obvious within the first few seconds.
          </p>
          <div
            className="bg-gray-100 dark:bg-gray-800 p-5 border-l-4 border-blue-500"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="text-gray-800 dark:text-white font-bold">
              “Clarity beats cleverness. Every time.” –{" "}
              <span>ConversionXL</span>
            </p>
          </div>
          <h1
            className="text-gray-800 dark:text-white font-bold text-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Use Strong Visual Hierarchy
          </h1>
          <p
            className="text-justify text-gray-700 dark:text-gray-300"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Most users skim. Use large, bold headlines, clear subheadings, and
            buttons that stand out. Visual hierarchy helps guide the eye and
            keeps visitors focused. Emphasize your CTA, and use contrast and
            spacing to draw attention to key areas.
          </p>
          <h1
            className="text-gray-800 dark:text-white font-bold text-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Build Trust Quickly
          </h1>
          <p
            className="text-justify text-gray-700 dark:text-gray-300"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            You only have a few seconds to build credibility. Include
            testimonials, client logos, security badges, or any form of social
            proof. Even a simple phrase like “No credit card required” can make
            users feel more comfortable taking action.
          </p>
          <h1
            className="text-gray-800 dark:text-white font-bold text-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Optimize for Mobile
          </h1>
          <p
            className="text-justify text-gray-700 dark:text-gray-300"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            With the majority of users visiting on mobile devices, your landing
            page must look and function perfectly on smaller screens. Use
            responsive layouts, compress images for fast loading, and make
            buttons easy to tap. Mobile optimization is not optional—it’s
            essential.
          </p>
          <div
            className="bg-gray-100 dark:bg-gray-800 p-5 border-l-4 border-blue-500"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="text-gray-800 dark:text-white font-bold">
              "If it doesn’t work on mobile, it doesn’t work at all." –{" "}
              <span>Every modern user ever</span>
            </p>
          </div>
          <h1
            className="text-gray-800 dark:text-white font-bold text-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Final Thoughts
          </h1>
          <p
            className="text-justify text-gray-700 dark:text-gray-300"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Designing a high-converting landing page means being intentional
            with every word, image, and layout decision. Focus on clarity,
            reduce friction, and always guide your user toward the next step.
            When done right, your landing page becomes one of your most powerful
            marketing tools.
          </p>
        </div>
      </section>
      <BlogComponents />
      <FooterComponents />
    </div>
  );
};

export default BlogDetailsComponents;
