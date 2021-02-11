import axios from 'axios'

export const blogPosts = async () => {
  const { data: posts } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  )

  return posts
}

export const blogConfig = (posts) => ([{
  path: '/blog',
  getData: () => ({
    posts,
  }),
  children: posts.map(post => ({
    path: `/post/${post.id}`,
    template: 'src/route-layouts/Post',
    getData: () => ({
      post,
    }),
  })),
}])