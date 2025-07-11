"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { MultiSelect } from "@/components/ui/multi-select";
import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useState, useMemo } from "react";

const rawData = [
  { tournament: "Jan Cup", PlayerA: 1, PlayerB: 3 },
  { tournament: "Feb Clash", PlayerA: 2, PlayerB: 2 },
  { tournament: "March Battle", PlayerA: 1, PlayerB: 4 },
  { tournament: "April Storm", PlayerA: 3, PlayerB: 1 },
];

const players = ["PlayerA", "PlayerB"];
const tournaments = rawData.map((d: any) => d.tournament);
type PlayerKey = "PlayerA" | "PlayerB";

export default function PlayerRankingChart() {
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerKey>("PlayerA");
  const [selectedTournaments, setSelectedTournaments] = useState(tournaments);

  const filteredData = useMemo(() => {
    return rawData
      .filter((d: any) => selectedTournaments.includes(d.tournament))
      .map((d) => ({
        tournament: d.tournament,
        rank: d[selectedPlayer],
      }));
  }, [selectedPlayer, selectedTournaments]);

  return (
    <Card className="w-full max-w-5xl mx-auto my-6">
      <CardContent className="space-y-6">
        <h2 className="text-2xl font-bold">Player Ranking Per Tournament</h2>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/3">
            <label className="text-sm text-muted-foreground mb-1 block">
              Select Player
            </label>
            <Select
              onValueChange={(value) => setSelectedPlayer(value as PlayerKey)}
              defaultValue={selectedPlayer}
            >
              <SelectTrigger>
                <SelectValue placeholder="Choose a player" />
              </SelectTrigger>
              <SelectContent>
                {players.map((p) => (
                  <SelectItem key={p} value={p}>
                    {p}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="w-full md:w-2/3">
            <label className="text-sm text-muted-foreground mb-1 block">
              Select Tournaments
            </label>
            <MultiSelect
              options={tournaments.map((t) => ({ label: t, value: t }))}
              selected={selectedTournaments}
              onChange={setSelectedTournaments}
            />
          </div>
        </div>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tournament" />
            <YAxis reversed domain={[1, "dataMax"]} allowDecimals={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="rank"
              stroke="#facc15"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
