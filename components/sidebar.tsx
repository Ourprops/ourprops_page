import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRightToLine } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <ArrowRightToLine color="white" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[200px]">
        <div className="mt-10 w-full flex-1 flex flex-col gap-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
