import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface BlogPostProps {
    id: number
    image: string
    date: {
        day: string
        month: string
    }
    title: string
    author: string
    category: string
    comments: number
    excerpt: string
}

export function BlogPost({ id,image, date, title, author, category, comments, excerpt }: BlogPostProps) {
    return (
    <article className="mb-12">
        <div className="relative mb-6">
            <Image src={image || "/placeholder.svg"} alt={title} width={1200} height={500} priority className="w-full rounded-lg h-[250px] object-cover" />
        </div>
        <div className="flex flex-row items-center justify-start gap-5 mb-5">
            <div className=" bg-gray-900 p-2 text-center text-white px-4">
                <div className="text-2xl font-bold">{date.day}</div>
                <div className="text-sm uppercase">{date.month}</div>
            </div>
            <div>
                <Link href={`/blog/${id}`} className="text-xl md:text-2xl font-bold mb-3 uppercase tracking-wide cursor-pointer hover:underline">{title}</Link>
                <div className=" text-sm text-muted-foreground">
                    By {author} | {category} | Comments: {comments}
                </div>
            </div>
            
        </div>
        
        
        <p className="mb-4 text-gray-600">{excerpt}</p>
        <Button variant="outline" className="border border-black rounded-none">Read More</Button>
    </article>
    )
}

