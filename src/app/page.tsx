import { type Metadata } from 'next'
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
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Powered by modern, scalable technology.
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
  {
    caseStudyHref: '/work/portfolio',
    year: '2024',
    category: 'React/Next.js',
    title: 'High-performance digital portfolio experience.',
    description:
      'A custom digital experience built to showcase advanced web animations, responsive design, and lightning-fast load times. Built from scratch to highlight the intersection of design and code.',
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
            <FadeIn key={project.caseStudyHref} className="flex">
              <article className="group relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
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
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {project.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
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
        eyebrow="Services"
        title="Everything you need to build and scale your digital presence."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          From designing high-converting landing pages to engineering complex
          web applications, we provide the technical expertise your business
          needs to grow.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-135 flex-none lg:w-180">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-132 lg:pl-4">
            <ListItem title="UI/UX & Web Design">
              Every great build starts with a solid foundation. We design
              beautiful, intuitive user interfaces and high-fidelity prototypes
              in Figma before writing a single line of code.
            </ListItem>
            <ListItem title="Webflow Development">
              We build lightning-fast, high-converting marketing websites using
              Webflow. Perfect for growing businesses that need a premium,
              easy-to-manage digital storefront.
            </ListItem>
            <ListItem title="Custom Web Applications">
              Need something more complex? We engineer robust, scalable web
              apps, portals, and startup MVPs using modern frameworks like
              Next.js and React.
            </ListItem>
            <ListItem title="Development Subscriptions">
              Skip the hiring process. We offer dedicated design and
              development support for a flat monthly rate. Perfect for
              fast-moving startups and agencies needing a reliable technical
              partner.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

const pricingPlans = [
  {
    name: 'Webflow Sprint',
    price: 'Starting at $3,000',
    description:
      'High-converting marketing websites and landing pages built to grow your business.',
    features: [
      'Custom Figma design',
      'Lightning-fast Webflow development',
      'Basic SEO setup',
      'Delivered in 2-3 weeks',
    ],
  },
  {
    name: 'Custom MVP',
    price: 'Starting at $8,000',
    description:
      'Powerful, scalable web applications for startups ready to launch their product.',
    features: [
      'Complex frontend UI/UX',
      'Next.js & React development',
      'API & Database integration',
      'Delivered in 4-8 weeks',
    ],
  },
  {
    name: 'Dedicated Partner',
    price: '$2,500 / month',
    description:
      'Pause or cancel anytime. Get dedicated design and development support without hiring full-time.',
    features: [
      'One active request at a time',
      'Unlimited revisions',
      'Figma, Webflow & Next.js tasks',
      'Average 48-72 hour delivery',
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
                <h3 className="font-display text-2xl font-semibold text-neutral-950">
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

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
            Beautifully crafted websites and powerful web apps.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
Welcome to Connor & Co. We partner with startups, agencies, and small businesses to design and build custom websites that look great and perform even better. Let's build something awesome together.
          </p>
          <div className="mt-8">
            <Button href="/work">View our work</Button>
          </div>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        attribution="Connor — Founder & Lead Developer"
      >
        A great website shouldn&apos;t just look beautiful; it needs to perform.
        My goal with Connor &amp; Co. is to bridge the gap between stunning
        design and scalable, high-speed code.
      </Testimonial>

      <Services />

      <Pricing />

      <ContactSection />
    </RootLayout>
  )
}
