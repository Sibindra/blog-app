'use client'


import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/shadcn/ui/button"
import { Badge } from "@/components/shadcn/ui/badge"
import { blogCardProps } from "@/types/blog"
import { Skeleton } from "@/components/shadcn/ui/skeleton"
import { cn } from "@/lib/utils"


const BlogCard = ({
    title,
    description,
    imgSrc,
    demoLink,
    readMoreLink,
    className
}: blogCardProps) => {

    // is mouse inside image container
    const [isInsideContainer, setIsInsideContainer] = useState<boolean>(false)

    return (
        <div className={cn(" min-h-80 flex flex-col gap-3" , className)}>

            {title ?
                <p className=" tracking-tight whitespace-normal font-semibold text-xl">
                    {title}

                </p>
                : <Skeleton className="w-full h-10" />}

            <div className=" relative w-full h-60 rounded-md overflow-hidden "
                onMouseEnter={() => setIsInsideContainer(true)}
                onMouseLeave={() => setIsInsideContainer(false)}>
                {imgSrc ?
                    <Image
                        loading={'lazy'}
                        src={imgSrc}
                        alt="blog image err"
                        className=" scale-100 transform transition-all duration-500 hover:scale-105"
                        fill
                    />
                    :
                    <Skeleton className="w-96 h-60" />

                }




                {
                    isInsideContainer &&
                    <Link href={demoLink || '#'}>
                        <Badge className="absolute flex gap-2 bottom-2 right-2 bg-white text-black cursor-pointer hover:bg-slate-100 hover:underline">
                            demo
                            <ExternalLink size={10} />
                        </Badge>
                    </Link>
                }



            </div>

            {description ?
                <p className=" text-sm text-gray-400 whitespace-normal tracking-tighter line-clamp-3">
                    {description}
                </p> :
                <Skeleton className="w-full h-10" />
            }


            {
                <div className=" flex justify-start items-center mt-5">
                    {readMoreLink ?
                        <Link href={readMoreLink}>
                            <Button className="rounded-xl" size={'sm'}>Read More</Button>
                        </Link>
                        :
                        <Skeleton className="w-20 h-10" />}

                </div>
            }
        </div>

    )
}
export default BlogCard