import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../design/components/container'
import PostBody from '../../design/post/post-body'
import Header from '../../design/layout/header'
import PostHeader from '../../design/post/post-header'
import Layout from '../../design/layout'
import PostTitle from '../../design/post/post-title'
import Head from 'next/head'
import { mdxToString, stringToMdx} from '../../lib/markdown/mdxSerialization'

import { getAllPosts } from '../../lib/markdown/api'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  // console.log(post)
  // console.log('did i get into here?')
  
  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />
  // }
  // 
  // const pathArray = post.file.split('/')
  // const newPath = pathArray.slice(0, pathArray.length - 1).join('/')

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
              <h1>Title: {post.title}</h1>
              <br />
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

  return {
    props: {
      post: {
        title: post.meta.title,
        content,
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

  // clippy.copy(JSON.stringify(staticPaths), () => { console.log('Got it') })

  return staticPaths
}