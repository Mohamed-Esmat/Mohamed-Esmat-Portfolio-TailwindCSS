import { useRef, useState, useEffect } from "react";
import SectionTitle from "./SectionTitle";
import SkillsCard from "./SkillsCard";
import { skills } from "../data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Skills = () => {
  const containerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkArrows = () => {
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
  };

  const scroll = (direction) => {
    const amount = 300;
    containerRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const el = containerRef.current;
    checkArrows();
    el.addEventListener("scroll", checkArrows);
    return () => el.removeEventListener("scroll", checkArrows);
  }, []);

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="align-element">
        <SectionTitle title="Skills" subtitle="My technical level" />

        <div className="relative">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white border rounded-full shadow hover:bg-gray-100 cursor-pointer border-emerald-500"
            >
              <ChevronLeft size={24} className="text-emerald-600" />
            </button>
          )}

          {/* Scroll Container */}
          <div
            ref={containerRef}
            className="flex overflow-x-auto gap-6 scroll-smooth px-10 py-4 no-scrollbar w-full "
          >
            {skills.map((skill, index) => (
              <div
                key={`${skill.id}-${index}`}
                className="flex-shrink-0 w-64 p-4 bg-emerald-50 shadow-lg rounded-lg"
              >
                <SkillsCard {...skill} />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white border rounded-full shadow hover:bg-gray-100 cursor-pointer border-emerald-500"
            >
              <ChevronRight size={24} className="text-emerald-600" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;

// import SkillsCard from "./SkillsCard";
// import { skills } from "../data";
// import SectionTitle from "./SectionTitle";
// const Skills = () => {
//   return (
//     <section className="py-20 align-element" id="skills">
//       <SectionTitle text="Tech Stack" />

//       {/* Skills Grid */}

//       <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {skills.map((skill) => {
//           return <SkillsCard key={skill.id} {...skill} />;
//         })}
//       </div>
//     </section>
//   );
// };

// export default Skills;
