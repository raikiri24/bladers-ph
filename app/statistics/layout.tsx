import TopNavigation from "@/components/shared/navigation";
import { StickyBanner } from "@/components/ui/sticky-banner";
import React from "react";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <StickyBanner className="bg-gradient-to-b from-blue-500 to-blue-600 text-sm">
        <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
          Still in development
        </p>
      </StickyBanner>
      <TopNavigation />
      {children}
    </div>
  );
};

export default Layout;
