import Link from 'next/link'

export default function MoreStories({ posts }) {
  return (
    <section>      
      <div className="body-side">
        {posts.map((post) => (
          <p key={post.meta.slug}>
            <Link as={`/posts/${post.meta.slug}`} href="/posts/[slug]">
              <a className="hover:underline">→ {post.meta.title}</a>
            </Link>
          </p>
        ))}
      </div>
    </section>
  )
}
