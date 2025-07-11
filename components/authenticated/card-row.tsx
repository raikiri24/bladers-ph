import { TechCard } from "./tech-card";

const techs = [
  { src: "/images/team1.png", alt: "Icon 1" },
  { src: "/images/team2.png", alt: "Icon 2" },
  { src: "/images/team3.png", alt: "Icon 3" },
  { src: "/images/team4.png", alt: "Icon 4" },
  { src: "/images/team1.png", alt: "Icon 5" },
];
export function CardRow() {
  return (
    <div className="relative w-full py-16 flex justify-center items-center">
      {/* Horizontal line behind cards */}
      <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-500 z-0 " />
      {/* Vertical line below center card */}
      <div className="absolute top-1/2 left-1/2 w-[2px] h-20 bg-gray-500  z-0 translate-x-[-50%] translate-y-[50%]" />

      {/* Cards */}
      <div className="relative z-10 flex gap-20">
        {techs.map((tech, index) => (
          <div key={index} className={`transition-all duration-300`}>
            <TechCard src={tech.src} alt={tech.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}
