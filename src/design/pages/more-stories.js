import Link from 'next/link'

export default function MoreStories({ posts }) {
  return (
    <section>      
      <div className="body-side">
        {posts.map((post) => (
          <p key={post.meta.slug}>
            <Link as={`/docs/${post.meta.slug}`} href="/docs/[slug]">
              <a className="hover:underline">→ {post.meta.title}</a>
            </Link>
          </p>
        ))}
      </div>
    </section>
  )
}
