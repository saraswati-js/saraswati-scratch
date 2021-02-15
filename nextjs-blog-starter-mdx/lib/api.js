import fs from 'fs'
import { join, extname } from 'path'
import matter from 'gray-matter'
import klaw from 'klaw'
import readdirp from 'readdirp'

const slug = (sidebar, title) => (
  [sidebar.join('/'), title.replace(/\s/g, '-')].join('/')
)

export const getAllPosts = async (fields = []) => {
  const contentpath = process.env.CONTENT_PATH 
  // const contentpath = join(__dirname, '../', '_posts')
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

    contents.push({
      // [slug(data.sidebar, data.title)]: {
        content,
        meta: {
          slug: slug(data.sidebar, data.title),
          ...data
        },
      // }
    })
  }

  return contents
}
