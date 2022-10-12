import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
    {
    name: 'business',
    text: '🗄️ Business'
  }
]

export const head: HeadConfig = {}

export const header: HeaderConfig = {
  nav: [
    {
      text: 'Rules',
      link: '/main'
    },
    {
      text: 'Test Update',
      link: '/main'
    }
  ]
}

export const footer: FooterConfig = {
  nav: [
    {
      text: 'Discord',
      link: 'https://discord.gg/XFVFYgYW'
    },
    {
      text: 'Store',
      link: '/sitemap.xml'
    }
  ]
}

export const date: DateConfig = {
  locales: 'en-US',
  options: {
    year: '2-digit',
    weekday: 'long',
    month: 'short',
    day: 'numeric'
  }
}

export const feed: FeedConfig = {}
