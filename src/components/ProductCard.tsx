import { Link } from "react-router";
import { Card } from "./ui/card";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  hotline: string;
  icon?: React.ReactNode;
  link: string;
}

export default function ProductCard({
  hotline,
  icon,
  link,
  title,
}: ProductCardProps) {
  return (
    <Card className="gradient-main text-white">
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
      {icon && <div className="absolute">{icon}</div>}
    </Card>
  );
}
