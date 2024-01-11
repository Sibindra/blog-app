import MarkdownViewer from "./viewer";

async function fetchMarkdown() {
  const response = await fetch('https://raw.githubusercontent.com/Sibindra/climate-blogs-markdown/main/impacts.md');
  return await response.text();
}

export const Viewer = async () => {
  const mdContent = await fetchMarkdown();
  return (
    <MarkdownViewer mdContent={mdContent} />
  )
}