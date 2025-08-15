import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 1,
    loop: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <>
      {/* Non-mobile size screens */}
      {/* <div className="hidden md:block"> */}
      <div>
        <div className="relative">
          <button
            className="absolute z-10 -left-10 top-1/2 -translate-y-1/2 bg-gray-200 shadow p-2 rounded-full hover:bg-primary text-gray-800 transition-colors duration-200 hover:text-gray-200"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-5 h-5 hover:text-gray-200 transition-colors duration-200" />
          </button>
          <button
            className="absolute z-10 -right-10 top-1/2 -translate-y-1/2 bg-gray-200 shadow p-2 rounded-full hover:bg-primary text-gray-800 transition-colors duration-200 hover:text-gray-200 "
            onClick={scrollNext}
          >
            <ChevronRight className="w-5 h-5  transition-colors duration-200" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((img, index) => (
                <div key={index} className="flex-[0_0_100%] px-2">
                  <img src={img} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4 gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full bg-gray-300 ${
                index === selectedIndex ? "bg-primary" : ""
              }`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
      {/* Mobile Screens */}
      {/* <div className="block md:hidden">
        {projects.map((project: any) => (
          <div className="h-54 relative mb-6 text-left">
            <div className="text-gray-200 mb-2">
              <span className="mr-2 text-inherit">{project.title}</span>
            </div>
            <div className="relative">
              <img src={project.image} />
              <a href={project.link} title={`View ${project.title} on Github`}>
                <div className="absolute top-2 right-2 text-gray-200 cursor-pointer hover:text-primary transition-colors duration-200">
                  <Icon path={mdiGithub} size={1} />
                </div>
              </a>
            </div>
            <div className="text-xs mt-2 text-gray-300">
              {project.description}
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
}
