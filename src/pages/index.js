import { getAllPosts } from '../lib/markdown/api'
import Head from 'next/head'

import Sidebar from '@components/sidebar'
import Container from '@components/container'
import MoreStories from '@pages/more-stories'
import HeroPost from '@pages/hero-post'
import Intro from '@pages/intro'
import Layout from '../design/layouts'

export default function Index({ allPosts }) {
  const morePosts = Object.values(allPosts)

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with Markdown</title>
        </Head>
        <Container>
          <Intro />
          
          <div className="left-side">
            <Sidebar />
          </div>
          
          <div className="right-side">
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </div>
          
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
