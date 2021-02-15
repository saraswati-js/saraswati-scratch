import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import embed from './plugin'
import Test from '../components/test'
import linkHeadings from 'remark-autolink-headings'
import path from 'path'
// const components = {Test}

const components = file => slug => ({
  Test,
  h1: ({ children }) => <h1>{children}</h1>,
  img: ({ src, alt }) => {
    const isRelative = ['..', './'].includes(src.slice(0, 2))
    let srcUrl = src

    if (!isRelative) {
      return (
        <img alt={alt} src={src} />
      )
    }
    
    if (isRelative) {
      srcUrl = '/api/img'
      srcUrl = path.join(
        process.env.ROOT,
        '_posts',
        src
      )
    }

    return (
      <img alt={alt} src="" />
    )
  }
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

