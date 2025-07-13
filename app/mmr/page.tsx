// app/mmr/info/page.tsx
"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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

export default function MMRInfoPage() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">MMR System Explanation</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>📊 MMR Computation Table</DialogTitle>
              <DialogDescription>
                Breakdown of how MMR points are awarded in Beyblade X
                tournaments.
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
      </div>

      <Card>
        <CardContent className="prose dark:prose-invert pt-4">
          <section>
            <h2>🎯 What is MMR?</h2>
            <p>
              MMR (Matchmaking Rating) is a numerical score that reflects a
              player's performance and achievements in official Beyblade X
              tournaments. It helps track competitive progress and rank players
              fairly across different events.
            </p>
          </section>

          <section>
            <h2>📊 MMR Computation Table</h2>
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
          </section>

          <section>
            <h2>⚖️ Why This System?</h2>
            <p>
              This transparent MMR system promotes fairness by valuing both
              match results and tournament achievements while discouraging
              misconduct. It encourages consistent competitive behavior and
              rewards exceptional performance.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
