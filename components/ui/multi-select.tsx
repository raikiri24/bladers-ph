"use client";

import { Checkbox } from "@/components/ui/checkbox";

export function MultiSelect({ options, selected, onChange }: any) {
  const toggle = (val: string) => {
    if (selected.includes(val)) {
      onChange(selected.filter((v: any) => v !== val));
    } else {
      onChange([...selected, val]);
    }
  };

  return (
    <div className="border rounded-md p-2 space-y-1 max-h-40 overflow-y-auto">
      {options.map((opt: any) => (
        <label key={opt.value} className="flex items-center gap-2">
          <Checkbox
            checked={selected.includes(opt.value)}
            onCheckedChange={() => toggle(opt.value)}
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
}
