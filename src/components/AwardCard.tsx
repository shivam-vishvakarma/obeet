import { Card } from "./ui/card";

export default function AwardCard({img, description}: {img: string, description: string}) {
    return (
        <Card className="overflow-hidden border-none shadow hover:bg-secondary bg-primary-foreground hover:text-white transition duration-300 ease-in-out h-full">
            <img src={img} alt="award" className="w-full" />
            <p className="p-4 text-lg leading-6">{description}</p>
        </Card>
    )
}