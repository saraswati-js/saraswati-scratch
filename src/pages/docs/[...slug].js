import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import PostBody from '../../design/post/post-body'
import Header from '../../design/layouts/header'
import PostTitle from '../../design/post/post-title'
import { mdxToString, stringToMdx} from '@lib/markdown/mdxSerialization'
import Sidebar from '@components/sidebar'
import { getAllPosts } from '@lib/markdown/api'
import DocumentationPage from '@layouts/docs/index'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const Crumbs = ({ items, title }) => (
  <Breadcrumb>
    <Breadcrumb.Item href="/docs">[TOP]&nbsp;</Breadcrumb.Item>
    {items.map((e, i) => (<li key={i.toString()}> /&nbsp;{capitalize(e)}&nbsp;</li>))}
    /&nbsp;
    <Breadcrumb.Item href="/">{capitalize(title)}</Breadcrumb.Item>
  </Breadcrumb>
)

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  return (
    <div preview={preview}>
      <DocumentationPage>
        {router.isFallback ? (<PostTitle>Loading…</PostTitle>) : (
          <>
            <article className="mb-32">
              <br />
              <Crumbs items={post.meta.sidebar} title={post.title} />
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with Markdown
                </title>
              </Head>
              <p>Title: {post.title}</p>

              <PostBody> {stringToMdx(post.content)} </PostBody>
            </article>
          </>
        )}
      </DocumentationPage>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const posts = await getAllPosts()
  const post = posts[params.slug.join('/')]
  const content = await mdxToString(post.content || '')

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