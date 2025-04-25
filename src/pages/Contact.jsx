import ContactComponents from "../components/ContactComponents";
import FooterComponents from "../components/FooterComponents";
import CoverPage from "../elements/CoverPage";

const Contact = () => {
  return (
    <div className="mt-20">
      <CoverPage text={"Contact Us"} />
      <ContactComponents />
      <FooterComponents/>
    </div>
  );
};

export default Contact;
