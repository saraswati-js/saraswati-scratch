import Intro from '@pages/intro'
import MoreStories from '@pages/more-stories'
import DocumentationPage from '@layouts/docs/index'
import ProductLanding from '@layouts/landing-product'
import { getAllPosts } from '@lib/markdown/api'

export default function Index({ allPosts }) {
  const morePosts = Object.values(allPosts)

  return (
    <>
      <DocumentationPage>
        <Intro />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </DocumentationPage>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()

  return {
    props: { allPosts },
  }
}
