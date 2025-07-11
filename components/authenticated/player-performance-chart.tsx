"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { tournament: "Jan Cup", PlayerA: 1, PlayerB: 3 },
  { tournament: "Feb Clash", PlayerA: 2, PlayerB: 2 },
  { tournament: "March Battle", PlayerA: 1, PlayerB: 4 },
  { tournament: "April Storm", PlayerA: 3, PlayerB: 1 },
];

export default function PlayerPerformanceChart() {
  return (
    <Card className="w-full max-w-4xl mx-auto my-6">
      <CardContent>
        <h2 className="text-2xl font-semibold mb-4">
          Player Performance per Tournament
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="tournament" />
            <YAxis reversed domain={[1, "dataMax"]} allowDecimals={false} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="PlayerA"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="PlayerB" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
