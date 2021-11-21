import { Carousel } from "react-bootstrap";

const AppCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/carousel/carousel-1.jpg"
            alt="carousel-1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/carousel/carousel-2.jpg"
            alt="carousel-2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/carousel/carousel-3.jpg"
            alt="carousel-3"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default AppCarousel;
