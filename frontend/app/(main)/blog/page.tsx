import BlogCard from "@/components/cards/blog-card";
import { Viewer } from "@/components/markdown/viewer/test-viewer";
import { Separator } from "@/components/shadcn/ui/separator";
import { dummyBlogData } from "@/dummy-datas/blogs.data";
import Image from "next/image";

export default function BlogPage() {
  return (
    <>
      {/* img banner */}
      <div className=" min-h-96 w-full relative">
        <Image src={'https://images.unsplash.com/photo-1661987584509-20babb3905be?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D'} fill alt="banner" />

        <div className=" absolute w-full h-full bg-black opacity-60 flex justify-center items-center">
          <h1 className=" text-6xl font-bold capitalize text-white opacity-100">Nextjs and Postgre Sql for pern stack app </h1>
        </div>
      </div>


      {/* bottom container */}
      <div className=" flex items-center flex-col gap-10 md:gap-0 md:flex-row justify-between w-full min-h-screen">
        <div className="w-full md:w-3/4  h-full">
          <Viewer />
        </div>


        <Separator className=" md:hidden" />

        <div className=" w-full md:w-1/4  h-full flex flex-wrap">
          {dummyBlogData.slice(0,6).map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}


        </div>

      </div>

    </>
  )
}