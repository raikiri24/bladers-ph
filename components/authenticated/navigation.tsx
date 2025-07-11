import React from "react";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "../ui/input";

const AuthenticatedNavigation = () => {
  return (
    <nav className="w-full px-6 py-3 shadow-xs bg-white flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="text-xl font-semibold text-gray-800">CateringSys</div>

        <Input
          type="text"
          placeholder="Search..."
          className="w-[250px] md:w-[300px]"
        />
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <Settings className="h-5 w-5 text-muted-foreground" />
        </Button>

        <Avatar>
          <AvatarImage src="https://via.placeholder.com/32" alt="@user" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default AuthenticatedNavigation;
