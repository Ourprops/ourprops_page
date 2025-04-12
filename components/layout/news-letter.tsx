"use client";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { useToast } from "@/hooks/use-toast";
import { api } from "@/lib/api";
import { useState } from "react";
import { LoaderCircle,  Send } from "lucide-react";
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
    <Element name="newsletter" className="w-full h-[60vh] xl:px-20 lg:px-10 md:px-5 px-4">
      <div
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/7937310/pexels-photo-7937310.jpeg?auto=compress&cs=tinysrgb&w=600)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="w-full flex-1 rounded-lg h-full relative flex justify-center items-center p-4"
      >
        <div className="md:absolute md:right-20 -bottom-8 sm:max-w-[35rem] w-full h-[24rem] bg-[#7bd1ff] rounded-lg p-4 flex flex-col justify-between">
          <span>
            <Send size={40} color="black" />
          </span>
          <h2
            className={`sm:text-4xl text-3xl font-medium ${poppins.className} lg:leading-[3rem] mt-4`}
          >
            Is Your Land Safe? Stay Informed - Subscribe to Our Newsletter!
          </h2>
          <div className="relative w-full flex flex-row items-center rounded-full bg-white h-12 sm:w-[80%]">
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
    </Element>
  );
}
