import React from "react";
// icon

import CoverPage from "../elements/CoverPage";
import FooterComponents from "../components/FooterComponents";

// images
import about1 from "../assets/images/about_1.jpg";
import about2 from "../assets/images/about_2.jpg";
import ServicesComponents from "../components/ServicesComponents";

const About = () => {
  return (
    <div className="mt-20">
      <CoverPage text={"About Us"} />
      <section className="text-gray-800 dark:text-white">
        <div className="max-w-screen-xl mx-auto space-y-12 lg:space-y-24 p-4">
          {/* Who We Are */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div
              className="flex flex-col gap-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3 className="text-xl font-bold">
                <span>Who We Are</span>
              </h3>
              <h3 className="text-3xl font-bold">
                A small team with <span>big ambition</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                At <strong>ElevateX</strong>, we don’t just build websites — we
                build bridges between professionals and their audiences. Our
                mission is to design elegant, high-performance digital products
                that truly represent the identity, values, and goals of our
                clients.
              </p>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                We’re a tight-knit team of designers, developers, and
                strategists who believe that good design is intentional, good
                code is invisible, and good partnerships are built on trust.
                Whether you're an independent consultant or a growing business,
                we’re here to help you thrive in the digital world — with
                clarity and confidence.
              </p>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                ElevateX was born out of the idea that{" "}
                <span className="font-medium">
                  personalized digital experiences
                </span>
                shouldn’t be exclusive to big brands. Our process is thoughtful,
                our work is handcrafted, and our focus is always on people — not
                pixels.
              </p>
            </div>
            <img
              src={about1}
              alt="Our Team"
              className="rounded-2xl shadow-2xl object-cover w-full max-h-[450px]"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>

          {/* Our Vision */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={about2}
              alt="Vision"
              data-aos="fade-up"
              data-aos-duration="1000"
              className="rounded-2xl shadow-2xl object-cover w-full max-h-[450px]"
            />
            <div
              className="flex flex-col gap-5"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3 className="text-xl font-bold">
                <span>Our Vision</span>
              </h3>
              <h3 className="text-3xl font-bold">
                We see design as a{" "}
                <span className="underline decoration-gray-800 dark:decoration-white">
                  strategic tool
                </span>
              </h3>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                Our vision is to empower independent professionals, consultants,
                and service brands to take control of their digital identity —
                not with templates, but with tailored solutions that grow with
                them.
              </p>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                We believe that great digital presence starts with clarity. What
                do you stand for? What do you want your audience to feel? From
                that clarity, we design everything — from structure to visuals —
                to tell your story in a way that’s strategic, scalable, and
                soul-driven.
              </p>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                As your brand grows, your website should evolve too. We build
                with that in mind: agile foundations, future-ready design
                systems, and a creative mindset that embraces change.
              </p>
            </div>
          </div>
        </div>
      </section>
      <ServicesComponents />
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
          Let’s collaborate on something exceptional — whether it’s your first
          digital product or a brand reboot.
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
      <FooterComponents />
    </div>
  );
};

export default About;
