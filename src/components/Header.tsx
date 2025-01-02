import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Headset, LogIn, Search, Sparkles } from "lucide-react";

export default function Header() {
  return (
    <header>
      <section className="max-w-screen-xl mx-auto flex justify-between items-center p-4">
        <Link to={"/"} className="font-bold text-2xl text-primary">
          Logo
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              <Link to={"/about"}>
                <NavigationMenuLink className="font-semibold hover:text-primary">
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to={"/investors"}>
                <NavigationMenuLink className="font-semibold hover:text-primary">
                  Investors
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to={"/careers"}>
                <NavigationMenuLink className="font-semibold hover:text-primary">
                  Careers
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>
      <section className="max-w-screen-lg mx-auto flex gap-4 p-2">
        <label className="flex-1 relative border border-black gap-2 rounded-full flex items-center px-4">
          <Search />
          <input
            type="search"
            className="focus:outline-none flex-1 font-semibold p-2"
            placeholder="Search..."
          />
        </label>
        <Link
          to={"/#"}
          className="md:flex hidden items-center gap-3 rounded-full p-2 border border-black"
        >
          <Sparkles />
          <span>What&apos;s special about us?</span>
        </Link>
        <Link
          to={"/#"}
          className="items-center gap-3 rounded-full p-2 border border-black hidden md:flex"
        >
          <Headset />
          <span>Customer Service</span>
        </Link>
        <Link
          to={"/#"}
          className="font-semibold text-white bg-primary hidden sm:flex items-center justify-center gap-2 rounded-full p-2 border border-black"
        >
          <LogIn />
          <span>Login</span>
        </Link>
      </section>
    </header>
  );
}
