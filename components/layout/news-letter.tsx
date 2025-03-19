"use client";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { useToast } from "@/hooks/use-toast";
import { api } from "@/lib/api";
import { useState } from "react";
import { LoaderCircle, Send } from "lucide-react";
import { Element } from "react-scroll";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async () => {
    setLoading(true);
    try {
      await api.post("/email/subscribe", { email });
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
    <Element
      name="newsletter"
      className="h-auto w-full grid lg:gap-20 gap-24 md:gap-4 md:grid-cols-2 grid-cols-1 bg-appColor-orange-default"
    >
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7937310/pexels-photo-7937310.jpeg?auto=compress&cs=tinysrgb&w=600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative overflow-hidden"
      ></div>
      <div className="py-24 xl:px-20 lg:px-10 md:px-5 px-4 ">
        <span className="p-1 rounded-md border border-white uppercase text-[10px] text-white ">
          Blog
        </span>
        <h2
          className={`text-4xl font-semibold ${poppins.className} lg:leading-[3rem] mt-4`}
        >
          Don{`'`}t Miss Out
        </h2>
        <p className="text-sm sm:text-sm mt-1 text-muted mb-10">
          Subscribe for valuable resources and information on the Ghanaian
          property market and OURPROPS updates
        </p>
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
    </Element>
  );
}
