import home1 from "../assets/images/horizontal_1.jpg";
import home2 from "../assets/images/horizontal_2.jpg";
import home3 from "../assets/images/vertical_1.jpg";
import home4 from "../assets/images/vertical_2.jpg";

const ImageHome = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="grid gap-4">
        <div>
          <img
            className="h-60 md:h-80 w-full object-cover rounded-lg"
            src={home4}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={home2}
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={home1}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-60 md:h-80 w-full object-cover rounded-lg"
            src={home3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ImageHome;
