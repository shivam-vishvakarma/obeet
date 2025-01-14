import LoginCard from "@/components/LoginCard";
import { getLoginLinks } from "@/lib/server";
import { LinkType } from "@/lib/types";
import { useEffect, useState } from "react";

export default function AllLoginPage() {
  const [links, setLinks] = useState<LinkType[]>();
  useEffect(() => {
    setLinks(getLoginLinks());
  }, []);
  return (
    <section className="bg-secondary min-h-[50vh]">
      <div className="max-w-screen-xl mx-auto pt-10">
        <h2 className="text-4xl font-semibold text-center text-white">
          Login to your service
        </h2>
        <div className="flex justify-center items-center gap-5 flex-wrap py-10">
          {links?.map((link) => (
            <LoginCard title={link.text} url={link.url} icon={link.icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
