"use client";
import { FloatingDockDemo } from "@/components/authenticated/flaoting-dock";
import { CanvasRevealEffectDemo } from "@/components/authenticated/players-of-the-week";
import TopNavigation from "@/components/shared/navigation";
import { ReviewMarquee } from "@/components/shared/review-marquee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
const slugs = ["trello", "google", "hubspot", "slack", "zendesk"];

export default function Home() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <div>
      <TopNavigation />
      <FloatingDockDemo />
      <div className="relative min-h-screen bg-gradient-to-b from-[#0f172a] to-[#0d9488] text-white overflow-hidden ">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:20px_20px] opacity-20 z-0" />
        <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 drop-shadow-md">
            Beyblade X Philippines
          </h1>
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 drop-shadow-md">
            Portal
          </h1>

          <Button
            variant="outline"
            size="lg"
            className="border-gray-500 bg-teal-900 "
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className=" px-20 py-10">
        <h1 className="text-6xl font-extrabold ">🏆 Player of the week.</h1>
      </div>
      <CanvasRevealEffectDemo />

      <div className="bg-foreground h-[40rem] px-64 flex gap-10 flex-col py-10">
        <div>
          <h2 className=" text-primary-pink font-bold">
            Frequently Asked Questions
          </h2>
          <h1 className="text-background font-bold text-4xl w-[50rem]">
            Everything you need to know about Our Company.
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-10">
          <div className="">
            <Accordion
              type="single"
              collapsible
              className="text-background bg-foreground mt-2"
            >
              <AccordionItem
                value="item-1"
                className="border-b border-gray-200"
              >
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
              className="text-background bg-foreground mt-2"
            >
              <AccordionItem
                value="item-1"
                className="border-b border-gray-200"
              >
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
              className="text-background bg-foreground mt-2"
            >
              <AccordionItem
                value="item-1"
                className="border-b border-gray-200"
              >
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="">
            <Accordion
              type="single"
              collapsible
              className="text-background bg-foreground mt-2"
            >
              <AccordionItem
                value="item-1"
                className="border-b border-gray-200"
              >
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
              className="text-background bg-foreground mt-2"
            >
              <AccordionItem
                value="item-1"
                className="border-b border-gray-200"
              >
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Accordion
              type="single"
              collapsible
              className="text-background bg-foreground mt-2"
            >
              <AccordionItem
                value="item-1"
                className="border-b border-gray-200"
              >
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
      <ReviewMarquee />
    </div>
  );
}
