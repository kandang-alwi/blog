import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'discord.gg/XFVFYgYW',
  title: 'Kandang Alwi',
  subtitle: 'Kandang Alwi Official Blog',
  lang: 'en-US',
  description: 'Powered by Kandang Alwi',
  author: {
    name: 'Kandang Alwi',
    avatar: '/assets/33d12e09eec263688a752c689cca4af3.png',
    status: '😉',
    bio: 'Blog Account.'
  },
  themeColor: '#3D4451'
}
