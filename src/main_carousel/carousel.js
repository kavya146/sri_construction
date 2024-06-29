import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Carousel.css";

function MainCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="main-carousel-img" src="/hall.jpg"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className="main-carousel-img" src="/bedroom.jpg"></img>
        </Carousel.Item>
        <Carousel.Item>
          <img className="main-carousel-img" src="/kitchen.jpg"></img>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default MainCarousel;
