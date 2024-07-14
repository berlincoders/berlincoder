"use client";

import { cn } from "@/utils/cn";
import { LampDemo } from "@/components/ui/LampDemo";

const Header = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.1] hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4 p-5 lg:p-10",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {children}
    </div>
  );
};

export default Header;
