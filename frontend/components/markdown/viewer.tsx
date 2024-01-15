'use client'

import { cn } from '@/lib/utils'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { useState } from 'react'

export default function MDXViewer({ markdown  , className}: { markdown: string , className?: string}) {

    const [markdownData] = useState(markdown)

    return (
        <div className={cn(' prose min-w-full  dark:text-white dark:prose-headings:text-white prose-orange' , className)}>
            <MDXRemote source={markdownData} />
        </div>

    )
}