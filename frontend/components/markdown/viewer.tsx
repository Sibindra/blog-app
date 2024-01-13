import { MDXRemote } from 'next-mdx-remote/rsc'
 
export default async function RemoteMdxPage() {
  const res = await fetch('https://raw.githubusercontent.com/Sibindra/testmds/main/test.md')
  const markdown = await res.text()
  return <MDXRemote source={markdown} />
}