"use client";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { api } from "@/lib/api";
import { Loader } from "lucide-react";
import { Poppins } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Hero() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/email/subscribe", {
        email: e.currentTarget.email.value,
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
    <div className="w-full min-h-[50vh] pt-18 xl:px-20 lg:px-10 md:px-5 px-4 relative bg-appColor-blue-muted">
      <div className="lg:pt-36 md:pt-36 sm:pt-36 pt-28 pb-10 grid md:grid-cols-2 grid-cols-1 gap-20">
        <div className="flex flex-col gap-10">
          <h1
            className={`lg:text-6xl sm:text-5xl text-4xl font-bold ${poppins.className} bg-gradient-to-r from-primary to-appColor-orange-default bg-clip-text text-transparent`}
          >
            Be The First To Know
          </h1>
          <form
            onClick={handleSubscribe}
            className="relative flex h-10 w-full min-w-[200px] max-w-[24rem]"
          >
            <button
              className="!absolute right-1 top-1 z-10 select-none rounded bg-appColor-blue-default py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
              type="submit"
              data-ripple-light="true"
            >
              {loading ? (
                <Loader className="animate-spin" color="white" />
              ) : (
                "Subscribe"
              )}
            </button>
            <Input
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              type="email"
              className="peer h-full w-full bg-transparent px-3 py-2.5 pr-20 transition-all"
              placeholder="Enter your email"
              required
            />
          </form>
        </div>
        <div className="flex md:justify-end">
          <p className="text-lg text-muted-foreground lg:w-[60%]">
            Get the latest updates on our products and services by subscribing
            to our newsletter.
          </p>
        </div>
      </div>
    </div>
  );
}
