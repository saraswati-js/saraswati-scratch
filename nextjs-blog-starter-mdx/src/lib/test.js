console.clear()

const fs = require('fs')
const { join, extname } = require('path')
const matter = require('gray-matter')
const readdirp = require('readdirp')
const clippy = require('copy-paste')

const contentSlug = (sidebar, title) => (
  [sidebar.join('/'), title.replace(/\s/g, '-')].join('/')
)

const getAllPosts = async (dirpath = __dirname) => {
  // const contentpath = process.env.CONTENT_PATH 
  const contentpath = join(__dirname, '../', '_posts')
  let contents = {}

  for await (const entry of readdirp(contentpath)) {
    const { path } = entry
    const exts = ['.md', '.mdx']

    if (!exts.includes(extname(path))) {
      continue
    }

    const file = [contentpath, path].join('/')
    const fileContents = fs.readFileSync(file, 'utf8')
    const { data, content } = matter(fileContents)
    const slug = contentSlug(data.sidebar, data.title)

    contents = {
      [slug]: {
        content,
        meta: {
          slug: slug.split('/'),
          ...data,
        },
      },
      ...contents,
    }
  }

  return contents
}

async function getStaticPaths() {
  const posts = await getAllPosts()

  const staticPaths = {
    fallback: false,
    paths: Object.keys(posts).map((post) => ({
      params: {
        slug: post.split('/'),
      },
    })),
  }

  clippy.copy(JSON.stringify(staticPaths), () => { console.log('Got it') })

  return staticPaths
}

getStaticPaths()