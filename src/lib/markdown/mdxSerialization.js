import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import embed from './plugin'
import Test from './test'
import linkHeadings from 'remark-autolink-headings'
import path from 'path'
// const components = {Test}

const components = file => slug => ({
  Test,
  h1: ({ children }) => <h1>{children}</h1>,
  img: ({ src, alt }) => (
    <div>
      THIS IS AN IMAGE YO!
      <img alt={alt} src={src} />
    </div>
  )
})

/**
 * serialize mdx to string
 */
export async function mdxToString(mdx) {
  const config = {
    // components,
    mdxOptions: {
      remarkPlugins: [
        // embed,
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

