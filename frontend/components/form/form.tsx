"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/shadcn/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/shadcn/ui/form"
import { Input } from "@/components/shadcn/ui/input"
import { toast } from "@/components/shadcn/ui/use-toast"
import MDXFormComponent from "../markdown/mdx-form"


const blogFormSchema = z.object({
    title: z.string().min(3, "Too short").max(100, "Too long"),
    description: z.string().min(3, "Too short").max(100, "Too long"),
    imgSrc: z.string().url({
        message: "Invalid URL",
    }),
    demoLink: z.string().url({
        message: "Invalid URL",
    }),
    blogContent: z.string().min(3, "Too short"),
    readTime: z.string(),
})


type blogFormValues = z.infer<typeof blogFormSchema>


const defaultValues: Partial<blogFormValues> = {}

const postFormData = async (data: blogFormValues) => {
    const { title, description, imgSrc, demoLink, blogContent, readTime } = data

    try {
        const res = await fetch(process.env.API_URL as string, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },

            body: JSON.stringify({
                title,
                description,
                imgSrc,
                demoLink,
                blogContent: blogContent.toString(),
                readTime,

            }),


        })

        if (res.ok) {
            toast({
                title: "Blog Posted Succesfully ",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                    </pre>
                ),
                variant: 'default'
            })
        }


    } catch (error) {
        toast({
            title: "Sorry Something went wrong ",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(error)}</code>
                </pre>
            ),
            variant: 'destructive'
        })

    }
}


const BlogForm = () => {
    const form = useForm<blogFormValues>({
        resolver: zodResolver(blogFormSchema),
        defaultValues,
        mode: "onBlur",
    })


    function onSubmit(data: blogFormValues) {
        postFormData(data)
        
        form.reset({
            title: "",
            description: "",
            imgSrc: "",
            demoLink: "",
            blogContent: "",
            readTime: "",
        })
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="imgSrc"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Image URL</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <FormField
                    control={form.control}
                    name="demoLink"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Demo URL</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="blogContent"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Blog Content</FormLabel>
                            <FormControl>
                                <MDXFormComponent {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="readTime"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Read Time</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />


                <Button type="submit">Submit</Button>
            </form>
        </Form>

    )
}

export default BlogForm
