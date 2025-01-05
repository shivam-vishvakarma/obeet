import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="mx-auto w-full relative text-center bg-gradient-to-r from-red-900 to-red-600 text-white">
      <div className="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
        <h2 className="font-bold text-3xl xl:text-4xl leading-snug">
          Ready to get your productivity back?
          <br />
          Start your free trial today.
        </h2>
        <Link
          className="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-primary rounded-full shadow-xl border border-transparent hover:bg-primary-light hover:shadow-[inset_5px_5px_5px_0px_rgba(0,_0,_0,_0.1),inset_-5px_-5px_5px_0px_rgba(255,255,255,0.01)] active:shadow-[inset_-5px_-5px_5px_0px_rgba(0,_0,_0,_0.1),inset_5px_5px_5px_0px_rgba(255,255,255,0.01)]"
          to="#"
        >
          Get started
        </Link>
        <div className="mt-14 xl:mt-20">
          <nav className="flex flex-wrap justify-center text-lg font-medium">
            <div className="px-5 py-2">
              <Link to="#">Contact</Link>
            </div>
            <div className="px-5 py-2">
              <Link to="#">Pricing</Link>
            </div>
            <div className="px-5 py-2">
              <Link to="#">Privacy</Link>
            </div>
            <div className="px-5 py-2">
              <Link to="#">Terms</Link>
            </div>
          </nav>
          <p className="mt-7 text-base">© 2023 XYZ, LLC</p>
        </div>
      </div>
    </footer>
  );
}
