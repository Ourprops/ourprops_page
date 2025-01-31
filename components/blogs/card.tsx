import Image from "next/image"

interface CardProps {
    title: string
    date: string
    imageUrl: string
}

export function Card({ title, date, imageUrl }: CardProps) {
    return (
    <div className="cursor-pointer">
        <div className="relative aspect-[3/2] mb-4">
        <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform"
        />
        </div>
        <div className="space-y-2">
            <h3 className="font-medium line-clamp-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{date}</p>
        </div>
    </div>
    )
}

