import { Link } from "react-router";
import { Card } from "./ui/card";
import { gradientColors } from "@/lib/constents";
import { memo } from "react";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  hotline: string;
  icon?: React.ReactNode;
  link: string;
  gradient?: (typeof gradientColors)[number];
}

export default memo(function ProductCard({
  hotline,
  icon,
  link,
  title,
  gradient,
}: ProductCardProps) {
  return (
    <Card
      className={`text-white relative ${
        gradient
          ? gradient
          : gradientColors[Math.floor(Math.random() * gradientColors.length)]
      }`}
    >
      <div className="p-4 flex flex-col gap-4 justify-start items-start">
        <h2 className="font-bold">{title}</h2>
        <p className="text-2xl font-semibold">{hotline}</p>
        <Link
          to={link}
          className="py-2 px-4 rounded-full border border-white inline-block"
        >
          Learn More
        </Link>
      </div>
      {icon && (
        <div className="absolute top-1/2 right-0 -translate-y-1/2">{icon}</div>
      )}
    </Card>
  );
});