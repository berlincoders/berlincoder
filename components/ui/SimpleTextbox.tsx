import { cn } from "@/utils/cn";
import Terminal from "@/components/ui/Terminal";

const SimpleTextbox = ({
  className,
  title,
  text,
  desc2,
  children1,
  children2,
  children3,
  desc3,
}: {
  className?: string;
  title?: string;
  text: string | React.ReactNode;
  desc2?: string;
  children1?: React.ReactNode; // Children for the first Terminal component
  children2?: React.ReactNode; // Children for the second Terminal component
  children3?: React.ReactNode;
  desc3?: string; // Additional description with link
}) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/[0.1] hover:shadow-xl transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4 p-5 lg:p-10",
        className
      )}
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {title && (
        <div className="font-sans text-lg font-bold text-[#C1C2D3]">
          {title}
        </div>
      )}
      <div
        className="font-sans text-sm text-[#C1C2D3]"
        dangerouslySetInnerHTML={{ __html: text as string }}
      ></div>
      {children1} {/* This will render the first Terminal component */}
      {desc2 && (
        <div className="font-sans text-sm text-[#C1C2D3] mt-4">{desc2}</div>
      )}
      {children2} {/* This will render the second Terminal component */}
      {desc3 && (
        <div
          className="font-sans text-sm text-[#C1C2D3] mt-4"
          dangerouslySetInnerHTML={{ __html: desc3 }}
        ></div>
      )}
      {children3}
    </div>
  );
};

export default SimpleTextbox;
