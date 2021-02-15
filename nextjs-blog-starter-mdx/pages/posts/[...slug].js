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
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const pathArray = post.file.split('/')
  const newPath = pathArray.slice(0, pathArray.length - 1).join('/')

  return (
    <div>
    {/* <div preview={preview}> */}
      {/* <Container>
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
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody> {stringToMdx(post.content, newPath)} </PostBody>
            </article>
          </>
        )}
      </Container> */}
    </div>
  )
}

export async function getStaticProps({ params }) {
  console.log(params)
  // const post = getPostBySlug(params.slug, [
  //   'title',
  //   'date',
  //   'slug',
  //   'author',
  //   'content',
  //   'ogImage',
  //   'coverImage',
  // ])

  // console.log(post)

  // const content = await mdxToString(post.content || '') 

  return {
    props: {
      post: {
        // ...post,
        // content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  console.log(posts[0].meta)

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.meta.slug,
        id: post.meta.slug,
      },
    })),
    fallback: false,
  }
}
