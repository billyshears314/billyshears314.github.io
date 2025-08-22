import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Image } from "../types/types";

interface CarouselProps {
  images: Image[];
}

export default function Carousel({ images }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 2,
    loop: true,
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
            className="absolute z-10 -left-6 lg:-left-10 top-1/2 -translate-y-1/2 bg-gray-200 shadow p-2 rounded-full hover:bg-primary text-gray-800 transition-colors duration-200 hover:text-gray-200"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-5 h-5 hover:text-gray-200 transition-colors duration-200" />
          </button>
          <button
            className="absolute z-10 -right-6 lg:-right-10 top-1/2 -translate-y-1/2 bg-gray-200 shadow p-2 rounded-full hover:bg-primary text-gray-800 transition-colors duration-200 hover:text-gray-200 "
            onClick={scrollNext}
          >
            <ChevronRight className="w-5 h-5  transition-colors duration-200" />
          </button>

          <div className="mx-6 px-2 lg:mx-0 overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`${
                    img.isMobile
                      ? "flex-[0_0_30%] lg:flex-[0_0_25%]"
                      : "flex-[0_0_70%] lg:flex-[0_0_75%]"
                  } px-4 lg:px-8`}
                >
                  <img src={img.src} />
                  <div className="text-gray-300 font-semibold mt-2 text-sm lg:text-base">
                    {img.caption}
                  </div>
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
