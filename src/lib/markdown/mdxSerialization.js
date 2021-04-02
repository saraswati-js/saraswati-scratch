import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import Test from './test'
import linkHeadings from 'remark-autolink-headings'
import math from 'remark-math'
import katex from 'rehype-katex'
// import oembed from 'remark-oembed'
import embed from './plugin'
// const components = {Test}

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
    // components,
    mdxOptions: {
      rehypePlugins: [
        katex,
      ],

      remarkPlugins: [
        embed,
        // oembed,
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

