import { FB, IG, X } from "@/public/svgs";
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

const socials = [
    {
        link: "https://facebook.com",
        icon: FB,
    },
    {
        link: "https://twitter.com",
        icon: X
    },
    {
        link: "https://instagram.com",
        icon: IG
    }
]

export default function Footer() {
  return (
    <div className="h-auto py-24 w-full xl:px-20 lg:px-10 md:px-5 px-4">
      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className={`text-2xl font-bold ${poppins.className}`}>OURPROPS</h1>
        <div className="grid grid-flow-col gap-5">
          {navs.map((nav) => (
            <Link key={nav.href} href={nav.href} className="uppercase">
              {nav.name}
            </Link>
          ))}
        </div>
        <div className="grid grid-flow-col gap-5">
            {
                socials.map((social) => (
                    <a href={social.link} key={social.link} className="border border-appColor-blue-default p-2 rounded-full">
                        <social.icon />
                    </a>
                ))
            }
        </div>
        <div>
            <p className="text-sm text-muted-foreground">© 2025 OurProps. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
