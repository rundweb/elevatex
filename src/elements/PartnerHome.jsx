import partner1 from "../assets/images/partner_1.svg";
import partner2 from "../assets/images/partner_2.svg";

const PartnerHome = () => {
  const partnerItem = [partner1, partner2];
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-gray-900 font-medium text-lg dark:text-gray-500">
        Partners and backers:
      </h1>
      <div className="flex items-center justify-start gap-8">
        {partnerItem.map((item, i) => (
          <div key={i}>
            <img src={item} alt="partner images" className="h-10" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerHome;
