'use client'

import { MDXRemote } from 'next-mdx-remote/rsc'
import { useState } from 'react'

export default function MDXViewer({ markdown }: { markdown: string }) {

    const [markdownData] = useState(markdown)

    return (
        <div className=' prose block min-w-full p-10 dark:text-white dark:prose-headings:text-white prose-orange'>
            <MDXRemote source={markdownData} />
        </div>

    )
}