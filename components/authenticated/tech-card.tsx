import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function TechCard({ src, alt }: { src: string; alt: string }) {
  return (
    <Card className="bg-gray-800 relative z-10 shadow-md hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-4">
        <Image src={src} alt={alt} width={40} height={40} className="mx-auto" />
      </CardContent>
    </Card>
  );
}
