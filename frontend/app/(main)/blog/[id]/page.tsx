import BlogCard from "@/components/cards/blog-card"
import RemoteMDXViewer from "@/components/markdown/remote-viewer";
import { cn } from "@/lib/utils"
import { blogCardProps } from "@/types/blog"
import Image from "next/image"


function formatDateString(inputDateString: string): string {
  const parsedDateTime: Date = new Date(inputDateString);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  return new Intl.DateTimeFormat("en-US", options)
    .format(parsedDateTime)
    .replace(/,/g, '')
    .replace(' ', ' • ');
}

async function getBlogById(id:string){
  const res = await fetch(`http://localhost:8000/api/blog/${id}`)

  return res.json()
}

async function getBlogs() {
  const res = await fetch('http://localhost:8000/api/blog')

  return res.json()
}

export default async function BlogPage({ params }: { params: { id: string } }) {

  const blogData = await getBlogById(params.id)
  const blogs = await getBlogs()

  return (
    <div className=" flex flex-col md:flex-row">

      <div className=" w-full md:w-3/4 px-10 flex flex-col gap-10">
        <h1 className="  font-bold text-4xl tracking-wide mt-5">{blogData.title}</h1>

        <div className=" font-medium text-sm">
          {blogData.readTime}  • {formatDateString(blogData.createdAt)}
        </div>

        <ImgContainer src={"https://images.unsplash.com/photo-1704928341414-5ae341023539?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3NXx8fGVufDB8fHx8fA%3D%3D"} />
        <RemoteMDXViewer markdownData={blogData.blogContent} />
      </div>


      <div className=" w-full md:w-1/4 p-10 md:px-5  flex flex-col gap-5 ">
        <h1 className="  font-bold text-2xl">Related Articles</h1>
        {blogs.map((blog : blogCardProps, index : number) => (
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