import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Testimonial from "./pages/Testimonial";

const App = () => {
  return (
    <div className="font-inter overflow-hidden bg-white dark:bg-gray-900">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/service" element={<Service />}></Route>
        <Route exact path="/testimonial" element={<Testimonial />}></Route>
      </Routes>
    </div>
  );
};

export default App;
