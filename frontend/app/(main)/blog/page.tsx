import MDXViewer from "@/components/markdown/viewer"

export default async function BlogPage() {
  const res = await fetch('https://raw.githubusercontent.com/Sibindra/testmds/main/test.md')
  const markdown = await res.text()

  return <MDXViewer markdown={markdown} />


}