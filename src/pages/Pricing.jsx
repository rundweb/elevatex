import ContactComponents from "../components/ContactComponents";
import FaqComponents from "../components/FaqComponents";
import FooterComponents from "../components/FooterComponents";
import PricingComponents from "../components/PricingComponents";
import ButtonBlue from "../elements/ButtonBlue";
import ButtonGray from "../elements/ButtonGray";
import CoverPage from "../elements/CoverPage";

const Pricing = () => {
  return (
    <div className="mt-20">
      <CoverPage text={'Our Pricing'}/>
      <PricingComponents/>
      <FaqComponents/>
      <ContactComponents/>
      <FooterComponents/>
    </div>
  );
};

export default Pricing;
