import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'https://discord.gg/XFVFYgYW',
  title: 'Kandang Alwi',
  subtitle: 'Kandang Alwi Official Blog',
  lang: 'en-US',
  description: 'Powered by Kandang Alwi',
  author: {
    name: 'Kandang Alwi',
    avatar: '/assets/maskable@192.png',
    status: '🌸',
    bio: 'Blog Account.'
  },
  themeColor: '#3D4451'
}
