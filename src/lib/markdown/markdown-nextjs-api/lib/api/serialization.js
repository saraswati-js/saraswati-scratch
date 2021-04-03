import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import Test from './components/test'
import linkHeadings from 'remark-autolink-headings'
import math from 'remark-math'
import katex from 'rehype-katex'
import youtube from './plugin.youtube'

const components = file => slug => ({
  Test,
  h1: ({ children }) => <h1>{children}</h1>,
  img: ({ src, alt }) => (
    <span>
      <img alt={alt} src={src} />
    </span>
  )
})

/**
 * serialize mdx to string
 */
export async function mdxToString(mdx) {
  const config = {
    mdxOptions: {
      rehypePlugins: [
        katex,
      ],

      remarkPlugins: [
        youtube,
        math,
        linkHeadings,
      ],
    }
  }

  return await renderToString(mdx, config)
}

/**
 * render string back to react components
 */
export const stringToMdx = (string, file = '') => (
  hydrate(string, {
    components: components(file)
  })
)

