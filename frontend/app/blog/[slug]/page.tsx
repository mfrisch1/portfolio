// app/blog/[slug]/page.tsx
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github.css'  // or your chosen theme
import { getBlogByDocId } from '@/lib/api'

export default async function Page({ params: { docId } }) {
  const blog = await getBlogByDocId(docId)
  if (!blog) return notFound()

  return (
    <article className="prose mx-auto py-8">
      <h1>{blog.title}</h1>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {blog.content}
      </ReactMarkdown>
    </article>
  )
}

