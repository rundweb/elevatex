import { Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="font-inter overflow-hidden bg-white dark:bg-gray-900">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
};

export default App;
