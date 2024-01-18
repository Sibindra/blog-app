import { blogCardProps } from "@/types/blog"
import BlogCard from "@/components/cards/blog-card"



async function getBlogs(apiUrl: string) {
    if (!apiUrl) {
        throw new Error('api url is undefined');
    }

    const res = await fetch(apiUrl, {
        cache: 'no-cache',
    })
    return res.json()
}

const BlogList = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL as string

    const blogs = await getBlogs(apiUrl)

    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center gap-5">
            {blogs.map((blog: blogCardProps, index: number) => (
                <BlogCard key={index} {...blog} className="p-5" />
            ))}
        </div>
    )
}

export default BlogList
