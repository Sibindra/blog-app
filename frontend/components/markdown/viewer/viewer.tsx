'use client'

import React, { useState } from 'react';
import { MdPreview } from 'md-editor-rt';
import 'md-editor-rt/lib/preview.css';
import { useTheme } from 'next-themes';


const MarkdownViewer = ({mdContent}: { mdContent: string }) => {
    const [text] = useState(mdContent);
    const [id] = useState('preview-only');
    const { theme } = useTheme();

    return (
        <>
            <MdPreview language='en-US' theme={theme === undefined ? 'dark' : theme === 'dark' ? 'dark' : 'light'} editorId={id} modelValue={text} />
        </>
    );
};

export default MarkdownViewer;