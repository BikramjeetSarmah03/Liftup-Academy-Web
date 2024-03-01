import { cn } from "@/lib/utils";

interface HeadingProps {
  subtitle?: string;
  title: string;
  className?: string;
}

const Heading = ({ subtitle, title, className }: HeadingProps) => {
  return (
    <>
      <div className={cn("text-center", className)}>
        <h3 className="font-semibold tracking-[1px] text-[#0e6861] uppercase text-2xl">
          {subtitle}{" "}
        </h3>
        <h1 className="text-4xl capitalize font-bold">{title} </h1>
      </div>
    </>
  );
};

export default Heading;
