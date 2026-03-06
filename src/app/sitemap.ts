import { type MetadataRoute } from 'next'

import { loadArticles, loadCaseStudies } from '@/lib/mdx'
import { absoluteUrl } from '@/lib/seo'

function parseLastModified(value: string) {
  if (/^\d{4}-\d{2}$/.test(value)) {
    return new Date(`${value}-01`)
  }

  return new Date(value)
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let [articles, caseStudies] = await Promise.all([
    loadArticles(),
    loadCaseStudies(),
  ])

  let staticRoutes: MetadataRoute.Sitemap = [
    '/',
    '/blog',
    '/contact',
    '/pricing',
    '/process',
    '/work',
  ].map((path) => ({
    url: absoluteUrl(path),
  }))

  let articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: absoluteUrl(article.href),
    lastModified: parseLastModified(article.date),
  }))

  let caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((caseStudy) => ({
    url: absoluteUrl(caseStudy.href),
    lastModified: parseLastModified(caseStudy.date),
  }))

  return [...staticRoutes, ...articleRoutes, ...caseStudyRoutes]
}