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
  { name: "Spyk", wins: 8 },
  { name: "Kaelabubu", wins: 6 },
  { name: "Eddy", wins: 6 },
  { name: "Biryani", wins: 5 },
  { name: "Sijey", wins: 4 },
  { name: "Triple A", wins: 4 },
  { name: "Nacho", wins: 3 },
  { name: "Hotshot", wins: 3 },
  { name: "Kenzo", wins: 3 },
  { name: "Leandro", wins: 3 },
  { name: "Micjo", wins: 3 },
  { name: "Sopi", wins: 3 },
  { name: "Liam", wins: 2 },
  { name: "EzPoohC", wins: 2 },
  { name: "Jean", wins: 2 },
  { name: "Dors", wins: 2 },
  { name: "Jejo", wins: 2 },
  { name: "Navi", wins: 2 },
  { name: "Kael", wins: 2 },
  { name: "Yeoji", wins: 2 },
  { name: "Bella", wins: 2 },
  { name: "Tinapay", wins: 1 },
  { name: "Mikee", wins: 1 },
  { name: "Brentypetestos", wins: 1 },
  { name: "CM Punk", wins: 1 },
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
                <TableCell>+20</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Per Loss</TableCell>
                <TableCell>-10</TableCell>
              </TableRow>

              <TableRow>
                <TableCell rowSpan={4}>Finish Bonus</TableCell>
                <TableCell>Spin Finish</TableCell>
                <TableCell>+5</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Over Finish</TableCell>
                <TableCell>+10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Burst Finish</TableCell>
                <TableCell>+15</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Extreme Finish</TableCell>
                <TableCell>+25</TableCell>
              </TableRow>

              <TableRow>
                <TableCell rowSpan={5}>Placement Bonus</TableCell>
                <TableCell>Champion</TableCell>
                <TableCell>+100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2nd Place</TableCell>
                <TableCell>+75</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>3rd Place</TableCell>
                <TableCell>+50</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Swiss King</TableCell>
                <TableCell>+30</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>TopCut</TableCell>
                <TableCell>+20</TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Penalty</TableCell>
                <TableCell>Per Warning Point</TableCell>
                <TableCell>-10</TableCell>
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
        </CardContent>
      </Card>
      <PlayerPerformanceChart />
      <PlayerRankingChart />
    </div>
  );
}
