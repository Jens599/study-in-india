import { useState, useRef, useEffect } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { twMerge } from "tailwind-merge";

interface CarouselProps {
  items: {
    id: number;
    title: string;
    image: string;
  }[];
}

const Carousel = ({ items }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollPosition = carousel.scrollLeft;
      const gap = window.innerWidth >= 1280 ? 16 : 4; // Match the gap from className
      const itemWidth =
        window.innerWidth >= 1280
          ? 545 + gap // xl width + gap
          : carousel.offsetWidth + gap; // full width + gap
      const newIndex = Math.round(scrollPosition / itemWidth);
      setCurrentIndex(newIndex);
    };

    carousel.addEventListener("scroll", handleScroll);
    return () => carousel.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const gap = window.innerWidth >= 1280 ? 16 : 4;
      const scrollAmount =
        window.innerWidth >= 1280
          ? 545 + gap
          : carouselRef.current.offsetWidth + gap;
      const newScrollPosition =
        carouselRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      carouselRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative my-16 w-full px-4 md:px-8 xl:pr-[232px] xl:pl-[190px]">
      {/* Navigation Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 left-2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md hover:bg-white md:left-4 xl:left-[190px]"
        aria-label="Previous slide"
      >
        <CgChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 right-2 z-10 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-md hover:bg-white md:right-4 xl:right-[232px]"
        aria-label="Next slide"
      >
        <CgChevronRight className="h-6 w-6" />
      </button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] xl:gap-16 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="h-[250px] w-full flex-none snap-start overflow-hidden rounded-[10px] shadow-md md:h-[300px] xl:h-[382px] xl:w-[545px]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="mt-6 flex justify-center gap-2 xl:mt-10">
        {items.map((_, index) => (
          <button
            key={index}
            className={twMerge(
              "size-4 rounded-full transition-all xl:size-6",
              index === currentIndex ? "bg-accent-red" : "bg-primary-green",
            )}
            onClick={() => {
              if (carouselRef.current) {
                const gap = window.innerWidth >= 1280 ? 16 : 4;
                const scrollAmount =
                  window.innerWidth >= 1280
                    ? (545 + gap) * index
                    : (carouselRef.current.offsetWidth + gap) * index;
                carouselRef.current.scrollTo({
                  left: scrollAmount,
                  behavior: "smooth",
                });
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
