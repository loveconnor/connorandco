import { type Metadata } from 'next'

export const siteConfig = {
  name: 'Connor & Co.',
  url: 'https://www.connorco.dev',
} as const

function normalizePath(path: string) {
  if (!path) {
    return '/'
  }

  return path.startsWith('/') ? path : `/${path}`
}

export function absoluteUrl(path = '/') {
  return new URL(normalizePath(path), siteConfig.url).toString()
}

export function createMetadata({
  title,
  description,
  path = '/',
}: {
  title?: Metadata['title']
  description?: string
  path?: string
}): Metadata {
  let canonicalPath = normalizePath(path)

  return {
    ...(title ? { title } : {}),
    ...(description ? { description } : {}),
    alternates: {
      canonical: canonicalPath,
    },
  }
}