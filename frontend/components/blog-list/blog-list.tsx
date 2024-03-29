import { blogCardProps } from "@/types/blog"
import BlogCard from "@/components/cards/blog-card"
import axiosInstance from "@/lib/auth"

async function getBlogs() {
    const res = await axiosInstance.get('/blog')

    return res.data
}

const BlogList = async () => {

    const blogs = await getBlogs()

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-5">
            {blogs.map((blog: blogCardProps, index: number) => (
                <BlogCard key={index} {...blog} className="p-5" />
            ))}
        </div>
    )
}

export default BlogList
