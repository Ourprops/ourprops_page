import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"


const popularPosts = [
    {
        id: 1,
        title: "UNIVERSITY NEAR TO VILLA",
        image: "/property.jpg",
        date: 'Jan, 12 2025'
    },
    {
        id: 2,
        title: "KEMPISKI HOTEL",
        image: "/property7.jpg",
        date: 'Jan, 12 2025'
    },
  // Add more popular posts as needed
]

export function Sidebar() {
    return (
    <div className="px-2">
        <div className="mb-10">
            <div className="border-b-2 mb-1 border-blue-500 w-[40px]"></div>
            <h2 className="mb-2 text-lg font-bold">Search</h2>
            <Input type="search" placeholder="Enter Search Keywords" className="w-full" />
        </div>

        <div>
            <div className="border-b-2 mb-1 border-blue-500 w-[40px]"></div>
            <h2 className="text-lg font-bold mb-5">Popular Posts</h2>
            <div className="space-y-4">
                {popularPosts.map((post) => (
                    <div key={post.id} className="flex gap-4">
                        <Image
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            width={80}
                            height={60}
                            priority
                            className="rounded"
                        />
                        <div>
                            <Link href={`/blog/${post.id}`} className="font-medium text-sm mb-1 cursor-pointer hover:underline">{post.title}</Link>
                            <p className="text-gray-500 text-xs">{post.date}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

