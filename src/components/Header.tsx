import { Link, NavLink } from "react-router";
import { Headset, LogIn, Menu, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { useEffect, useState } from "react";
import { LinkType } from "@/lib/types";
import { getLoginLinks, getNavigationLinks } from "@/lib/server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function Header() {
  const getClassNames = ({ isActive }: { isActive: boolean }): string =>
    `block p-2 hover:text-primary ${
      isActive ? "text-primary font-semibold" : "text-black"
    }`;

  const [links, setLinks] = useState<LinkType[]>();
  const [navLinks, setNavLinks] = useState<LinkType[]>();

  useEffect(() => {
    setLinks(getLoginLinks());
    setNavLinks(getNavigationLinks());
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <section className="max-w-screen-xl mx-auto flex justify-between items-center gap-4 p-4">
        <Link to={"/"} className="min-w-20 w-20">
          <img
            src="/logo.png"
            alt="logo"
            className="w-full h-full object-contain"
          />
        </Link>
        <label className="flex-1 mx-auto max-w-xl relative border hidden text-primary  border-primary gap-2 rounded-full sm:flex items-center px-4">
          <Search />
          <input
            type="search"
            className="focus:outline-none flex-1 font-semibold p-2 text-primary"
            placeholder="Search..."
          />
        </label>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navLinks?.map((link: LinkType) => (
              <NavigationMenuItem key={link.text}>
                {!link.url ? (
                  <NavigationMenuTrigger className="data-[state='open']:text-primary">
                    {link.text}
                  </NavigationMenuTrigger>
                ) : !link.urls ? (
                  <NavLink to={link.url} className={getClassNames}>
                    <NavigationMenuLink>{link.text}</NavigationMenuLink>
                  </NavLink>
                ) : (
                  <NavigationMenuTrigger className="data-[state='open']:text-primary">
                    <NavLink to={link.url} className={getClassNames}>
                      <NavigationMenuLink>{link.text}</NavigationMenuLink>
                    </NavLink>
                  </NavigationMenuTrigger>
                )}
                {link.urls && (
                  <NavigationMenuContent>
                    <menu className="w-72 max-h-96 overflow-y-auto p-2 flex flex-col *:border-b last:*:border-none *:p-2 hover:*:text-primary hover:*:bg-slate-50">
                      {link.urls.map((sublink: LinkType) => (
                        <Link to={sublink.url || "/"} key={sublink.text}>
                          <NavigationMenuLink>
                            {sublink.text}
                          </NavigationMenuLink>
                        </Link>
                      ))}
                    </menu>
                  </NavigationMenuContent>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <NavigationMenu className="hidden md:flex [&>.absolute]:-left-40 [&>.absolute]:right-0">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className=" data-[state='open']:bg-primary-dark data-[state='open']:text-white bg-primary-light text-white">
                <Link to={"/login"}>Login</Link>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <menu className="w-60 p-2 flex flex-col *:border-b last:*:border-none *:p-2 hover:*:text-primary hover:*:bg-slate-50">
                  {links?.map((link: LinkType) => (
                    <Link to={link.url || "/"} key={link.url}>
                      <NavigationMenuLink>{link.text}</NavigationMenuLink>
                    </Link>
                  ))}
                </menu>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Sheet>
          <SheetTrigger className="block md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col h-full pt-10">
              <Accordion type="single" collapsible>
                {navLinks?.map((link: LinkType) => (
                  <AccordionItem value={link.text} key={link.text}>
                    {!link.url ? (
                      <AccordionTrigger className="data-[state='open']:text-primary">
                        {link.text}
                      </AccordionTrigger>
                    ) : !link.urls ? (
                      <NavLink to={link.url} className={getClassNames}>
                        {link.text}
                      </NavLink>
                    ) : (
                      <NavLink to={link.url} className={getClassNames}>
                        <AccordionTrigger>{link.text}</AccordionTrigger>
                      </NavLink>
                    )}
                    {link.urls && (
                      <AccordionContent>
                        <menu className="max-h-72 overflow-y-auto p-2 flex flex-col *:border-b last:*:border-none *:p-2 hover:*:text-primary hover:*:bg-slate-50">
                          {link.urls.map((sublink: LinkType) => (
                            <Link to={sublink.url || "/"} key={sublink.text}>
                              {sublink.text}
                            </Link>
                          ))}
                        </menu>
                      </AccordionContent>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="flex justify-between mt-auto flex-wrap gap-2">
                <Link
                  to={"/#"}
                  className="items-center flex gap-3 rounded-full p-2 border border-black"
                >
                  <Headset />
                  <span>Customer Service</span>
                </Link>
                <Link
                  to={"/login"}
                  className="font-semibold flex text-white bg-gradient-to-r from-red-900 to-red-600 items-center justify-center gap-2 rounded-full p-2"
                >
                  <LogIn />
                  <span>Login</span>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </section>
    </header>
  );
}
