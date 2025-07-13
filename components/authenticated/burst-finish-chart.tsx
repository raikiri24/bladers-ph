import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const burstFinishData = [
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

export function BurstFinishChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Most Burst Finishes</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={burstFinishData} margin={{ bottom: 40 }}>
            <XAxis
              dataKey="name"
              interval={0}
              angle={-45}
              textAnchor="end"
              height={70}
            />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="burstFinish"
              fill="#f43f5e" // rose-500
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
