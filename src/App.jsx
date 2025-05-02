import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Testimonial from "./pages/Testimonial";
import Contact from "./pages/Contact";
import PortfolioDetail from "./components/PortfolioDetail";
import Blog from "./pages/Blog";
import BlogDetailsComponents from "./components/BlogDetailsComponents";

import { useEffect } from "react";
import Portfolio from "./pages/Portfolio";
import Pricing from "./pages/Pricing";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="font-inter overflow-hidden bg-white dark:bg-gray-900">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/service" element={<Service />}></Route>
        <Route exact path="/testimonials" element={<Testimonial />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route
          exact
          path="/portfoliodetail"
          element={<PortfolioDetail />}
        ></Route>
        <Route exact path="/blog" element={<Blog />}></Route>
        <Route
          exact
          path="/blogdetail"
          element={<BlogDetailsComponents />}
        ></Route>
        <Route exact path="/portfolio" element={<Portfolio />}></Route>
        <Route exact path="/pricing" element={<Pricing />}></Route>
      </Routes>
    </div>
  );
};

export default App;
