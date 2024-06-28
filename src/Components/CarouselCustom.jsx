import Carousel from "react-bootstrap/Carousel";

const CarouselCustom = (props) => {
  return (
    <Carousel>
      <Carousel.Item>
        <Carousel.Caption>
          <img src={props.movies[0].Poster} alt="poster" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <img src={props.movies[1].Poster} alt="poster" />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <img src={props.movies[2].Poster} alt="poster" />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselCustom;
