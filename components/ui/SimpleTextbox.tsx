"use client";
import { cn } from "@/utils/cn";

const SimpleTextbox = ({
  className,
  text,
  title,
}: {
  className?: string;
  text: string | React.ReactNode;
  title: string | React.ReactNode;
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
      <div
        className="font-sans text-sm text-[#C1C2D3]"
        dangerouslySetInnerHTML={{ __html: text as string }} // Asegura que se renderice HTML
      />
    </div>
  );
};

export default SimpleTextbox;