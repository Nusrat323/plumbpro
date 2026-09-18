import { motion } from 'framer-motion'
import {
  HeartHandshake,
  ShieldCheck,
  Users,
  Wrench,
  CheckCircle2,
  ArrowUpRight,
  Clock3,
  BadgeCheck,
  MessageSquareQuote,
} from 'lucide-react'

import { CTA } from '../components/SiteUI'

import teamImg from '../assets/services/team.png'
import repipingImg from '../assets/services/repiping.jpg'

const values = [
  {
    icon: ShieldCheck,
    number: '01',
    title: 'Safety first',
    text: 'Every job starts with careful inspection and professional work practices.',
  },
  {
    icon: HeartHandshake,
    number: '02',
    title: 'Honest service',
    text: 'We explain what we find and make the next step clear before work begins.',
  },
  {
    icon: Users,
    number: '03',
    title: 'People matter',
    text: 'We respect your home, your time and the problem you called us to solve.',
  },
  {
    icon: Wrench,
    number: '04',
    title: 'Quality work',
    text: 'Our focus is on dependable repairs and plumbing solutions built to last.',
  },
]

const highlights = [
  ['12+', 'Years of experience'],
  ['4,800+', 'Jobs completed'],
  ['98%', 'Customer satisfaction'],
  ['24/7', 'Emergency support'],
]

const commitments = [
  'Clear recommendations',
  'Upfront communication',
  'Professional workmanship',
  'Respectful service',
]

const services = [
  {
    number: '01',
    title: 'Emergency Plumbing',
    text: 'Fast help for urgent leaks, burst pipes and plumbing problems that cannot wait.',
  },
  {
    number: '02',
    title: 'Drain Cleaning',
    text: 'Professional solutions for stubborn clogs, slow drains and recurring drainage issues.',
  },
  {
    number: '03',
    title: 'Water Heaters',
    text: 'Diagnosis, repair and replacement to help keep your hot water running reliably.',
  },
  {
    number: '04',
    title: 'Leak Detection',
    text: 'Focused inspection to identify hidden plumbing leaks before they become larger problems.',
  },
]

const promises = [
  {
    icon: BadgeCheck,
    title: 'Professional from start to finish',
    text: 'From the first call to the final check, we keep the process organized and respectful.',
  },
  {
    icon: Clock3,
    title: 'Responsive when it matters',
    text: 'We prioritize urgent plumbing problems and communicate clearly about timing and next steps.',
  },
  {
    icon: MessageSquareQuote,
    title: 'No confusing explanations',
    text: 'You deserve to understand what is happening, what needs to be done and why.',
  },
]

export default function About() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative bg-navy-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.18) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,.18) 1px,transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-3">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15,
                  }}
                  className="h-px bg-copper-400"
                />

                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-copper-400">
                  About PlumbPro
                </span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-5 max-w-xl text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[5rem]"
              >
                Plumbing service
                <span className="block text-copper-400">
                  built on trust.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="mt-6 max-w-lg text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
              >
                We believe great plumbing service should be
                straightforward — understand the problem, explain
                the solution and do the work properly.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.45,
                }}
                className="mt-8 flex flex-wrap gap-x-6 gap-y-3"
              >
                {[
                  'Licensed professionals',
                  'Clear communication',
                  'Quality workmanship',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.45 + index * 0.07,
                    }}
                    className="flex items-center gap-2 text-xs font-semibold text-slate-400"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-copper-400"
                    />
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.85,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10">
                <img
                  src={teamImg}
                  alt="PlumbPro plumbing team"
                  className="h-[390px] w-full object-cover sm:h-[480px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/65 via-transparent to-transparent" />

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.65,
                  }}
                  className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8"
                >
                  <div className="max-w-md border-l-2 border-copper-400 pl-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-copper-400">
                      Meet the team
                    </p>

                    <p className="mt-1.5 text-sm font-semibold leading-6 text-white sm:text-base">
                      Experienced professionals focused on doing
                      the job right.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
            {highlights.map(([value, label], index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className={`px-4 py-6 text-center sm:py-7 ${
                  index < 3
                    ? 'border-r border-white/10'
                    : ''
                } ${
                  index < 2
                    ? 'border-b border-white/10 sm:border-b-0'
                    : ''
                }`}
              >
                <p className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  {value}
                </p>

                <p className="mt-1 text-[10px] font-medium text-slate-500 sm:text-xs">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2.5">
                <span className="h-px w-7 bg-copper-500" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-copper-600">
                  What matters to us
                </span>
              </div>

              <h2 className="mt-4 max-w-md text-3xl font-extrabold leading-[1.08] tracking-tight text-navy-950 sm:text-4xl">
                Good service starts with how you treat people.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
                Plumbing problems are rarely convenient. Our goal
                is to make the experience clear, professional and
                manageable.
              </p>
            </motion.div>

            <div className="border-t border-slate-200">
              {values.map((value, index) => {
                const Icon = value.icon

                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className="group grid gap-4 border-b border-slate-200 py-6 sm:grid-cols-[42px_1fr_auto] sm:items-start sm:gap-6"
                  >
                    <span className="text-[10px] font-extrabold tracking-[0.16em] text-slate-300">
                      {value.number}
                    </span>

                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-copper-600 transition-colors duration-300 group-hover:bg-copper-500 group-hover:text-white">
                          <Icon size={17} />
                        </div>

                        <h3 className="text-base font-extrabold text-navy-950">
                          {value.title}
                        </h3>
                      </div>

                      <p className="mt-2.5 max-w-xl text-sm leading-6 text-slate-600 sm:ml-12">
                        {value.text}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="hidden text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper-500 sm:block"
                    />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2.5">
              <span className="h-px w-7 bg-copper-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-copper-600">
                What we do
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-tight text-navy-950 sm:text-4xl">
              Practical plumbing solutions for everyday problems.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
              From urgent repairs to ongoing plumbing projects, we
              handle the work with the same focus on clear
              communication and dependable results.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-x-12 md:grid-cols-2">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className="group flex gap-5 border-t border-slate-200 py-6"
              >
                <span className="pt-1 text-[10px] font-extrabold tracking-[0.16em] text-copper-600">
                  {service.number}
                </span>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-base font-extrabold text-navy-950 transition-colors group-hover:text-copper-600">
                      {service.title}
                    </h3>

                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-slate-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper-500"
                    />
                  </div>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {service.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden rounded-[1.75rem]"
            >
              <img
                src={repipingImg}
                alt="Professional plumbing work"
                className="h-[360px] w-full object-cover sm:h-[440px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="flex items-center gap-2.5">
                <span className="h-px w-7 bg-copper-500" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-copper-600">
                  Our approach
                </span>
              </div>

              <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-[1.08] tracking-tight text-navy-950 sm:text-4xl">
                Clear answers. Careful work. No unnecessary hassle.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
                From the first inspection to the final check, we
                keep you informed about what is happening and what
                comes next.
              </p>

              <div className="mt-8 border-t border-slate-200">
                {commitments.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.06,
                    }}
                    className="flex items-center gap-3 border-b border-slate-200 py-3.5"
                  >
                    <CheckCircle2
                      size={16}
                      className="shrink-0 text-copper-600"
                    />

                    <span className="text-sm font-semibold text-navy-950">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-2.5">
              <span className="h-px w-7 bg-copper-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-copper-600">
                Our service promise
              </span>
            </div>

            <h2 className="mt-4 text-3xl font-extrabold leading-[1.08] tracking-tight text-navy-950 sm:text-4xl">
              The experience should be as reliable as the repair.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
              Good plumbing service is not only about fixing the
              problem. It is also about making the entire experience
              easier for the homeowner.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-0 border-y border-slate-200 md:grid-cols-3 md:divide-x md:divide-slate-200">
            {promises.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.08,
                  }}
                  className="px-1 py-7 md:px-8 md:py-8"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-copper-600 shadow-sm">
                    <Icon size={19} />
                  </div>

                  <h3 className="mt-5 text-base font-extrabold text-navy-950">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-6 text-slate-600">
                    {item.text}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2.5">
                <span className="h-px w-7 bg-copper-500" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-copper-600">
                  A better service experience
                </span>
              </div>

              <h2 className="mt-4 max-w-md text-3xl font-extrabold leading-[1.08] tracking-tight text-navy-950 sm:text-4xl">
                Less uncertainty. More confidence.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
                We know plumbing issues can interrupt your day.
                That is why we focus on making every step easier to
                understand.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{ duration: 0.6 }}
              className="border-t border-slate-200"
            >
              <div className="py-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-copper-500 text-white">
                    <MessageSquareQuote size={18} />
                  </div>

                  <div>
                    <div className="flex items-center gap-1 text-amber-500">
                      {[1, 2, 3, 4, 5].map((item) => (
                        <span key={item} className="text-sm">
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="mt-1 text-xs font-semibold text-slate-500">
                      What customers value
                    </p>
                  </div>
                </div>

                <blockquote className="mt-7 max-w-2xl text-xl font-semibold leading-8 tracking-tight text-navy-950 sm:text-2xl sm:leading-9">
                  “Clear communication, respectful service and
                  knowing exactly what happens next can make a
                  stressful plumbing problem feel much easier.”
                </blockquote>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-px w-8 bg-copper-500" />

                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                    The PlumbPro standard
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTA
        title="Need a plumbing team you can trust?"
        text="From routine repairs to urgent plumbing problems, we're here when you need us."
      />
    </div>
  )
}