console.clear()

const fs = require('fs')
const { join, extname } = require('path')
const matter = require('gray-matter')
const readdirp = require('readdirp')

const contentSlug = (sidebar, title) => (
  [sidebar.join('/'), title.replace(/\s/g, '-')].join('/')
)

const getAllPosts = async (dirpath = __dirname) => {
  // const contentpath = process.env.CONTENT_PATH 
  const contentpath = join(__dirname, '../', '_posts')
  const contents = []

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

    contents.push({
      [slug]: {
        content,
        meta: {
          slug,
        ...data
        },
      }
    })
  }

  return contents
}

getAllPosts()