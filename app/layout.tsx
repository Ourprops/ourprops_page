import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import { Lato } from "next/font/google";
import { SanityLive } from "@/sanity/live";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import Footer from "@/components/footer";
import Newsletter from "@/components/newsLetter";
import Comment from "@/components/comment";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

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
      <body className={`${lato.className} antialiased`}>
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
            <Newsletter />
            <Footer />
            <Toaster />
          </div>
          <SanityLive />
        </ThemeProvider>
      </body>
    </html>
  );
}
