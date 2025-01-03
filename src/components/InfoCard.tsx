import { gradientColors } from "@/lib/constents";
import { CirclePlus } from "lucide-react";
import { memo } from "react";
import { Link } from "react-router";

interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  link: string;
}

export default memo(function InfoCard({
  icon,
  title,
  link,
  ...rest
}: InfoCardProps) {
  return (
    <div className="flex items-center h-full mr-10 lg:mr-32 relative">
      <div
        {...rest}
        className={`w-full h-full text-white font-bold p-4 rounded-lg ${
          gradientColors[Math.floor(Math.random() * gradientColors.length)]
        }`}
      >
        <div className="flex flex-col gap-5">
          <div className="size-20 rounded-full p-2 bg-black/5 flex justify-center items-center">
            {icon}
          </div>
          <p className="text-3xl">{title}</p>
          <Link to={link}>Read More</Link>
        </div>
      </div>
      <div className="text-primary absolute group-last:hidden -right-[40%]">
        <CirclePlus size={80} className="stroke-1" />
      </div>
    </div>
  );
});
