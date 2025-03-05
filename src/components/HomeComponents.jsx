// elements
import ButtonBlue from "../elements/ButtonBlue";
import ButtonGray from "../elements/ButtonGray";
import ImageHome from "../elements/ImageHome";
import PartnerHome from "../elements/PartnerHome";

const HomeComponents = () => {
  return (
    <section className="min-h-screen max-w-screen-xl m-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center justify-center p-4">
      <div className="w-full flex flex-col gap-2">
        <div>
          <h1 className=" mb-4 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl md:leading-tight dark:text-white" data-aos="fade-up"  data-aos-duration="1000">
            Empowering <span>Businesses</span> with <span>Smart</span> Digital <span>Strategies</span>
          </h1>

          <h2 className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400 max-w-lg" data-aos="fade-up"  data-aos-duration="1000">
            Helping consultants & professionals build their digital presence and
            grow their brand.
          </h2>
        </div>
        <div className="w-full flex flex-col gap-4 items-center justify-center md:flex-row md:justify-start flex-wrap" data-aos="fade-up"  data-aos-duration="1000">
          <ButtonBlue text={"Get Started"} />
          <ButtonGray text={"Learn More"} />
        </div>
        <div className="mt-5 w-full border-t pt-10 md:pt-5 dark:border-gray-600" data-aos="fade-up"  data-aos-duration="1000">
          <PartnerHome />
        </div>
      </div>
      <div data-aos="zoom-in"  data-aos-duration="1000">
        <ImageHome />
      </div>
    </section>
  );
};

export default HomeComponents;
