import CoverPage from "../elements/CoverPage";
import FooterComponents from "./FooterComponents";
// icon
import { BsFillPatchCheckFill } from "react-icons/bs";

import blog1 from "../assets/images/about_1.jpg";
import blog3 from "../assets/images/portfolio_1.jpg";

// icon
import {
  HiOutlineTrendingUp,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineChartBar,
} from "react-icons/hi";

// image
import porto4 from "../assets/images/portfolio_4.jpg";

const PortfolioDetail = () => {
  const impactPoints = [
    {
      title: "+45% Consultation Bookings",
      description:
        "Within 3 months, Finova saw a 45% increase in online consultation bookings after launch.",
      icon: HiOutlineTrendingUp,
    },
    {
      title: "120+ Hours Saved Monthly",
      description:
        "The automated booking system significantly reduced manual scheduling work.",
      icon: HiOutlineClock,
    },
    {
      title: "Stronger Brand Trust",
      description:
        "The new design, tone, and visuals helped communicate professionalism and build trust.",
      icon: HiOutlineShieldCheck,
    },
    {
      title: "2.5x Higher Engagement Rate",
      description:
        "The improved user interface and CTAs led to more page views, clicks, and longer session.",
      icon: HiOutlineUserGroup,
    },
    {
      title: "Foundation for Scalable Growth",
      description:
        "With a robust digital platform in place, Finova now has the tools to scale operations efficiently.",
      icon: HiOutlineChartBar,
    },
  ];
  return (
    <div className="mt-20">
      <CoverPage text={"Portfolio Detail"} />
      <section className="max-w-screen-xl m-auto p-4">
        {/* Hero Section */}
        <div className="lg:text-center mb-5 lg:mb-14">
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-800 dark:text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Transforming <span>Finova's</span> Digital Future
          </h1>
          <p
            className="text-lg text-gray-600 dark:text-gray-400 mb-8 lg:max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            From traditional consultancy to digital excellence — how we helped
            Finova redefine client experiences and scale their business online.
          </p>
        </div>

        {/* About the Project */}
        <div className="mb-10 lg:mb-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2
              className="text-3xl font-bold mb-6 text-gray-800 dark:text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span>Project Overview</span>
            </h2>
            <p
              className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Finova, an emerging financial consultancy, was ready for their
              next leap — embracing a fully digital model to meet modern client
              expectations.
            </p>
            <p
              className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Our mission: blend professionalism, trust, and simplicity into a
              seamless online experience that would help Finova scale faster and
              smarter.
            </p>
            <h2
              className="text-xl font-bold text-gray-800 dark:text-white mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Challenges We Faced :
            </h2>
            <div data-aos="fade-up" data-aos-duration="1000">
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>
                    Old website design causing low engagement and trust issues.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>
                    Manual appointment scheduling wasting valuable resources.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-indigo-600 font-bold">•</span>
                  <span>
                    Weak online visibility in a competitive finance market.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <img
            src={blog3}
            alt="Finova Overview"
            className="rounded-2xl shadow-md"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>

        {/* Our Solutions */}
        <div className="mb-10 lg:mb-14 grid lg:grid-cols-2 gap-10 items-center">
          <img
            src={blog1}
            alt="Solutions Provided"
            className="rounded-2xl shadow-md order-2 md:order-1"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <div className="order-1 md:order-2">
            <h2
              className="text-3xl font-bold mb-4 text-gray-800 dark:text-white"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Our Solutions
            </h2>
            <p
              className="text-gray-600 dark:text-gray-400 mb-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              At ElevateX, we partnered with Finova to deliver a complete
              digital transformation that aligned with their vision of becoming
              a modern, client-focused consultancy. Here's how we brought that
              to life:
            </p>
            <ul
              className="space-y-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <li className="flex items-start space-x-4">
                <div className="relative top-[2px]">
                  <BsFillPatchCheckFill className="text-indigo-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-600 dark:text-gray-300">
                    <span>Modern Website Design </span>
                    Built a sleek, professional web platform with seamless user
                    experience.
                  </h3>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="relative top-[2px]">
                  <BsFillPatchCheckFill className="text-indigo-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-600 dark:text-gray-300">
                    <span>Automated Scheduling System </span>
                    Integrated an easy-to-use online booking system, reducing
                    administrative.
                  </h3>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="relative top-[2px]">
                  <BsFillPatchCheckFill className="text-indigo-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-600 dark:text-gray-300">
                    <span>Brand Identity Refresh </span>
                    Reinvented visual branding to reflect expertise, trust, and
                    approachability.
                  </h3>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="relative top-[2px]">
                  <BsFillPatchCheckFill className="text-indigo-500 text-xl" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-600 dark:text-gray-300">
                    <span>SEO Optimization </span>
                    Boosted organic reach with improved SEO structure and
                    content strategy.
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Impact */}
        <div className="mb-5 flex flex-col gap-10 items-center">
          <div className="text-center flex flex-col gap-4 items-center">
            <h1
              className="text-lg font-semibold uppercase"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <span>The Impact</span>
            </h1>
            <h2
              className="text-gray-800 dark:text-white text-3xl font-bold capitalize lg:w-3/4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              The results of our collaboration with Finova were both measurable
              and meaningful
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-5 items-center">
            <div className="flex flex-col gap-5 h-full justify-between">
              {impactPoints.slice(0, 2).map((item, i) => (
                <div key={i} data-aos="fade-up" data-aos-duration="1000">
                  <div className="flex flex-col gap-5 bg-gray-100 dark:bg-gray-800 h-full rounded-2xl py-10 px-5">
                    <div className="bg-gray-50 dark:bg-gray-900 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl text-blue-500">
                      <item.icon />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-gray-800 dark:text-white font-semibold text-lg">
                        {item.title}
                      </h1>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-5 bg-gray-100 dark:bg-gray-800 rounded-2xl h-full">
              {impactPoints.slice(4, 5).map((item, i) => (
                <div key={i} data-aos="fade-up" data-aos-duration="1000">
                  <div className="flex flex-col gap-5">
                    <img
                      src={porto4}
                      alt="foto portfolio"
                      className="rounded-xl h-96 w-full object-cover"
                    />
                    <div className="flex flex-col gap-2">
                      <h1 className="text-gray-800 dark:text-white font-semibold text-lg">
                        {item.title}
                      </h1>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5 h-full justify-between">
              {impactPoints.slice(2, 4).map((item, i) => (
                <div key={i} data-aos="fade-up" data-aos-duration="1000">
                  <div className="flex flex-col gap-5 bg-gray-100 dark:bg-gray-800 h-full rounded-2xl px-5 py-10">
                    <div className="bg-gray-50 dark:bg-gray-900 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl text-blue-500">
                      <item.icon />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-gray-800 dark:text-white font-semibold text-lg">
                        {item.title}
                      </h1>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FooterComponents />
    </div>
  );
};

export default PortfolioDetail;
