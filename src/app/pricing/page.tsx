import { type Metadata } from 'next'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { RootLayout } from '@/components/RootLayout'
import { SubscriptionPricingCards } from '@/components/SubscriptionPricingCards'

const faqs = [
  {
    question: "Why wouldn't I just hire a full-time developer?",
    answer:
      'Good question! A senior full-stack developer can cost over $120,000+ per year, plus benefits, and you might not always have enough work to keep them busy. With our subscription model, you get premium development when you need it, and you can pause your plan when you don\'t.',
  },
  {
    question: 'How does the "Unlimited Requests" subscription work?',
    answer:
      'Once subscribed, you can add as many design or development tasks to your queue as you want. We will work through them one by one, ensuring high-quality output for each task before moving on to the next.',
  },
  {
    question: 'Who will I actually be working with?',
    answer:
      "You'll work directly with me, Connor—the founder of Connor & Co. As a Computer Science student at Ohio State and an indie-founder, I treat your codebase with the exact same care and precision as I do my own custom projects. No outsourcing, no junior devs.",
  },
  {
    question: 'What is your main tech stack?',
    answer:
      'We design exclusively in Figma. For marketing and standard business sites, we build in Webflow for its incredible speed and animation capabilities. For web apps and SaaS products, we engineer custom solutions using Next.js, React, and Tailwind CSS.',
  },
]

const minimumEngagementPolicy = [
  'Minimum project size: $1,000',
  'No hourly work offered',
  'Minimum subscription: $1,000 per month',
  'All projects require 50% deposit to begin',
]

const addOnServices = [
  'Performance optimization: $500 - $1,500',
  'Advanced animations: $500 - $2,000',
  'Custom admin dashboard: Starting at $1,500',
  'Payment integration (Stripe): $500 - $1,000',
  'Technical documentation: $500+',
  'Expedited timeline: +20% of total project cost',
]

const notIncluded = [
  'Third-party subscription fees',
  'Ongoing hosting costs',
  'Mobile app development',
  '24/7 support',
  'Large-scale backend rebuilds under subscription',
]

const paymentStructure = [
  '50% deposit required to begin',
  '50% due upon completion',
  'Subscriptions billed monthly in advance',
]

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description:
    'Premium development services with transparent pricing for Webflow websites, custom Next.js apps, and ongoing monthly support.',
}

export default function PricingPage() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="Services & Pricing"
        title="Premium development. Transparent pricing."
      >
        <p>
          Clear project thresholds, structured scope, and predictable delivery
          for Webflow builds, custom Next.js products, and ongoing monthly
          development support.
        </p>
      </PageIntro>

      <SubscriptionPricingCards />

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <FadeIn className="rounded-3xl p-8 ring-1 ring-neutral-950/10">
            <h2 className="font-display text-2xl font-medium text-neutral-950">
              Minimum Engagement Policy
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              {minimumEngagementPolicy.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn className="rounded-3xl p-8 ring-1 ring-neutral-950/10">
            <h2 className="font-display text-2xl font-medium text-neutral-950">
              Add-On Services
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              {addOnServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn className="rounded-3xl p-8 ring-1 ring-neutral-950/10">
            <h2 className="font-display text-2xl font-medium text-neutral-950">
              Payment Structure
            </h2>
            <ul className="mt-6 space-y-3 text-sm text-neutral-700">
              {paymentStructure.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-semibold text-neutral-950">Not Included</h3>
            <ul className="mt-3 space-y-3 text-sm text-neutral-700">
              {notIncluded.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn className="rounded-4xl bg-neutral-950 px-8 py-16 sm:px-12 sm:py-20">
          <h2 className="font-display text-3xl font-medium tracking-tight text-balance text-white sm:text-4xl">
            Are you an agency looking for a reliable dev partner?
          </h2>
          <p className="mt-6 max-w-3xl text-xl text-neutral-300">
            We offer special white-label rates and asynchronous workflows for
            creative agencies that need Webflow or Next.js execution. You
            handle the client relationship; we handle the code.
          </p>
          <div className="mt-8">
            <Button href="/contact" invert>
              Let&apos;s talk partnerships
            </Button>
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <FadeIn>
          <h2 className="font-display text-4xl font-medium tracking-tight text-balance text-neutral-950 sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </FadeIn>
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {faqs.map((faq) => (
            <FadeIn key={faq.question}>
              <article className="rounded-3xl p-8 ring-1 ring-neutral-950/10">
                <h3 className="font-display text-2xl font-semibold text-neutral-950">
                  {faq.question}
                </h3>
                <p className="mt-4 text-base text-neutral-600">{faq.answer}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>

      <Container className="mt-24 mb-24 sm:mt-32 sm:mb-32 lg:mt-40 lg:mb-40">
        <FadeIn className="rounded-4xl bg-neutral-950 px-8 py-16 text-center sm:px-12 sm:py-20">
          <h2 className="mx-auto max-w-4xl font-display text-4xl font-medium tracking-tight text-balance text-white sm:text-5xl">
            Ready to turn your idea into a digital product?
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href="/contact" invert>
              Start a project
            </Button>
          </div>
        </FadeIn>
      </Container>
    </RootLayout>
  )
}
