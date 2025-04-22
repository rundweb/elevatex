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

const testimonials = [
  {
    name: "John Doe",
    username: "@johndoe",
    date: "2025-03-07",
    time: "10:30 AM",
    testimonial: "ElevateX helped my business grow with a stunning website!",
    image: "https://unsplash.com/photos/AaEQmoufHLk" // Gambar oleh Drew Hays di Unsplash
  },
  {
    name: "Sarah Johnson",
    username: "@sarahj",
    date: "2025-03-06",
    time: "02:15 PM",
    testimonial: "Impressive design and smooth performance. Highly recommended! @ElevateX",
    image: "https://unsplash.com/photos/mEZ3PoFGs_k" // Gambar oleh LinkedIn Sales Navigator di Unsplash
  },
  {
    name: "Michael Smith",
    username: "@michael_s",
    date: "2025-03-05",
    time: "06:45 PM",
    testimonial: "Great UI/UX and fast loading times. ElevateX is a game-changer!",
    image: "https://unsplash.com/photos/IgUR1iX0mqM" // Gambar oleh Taylor di Unsplash
  },
  {
    name: "Emily Brown",
    username: "@emilyb",
    date: "2025-03-04",
    time: "11:00 AM",
    testimonial: "Professional and elegant design. ElevateX exceeded my expectations!",
    image: "https://unsplash.com/photos/1K9T5YiZ2WU" // Gambar oleh Ben Parker di Unsplash
  },
  {
    name: "David Wilson",
    username: "@davidw",
    date: "2025-03-03",
    time: "08:20 AM",
    testimonial: "Top-notch templates with excellent support. Worth every penny! @ElevateX",
    image: "https://unsplash.com/photos/7pCFUybP_P8" // Gambar oleh Jurica Koletić di Unsplash
  },
  {
    name: "Sophia Martinez",
    username: "@sophiam",
    date: "2025-03-02",
    time: "04:10 PM",
    testimonial: "Best investment for my startup. Clean and modern design! @ElevateX",
    image: "https://unsplash.com/photos/FVh_yqLR9eA" // Gambar oleh Brooke Cagle di Unsplash
  },
  {
    name: "James Anderson",
    username: "@jamesa",
    date: "2025-03-01",
    time: "07:35 PM",
    testimonial: "Superb quality and user-friendly templates. ElevateX rocks!",
    image: "https://unsplash.com/photos/6anudmpILw4" // Gambar oleh Chris Barbalis di Unsplash
  },
  {
    name: "Olivia Taylor",
    username: "@oliviat",
    date: "2025-02-29",
    time: "01:55 PM",
    testimonial: "Beautiful and responsive design. My clients love it! @ElevateX",
    image: "https://unsplash.com/photos/ZHvM3XIOHoE" // Gambar oleh Hannah Skelly di Unsplash
  },
  {
    name: "William Brown",
    username: "@williamb",
    date: "2025-02-28",
    time: "09:10 AM",
    testimonial: "Effortless setup and outstanding performance. Highly recommended!",
    image: "https://unsplash.com/photos/1tnS_BVy9Jk" // Gambar oleh Nathan Dumlao di Unsplash
  },
  {
    name: "Emma Davis",
    username: "@emmad",
    date: "2025-02-27",
    time: "05:25 PM",
    testimonial: "A must-have for any business! ElevateX made everything seamless.",
    image: "https://unsplash.com/photos/MP0IUfwrn0A" // Gambar oleh LinkedIn Sales Navigator di Unsplash
  },
  {
    name: "Daniel Wilson",
    username: "@danielw",
    date: "2025-02-26",
    time: "02:40 PM",
    testimonial: "Sleek, professional, and easy to customize. Love it! @ElevateX",
    image: "https://unsplash.com/photos/2LowviVHZ-E" // Gambar oleh Taylor di Unsplash
  },
  {
    name: "Ava Miller",
    username: "@avam",
    date: "2025-02-25",
    time: "11:15 AM",
    testimonial: "Simply the best site template I’ve used. Thank you, ElevateX!",
    image: "https://unsplash.com/photos/4nulm-JUYFo" // Gambar oleh Ben Parker di Unsplash
  }
];

import portfolio1 from '../images/portfolio_1.jpg'
import portfolio2 from '../images/portfolio_2.jpg'
import portfolio3 from '../images/portfolio_3.jpg'
import portfolio4 from '../images/portfolio_4.jpg'

const caseStudies = [
  {
    title: "Finova – Digital Transformation for Financial Consultants",
    slug: "finova",
    image: portfolio1,
    shortDescription: "Helping Finova scale their financial consultancy with a tailored digital platform.",
    fullDescription: `
      Finova, a growing financial consultancy, needed a digital transformation to streamline its operations and improve online visibility.

      We developed a modern web platform featuring an appointment scheduling system and a refreshed brand identity. The UI was tailored to reflect trust and professionalism, with optimized call-to-actions for client acquisition.

      Within 3 months post-launch, Finova experienced a 45% increase in online consultation bookings, significantly reducing manual scheduling efforts.
    `,
    services: ["Web design & development", "Brand refresh", "Booking system integration", "SEO optimization"]
  },
  {
    title: "Wellnest – Building a Wellness Brand Online",
    slug: "wellnest",
    image: portfolio2,
    shortDescription: "Elevating a wellness startup into a recognizable digital brand.",
    fullDescription: `
      Wellnest Studio, a holistic wellness startup, wanted to create a calming, trustworthy online presence that appealed to health-conscious clients.

      We designed a soothing and responsive website using soft palettes and clean typography. We integrated Instagram content, customer testimonials, and a blog to boost authority and engagement.

      The new website tripled daily traffic and attracted strategic partnerships with local wellness influencers.
    `,
    services: ["Brand strategy", "Web design & UI", "Content integration", "Mobile optimization"]
  },
  {
    title: "Stratos – Scaling a SaaS Product with Powerful UX",
    slug: "stratos",
    image: portfolio4,
    shortDescription: "Creating a clean and modern digital face for a cloud-based SaaS platform.",
    fullDescription: `
      Stratos.io is a B2B SaaS platform offering cloud-based productivity tools. Their team needed a clean, high-converting landing page to support their product launch.

      We created a conversion-focused landing page with interactive product highlights using GSAP animations. The design clearly communicated product value and drove users to sign up for the free trial.

      After launch, Stratos saw a 60% increase in sign-up conversions and positive user feedback on clarity and design.
    `,
    services: ["Landing page design", "Product UX strategy", "Animation with GSAP", "Performance optimization"]
  },
  {
    title: "BrightPath – Corporate Rebranding for a Consulting Firm",
    slug: "brightpath",
    image: portfolio3,
    shortDescription: "Refreshing an outdated brand to appeal to modern professionals.",
    fullDescription: `
      BrightPath, an established business consultancy, wanted to reposition itself with a modern, competitive digital identity.

      We conducted a full brand audit and created a new visual identity, redesigned their website, and optimized messaging to appeal to tech-savvy corporate clients.

      Post-rebrand, BrightPath doubled its B2B client acquisition and received strong client feedback on the new look and feel.
    `,
    services: ["Rebranding", "Copywriting", "Web design", "Corporate identity overhaul"]
  }
];



export { menuItems, services,testimonials,caseStudies };
