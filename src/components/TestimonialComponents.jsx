// data
import { testimonials } from "../assets/data/data";

const TestimonialComponents = () => {
  return (
    <section className="max-w-screen-xl m-auto p-4 min-h-screen flex flex-col gap-10 justify-center">
      <div className="w-full text-center flex flex-col gap-2 items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 dark:text-white">
          Don't take our word for it.
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold">
          <span>Trust Our Customers</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          {testimonials.slice(0, 4).map((item, i) => (
            <div key={i}>
              <h1>{item.name}</h1>
              <img src={item.image} alt=""  className="w-16 h-16 rounded-full object-cover"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialComponents;
