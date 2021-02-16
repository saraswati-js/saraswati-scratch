import fs from 'fs'
import { join, extname } from 'path'
import matter from 'gray-matter'
import klaw from 'klaw'
import readdirp from 'readdirp'

const contentSlug = (sidebar, title) => (
  [sidebar.join('/'), title.replace(/\s/g, '-')].join('/')
)

export const getAllPosts = async () => {
  const contentpath = process.env.CONTENT_PATH 
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
          slug,
          ...data,
        },
      },
      ...contents,
    }
  }

  return contents
}
