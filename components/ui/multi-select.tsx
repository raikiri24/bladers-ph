// components/ui/multi-select.tsx

"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface MultiSelectProps {
  options: string[];
  selected: string[];
  onChange: (selected: string[]) => void;
}

export function MultiSelect({ options, selected, onChange }: MultiSelectProps) {
  const [localOptions, setLocalOptions] = useState(options);
  const [newEntry, setNewEntry] = useState("");

  const toggle = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((v) => v !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  const addNew = () => {
    const trimmed = newEntry.trim();
    if (trimmed && !localOptions.includes(trimmed)) {
      setLocalOptions([...localOptions, trimmed]);
      onChange([...selected, trimmed]);
      setNewEntry("");
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Input
          placeholder="Add new participant"
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addNew()}
        />
        <Button type="button" onClick={addNew}>
          Add
        </Button>
      </div>

      {localOptions.map((option) => (
        <div key={option} className="flex items-center space-x-2">
          <Checkbox
            id={option}
            checked={selected.includes(option)}
            onCheckedChange={() => toggle(option)}
          />
          <Label htmlFor={option}>{option}</Label>
        </div>
      ))}
    </div>
  );
}
