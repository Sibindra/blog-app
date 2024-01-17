/** 
 * custom component for react hook forms mdx
 * combination of writer and viewer
 */

'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Textarea } from '@/components/shadcn/ui/textarea'
import { MDXRemote } from 'next-mdx-remote/rsc'

export default function MDXFormComponent({ className }: { className?: string }) {
    const [markdownData, setMarkdownData] = useState('')


    return (
        <div className={cn('flex gap-3 min-w-full min-h-96', className)}>

            {/* FIXME: ~ any invalid */}
            <Textarea className=' w-1/2 min-h-full rounded-md'
                value={markdownData}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setMarkdownData(e.target.value)} />

            <div className=' p-5 rounded-md border w-1/2 min-h-full prose'>
                {/* md contet here */}
            </div>

        </div>
    )
}