import fs from 'fs'
import path from 'path'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getSlugs() {
  return fs.readdirSync(postsDirectory)
    .filter(file => path.extname(file) !== '.jpg')
    .map(d => {
      return d.replace(/\.mdx$/, '')
    })
}

export function getPostBySlug(slug, fields = []) {
  const file = join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(file, 'utf8')
  const { data, content } = matter(fileContents)
  const items = {}

  console.log(fields)

  fields.forEach((field)=> {
    if (field == 'slug') {
      items[field] = slug
      items.file = `${postsDirectory}/${slug}.mdx`
    }
    if (field == 'content') {
      items[field] = content
    }
    if (data[field]) {
      items[field] = data[field]
    }
  })

  // console.log(JSON.stringify(items))

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))

  // console.log(posts)

  return posts
}
