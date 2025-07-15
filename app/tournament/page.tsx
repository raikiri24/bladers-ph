"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { MultiSelect } from "@/components/ui/multi-select";

const defaultFinishState = () => ({
  spin: 0,
  burst: 0,
  over: 0,
  extreme: 0,
  warning: 0,
  win: 0,
  submitted: false,
});

export default function TournamentForm() {
  const [step, setStep] = useState<"details" | number>("details");
  const [tournamentName, setTournamentName] = useState("");
  const [participants, setParticipants] = useState<string[]>([]);
  const [date, setDate] = useState("");
  const [scores, setScores] = useState<Record<string, any[]>>({});

  const handleScoreChange = (
    player: string,
    round: number,
    updatedRound: any
  ) => {
    setScores((prev) => {
      const updated = { ...prev };
      updated[player][round] = {
        ...updatedRound,
        submitted: false,
        win:
          updatedRound.spin * 1 +
          updatedRound.burst * 2 +
          updatedRound.over * 2 +
          updatedRound.extreme * 2 +
          updatedRound.warning * 1,
      };
      return updated;
    });
  };

  const handleRoundSubmit = (player: string, round: number) => {
    setScores((prev) => {
      const updated = { ...prev };
      updated[player][round].submitted = true;
      return updated;
    });
  };

  const handleNext = () => {
    const initial: Record<string, any[]> = {};
    participants.forEach((p) => {
      initial[p] = Array(5)
        .fill(null)
        .map(() => defaultFinishState());
    });
    setScores(initial);
    setStep(0); // Start with round 1
  };

  const handleSanitizedChange = (
    player: string,
    round: number,
    type: string,
    value: string
  ) => {
    const numeric = value === "" ? "" : Math.max(0, Number(value));
    handleScoreChange(player, round, {
      ...scores[player][round],
      [type]: numeric === "" ? 0 : numeric,
    });
  };

  const currentRound = typeof step === "number" ? step : null;

  return (
    <div className="max-w-xl mx-auto space-y-6 p-4">
      {step === "details" && (
        <>
          <div>
            <Label htmlFor="tournamentName">Tournament Name</Label>
            <Input
              id="tournamentName"
              value={tournamentName}
              onChange={(e) => setTournamentName(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="participants">Participants</Label>
            <MultiSelect
              options={["Alice", "Bob", "Charlie", "Diana"]}
              selected={participants}
              onChange={setParticipants}
            />
          </div>

          <div>
            <Label htmlFor="date">Date and Time</Label>
            <Input
              id="date"
              type="datetime-local"
              className="w-64" // or "max-w-sm", "w-full sm:w-64" for responsiveness
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <Button onClick={handleNext}>Next: Enter Scores</Button>
        </>
      )}

      {typeof step === "number" && currentRound !== null && (
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">
            Round {currentRound + 1} Scores
          </h2>

          {participants.map((player) => {
            const round = scores[player][currentRound];
            const isSubmitted = round.submitted;

            return (
              <div key={player} className="space-y-2">
                <h3 className="font-medium">{player}</h3>
                <div className="grid grid-cols-8 items-end gap-2">
                  {["spin", "burst", "over", "extreme", "warning"].map(
                    (type) => (
                      <div key={type}>
                        <label className="block text-xs font-medium text-muted-foreground">
                          {type.charAt(0).toUpperCase() + type.slice(1)}
                        </label>
                        <Input
                          type="number"
                          disabled={isSubmitted}
                          value={round[type] === 0 ? "" : round[type]}
                          onChange={(e) =>
                            handleSanitizedChange(
                              player,
                              currentRound,
                              type,
                              e.target.value
                            )
                          }
                        />
                      </div>
                    )
                  )}
                  <div>
                    <label className="block text-xs font-medium text-muted-foreground">
                      Total (Win Points)
                    </label>
                    <div className="text-sm font-semibold">{round.win} pts</div>
                  </div>
                  <div>
                    <Button
                      size="sm"
                      variant={isSubmitted ? "secondary" : "default"}
                      disabled={isSubmitted}
                      onClick={() => handleRoundSubmit(player, currentRound)}
                    >
                      {isSubmitted ? "Submitted" : "Submit Round"}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="flex justify-between pt-4">
            {currentRound > 0 && (
              <Button
                variant="outline"
                onClick={() => setStep(currentRound - 1)}
              >
                Previous Round
              </Button>
            )}
            {currentRound < 4 ? (
              <Button onClick={() => setStep(currentRound + 1)}>
                Next Round
              </Button>
            ) : (
              <Button
                onClick={() =>
                  console.log({ tournamentName, participants, date, scores })
                }
              >
                Submit Tournament
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
