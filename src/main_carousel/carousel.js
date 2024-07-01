import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css";

function MainCarousel() {
  const publicPath = process.env.PUBLIC_URL;
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="main-carousel-img"
            src={`${publicPath}/hall.jpg`}
          ></img>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="main-carousel-img"
            src={`${publicPath}/bedroom.jpg`}
          ></img>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="main-carousel-img"
            src={`${publicPath}/kitchen.jpg`}
          ></img>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MainCarousel;
