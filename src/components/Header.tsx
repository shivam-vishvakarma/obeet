import { Link, NavLink } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Headset, LogIn, Menu, Search } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Header() {
  const getClassNames = ({ isActive }: { isActive: boolean }): string =>
    `block p-2 hover:text-primary hover:bg-slate-50 ${
      isActive ? "text-primary bg-slate-50 font-semibold" : "text-black"
    }`;
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
        <label className="flex-1 mx-auto max-w-xl relative border hidden  border-black gap-2 rounded-full sm:flex items-center px-2 md:px-4">
          <Search />
          <input
            type="search"
            className="focus:outline-none flex-1 font-semibold p-2"
            placeholder="Search..."
          />
        </label>
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col h-full pt-10">
              <NavLink to={"/"} className={getClassNames}>
                Home
              </NavLink>
              <NavLink to={"/about"} className={getClassNames}>
                About
              </NavLink>
              <NavLink to={"/investors"} className={getClassNames}>
                Investors
              </NavLink>
              <NavLink to={"/careers"} className={getClassNames}>
                Careers
              </NavLink>
              <NavLink to={"/gallery"} className={getClassNames}>
                Gallery
              </NavLink>
              <NavLink to={"/contact"} className={getClassNames}>
                Contact
              </NavLink>
              <div className="flex justify-between mt-auto">
                <Link
                  to={"/#"}
                  className="items-center flex gap-3 rounded-full p-2 border border-black"
                >
                  <Headset />
                  <span>Customer Service</span>
                </Link>
                <Link
                  to={"/#"}
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
