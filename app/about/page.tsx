import Image from "next/image"
import Header from "@/components/Header"
import SecondHeader from "@/components/homepage/second-header"
import Services from "@/components/homepage/Services"
import Newsletter from "@/components/homepage/Newsletter"
import Footer from "@/components/Footer"

export default function page() {
    return (
    <>
        <Header />
        <SecondHeader />
        <main className="h-auto mt-20">
            {/* Hero Section */}
            <section className="relative h-[50vh]">
                <Image
                    src="/property.jpg"
                    alt="Coffee cup"
                    fill
                    className="object-cover brightness-50"
                    priority
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-2xl px-4">
                    <h1 className="text-4xl md:text-5xl font-light font-serif text-white mb-6">
                        About Us
                    </h1>
                </div>
            </section>

            {/* Our Mission Section */}
            <section className="py-20 px-4 bg-white xl:h-[70vh] h-auto">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                        <div className="text-gray-600">
                            <div className="relative">
                                <p className='text-muted-foreground text-xs uppercase py-3 mt-5'>Our Mission</p>
                                <span className='absolute left-0 top-0 w-10 h-0.5 bg-appColor-blue-default'></span>
                            </div>
                            <h2 className="text-3xl md:text-3xl font-sans font-medium text-black mb-4">Simplify Your Property Management</h2>
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut non enim
                            eleifend felis pretium feugiat.
                        </div>
                        <div className="text-gray-600 leading-relaxed">
                            <Image 
                                src="/property.jpg" 
                                alt="Image" 
                                width={1200} 
                                height={500} 
                                priority 
                                className="w-full rounded-lg h-[300px] object-cover" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-20 px-4 xl:h-[70vh] h-auto bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-16">
                        <div className="text-gray-600">
                            <div className="relative">
                                <p className='text-muted-foreground text-xs uppercase py-3 mt-5'>Our Story</p>
                                <span className='absolute left-0 top-0 w-10 h-0.5 bg-appColor-blue-default'></span>
                            </div>
                            <h2 className="text-3xl md:text-3xl font-sans font-medium text-black mb-4">How We Started</h2>
                        </div>
                        <div className="text-gray-600 leading-relaxed">
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed deleniti assumenda ratione soluta 
                                aperiam beatae libero dolorum, recusandae ipsum, velit in cum placeat officia sint possimus rerum 
                                perferendis iusto, id dicta ea. Ut veniam blanditiis saepe quo, praesentium, eligendi ullam culpa 
                                magnam quaerat nesciunt incidunt iure repellat asperiores. Cumque, labore!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What we offer Section*/}
            <Services />

            {/* Newsletter Section*/}
            <Newsletter />

            {/* Footer Section */}
            <Footer />


        </main>
    </>
    )
}

