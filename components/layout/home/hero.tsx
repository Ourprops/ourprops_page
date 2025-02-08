import { Button } from "@/components/ui/button";
import { appColor } from "@/constants/color";
import { MapPin, Map } from "lucide-react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Hero({
  scrollToSection
}: {
  scrollToSection: () => void;
}) {
  return (
    <div className="w-full min-h-[100vh] pt-18 flex justify-center items-center flex-col gap-5 xl:px-20 lg:px-10 md:px-5 px-4 relative bg-appColor-blue-muted">
      <h1
        className={`lg:text-6xl sm:text-5xl text-4xl font-bold text-center lg:w-[70%] md:w-[70%] lg:leading-[4rem] ${poppins.className} bg-gradient-to-r from-primary to-appColor-orange-default bg-clip-text text-transparent`}
      >
        Secure Your Property, Protect Your Rights, Prevent Fraud
      </h1>
      <p className="text-center md:text-lg text-base mt-4 lg:w-[70%] md:w-[70%]">
        The best way to secure your property and protect your rights is to have
        a proper title deed.
      </p>
      <div className="flex flex-row items-center gap-4 mt-4">
        <Button onClick={scrollToSection} className="px-7 py-6">Join us</Button>
        <Button variant="secondary" className="px-7 py-6">
          Learn more
        </Button>
      </div>
    </div>
  );
}
