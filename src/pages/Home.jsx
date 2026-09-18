import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ShieldCheck,
  Star,
  ChevronDown,
  ImageIcon,
  ChevronLeft,
  ChevronRight,
  Quote,
} from 'lucide-react'
import { useEffect, useState } from 'react'

import {
  testimonials,
  stats,
  processSteps,
  serviceAreas,
  galleryPreview,
  faqs,
} from '../data/siteData'

import {
  CTA,
  SectionHeading,
  TrustStrip,
  StatsStrip,
  ProcessSteps,
  ServiceAreaChips,
} from '../components/SiteUI'

import ServicesSection from '../components/ServicesSection'
import plumberHero from '../assets/services/plumbing.jpg'

export default function Home() {
  const [activeReview, setActiveReview] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setActiveReview((current) =>
        current === testimonials.length - 1 ? 0 : current + 1,
      )
    }, 4500)

    return () => clearInterval(interval)
  }, [isPaused])

  const nextReview = () => {
    setActiveReview((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    )
  }

  const previousReview = () => {
    setActiveReview((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    )
  }

  return (
    <div>
      <section className="relative overflow-hidden bg-navy-950">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full blur-3xl"
          style={{
            backgroundColor: 'rgba(193,102,47,0.16)',
          }}
          animate={{
            x: [0, 25, 0],
            y: [0, 20, 0],
            opacity: [0.45, 0.7, 0.45],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full blur-3xl"
          style={{
            backgroundColor: 'rgba(44,95,143,0.18)',
          }}
          animate={{
            x: [0, -20, 0],
            y: [0, -15, 0],
            opacity: [0.4, 0.65, 0.4],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:gap-16 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className="mb-5 flex items-center gap-2.5"
            >
              <span className="h-px w-7 bg-copper-500" />

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 backdrop-blur-sm">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                  animate={{
                    opacity: [0.45, 1, 0.45],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/80 sm:text-[11px]">
                  Available for service
                </p>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-3xl text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[4.25rem]"
            >
              Plumbing problems?

              <motion.span
                className="block text-copper-400"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.28,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                We fix them right
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.38,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-7"
            >
              From a dripping faucet to a burst pipe, PlumbPro
              delivers dependable plumbing service with clear
              pricing, skilled technicians and no runaround.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-7 flex items-center gap-4"
            >
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star, index) => (
                  <motion.div
                    key={star}
                    initial={{
                      opacity: 0,
                      scale: 0.6,
                      y: 5,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.35,
                      delay: 0.58 + index * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Star
                      size={17}
                      fill="#D4A72C"
                      stroke="#D4A72C"
                      strokeWidth={1.5}
                    />
                  </motion.div>
                ))}
              </div>

              <div className="h-5 w-px bg-white/15" />

              <motion.span
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.45,
                  delay: 0.9,
                }}
                className="text-sm font-extrabold text-white"
              >
                5.0
              </motion.span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              x: 25,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-copper-500/[0.06] blur-2xl" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-2xl shadow-black/20">
              <motion.img
                src={plumberHero}
                alt="Professional plumber working on plumbing"
                className="h-[390px] w-full object-cover sm:h-[430px] lg:h-[470px]"
                initial={{ scale: 1.08 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 1.5,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-navy-950/55 via-transparent to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                }}
              />
            </div>

            <motion.div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 hidden h-20 w-20 rounded-full border border-copper-500/20 lg:block"
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.6, 0.35],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>

        <motion.div
          className="relative z-10 mx-auto hidden max-w-7xl justify-center pb-5 lg:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.6,
          }}
        >
          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <ChevronDown
              size={18}
              className="text-white/30"
            />
          </motion.div>
        </motion.div>
      </section>

      <TrustStrip />

      <StatsStrip stats={stats} />

      <ServicesSection />

      <section className="bg-slate-100 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="How it works"
            title="Booking a plumber shouldn't be complicated"
            text="Four steps from 'something's wrong' to 'all fixed.'"
            center
          />

          <div className="mt-8">
            <ProcessSteps steps={processSteps} />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Why PlumbPro"
              title="Good plumbing service should feel simple."
              text="We built our service around the things homeowners value most: showing up, explaining the problem and doing the job properly."
            />

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                [
                  'Fast response',
                  'We keep urgent jobs moving.',
                ],
                [
                  'Clear communication',
                  'You know what we found and what it will cost.',
                ],
                [
                  'Respect for your home',
                  'Clean work areas and careful technicians.',
                ],
                [
                  'Workmanship guarantee',
                  'We stand behind the work we complete.',
                ],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-xl border bg-white p-4"
                  style={{
                    borderColor: 'var(--color-line)',
                  }}
                >
                  <div className="flex gap-3">
                    <ShieldCheck
                      className="mt-0.5 shrink-0 text-copper-600"
                      size={18}
                    />

                    <div>
                      <h3 className="text-sm font-bold text-navy-950">
                        {title}
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-navy-900 p-6 text-white sm:p-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-copper-400">
              Emergency line
            </p>

            <h3 className="mt-2.5 text-2xl font-extrabold leading-tight sm:text-3xl">
              A leak cannot wait until Monday.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-300">
              Burst pipe? Sewer backup? No hot water? Call now and
              we will help you decide the safest next step.
            </p>

            <a
              href="tel:5550102200"
              className="mt-6 flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-slate-100"
            >
              Call (555) 010-2200
            </a>

            <Link
              to="/emergency"
              className="mt-2.5 flex items-center justify-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Emergency services
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              eyebrow="Our work"
              title="Recent jobs, done right"
              text="A glimpse at the repairs and installations our technicians complete every week."
            />

            <Link
              to="/our-work"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 transition-colors hover:text-copper-600"
            >
              <ImageIcon size={16} />
              View full gallery
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {galleryPreview.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  delay: i * 0.08,
                }}
                className="group relative overflow-hidden rounded-xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <p className="absolute bottom-4 left-4 right-4 text-sm font-bold text-white">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Customer reviews"
            title="Trusted by homeowners who want the job done right."
            text="Real feedback from customers who chose PlumbPro for their plumbing needs."
            center
          />

          <div
            className="relative mt-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="relative overflow-hidden rounded-2xl border bg-white shadow-sm"
              style={{
                borderColor: 'var(--color-line)',
              }}
            >
              <div className="absolute right-7 top-5 text-copper-500/[0.07]">
                <Quote
                  size={54}
                  strokeWidth={1.2}
                />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReview}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -25,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="px-6 py-6 sm:px-8 sm:py-7"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={15}
                          fill="currentColor"
                          className="text-amber-500"
                        />
                      ))}
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                      Verified customer
                    </span>
                  </div>

                  <p className="mt-4 max-w-3xl text-base font-medium leading-7 text-navy-950 sm:text-lg sm:leading-8">
                    “{testimonials[activeReview].text}”
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
                    <div>
                      <p className="text-sm font-extrabold text-navy-950">
                        {testimonials[activeReview].name}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-500">
                        {testimonials[activeReview].location}
                      </p>
                    </div>

                    <div className="hidden items-center gap-2 sm:flex">
                      <span className="text-[10px] font-bold text-slate-400">
                        {String(activeReview + 1).padStart(2, '0')}
                      </span>

                      <span className="h-px w-6 bg-slate-200" />

                      <span className="text-[10px] font-bold text-slate-400">
                        {String(testimonials.length).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    aria-label={`Show review ${index + 1}`}
                    onClick={() => setActiveReview(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeReview === index
                        ? 'w-6 bg-copper-500'
                        : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  aria-label="Previous review"
                  onClick={previousReview}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:border-copper-500 hover:bg-copper-500 hover:text-white"
                >
                  <ChevronLeft size={15} />
                </button>

                <button
                  type="button"
                  aria-label="Next review"
                  onClick={nextReview}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:border-copper-500 hover:bg-copper-500 hover:text-white"
                >
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="Where we work"
            title="Proudly serving your area and beyond"
            text="Based locally and dispatching across the greater metro area, seven days a week."
            center
          />

          <div className="mt-7">
            <ServiceAreaChips areas={serviceAreas} />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Questions"
            title="Frequently asked questions"
            center
          />

          <div
            className="mt-8 divide-y rounded-xl border bg-white"
            style={{
              borderColor: 'var(--color-line)',
            }}
          >
            {faqs.slice(0, 3).map(([question, answer]) => (
              <div
                key={question}
                className="p-5"
              >
                <h3 className="text-sm font-bold text-navy-950">
                  {question}
                </h3>

                <p className="mt-1.5 text-sm leading-6 text-slate-600">
                  {answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 text-center">
            <Link
              to="/faq"
              className="inline-flex items-center gap-2 text-sm font-bold text-copper-600 transition-colors hover:text-copper-700"
            >
              View all FAQs
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  )
}