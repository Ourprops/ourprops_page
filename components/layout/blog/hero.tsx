"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { api } from "@/lib/api";
import { LoaderCircle, Send } from "lucide-react";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Hero() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      await api.post("/email/subscribe", {
        email
      });
      toast({
        title: "Thank you for subscribing!",
        description: "You will now receive our newsletter",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/7414927/pexels-photo-7414927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full min-h-[80vh] pt-18 xl:px-20 lg:px-10 md:px-5 px-4 relative"
    >
      <div className="lg:pt-36 md:pt-36 sm:pt-36 pt-28 pb-10 grid md:grid-cols-2 grid-cols-1 gap-20 ">
        <div className="flex flex-col gap-10 z-10">
          <h1
            className={`lg:text-6xl sm:text-5xl text-4xl text-white font-semibold ${poppins.className}`}
          >
            Be The First To Know
          </h1>
          <div className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]">
            <div className="relative w-full flex flex-row items-center rounded-full bg-white h-12">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                className="w-full h-12 px-4 border-none outline-none rounded-l-full"
              />
              <Button
                onClick={handleSubscribe}
                className="text-white h-12 rounded-r-full rounded-b-full"
              >
                {loading ? <LoaderCircle className="animate-spin" /> : <Send />}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex md:justify-end z-10">
          <p className="text-lg text-muted lg:w-[60%]">
            Get the latest updates on our products and services by subscribing
            to our newsletter.
          </p>
        </div>
      </div>
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50"></div>
    </div>
  );
}
