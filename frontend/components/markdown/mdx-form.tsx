/** 
 * custom form component to match rhf's field value 
 * combination of mdx writer and viewer
 */

'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Textarea } from '@/components/shadcn/ui/textarea'
import { Remark } from 'react-remark';


type MDXFormProps = {
    value: string
    onChange: (value: string) => void
    className?: string
}

export default function MDXFormComponent({ value, onChange, className }: MDXFormProps) {
    const [markdownData, setMarkdownData] = useState(value)


    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>{
        setMarkdownData(e.target.value)
        onChange(markdownData)
    }

    return (
        <div className={cn('flex gap-3 min-w-full min-h-96', className)}>
            <Textarea className=' w-1/2 min-h-full rounded-md'
                value={markdownData}
                onChange={handleChange}
            />
            <div className=' p-5 rounded-md border w-1/2 min-h-full prose'>
                <Remark>{markdownData}</Remark>
            </div>
        </div>
    )
}