import ButtonBlue from "../elements/ButtonBlue";
import ButtonGray from "../elements/ButtonGray";
import ImageHome from "../elements/ImageHome";
import PartnerHome from "../elements/PartnerHome";

const HomeComponents = () => {
  return (
    <section className="min-h-screen max-w-screen-xl m-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 items-center justify-center p-4">
      <div className="w-full flex flex-col gap-2">
        <div>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-wide text-gray-900 md:text-5xl md:leading-tight dark:text-white">
            Empowering <span>Businesses</span> with <span>Smart</span> Digital <span>Strategies</span>
          </h1>
          <h2 className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400 max-w-lg">
            Helping consultants & professionals build their digital presence and
            grow their brand.
          </h2>
        </div>
        <div className="w-full flex flex-col gap-4 items-center justify-center md:flex-row md:justify-start flex-wrap">
          <ButtonBlue text={'Get Started'}/>
          <ButtonGray text={'Learn More'}/>
        </div>
        <div className="mt-5 w-full border-t py-5 dark:border-gray-600">
          <PartnerHome/>
        </div>
      </div>
      <div>
        <ImageHome/>
      </div>
    </section>
  );
};

export default HomeComponents;
