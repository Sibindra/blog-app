import BlogCard from "@/components/cards/blog-card"
import MDXViewer from "@/components/markdown/viewer"
import { Separator } from "@/components/shadcn/ui/separator"
import { dummyBlogData } from "@/dummy-datas/blogs.data"
import { cn } from "@/lib/utils"
import { MDXRemote } from "next-mdx-remote/rsc"
import Image from "next/image"

export default async function BlogPage() {
  const res = await fetch('https://raw.githubusercontent.com/Sibindra/testmds/main/test.md' , {
    next:{
      revalidate: 10000
    }
  })
  const markdown = await res.text()


  return (
    <div className=" flex flex-col md:flex-row">

      <div className=" w-full md:w-3/4 px-10 flex flex-col gap-10">
        <h1 className="  font-bold text-4xl tracking-wide mt-5">Installing Next.js and PostgreSQL on macOS, Windows, and Linux</h1>
        <ImgContainer src={"https://images.unsplash.com/photo-1704928341414-5ae341023539?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D"} />
        <MDXViewer markdownData={markdown} />
      </div>


      <div className=" w-full md:w-1/4 p-10 md:px-5  flex flex-col gap-5 ">
        <h1 className="  font-bold text-2xl">Related Articles</h1>
        {dummyBlogData.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  )
}

const ImgContainer = ({
  src,
  className
}: { src: string, className?: string }) => {
  return <div className={cn('relative rounded-sm w-full h-80 overflow-hidden ', className)}>
    <Image src={src} alt={'notFound'} fill sizes="500" />
  </div>
}