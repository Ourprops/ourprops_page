import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" >
          <Menu color="black" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[200px]">
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription>
            
          </SheetDescription>
        </SheetHeader>
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
