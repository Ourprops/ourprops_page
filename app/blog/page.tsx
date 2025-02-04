import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import SecondHeader from "@/components/homepage/second-header"
import Footer from "@/components/Footer"

export default function page() {
    const blogs = [
        {
            id: 1,
            title: "Sustainable Farming Practices for a Greener Future",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto totam consectetur adipisicing elit",
            image: "/property.jpg",
            date: 'Jan, 12 2025',
            author: "John Doe",
        },
        {
            id: 2,
            title: "Sustainable Farming Practices for a Greener Future",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto totam consectetur adipisicing elit",
            image: "/property2.jpg",
            date: 'Jan, 12 2025',
            author: "John Doe",
        },
    ]
    return (
        <>
            {/* Scroll In Navbar */}
            <Header />

            {/* Navbar */}
            <div className="mt-20">
                <SecondHeader color="text-black" />
            </div>
            
            <main className="max-w-7xl mx-auto px-4 py-8">
                {/* Popular Articles */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-6 font-sans">Popular Articles</h2>
                    <div className="grid md:grid-cols-2 gap-10">
                        {blogs.map((blog) => (
                            <article key={blog.id} className="h-auto">
                                <div className="relative overflow-hidden mb-5">
                                    <Image
                                        src={blog.image}
                                        alt="Hands holding soil with a growing plant"
                                        width={500}
                                        height={500}
                                        priority
                                        className="object-cover h-[250px] w-[100%]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm text-muted-foreground font-sans">{blog.author} | {blog.date}</p>
                                    <p className="text-lg font-medium font-serif">{blog.title}</p>
                                    <p className="text-muted-foreground font-sans">
                                        {blog.desc}
                                    </p>
                                    <Link href={`/blog/${blog.id}`} className="hover:underline inline-block text-blue-500">
                                        Read more
                                    </Link>
                                </div>
                            </article>
                        ))}
                        
                    </div>
                </section>

                {/* Latest Articles */}
                <section>
                    <div className="flex items-center justify-between mb-6 xl:mt-16 mt-0">
                        <h2 className="text-2xl font-semibold">Latest Articles</h2>
                        <div className="flex gap-2">
                            <Button variant="outline" size="icon">
                                <ChevronLeft className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <ChevronRight className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                        <article key={item} className="space-y-4">
                            <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src="/property.jpg"
                                alt="Agricultural scene"
                                fill
                                className="object-cover"
                            />
                            </div>
                            <div className="space-y-2">
                            <p className="text-sm text-muted-foreground font-sans">Jim Davis | June April 15, 2024</p>
                            <h3 className="font-medium font-serif">Transitioning from Conventional Methods</h3>
                            <p className="text-sm text-muted-foreground line-clamp-3 font-sans">
                                Understanding how to make the transition from conventional farming methods to more sustainable
                                practices...
                            </p>
                            <Link href="#" className="hover:underline inline-block text-blue-500">
                                Read more
                            </Link>
                            </div>
                        </article>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center gap-2">
                        {[1, 2, 3, 4].map((page) => (
                        <Button
                            key={page}
                            variant={page === 1 ? "default" : "outline"}
                            size="icon"
                            className="w-8 h-8 rounded-full"
                        >
                            {page}
                        </Button>
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

