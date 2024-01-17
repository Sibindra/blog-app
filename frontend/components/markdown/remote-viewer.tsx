import { cn } from '@/lib/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default function RemoteMDXViewer({ markdownData, className }: { markdownData: string, className?: string }) {
    return (
        <div className={cn(' prose min-w-full  dark:text-white dark:prose-headings:text-white prose-orange', className)}>
            <MDXRemote source={markdownData} />
        </div>
    )
}