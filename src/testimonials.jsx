import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      name: "Christoph Ted",
      title: "Owner of. TELECOM",
      quote:
        "Their solutions propelled our business forward. Truly exceptional service!",
      imageUrl: "./src/assets/ted.jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      title: "Lead Developer",
      quote:
        "An incredible team and fantastic product. It has revolutionized our workflow.",
      imageUrl: "./src/assets/jane.jpg",
    },
    {
      id: 3,
      name: "John Smith",
      title: "Marketing Director",
      quote:
        "We saw immediate results. The support team is top-notch and always responsive.",
      imageUrl: "./src/assets/john.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const getCardStyle = (index) => {
    const totalCards = testimonials.length;
    const distance = index - currentIndex;
    const normalizedDistance = (distance + totalCards) % totalCards;
    const finalDistance =
      normalizedDistance > totalCards / 2
        ? normalizedDistance - totalCards
        : normalizedDistance;

    let opacity = 1;
    let zIndex = 0;
    let transform = `translateX(${finalDistance * 100}%) scale(1)`;

    if (finalDistance === 0) {
      opacity = 1;
      zIndex = 10;
      transform = "translateX(0) scale(1)";
    } else {
      opacity = 0.5;
      zIndex = 0;
      const xOffset = finalDistance > 0 ? "40%" : "-40%";
      transform = `translateX(${xOffset}) scale(0.8)`;
    }

    return {
      transform,
      opacity,
      zIndex,
    };
  };

  return (
    <div className="flex flex-col items-center justify-center text-black font-[Inter] w-full min-w-0 p-4">
      {/* Header */}
      <h1 className="text-xl md:text-2xl font-bold mb-4 tracking-wider text-black text-center">
        TESTIMONIALS
      </h1>

      {/* Carousel container with a slightly larger max-width */}
      <div className="relative w-full max-w-sm">
        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 z-20 p-2 rounded-full text-gray-700 bg-white/80 hover:bg-white shadow-md transition-all duration-300 hover:scale-110"
          aria-label="Previous Testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 z-20 p-2 rounded-full text-gray-700 bg-white/80 hover:bg-white shadow-md transition-all duration-300 hover:scale-110"
          aria-label="Next Testimonial"
        >
          <ChevronRight size={20} />
        </button>

        {/* Carousel Content */}
        {/* Adjusted height to fit the slightly larger cards */}
        <div className="relative w-full h-[400px] flex justify-center items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="absolute transition-all duration-700 ease-in-out"
              style={getCardStyle(index)}
            >
              {/* Card */}
              {/* Increased card dimensions */}
              <div className="w-[240px] h-[320px] rounded-xl overflow-hidden shadow-lg">
                <div className="relative w-full h-full overflow-hidden">
                  {/* Full Background Image */}
                  <img
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  {/* Content */}
                  {/* Adjusted padding and font sizes */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-4 text-white">
                    <div className="flex justify-start">
                      <div className="inline-block  rounded-lg px-3 py-1">
                        <span className="text-white text-sm font-semibold font-sans tracking-wider">
                          MEET
                        </span>
                      </div>
                    </div>
                    <div className="text-left">
                      <h2 className="text-base font-bold text-white mb-1 leading-tight">
                        {testimonial.name}
                      </h2>
                      <p className="text-sm text-white/90 font-medium">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quote - Outside card, below it */}
              {/* Increased container max-width to match the new card size */}
              <div className="max-w-[240px] text-center mt-4">
                <blockquote className="text-sm text-blue-600 font-medium italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-5 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex
                  ? "bg-gray-800"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
