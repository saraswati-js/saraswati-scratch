import Link from 'next/link'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Stories
      </h2>
      
      <div className="body-side">
        {posts.map((post) => (
          <h3 key={post.meta.slug}>
            <Link as={`/posts/${post.meta.slug}`} href="/posts/[slug]">
              <a className="hover:underline">→ {post.meta.title}</a>
            </Link>
          </h3>
        ))}
      </div>
    </section>
  )
}
