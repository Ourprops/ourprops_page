import Image from "next/image"
import { Card } from "@/components/blogs/card"
import Header from "@/components/Header"
import SecondHeader from "@/components/homepage/second-header"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function Page() {
  return (
    <>
      <Header />
      <SecondHeader />

      {/* Content */}
      <div className="max-w-6xl mx-auto px-5 xl:px-4 sm:px-10 py-8 mt-20">
        {/* Meta info */}
        <p className="text-sm text-center text-muted-foreground mb-4"> <span className="bg-[#fe44001f] px-2 py-1 rounded-full me-3">Featured Article</span>  October 15, 2023</p>

        {/* Main article */}
        <article className="prose prose-slate lg:prose-lg dark:prose-invert max-w-none">
          <h1 className=" text-2xl md:text-4xl font-sans font-medium text-center mb-3">Best Strategy to Achieve Profitable Harvest</h1>
          <div className="flex justify-center">
            <p className="text-center font-extralight mb-5 w-[100%] sm:w-[70%] xl:w-[50%] text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, quasi dolore beatae iusto sit dolorem ratione similique nisi quibusdam sunt!</p>
          </div>
          

          <div className="relative mb-8">
            <Image
              src="/property.jpg"
              alt="Image"
              width={500}
              height={500}
              className="object-cover h-[500px] w-[100%]"
              priority
            />
          </div>

          <p className="text-muted-foreground leading-7 text-gray-500">
            Selecting the right varieties and seeds is a crucial first step. This includes in-depth analysis into
            varieties selection, environmental climate and soil conditions, as well as selecting high-quality seeds that
            can withstand local conditions. To achieve profitable harvest, farmers must take careful consideration of seed
            and planting materials. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam voluptas esse autem omnis? 
            Quisquam vero temporibus placeat quia recusandae, consequatur pariatur fuga rem maxime porro voluptates tempora possimus 
            similique culpa aspernatur nemo fugit sunt beatae reprehenderit, vitae nulla distinctio totam nostrum! Sit maiores atque 
            inventore impedit est numquam praesentium dolorem?
          </p>
        </article>

        {/* Related Articles */}
        <section className="my-16">
          <div className="flex flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-sans font-semibold">Related Articles</h2>
            </div>
            <Link href="/blog" className="border rounded-full py-2 px-3">
              <p className="text-sm">View All Articles</p>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              title="Achieving High Productivity from Your Own Farm Garden"
              date="October 15, 2023"
              imageUrl="/property.jpg"
            />
            <Card
              title="The Best Guide to Planting Seeds with Natural Methods"
              date="October 13, 2023"
              imageUrl="/property.jpg"
            />
            <Card
              title="Strategies for Caring for Your Garden with Efficiency and Productivity"
              date="October 12, 2023"
              imageUrl="/property.jpg"
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

