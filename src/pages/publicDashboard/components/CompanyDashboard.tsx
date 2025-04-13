// components/TestimonialSlider.jsx
import React, { useRef } from "react";
import ProfileCard from "./ProfileCard";
import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PublicDashboardNavbar from "./PublicDashboardNavbar";

const testimonials = [
  {
    name: "Steve Herron",
    date: "April 1, 2023",
    content:
      "I am super visual and having a clear dashboard with all the team metrics visible...",
    image: "https://via.placeholder.com/60", // replace with real image
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: "https://via.placeholder.com/60",
  },
  {
    name: "Jane Doe",
    date: "March 15, 2023",
    content:
      "The progress tracking is amazing, very user-friendly and efficient...",
    image: "https://via.placeholder.com/60",
  },
  // add more
];

const TestimonialSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: string) => {
    if (scrollRef.current) {
      scrollRef.current?.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <PublicDashboardNavbar />
      <div className="flex flex-col justify-center items-center gap-5 font-poppin text-center mb-[30px] mt-[50px]">
            <h2 className="text-[32px] text-[#333333] font-medium ">Testimonials</h2>
            <h3 className="text-[36px] text-[#2D3F50] font-semibold">Don’t just take our word for it</h3>
            <h4 className="text-[24px] text-[#15120F] font-normal ">The results speak for themselves. See how Sisu has helped real clients take their businesses to the next level.</h4>
      </div>
      <div className="relative w-full">
        {/* Slider Controls */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-[#E5E5E5] shadow p-2 w-[60px] h-[60px] rounded-[10px]"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-[#000000] shadow p-2 w-[60px] h-[60px] rounded-[10px]"
        >
          <ChevronRight color="#FFFFFF" />
        </button>

        {/* Scrollable Cards Container */}
        <div className="w-full flex justify-center items-center ">
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-8 w-[90vw] scroll-container"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-auto  flex justify-center items-center"
              >
                <ProfileCard
                  stars={5}
                  date={t.date}
                  description={t.content}
                  image={t.image}
                  name={t.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center my-[100px] ">
        {/* {" button"} */}
        <button className="bg-[#333333] flex  justify-center items-center rounded-[10px] w-[294px] h-[82px] font-poppin text-[#F3F3F3] text-[28px] font-semibold">
          Schedule Demo
        </button>
      </div>

      <PublicFooter hideImage={true} />
    </>
  );
};

export default TestimonialSlider;
