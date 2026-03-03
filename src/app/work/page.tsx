import { type Metadata } from 'next'
import {
  siFigma,
  siNextdotjs,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siWebflow,
  type SimpleIcon,
} from 'simple-icons'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import { RootLayout } from '@/components/RootLayout'

const projects = [
  {
    client: 'LoveUI',
    service: 'Next.js Web App',
    date: '2026',
    href: '/work/loveui',
    title: 'Building a modern UI component library.',
    summary: [
      'Designed in Figma and built from the ground up with Next.js. LoveUI is a custom development platform providing engineers with high-performance, accessible, and beautifully designed code components.',
    ],
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-16 w-16 fill-neutral-950">
        <path d="M7.5 8.5 5 12l2.5 3.5h2L7 12l2.5-3.5h-2Zm9 0L19 12l-2.5 3.5h-2L17 12l-2.5-3.5h2ZM10.5 18h2l1-12h-2l-1 12Z" />
      </svg>
    ),
  },
  {
    client: 'Portfolio',
    service: 'Custom Frontend Development',
    date: '2024',
    href: '/work/portfolio',
    title: 'High-performance digital portfolio experience.',
    summary: [
      'A custom digital experience built to showcase advanced web animations, responsive design, and lightning-fast load times. Built from scratch to highlight the intersection of design and code.',
    ],
    icon: (
      <svg viewBox="0 0 45 29" aria-hidden="true" className="h-16 w-16">
        <rect
          clipPath="url(#portfolio-logomark-clip)"
          className="h-16 w-0 fill-neutral-950 transition-all duration-300 group-hover:w-16"
        />
        <use
          href="#portfolio-logomark-path"
          className="stroke-neutral-950"
          fill="none"
          strokeWidth="0.8"
          strokeLinejoin="round"
        />
        <defs>
          <path
            id="portfolio-logomark-path"
            d="M25.64,0.1c2.26,0.27,4.78,0.98,6.72,1.9c2.34,1.1,5.2,3.35,5.97,4.71c0.53,0.9,0.34,1.81-0.51,2.53 c-0.58,0.49-1.23,0.68-2.21,0.65c-1.02-0.03-1.41-0.24-2.56-1.38C31.96,7.41,31.11,6.78,30,6.2c-1.54-0.8-3.13-1.32-4.78-1.56 c-0.94-0.14-3.09-0.12-4.21,0.04c-2.43,0.35-4.54,1.21-6.21,2.52c-1.82,1.44-3.03,3.16-3.6,5.11c-0.28,0.96-0.35,3.06-0.13,4.04 c0.92,4.08,4.8,7.18,9.96,7.96c1.08,0.16,3.02,0.17,4.15,0.01c0.98-0.14,2.76-0.6,3.62-0.94c1.56-0.62,3.09-1.67,4.46-3.08 c0.85-0.87,1.55-1.22,2.5-1.22c1.08,0,2.09,0.49,2.57,1.24c0.25,0.38,0.28,0.52,0.28,1.01c-0.01,0.51-0.05,0.62-0.36,1.1 c-0.79,1.19-2.43,2.62-4.19,3.67c-3.68,2.19-8.37,3.21-12.98,2.83c-2.58-0.22-5.55-1.06-7.68-2.19c-1.72-0.92-3.36-2.11-4.48-3.26 c-1.68-1.74-2.86-3.76-3.44-5.97c-0.37-1.38-0.44-3.56-0.15-5.15c0.4-2.25,1.21-3.95,2.79-5.86c2.92-3.52,7.25-5.73,12.47-6.39 C21.72-0.03,24.49-0.03,25.64,0.1z"
          />
          <clipPath id="portfolio-logomark-clip">
            <use href="#portfolio-logomark-path" />
          </clipPath>
        </defs>
      </svg>
    ),
  },
]

function CaseStudies() {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Case studies
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        {projects.map((project) => (
          <FadeIn key={project.client}>
            <article className="group">
              <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
                <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                  <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                    {project.icon}
                    <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                      {project.client}
                    </h3>
                  </div>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                      {project.service}
                    </p>
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      <time dateTime={project.date}>{project.date}</time>
                    </p>
                  </div>
                </div>
                <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                  <p className="font-display text-4xl font-medium text-neutral-950">
                    {project.title}
                  </p>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {project.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8 flex">
                    <Button href={project.href} aria-label={`View case study: ${project.client}`}>
                      View case study
                    </Button>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

const techStack: Array<{ name: string; icon: SimpleIcon }> = [
  { name: 'Next.js', icon: siNextdotjs },
  { name: 'Webflow', icon: siWebflow },
  { name: 'Figma', icon: siFigma },
  { name: 'Vercel', icon: siVercel },
  { name: 'React', icon: siReact },
  { name: 'Tailwind CSS', icon: siTailwindcss },
  { name: 'TypeScript', icon: siTypescript },
  { name: 'Supabase', icon: siSupabase },
]

function Clients() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Powered by modern, scalable technology.
        </h2>
      </FadeIn>
      <FadeInStagger className="mt-10" faster>
        <Border as={FadeIn} />
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4"
        >
          {techStack.map(({ name, icon }) => (
            <li key={name} className="group">
              <FadeIn className="overflow-hidden">
                <Border className="pt-12 group-nth-[-n+2]:-mt-px sm:group-nth-3:-mt-px lg:group-nth-4:-mt-px">
                  <div className="flex items-center gap-x-3 text-neutral-950">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-current">
                      <path d={icon.path} />
                    </svg>
                    <span className="text-xl font-semibold tracking-tight">
                      {name}
                    </span>
                  </div>
                </Border>
              </FadeIn>
            </li>
          ))}
        </ul>
      </FadeInStagger>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Our Work',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default async function Work() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="Our Work"
        title="Where premium design meets scalable code."
      >
        <p>
          A curated look at our recent builds. From pixel-perfect Webflow
          marketing sites to complex Next.js web applications, see how we help
          growing businesses stand out.
        </p>
      </PageIntro>

      <CaseStudies />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        attribution="Connor — Founder & Lead Developer"
      >
        The difference between a good website and a world-class digital
        product is in the details. We obsess over clean code, pixel-perfect
        design, and lightning-fast performance so you don&apos;t have to.
      </Testimonial>

      <Clients />

      <ContactSection />
    </RootLayout>
  )
}
