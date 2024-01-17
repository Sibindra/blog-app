import BlogForm from "@/components/form/form";
import MDXFormComponent from "@/components/markdown/mdx-form";

export default function AdminPage() {
    return (
        <div className=" p-10">
            <div className=" border p-10">
                <MDXFormComponent/>
            </div>
            <BlogForm />

        </div>
    )
}
