import React from 'react'
import { BlogPost } from '@/components/blogs/blog-post'
import { Sidebar } from '@/components/blogs/sidebar'
import Header from '@/components/Header'
import SecondHeader from '@/components/homepage/second-header'
import Footer from '@/components/Footer'

export default function page() {
    return (
        <>
            <Header />
            <SecondHeader />
            <div className="mx-auto max-w-7xl px-4 py-8 mt-20">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <BlogPost
                            id={1}
                            image="/property.jpg"
                            date={{ day: "09", month: "Aug" }}
                            title="Blog Heading Goes Here"
                            author="Michale John"
                            category="Home made pizza"
                            comments={5}
                            excerpt="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid etx ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
                        />
                        <BlogPost
                            id={2}
                            image="/property2.jpg"
                            date={{ day: "09", month: "Aug" }}
                            title="Blog Heading Goes Here"
                            author="Michale John"
                            category="Home made pizza"
                            comments={5}
                            excerpt="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid etx ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
                        />
                    </div>
                    <Sidebar />
                </div>
            </div>
            <Footer/>
        </>
    )
}
