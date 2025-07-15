import { HoverEffect } from "../ui/card-hover-effect";
import { MapPin } from "lucide-react";

export function CardHoverEffectDemo() {
  const maxCards = 5;

  const visibleCards = teams.slice(0, maxCards);
  const showMore = teams.length > maxCards;

  const displayItems = showMore
    ? [
        ...visibleCards,
        {
          title: "More Teams →",
          description: "View all participating teams.",
          // logo: "/logos/more.png",
          link: "/teams",
        },
      ]
    : visibleCards;

  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect items={displayItems} />
    </div>
  );
}

export const teams = [
  {
    title: "Satori Bladers",
    description: "Satori Residences, F. Pasco, Ave",
    logo: "/images/satori.jpeg",
    link: "https://www.facebook.com/people/Satori-Bladers/61577278157676/",
  },
  {
    title: "TBD",
    description: "TBD",
    // logo: "/logos/phantom-reapers.png",
    link: "#D",
  },
  {
    title: "TBD",
    description: "TBD",
    // logo: "/logos/blazing-raptors.png",
    link: "#C",
  },
  {
    title: "TBD",
    description: "TBD",
    // logo: "/logos/aqua-vortex.png",
    link: "#B",
  },
  {
    title: "TBD",
    description: "TBD",
    // logo: "/logos/iron-titans.png",
    link: "#A",
  },
  {
    title: "TBD",
    description: "TBD",
    // logo: "/logos/iron-titans.png",
    link: "#A",
  },
  {
    title: "TBD",
    description: "TBD",
    // logo: "/logos/iron-titans.png",
    link: "#A",
  },
  {
    title: "TBD",
    description: "TBD",
    // logo: "/logos/iron-titans.png",
    link: "#A",
  },
  {
    title: "TBD",
    description: "TBD",
    // logo: "/logos/iron-titans.png",
    link: "#A",
  },
];
