import { type ImageProps } from 'next/image'
import glob from 'fast-glob'

async function importEntryModule(directory: string, filename: string) {
  if (directory === 'blog') {
    return import(`@/app/blog/${filename}`)
  }

  if (directory === 'work') {
    return import(`@/app/work/${filename}`)
  }

  throw new Error(`Unsupported MDX directory: ${directory}`)
}

async function loadEntries<T extends { date: string }>(
  directory: string,
  metaName: string,
): Promise<Array<MDXEntry<T>>> {
  const files = await glob('**/page.mdx', { cwd: `src/app/${directory}` })
  const entries: Array<MDXEntry<T>> = []

  await Promise.all(
    files.map(async (filename) => {
      const moduleExports = await importEntryModule(directory, filename)
      const metadata = moduleExports[metaName] as T | undefined

      if (!metadata?.date) {
        console.warn(
          `[mdx] Skipping ${directory}/${filename}: missing or invalid export \`${metaName}\` with a valid \`date\` field.`,
        )
        return
      }

      entries.push({
        ...metadata,
        metadata,
        href: `/${directory}/${filename.replace(/\/page\.mdx$/, '')}`,
      })
    }),
  )

  return entries.sort((a, b) => b.date.localeCompare(a.date))
}

type ImagePropsWithOptionalAlt = Omit<ImageProps, 'alt'> & { alt?: string }

export type MDXEntry<T> = T & { href: string; metadata: T }

export interface Article {
  date: string
  title: string
  description: string
  isTemplate?: boolean
  author: {
    name: string
    role: string
    image: ImagePropsWithOptionalAlt
  }
}

export interface CaseStudy {
  date: string
  client: string
  title: string
  description: string
  summary: Array<string>
  logo: ImageProps['src']
  image: ImagePropsWithOptionalAlt
  service: string
  testimonial: {
    author: {
      name: string
      role: string
    }
    content: string
  }
}

export async function loadArticles(options?: { includeTemplates?: boolean }) {
  let articles = await loadEntries<Article>('blog', 'article')

  if (options?.includeTemplates) {
    return articles
  }

  return articles.filter((article) => !article.isTemplate)
}

export function loadCaseStudies() {
  return loadEntries<CaseStudy>('work', 'caseStudy')
}
