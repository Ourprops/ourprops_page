import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import Header from "@/components/Header"
import SecondHeader from "@/components/homepage/second-header"

export default function page() {
    return (
        <>
            <Header />
            <div className="mt-20">
                <SecondHeader />
            </div>
            
            <main className="max-w-6xl mx-auto px-4 py-8">
                {/* Popular Articles */}
                <section className="mb-16">
                    <h2 className="text-xl font-semibold mb-6">Popular Articles</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <article className="space-y-4">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                            <Image
                            src="/property.jpg"
                            alt="Hands holding soil with a growing plant"
                            fill
                            className="object-cover"
                            />
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">Kelly Johnson | Mon May 16, 2024</p>
                            <h3 className="text-xl font-semibold">Sustainable Farming Practices for a Greener Future</h3>
                            <p className="text-muted-foreground">
                            Explore the key principles of sustainable farming as we search for a brighter way forward. Modern
                            agriculture solutions that can ensure that the crops we grow today...
                            </p>
                            <Link href="#" className="text-primary hover:underline inline-block">
                            Read more
                            </Link>
                        </div>
                        </article>

                        <article className="space-y-4">
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                            <Image
                            src="/property.jpg"
                            alt="Interior of a modern greenhouse"
                            fill
                            className="object-cover"
                            />
                        </div>
                        <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">John Smith | Mon April 29, 2024</p>
                            <h3 className="text-xl font-semibold">Leveraging Technology for Better Yields</h3>
                            <p className="text-muted-foreground">
                            Discover how modern agricultural technologies, such as GPS mapping, drones, soil data analytics, are
                            revolutionizing the farming industry, contributing to an increase...
                            </p>
                            <Link href="#" className="text-primary hover:underline inline-block">
                            Read more
                            </Link>
                        </div>
                        </article>
                    </div>
                </section>

                {/* Latest Articles */}
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold">Latest Articles</h2>
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
                            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                            <Image
                                src="/property.jpg"
                                alt="Agricultural scene"
                                fill
                                className="object-cover"
                            />
                            </div>
                            <div className="space-y-2">
                            <p className="text-sm text-muted-foreground">Jim Davis | June April 15, 2024</p>
                            <h3 className="font-semibold">Transitioning from Conventional Methods</h3>
                            <p className="text-sm text-muted-foreground line-clamp-3">
                                Understanding how to make the transition from conventional farming methods to more sustainable
                                practices...
                            </p>
                            <Link href="#" className="text-primary hover:underline inline-block text-sm">
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
        </>
    )
}

