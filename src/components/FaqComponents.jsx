import { useState } from "react";

const faqData = {
  General: [
    {
      question: "What kind of businesses do you work with?",
      answer:
        "We primarily work with consultants, startups, and service-based professionals, but we're open to collaborating with any business looking to improve their digital presence.",
    },
    {
      question: "Do you offer custom design solutions?",
      answer:
        "Yes, all of our solutions are tailored to fit your brand’s identity, target audience, and business goals. We don’t do one-size-fits-all.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary, but most website builds are completed within 2 to 4 weeks depending on the scope and revisions.",
    },
    {
      question: "Is there a limit to how many revisions I can request?",
      answer:
        "We offer up to 3 major revisions during the design phase to ensure your vision is fully captured.",
    },
    {
      question: "Do you redesign existing websites?",
      answer:
        "Yes, we offer redesign services to improve layout, performance, and conversion rates while keeping your core identity intact.",
    },
    {
      question: "Can you help with branding as well?",
      answer:
        "Absolutely. We provide logo design, color strategy, typography, and overall brand identity consultation.",
    },
  ],
  Support: [
    {
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we offer 30 days of free post-launch support to fix bugs and ensure everything runs smoothly.",
    },
    {
      question: "Can I update the website content myself?",
      answer:
        "Absolutely. We build websites that are easy to manage. We'll also guide you on how to make updates if needed.",
    },
    {
      question: "What if something breaks after delivery?",
      answer:
        "If it’s within the support period, we’ll fix it for free. After that, we offer affordable maintenance packages.",
    },
    {
      question: "Do you offer hosting or domain services?",
      answer:
        "We don’t directly provide hosting or domains, but we can help you choose and set up the best options based on your needs.",
    },

    {
      question: "Do you provide tutorials or guides?",
      answer:
        "Yes, we include basic documentation and video walkthroughs to help you understand your site.",
    },
    {
      question: "How can I contact support after delivery?",
      answer:
        "You can reach us via email or through our dedicated client support portal. We typically respond within 24 hours.",
    },
  ],
  Others: [
    {
      question: "Can I request a refund after the project has started?",
      answer:
        "Refunds are not available once a project has begun, but we strive for satisfaction and offer revisions to meet expectations.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes, we work with clients from all over the world. Our communication is mainly handled through email, Zoom, or your preferred platform.",
    },
    {
      question: "Can I see some of your previous work?",
      answer:
        "Of course! You can view our featured projects on the Case Studies page.",
    },
    {
      question: "Do you offer rush delivery?",
      answer:
        "Yes, expedited delivery is available at an additional cost. Let us know your deadline and we’ll do our best to accommodate it.",
    },

    {
      question: "Do you offer white-label services for agencies?",
      answer:
        "Yes, we offer white-label services where we work as an invisible partner for agencies and freelancers.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept bank transfers, PayPal, and Stripe for international transactions. Invoices are issued upon request.",
    },
  ],
};

const FaqComponents = () => {
  const categories = Object.keys(faqData);
  const [activeCategory, setActiveCategory] = useState("General");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-3xl m-auto p-4 min-h-screen flex justify-center flex-col">
      <h1
        className="text-center font-semibold text-xl mb-5"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span>How To Get Started</span>
      </h1>
      <h2
        className="text-3xl font-bold text-center mb-8 dark:text-white text-gray-800"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Frequently Asked Questions
      </h2>

      {/* Category Tabs */}
      <div
        className="flex justify-center gap-4 mb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setOpenIndex(null);
            }}
            className={`px-4 py-2 rounded-lg text-base font-medium transition ${
              activeCategory === category
                ? "gradient-primary text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {faqData[activeCategory].map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 shadow-sm"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span
                className={`font-medium text-gray-800 dark:text-white ${
                  openIndex === index ? "text-blue-500 dark:text-blue-500" : ""
                }`}
              >
                {faq.question}
              </span>
              <svg
                className={`w-4 h-4 text-gray-500 transform transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openIndex === index && (
              <div className="mt-2 text-gray-600 text-base dark:text-gray-400">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComponents;
