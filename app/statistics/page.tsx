"use client";

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
  { name: "Player A", wins: 4 },
  { name: "Player B", wins: 3 },
  { name: "Player C", wins: 2 },
  { name: "Player D", wins: 1 },
];

export default function TournamentStatsPage() {
  const totalMatches = mockData.reduce((sum, player) => sum + player.wins, 0);

  return (
    <div className="p-6 space-y-6">
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
              <XAxis dataKey="name" />
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
