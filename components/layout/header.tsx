import { AlignJustify } from "lucide-react";
import { Button } from "../ui/button";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const navs = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
];

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="xl:px-20 lg:px-10 md:px-5 px-4 py-4 flex justify-between items-center bg-white">
        <div className="md:hidden block">
          <button>
            <AlignJustify />
          </button>
        </div>
        <div>
          <h1 className={`text-lg font-bold ${poppins.className}`}>
            OURPROPS
          </h1>
        </div>
        <nav className="md:flex items-center space-x-8 hidden">
          {navs.map((nav, index) => (
            <Link
              key={index}
              href={nav.href}
              className="font-medium text-sm relative pb-1 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-appColor-blue-default after:bottom-0 after:left-0 after:transition-all after:duration-300 hover:after:w-full"
            >
              {nav.name}
            </Link>
          ))}
        </nav>
        <div>
          <Button className="text-white">Waitlist</Button>
        </div>
      </div>
    </div>
  );
}
