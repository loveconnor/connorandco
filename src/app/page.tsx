import Script from 'next/script'
import {
  siFigma,
  siNextdotjs,
  siReact,
  siTailwindcss,
  siVercel,
  siWebflow,
  type SimpleIcon,
} from 'simple-icons'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { createHomePageJsonLd, createMetadata, siteConfig } from '@/lib/seo'
import imageLaptop from '@/images/connorCoding.jpg'
import { RootLayout } from '@/components/RootLayout'

const techStack: Array<{ name: string; icon: SimpleIcon }> = [
  { name: 'Next.js', icon: siNextdotjs },
  { name: 'Webflow', icon: siWebflow },
  { name: 'Figma', icon: siFigma },
  { name: 'Vercel', icon: siVercel },
  { name: 'React', icon: siReact },
  { name: 'Tailwind CSS', icon: siTailwindcss },
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center text-sm font-semibold tracking-wider text-white sm:text-left">
            We use the right tools for the work, not the same process every time.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {techStack.map(({ name, icon }) => (
              <li key={name}>
                <FadeIn>
                  <div className="flex items-center gap-x-3 text-white">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-8 w-8 fill-current">
                      <path d={icon.path} />
                    </svg>
                    <span className="text-2xl font-semibold tracking-tight">
                      {name}
                    </span>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

const projects = [
  {
    caseStudyHref: '/work/lovesans',
    year: '2026',
    category: 'Custom Typeface Design',
    title: 'Designing LoveSans, a custom typeface system.',
    description:
      'LoveSans is a self-initiated sans-serif font family designed for modern brands, websites, and digital products. The project included multiple weights, italic styles, and production-ready web font exports.',
    icon: (
      <div
        aria-hidden="true"
        className="flex h-16 w-16 items-center justify-center text-5xl font-bold tracking-tight text-neutral-950"
      >
        Aa
      </div>
    ),
  },
  {
    caseStudyHref: '/work/loveui',
    year: '2026',
    category: 'Next.js Web App',
    title: 'Building a modern UI component library.',
    description:
      'Designed in Figma and built from the ground up with Next.js. LoveUI is a custom development platform providing engineers with high-performance, accessible, and beautifully designed code components.',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-16 w-16 fill-neutral-950">
        <path d="M7.5 8.5 5 12l2.5 3.5h2L7 12l2.5-3.5h-2Zm9 0L19 12l-2.5 3.5h-2L17 12l-2.5-3.5h2ZM10.5 18h2l1-12h-2l-1 12Z" />
      </svg>
    ),
  },
]

function CaseStudies() {
  return (
    <section>
      <SectionIntro
        title="Selected Projects"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          A look at some of our recent digital products. From designing
          high-converting portfolios to engineering custom, open-source Next.js
          libraries, we build products that scale.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <FadeIn key={project.caseStudyHref} className="flex h-full">
              <article className="group relative flex h-full w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  {project.icon}
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time dateTime={project.year} className="font-semibold">
                    {project.year}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>{project.category}</span>
                </p>
                <p className="mt-6 min-h-[4.5rem] text-2xl font-semibold text-neutral-950">
                  {project.title}
                </p>
                <p className="mt-4 flex-1 text-base text-neutral-600">
                  {project.description}
                </p>
                <div className="mt-8 flex">
                  <Button href={project.caseStudyHref}>View case study</Button>
                </div>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Offers"
        title="Three clear ways to work together."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Most clients are not looking for development in the abstract. They
          need a specific problem solved. These offers are built around the
          result you need right now.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 45rem, 34rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="Agency Overflow Offer">
              White-label Webflow and Next.js production for agencies that need
              a reliable development partner. You manage the client. We handle
              the build work.
            </ListItem>
            <ListItem title="Startup Launch Offer">
              Fast design and development for founders who need a credible
              website or MVP frontend without hiring full-time. Launch sooner
              with a clear, professional product presence.
            </ListItem>
            <ListItem title="Conversion Refresh Offer">
              Homepage and landing page redesigns focused on clarity, speed,
              and conversion. Best for teams with traffic but weak results.
            </ListItem>
            <ListItem title="Ongoing Partner Support">
              After launch, continue with monthly support for updates,
              improvements, and overflow work.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

const pricingPlans = [
  {
    name: 'Agency Overflow Offer',
    price: 'Starting at $3,000',
    description:
      'White-label Webflow and Next.js production for agencies that need dependable execution.',
    features: [
      'White-label delivery support',
      'Webflow and Next.js builds',
      'Async communication and staging links',
      'Delivered on agency timelines',
    ],
  },
  {
    name: 'Startup Launch Offer',
    price: 'Starting at $8,000',
    description:
      'Fast design and development for founders who need a credible site or MVP frontend.',
    features: [
      'Positioning and interface design',
      'Marketing site or product frontend',
      'Modern stack with room to scale',
      'Delivered in focused launch sprints',
    ],
  },
  {
    name: 'Conversion Refresh Offer',
    price: 'Starting at $2,500',
    description:
      'Homepage and landing page redesigns focused on clarity, speed, and conversion.',
    features: [
      'Messaging and layout cleanup',
      'Faster, lighter page builds',
      'Conversion-focused redesign decisions',
      'Ideal for underperforming key pages',
    ],
  },
]

function Pricing() {
  return (
    <section>
      <SectionIntro
        title="Simple, transparent pricing."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          No bloated agency retainers or hidden fees. Choose the model that
          fits your current stage of growth.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <FadeIn key={plan.name} className="flex">
              <article className="flex w-full flex-col rounded-3xl p-8 ring-1 ring-neutral-950/10">
                <h3 className="text-2xl font-semibold text-neutral-950">
                  {plan.name}
                </h3>
                <p className="mt-4 text-sm font-semibold text-neutral-950">
                  {plan.price}
                </p>
                <p className="mt-4 text-sm text-neutral-600">{plan.description}</p>
                <ul role="list" className="mt-6 space-y-3 text-sm text-neutral-700">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-x-3">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-neutral-950" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
        <FadeIn className="mt-10 flex justify-center">
          <Button href="/pricing">Compare full plans & details</Button>
        </FadeIn>
      </Container>
    </section>
  )
}

export const metadata = createMetadata({
  title: siteConfig.defaultTitle,
  description:
    'Connor & Co. is a web design and development studio for agency overflow, startup launches, and conversion-focused redesigns built with Webflow and Next.js.',
  keywords: [
    'Connor & Co.',
    'Connor and Co',
    'Connor',
    'Connor Love',
    'Webflow development',
    'Next.js development',
    'startup web design',
    'agency overflow partner',
  ],
  path: '/',
})

export default async function Home() {
  return (
    <RootLayout>
      <Script
        id="home-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createHomePageJsonLd()),
        }}
      />

      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Websites and product frontends that help people trust and buy.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Connor &amp; Co. helps agencies deliver client work on time,
            founders launch credible websites and MVP frontends faster, and
            growing teams improve pages that are not converting well.
          </p>
          <div className="mt-8">
            <Button href="/pricing">See the offers</Button>
          </div>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        attribution="Connor — Founder & Lead Developer"
      >
        Clients do not buy a framework. They buy a site that looks credible,
        launches on time, and performs well.
      </Testimonial>

      <Services />

      <Pricing />

      <ContactSection />
    </RootLayout>
  )
}
