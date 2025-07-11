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
import { Cover } from "@/components/ui/cover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { GlareCard } from "@/components/ui/glare-card";
import { CardHoverEffectDemo } from "@/components/authenticated/teams-card";
import { cn } from "@/lib/utils";

type GameLog = {
  id: string;
  game: string;
  date: string;
  winner: string;
  participants: string[];
  challongeUrl: string;
};

const mockHistoryLogs: GameLog[] = [
  {
    id: "1",
    game: "Beyblade X Weekly",
    date: "2025-07-10",
    winner: "Kai",
    participants: ["Kai", "Ray", "Tyson", "Max"],
    challongeUrl: "https://challonge.com/spin_showdown",
  },
  {
    id: "2",
    game: "Beyblade Tag Team",
    date: "2025-07-08",
    winner: "Ray",
    participants: [
      "Ray",
      "Takao",
      "Kenny",
      "Ray",
      "Takao",
      "Kenny",
      "Ray",
      "Takao",
      "Kenny",
    ],
    challongeUrl: "https://challonge.com/spin_showdown",
  },
  {
    id: "3",
    game: "Spin Showdown",
    date: "2025-07-05",
    winner: "Tyson",
    participants: ["Tyson", "Daichi"],
    challongeUrl: "https://challonge.com/spin_showdown",
  },
];

export default function Home() {
  return (
    <div>
      <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600 text-sm">
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Still in development
        </p>
      </StickyBanner>
      <TopNavigation />

      <div className="relative max-sm:flex-col flex flex-col min-h-[50rem] w-full gap-0 items-center justify-center bg-gradient-to-b from-[#0f172a] to-[#0d9488] text-white overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 z-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
          )}
        />

        {/* Radial dots */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[length:20px_20px] opacity-20 z-0" />

        {/* Faded radial mask */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className=" !pt-10 ">
          <h1 className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 drop-shadow-md">
            Beyblade X Philippines
          </h1>
          <h1 className="text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500 drop-shadow-md">
            Portal
          </h1>
        </div>
        <CardHoverEffectDemo />
      </div>

      <div className="text-center lg:py-10 py-4 flex flex-col items-center ">
        <Cover>
          <h1 className="lg:text-6xl text-xl font-extrabold ">
            🏆 Player of the week.
          </h1>
        </Cover>
        <div className="flex max-sm:flex-col items-center justify-center mt-10 lg:w-1/2">
          <div className="w-full">
            <GlareCard className="flex flex-col items-center justify-center">
              <p className="text-white font-bold text-xl mt-4">
                Paul Leandro Lanot
              </p>
              <h1 className="pt-4">3G Deck</h1>
              <ul className="pt-4">
                <li>Dran Sword 3-60 Flat</li>
                <li>Knight Shield 4-80 Ball </li>
                <li>Hells Scythe 3-80 Taper</li>
              </ul>
            </GlareCard>
          </div>
          <div className="w-full">
            <Card className="max-w-xl mx-auto my-10 rounded-2xl shadow-lg dark:bg-muted">
              <CardContent className="p-4">
                <video
                  controls
                  className="w-full h-auto rounded-lg"
                  poster="/thumbnail.jpg"
                >
                  <source src="/sample.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="p-6">
        <Card>
          <CardHeader>
            <CardTitle>Game History Logs</CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Game</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Champion</TableHead>
                  <TableHead>Participants</TableHead>
                  <TableHead>Challonge</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockHistoryLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell>{log.game}</TableCell>
                    <TableCell>{log.date}</TableCell>
                    <TableCell>{log.winner}</TableCell>
                    <TableCell className="max-w-[200px] truncate">
                      {log.participants.slice(0, 4).join(", ")}
                      {log.participants.length > 4 && ", ..."}
                    </TableCell>
                    <TableCell>
                      <a
                        href={log.challongeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        View
                      </a>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
      {/* 
     
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
      <ReviewMarquee /> */}
    </div>
  );
}
