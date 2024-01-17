import { blogCardProps } from "@/types/blog"
import BlogCard from "@/components/cards/blog-card"


async function getBlogs() {
    const res = await fetch('http://localhost:8000/api/blog')

    return res.json()
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
