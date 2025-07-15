// app/mmr/info/page.tsx
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

import PlayerPerformanceChart from "@/components/authenticated/player-performance-chart";
import PlayerRankingChart from "@/components/authenticated/player-ranking-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const mockData = [
  { id: 1, name: "Spyk", wins: 8 },
  { id: 2, name: "Kaelabubu", wins: 6 },
  { id: 3, name: "Eddy", wins: 6 },
  { id: 4, name: "Biryani", wins: 5 },
  { id: 5, name: "Sijey", wins: 4 },
  { id: 6, name: "Triple A", wins: 4 },
  { id: 7, name: "Nacho", wins: 3 },
  { id: 8, name: "Hotshot", wins: 3 },
  { id: 9, name: "Kenzo", wins: 3 },
  { id: 10, name: "Leandro", wins: 3 },
  { id: 11, name: "Micjo", wins: 3 },
  { id: 12, name: "Sopi", wins: 3 },
  { id: 13, name: "Liam", wins: 2 },
  { id: 14, name: "EzPoohC", wins: 2 },
  { id: 15, name: "Jean", wins: 2 },
  { id: 16, name: "Dors", wins: 2 },
  { id: 17, name: "Jejo", wins: 2 },
  { id: 18, name: "Navi", wins: 2 },
  { id: 19, name: "Kael", wins: 2 },
  { id: 20, name: "Yeoji", wins: 2 },
  { id: 21, name: "Bella", wins: 2 },
  { id: 22, name: "Tinapay", wins: 1 },
  { id: 23, name: "Mikee", wins: 1 },
  { id: 24, name: "Brentypetestos", wins: 1 },
  { id: 25, name: "CM Punk", wins: 1 },
];

export default function TournamentStatsPage() {
  const totalMatches = mockData.reduce((sum, player) => sum + player.wins, 0);

  return (
    <div className="p-6 space-y-6">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className=" w-fit bg-white text-teal-700 hover:bg-teal-100 "
          >
            MMR Computation <HelpCircle className="h-5 w-5" />
          </Button>
        </DialogTrigger>

        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>📊 MMR Computation Table</DialogTitle>
            <DialogDescription>
              Breakdown of how MMR points are awarded in Beyblade X tournaments.
            </DialogDescription>
          </DialogHeader>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Criteria</TableHead>
                <TableHead>Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell rowSpan={2}>Match Score</TableCell>
                <TableCell>Per Win</TableCell>
                <TableCell>+5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Per Loss</TableCell>
                <TableCell>-5</TableCell>
              </TableRow>

              <TableRow>
                <TableCell rowSpan={5}>Placement Bonus</TableCell>
                <TableCell>Champion</TableCell>
                <TableCell>+30</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2nd Place</TableCell>
                <TableCell>+15</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3rd Place</TableCell>
                <TableCell>+10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Swiss King</TableCell>
                <TableCell>+10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>TopCut</TableCell>
                <TableCell>+10</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </DialogContent>
      </Dialog>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Tournament Statistics</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground">Total Matches</p>
            <p className="text-2xl font-bold">{totalMatches}</p>
          </div>
          <div>
            <p className="text-muted-foreground">Players</p>
            <p className="text-2xl font-bold">{mockData.length}</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Player Wins</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-x-auto">
            <div className="min-w-[700px]">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockData}>
                  <XAxis
                    dataKey="name"
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                    height={70}
                  />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="wins" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* <PlayerPerformanceChart />
      <PlayerRankingChart /> */}
    </div>
  );
}
