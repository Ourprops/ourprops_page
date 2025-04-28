"use client";
import { Button } from "@/components/ui/button";
import { Montserrat } from "next/font/google";
import { useToast } from "@/hooks/use-toast";
import { api } from "@/lib/api";
import { useState } from "react";
import { LoaderCircle, Send } from "lucide-react";
import { Element } from "react-scroll";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const [shoowSuccess, setShowSuccess] = useState(false);

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      await api.post("/email/subscribe", { email });
      toast({
        title: "Thank you for subscribing!",
        description: "You will now receive our newsletter",
      });
      setShowSuccess(true);
      setEmail("");
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Element name="newsletter" className="w-full h-[60vh]">
      <div
        className="w-full flex-1 h-full relative flex justify-center items-center p-4"
      >
        <div className="absolute w-full h-full">
          <Image
            src="https://images.pexels.com/photos/7937310/pexels-photo-7937310.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2"
            alt="Newsletter background"
            fill
            quality={100}
            priority
            sizes="100vw"
            className="object-cover"
            style={{
              objectPosition: 'center',
            }}
          />
        </div>
        {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
        <div className="md:absolute md:right-20 -bottom-8 sm:max-w-[35rem] w-full h-[24rem] bg-[#7abcff] rounded-lg p-4 flex flex-col justify-between z-10">
          <span>
            <Send size={40} color="black" />
          </span>
          <h2
            className={`sm:text-4xl text-3xl font-medium ${montserrat.className} lg:leading-[3rem] mt-4 transition-all duration-300 tracking-tighter text-black`}
          >
            {shoowSuccess
              ? "Thank you for subscribing!"
              : "Is Your Land Safe? Stay Informed - Subscribe to Our Newsletter!"}
          </h2>
          <div className="relative w-full flex flex-row items-center rounded-full bg-white h-12 sm:w-[80%]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="w-full h-12 px-4 border-none outline-none rounded-l-md"
            />
            <Button
              onClick={handleSubscribe}
              className="text-white h-12 rounded-r-full rounded-b-full bg-black"
            >
              {loading ? <LoaderCircle className="animate-spin" /> : <Send />}
            </Button>
          </div>
        </div>
      </div>
    </Element>
  );
}
