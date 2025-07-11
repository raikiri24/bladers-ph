"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, MoreVertical, HelpCircle } from "lucide-react";

const CustomerHeader = () => {
  return (
    <div className="flex items-center justify-between border-b px-4 py-3">
      <div className="flex items-center space-x-2">
        <span className="text-lg font-semibold">All Customers</span>
        <ChevronDown className="w-4 h-4 text-muted-foreground" />
      </div>

      <div className="flex items-center space-x-2">
        <Button
          variant="default"
          className="bg-blue-500 hover:bg-blue-600 text-white"
        >
          + New
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Import</DropdownMenuItem>
            <DropdownMenuItem>Export</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="ghost"
          size="icon"
          className="bg-orange-400 hover:bg-orange-500 text-white"
        >
          <HelpCircle className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};
export default CustomerHeader;
