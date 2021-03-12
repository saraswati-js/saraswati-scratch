import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import { CMS_NAME } from '../../lib/constants'
import { mdxToString, stringToMdx} from '../../lib/mdxSerialization'

import { getAllPosts } from '../../lib/api'

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
                  {post.title} | Next.js Blog Example with {CMS_NAME}
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