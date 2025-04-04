import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
  } from "@/components/ui/carousel";
  
  const images = [
    "/office.png",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
  ];
  
  export default function MyCarousel() {
    return (
      <Carousel className="w-full relative">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-2">
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-72 object-cover rounded-lg"
                //  className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );
  }
  