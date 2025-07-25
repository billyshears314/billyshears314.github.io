import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { mdiGithub } from "@mdi/js";
import { Icon } from "@mdi/react";

type Project = {
  title: string;
  description: string;
  link: string;
};

type ProjectSectionProps = {
  projects: Project[];
};

// const slides = [
//   <div className="bg-red-300 h-48 flex items-center justify-center">
//     Slide 1
//   </div>,
// ];

export default function ProjectSection({ projects }: ProjectSectionProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    slidesToScroll: 2,
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

  const renderProjectSlide = (project: any) => {
    return (
      <div className="h-54 relative">
        <div className="mb-0.5">{project.title}</div>
        <div className="relative">
          <img src={project.image} />
          <a href={project.link} title={`View ${project.title} on Github`}>
            <div className="absolute top-2 right-2 text-gray-200 cursor-pointer hover:text-primary transition-colors duration-200">
              <Icon path={mdiGithub} size={1} />
            </div>
          </a>
        </div>
        {/* <div className="absolute bottom-1 right-1 text-sm p-1 flex text-gray-200">
          <span className="text-inherit">{project.title}</span>
        </div> */}
        {/* <Icon path={mdiLaunch} size={0.85} className="text-inherit" /> */}
        <div className="text-gray-300 text-xs mt-0.5">
          {project.description}
        </div>
      </div>
    );
  };

  return (
    <div className="relative">
      <h2 className="text-2xl text-left mb-4 md:mb-8">Projects</h2>
      {/* Non-mobile size screens */}
      <div className="hidden md:block">
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
              {projects.map((project, index) => (
                <div
                  // className="flex-[0_0_33.3333%] px-2" // 3 slides per view (100 / 3 = 33.333%)
                  className="flex-[0_0_50%] px-2"
                  key={index}
                >
                  {renderProjectSlide(project)}
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
      <div className="block md:hidden">
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
      </div>
    </div>
  );
}
