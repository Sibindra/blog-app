import BlogCard from "@/components/cards/blog-card";
import { dummyBlogData } from "@/dummy-datas/blogs.data";

export default function Home() {
  return (
    <main>

      <div className=" w-full min-h-96 flex justify-center items-center ">
        <p className=" text-2xl font-medium p-5 tracking-wider leading-10">
          Welcome to my Blog!

          <br />
          I'm Sibendra and here I Document my Latest Explorations.
        </p>
      </div>



      {/* card here */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-5">
        {dummyBlogData.map((blog, index) => (
          <BlogCard key={index} {...blog} className="p-5" />
        ))}

      </div>

    </main>
  )
}
