import { Button } from "@/components/ui/button";
import { HERO_QUERYResult } from "@/sanity/types";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Hero({
  hero
}: {
  hero: HERO_QUERYResult
}) {
  return (
    <div
      style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.dev/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3E%3Cg mask='url(%26quot%3b%23SvgjsMask1034%26quot%3b)' fill='none'%3E%3Crect width='1440' height='560' x='0' y='0' fill='url(%26quot%3b%23SvgjsLinearGradient1035%26quot%3b)'%3E%3C/rect%3E%3Cpath d='M1440 0L773.39 0L1440 172.17z' fill='rgba(255%2c 255%2c 255%2c .1)'%3E%3C/path%3E%3Cpath d='M773.39 0L1440 172.17L1440 264.95L562.43 0z' fill='rgba(255%2c 255%2c 255%2c .075)'%3E%3C/path%3E%3Cpath d='M562.43 0L1440 264.95L1440 363.43L295.06999999999994 0z' fill='rgba(255%2c 255%2c 255%2c .05)'%3E%3C/path%3E%3Cpath d='M295.06999999999994 0L1440 363.43L1440 471.02L241.46999999999994 0z' fill='rgba(255%2c 255%2c 255%2c .025)'%3E%3C/path%3E%3Cpath d='M0 560L65.46 560L0 294.96z' fill='rgba(0%2c 0%2c 0%2c .1)'%3E%3C/path%3E%3Cpath d='M0 294.96L65.46 560L202.8 560L0 205.77999999999997z' fill='rgba(0%2c 0%2c 0%2c .075)'%3E%3C/path%3E%3Cpath d='M0 205.77999999999997L202.8 560L681.8 560L0 145.56999999999996z' fill='rgba(0%2c 0%2c 0%2c .05)'%3E%3C/path%3E%3Cpath d='M0 145.57L681.8 560L740.9599999999999 560L0 78.02z' fill='rgba(0%2c 0%2c 0%2c .025)'%3E%3C/path%3E%3C/g%3E%3Cdefs%3E%3Cmask id='SvgjsMask1034'%3E%3Crect width='1440' height='560' fill='white'%3E%3C/rect%3E%3C/mask%3E%3ClinearGradient x1='84.72%25' y1='139.29%25' x2='15.28%25' y2='-39.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1035'%3E%3Cstop stop-color='%230e2a47' offset='0'%3E%3C/stop%3E%3Cstop stop-color='rgba(0%2c 0%2c 139%2c 1)' offset='1'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E\")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full min-h-[100vh] pt-16 xl:px-20 lg:px-10 md:px-5 px-4 relative flex justify-center items-center flex-col gap-5"
    >
      <h1
        className={`lg:text-6xl sm:text-5xl text-4xl font-bold text-center lg:w-[70%] md:w-[70%] lg:leading-[4rem] ${poppins.className} text-white`}
      >
        {hero?.headline}
      </h1>
      <p className="text-center md:text-lg text-base mt-4 lg:w-[70%] md:w-[70%] text-muted">
        {hero?.subheadline}
      </p>
      <div className="flex flex-row items-center gap-2 mt-4">
        <Button className="px-7 py-6 text-white shadow-[0px_0px_45px_2px_rgba(100,100,255,1)]">
          Join us
        </Button>
        <Button variant="link" className="px-7 py-6 text-white">
          Learn more
        </Button>
      </div>
    </div>
  );
}

