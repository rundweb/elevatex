const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/service" },
  { name: "Testimonials", path: "/testimonials" },
  { name: "Contact", path: "/contact" },
];

// icons
import { AiOutlineBulb, AiOutlineUser, AiOutlineSound, AiOutlineCode, AiOutlineSearch, AiOutlineBarChart } from "react-icons/ai";

const services = [
  {
    title: "Digital Branding",
    description: "Strategies to build a strong online brand for your business.",
    icon: AiOutlineBulb
  },
  {
    title: "Business Consultation",
    description: "Consultation sessions to grow your business.",
    icon: AiOutlineUser
  },
  {
    title: "Marketing Strategy",
    description: "Planning and executing digital marketing strategies.",
    icon: AiOutlineSound
  },
  {
    title: "Website Development",
    description: "Creating and optimizing professional websites.",
    icon: AiOutlineCode
  },
  {
    title: "SEO & Content Strategy",
    description: "Boosting online visibility with SEO & Content Strategy.",
    icon: AiOutlineSearch
  },
  {
    title: "Data Analytics",
    description: "Data analysis for optimal business growth.",
    icon: AiOutlineBarChart
  }
];

export { menuItems, services };
