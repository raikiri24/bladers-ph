import { HoverEffect } from "../ui/card-hover-effect";
import { MapPin } from "lucide-react";

export function CardHoverEffectDemo() {
  const placeholderBase64 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////////8+2kZXAAAAD3RSTlMAoIDB+Pv6++fnmJjZ1e7oKSQ9AAAB4ElEQVR42u3YwQqCQBBA0YqYIQqEFvP//9Y3UapJgZJnt8k3IfUjROV1vh9oPGDWW5GCeIUTg3RCZzRCLmVYQSKbGUUSq2xRRLrbFGEqtsUUSq2xRRLrbFGEqtsUUSq2xRRLrbFGEqtsUUSq2xRRJrczkIfh8gGElZxnyL0LdLDXxvUfpdYPkt08NtAjrtrKXYU/ZoYv4TfnZvU3NbwGWX6ttqMZwQbTafz8AdqpXxuHa8yQAAAAASUVORK5CYII=";

  const maxCards = 5;

  const visibleCards = teams.slice(0, maxCards);
  const showMore = teams.length > maxCards;

  const displayItems = showMore
    ? [
        ...visibleCards,
        {
          title: "More Teams →",
          description: "View all participating teams.",
          logo: "/logos/more.png",
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
    title: "Storm Breakers",
    description: "SM North EDSA, Quezon City",
    // logo: "/logos/storm-breakers.png",
    link: "#E",
  },
  {
    title: "Phantom Reapers",
    description: "Ayala Malls Feliz, Pasig",
    // logo: "/logos/phantom-reapers.png",
    link: "#D",
  },
  {
    title: "Blazing Raptors",
    description: "Ayala Malls Feliz, Pasig",
    // logo: "/logos/blazing-raptors.png",
    link: "#C",
  },
  {
    title: "Aqua Vortex",
    description: "Ayala Malls Feliz, Pasig",
    // logo: "/logos/aqua-vortex.png",
    link: "#B",
  },
  {
    title: "Iron Titans",
    description: "Ayala Malls Feliz, Pasig",
    // logo: "/logos/iron-titans.png",
    link: "#A",
  },
  {
    title: "Iron Titans",
    description: "Ayala Malls Feliz, Pasig",
    // logo: "/logos/iron-titans.png",
    link: "#A",
  },
  {
    title: "Iron Titans",
    description: "Ayala Malls Feliz, Pasig",
    // logo: "/logos/iron-titans.png",
    link: "#A",
  },
  {
    title: "Iron Titans",
    description: "Ayala Malls Feliz, Pasig",
    // logo: "/logos/iron-titans.png",
    link: "#A",
  },
  {
    title: "Iron Titans",
    description: "Ayala Malls Feliz, Pasig",
    // logo: "/logos/iron-titans.png",
    link: "#A",
  },
];
