'use client'
import Image from "next/image"
import { Search } from "lucide-react"
import { NextPage } from 'next';
import SecondHeader from "@/components/homepage/second-header";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Footer from "@/components/Footer";

const SingleBlog: NextPage = (id) => {
  
  return (
    <>
      <SecondHeader />
      <div className="container mx-auto xl:max-w-7xl max-w-0xl px-5 xl:px-4 py-8 mt-20">
        <div className="grid grid-cols-1 xl:gap-12 gap-0 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="space-y-6">
              <header className="space-y-4">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
                  Building gains into housing stocks and how to trade the sector
                </h1>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-600">Kathryn Murphy</span>
                  </div>
                  <time>April 6, 2023</time>
                  <span>0 comment</span>
                </div>
              </header>

              <div className="aspect-[16/9] overflow-hidden rounded-lg">
                <Image
                  src="/property.jpg"
                  alt="Blue beach house with palm trees"
                  width={800}
                  height={450}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-xl font-semibold text-gray-900 mb-5">Understanding Housing Stocks</h2>
                <p className="text-gray-600 leading-[25px]">
                  The housing sector has long been a focal point for investors seeking stability and growth. Understanding
                  the dynamics of housing stocks and effectively trading within this sector can lead to substantial gains.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, illum ratione ab debitis nam qui placeat, 
                  reprehenderit, excepturi quod quo distinctio? Nobis nulla sunt porro ex doloribus repudiandae repellat, tempora 
                  commodi ab atque saepe laborum dolor maiores sint animi accusamus architecto nesciunt non aliquam, nisi libero. 
                  Qui quo soluta non.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos nostrum, ullam minima ex ipsam dolore error assumenda 
                  a hic voluptates provident id libero maxime excepturi eaque, voluptatibus quidem quasi suscipit. Voluptas nisi delectus 
                  earum neque aliquam reiciendis autem? Amet nobis sint non iusto quos asperiores tempore quasi, quae distinctio adipisci!
                </p>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8 mt-14 xl:mt-0">
            {/* Search */}
            <div className="space-y-4">
              <div className="border-b-2 border-blue-500 w-[40px]"></div>
              <h2 className="mb-2 text-lg font-bold">Search</h2>
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 pl-10"
                />
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Featured Listings */}
            <div className="space-y-4">
              <div className="border-b-2 border-blue-500 w-[40px]"></div>
              <h2 className="text-xl font-semibold">Recent Posts</h2>
              <div className="space-y-4">
                {[
                  {
                    image: "/property.jpg",
                    title: "Key Real Estate Trends To Watch in 2024",
                    date: "February 16, 2024",
                  },
                  {
                    image: "/property.jpg",
                    title: "Expert Tips For Profitable Real Estate Investments",
                    date: "February 16, 2024",
                  },
                  {
                    image: "/property.jpg",
                    title: "10 Steps To Prepare For A Successful Real Estate Transaction",
                    date: "February 16, 2024",
                  },
                ].map((post) => (
                  <div key={post.title} className="flex gap-4">
                    <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={80}
                        height={60}
                        priority
                        className="rounded"
                    />
                    <div>
                        <Link href={`/blog/${post.title}`} className="font-medium text-sm mb-1 cursor-pointer hover:underline">{post.title}</Link>
                        <p className="text-gray-500 text-xs">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default SingleBlog

