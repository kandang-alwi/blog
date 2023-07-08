import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'blog.kandangalwi.me',
  title: 'Kandang Alwi',
  subtitle: 'Official Blog Website',
  lang: 'en-US',
  description: 'Powered by Kandang Alwi',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'Kandang Alwi',
    status: '🟢',
    bio: 'Kandang Alwi Official Blog'
  },
  themeColor: '#3D4451'
}
