import React from 'react';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import ImageFadeIn from 'react-image-fade-in';
import 'pure-react-carousel/dist/react-carousel.es.css';

interface Props {
  images: string[];
}

const Carousel: React.FC<Props> = ({ images }) => {
  return (
    <CarouselProvider naturalSlideWidth={10} naturalSlideHeight={10} totalSlides={3}>
      <Slider className="rounded-xl sm:w-full md:w-7/12 shadow-2xl mt-4">
        {/* For slides */}
        {images.map((image, index) => {
          return (
            <Slide index={index} className="flex items-center">
              <ImageFadeIn src={image} className="object-contain w-full h-full inline-block" />
            </Slide>
          );
        })}
      </Slider>
      <div className="flex justify-between sm:w-full md:w-7/12">
        {/* For thumbnails */}
        {images.map((image, index) => {
          return (
            <Dot slide={index} className="mt-8 w-48 h-48 rounded-2lg overflow-hidden shadow-2xl">
              <ImageFadeIn src={image} className="object-contain w-full h-full inline-block" />
            </Dot>
          );
        })}
      </div>
      {/* <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext> */}
    </CarouselProvider>
  );
};

export default Carousel;