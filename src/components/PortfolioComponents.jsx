import ButtonBlue from "../elements/ButtonBlue";

// data
import { caseStudies } from "../assets/data/data";

// icon
import { LuMoveRight } from "react-icons/lu";
import { Link } from "react-router-dom";

const PortfolioComponents = () => {
  return (
    <div className="max-w-screen-xl m-auto min-h-screen p-4 flex flex-col justify-center gap-10">
      <div className="flex items-center justify-between flex-wrap gap-5">
        <div>
          <h1
            className="text-lg font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span>Our Portfolio</span>
          </h1>
          <p
            className="text-3xl font-semibold text-gray-900 dark:text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Real Results – How We <span>Helped</span> Businesses{" "}
            <span>Grow.</span>
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <ButtonBlue text={"View All"} />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 md:flex-row">
          {caseStudies.slice(0, 2).map((item, i) => (
            <div key={i} data-aos="fade-up" data-aos-duration="1000">
              <div className="relative group cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-sm group-hover:scale-110 duration-300 ease-in-out"
                  />
                </div>
                <div className="absolute bottom-5 left-5 group-hover:opacity-0 duration-300 ease-in-out">
                  <h1 className="capitalize text-white font-semibold text-xl ">
                    {item.slug}
                  </h1>
                </div>
                <div className="opacity-0 absolute bottom-5 left-5 group-hover:opacity-100 duration-300 ease-in-out flex flex-col gap-5">
                  <h1 className="capitalize text-white font-semibold text-xl ">
                    {item.title}
                  </h1>
                  <p className="hidden sm:block text-white font-normal w-[95%]">
                    {item.shortDescription}
                  </p>
                  <Link to={'/portfoliodetail'} className="capitalize text-white font-normal text-base flex items-center gap-5">
                    Continue Reading{" "}
                    <LuMoveRight className="relative top-[1px]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          {caseStudies.slice(2, 4).map((item, i) => (
            <div key={i} data-aos="fade-up" data-aos-duration="1000">
              <div className="relative group cursor-pointer">
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="rounded-sm group-hover:scale-110 duration-300 ease-in-out"
                  />
                </div>
                <div className="absolute bottom-5 left-5 group-hover:opacity-0 duration-300 ease-in-out">
                  <h1 className="capitalize text-white font-semibold text-xl ">
                    {item.slug}
                  </h1>
                </div>
                <div className="opacity-0 absolute bottom-5 left-5 group-hover:opacity-100 duration-300 ease-in-out flex flex-col gap-5">
                  <h1 className="capitalize text-white font-semibold text-xl ">
                    {item.title}
                  </h1>
                  <p className="hidden sm:block text-white font-normal w-[95%]">
                    {item.shortDescription}
                  </p>
                  <a className="capitalize text-white font-normal text-base flex items-center gap-5">
                    Continue Reading{" "}
                    <LuMoveRight className="relative top-[1px]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioComponents;
