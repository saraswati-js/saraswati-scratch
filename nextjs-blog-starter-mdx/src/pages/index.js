import Container from '../design/components/container'
import MoreStories from '../design/pages/more-stories'
import HeroPost from '../design/pages/hero-post'
import Intro from '../design/pages/intro'
import Layout from '../design/layout'
import { getAllPosts } from '../lib/markdown/api'
import Head from 'next/head'

export default function Index({ allPosts }) {
  const morePosts = Object.values(allPosts).slice(1)

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with Markdown</title>
        </Head>
        <Container>
          <Intro />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()

  return {
    props: { allPosts },
  }
}
