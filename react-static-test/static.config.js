import plugins from './config/static.config.plugins'
import { blogPosts, blogConfig } from './config/static.config.blog'

export default {
  getSiteData: () => ({ title: 'The site url yo' }),
  
  getRoutes: async () => {
    const posts = await blogPosts()

    return [
      ...blogConfig(posts),
    ]
  },
  
  plugins: plugins(),
}
