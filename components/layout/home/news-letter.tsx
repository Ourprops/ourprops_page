"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Poppins } from "next/font/google";
import { useToast } from "@/hooks/use-toast";
import { api } from "@/lib/api";
import { useState } from "react";
import { Loader } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
});

export default function Newsletter({
  sectionRef
}: {
  sectionRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.post("/email/subscribe", { email: e.currentTarget.email.value });
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
    <div ref={sectionRef} className="h-auto py-24 w-full xl:px-20 lg:px-10 md:px-5 px-4 grid lg:gap-20 gap-24 md:gap-4 md:grid-cols-2 grid-cols-1 bg-appColor-blue-muted">
      <div>
        <h2
          className={`text-4xl font-bold ${poppins.className} lg:leading-[3rem]`}
        >
          Don{`'`}t Miss Out
        </h2>
        <p className="text-base sm:text-sm mt-5">
          Subscribe for valuable resources and information on the Ghanaian
          property market and OURPROPS updates
        </p>
      </div>
      <div>
        <form onSubmit={handleSubscribe}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                required
                id="email"
                placeholder="Enter your email address"
                className="py-5"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>
            <Button type="submit" className="py-6">
              {loading ? <Loader className="animate-spin" /> : "Subscribe Now"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
