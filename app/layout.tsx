import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Outfit } from "next/font/google";
import { SanityLive } from "@/sanity/live";
import Header from "@/components/layout/header";
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/layout/footer";
import Comment from "@/components/layout/comment";

const outift =  Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900",],
})


export const metadata: Metadata = {
  title: "Ourprops",
  description: "Ourprops",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outift.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative">
            <Header />
            {children}
            <Comment />
            <Footer />
            <Toaster />
          </div>
          <SanityLive />
        </ThemeProvider>
      </body>
    </html>
  );
}
