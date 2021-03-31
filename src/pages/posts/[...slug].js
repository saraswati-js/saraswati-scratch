import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Link from 'next/link'
import Container from '../../design/components/container'
import PostBody from '../../design/post/post-body'
import Header from '../../design/layouts/header'
import PostHeader from '../../design/post/post-header'
import Layout from '../../design/layouts'
import PostTitle from '../../design/post/post-title'
import Head from 'next/head'
import { mdxToString, stringToMdx} from 'lib/markdown/mdxSerialization'
import Sidebar from '@components/sidebar'

import { getAllPosts } from 'lib/markdown/api'

const Back = () => (
  <Link href="/">
    <a>[Home] </a>
  </Link>
)

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  return (
    <div preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with Markdown
                </title>
              </Head>
              <h1><Back />{post.meta.sidebar.join(' » ')} Title: {post.title}</h1>
              
              <br />

                <div className="left-side">
                  <Sidebar />
                </div>

              <PostBody> {stringToMdx(post.content)} </PostBody>
              {/* <PostBody>{post.content}</PostBody> */}
            </article>
          </>
        )}
      </Container>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const posts = await getAllPosts()
  const post = posts[params.slug.join('/')]
  // const content = post.content
  const content = await mdxToString(post.content || '')

  // console.log(post)

  return {
    props: {
      post: {
        title: post.meta.title,
        content,
        meta: post.meta,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  const staticPaths = {
    fallback: false,
    paths: Object.keys(posts).map((post) => ({
      params: {
        slug: post.split('/'),
      },
    })),
  }

  return staticPaths
}