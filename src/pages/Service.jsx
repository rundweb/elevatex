import FooterComponents from "../components/FooterComponents"
import ServicesComponents from "../components/ServicesComponents"
import CoverPage from "../elements/CoverPage"

const Service = () => {
  return (
    <div className="mt-20">
      <CoverPage text={"Our Services"}/>
      <ServicesComponents/>
      <FooterComponents/>
    </div>
  )
}

export default Service
