
import { Link } from 'react-router-dom'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

import {
  CTA,
  SectionHeading,
} from '../components/SiteUI'

import emergencyLeakImg from '../assets/services/workleak.jpg'
import waterHeaterImg from '../assets/services/workheater.jpg'
import drainRestorationImg from '../assets/services/workrestoration.jpg'
import fixtureUpgradeImg from '../assets/services/workupdate.jpg'

const jobs = [
  {
    title: 'Emergency leak repair',
    location: 'Kitchen supply line',
    description:
      'Same-day response and repair for an active supply line leak.',
    image: emergencyLeakImg,
  },
  {
    title: 'Water heater replacement',
    location: 'Residential utility room',
    description:
      'Removed a failed unit and installed a new efficient water heater.',
    image: waterHeaterImg,
  },
  {
    title: 'Drain restoration',
    location: 'Main bathroom',
    description:
      'Cleared a recurring blockage and inspected the line for underlying issues.',
    image: drainRestorationImg,
  },
  {
    title: 'Fixture upgrade',
    location: 'Primary bathroom',
    description:
      'Installed new faucet and shower fixtures with careful finishing.',
    image: fixtureUpgradeImg,
  },
]

export default function OurWork() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative overflow-hidden bg-navy-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2.5">
              <span className="h-px w-7 bg-copper-500" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-copper-400">
                Our work
              </p>
            </div>

            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Real plumbing work.
              <span className="block text-copper-400">
                Carefully finished.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              A few examples of the repairs and installations our
              technicians handle every week.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Recent projects"
            title="Work that speaks for itself."
            text="Every job starts with a diagnosis and ends with a clear explanation of what was done."
          />

          <div className="mt-10 grid gap-x-7 gap-y-12 md:grid-cols-2 lg:gap-x-10 lg:gap-y-14">
            {jobs.map((job, index) => (
              <motion.article
                key={job.title}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-[1.4rem] bg-slate-100">
                  <img
                    src={job.image}
                    alt={job.title}
                    className="h-[300px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] sm:h-[340px]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/5 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

                  <div className="absolute left-5 top-5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-navy-950/55 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-copper-400" />
                      Project {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                        {job.location}
                      </p>

                      <h2 className="mt-1.5 text-xl font-extrabold tracking-tight text-white sm:text-2xl">
                        {job.title}
                      </h2>
                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-copper-400 group-hover:bg-copper-500">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 px-1 pt-4">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-copper-600"
                  />

                  <p className="max-w-xl text-sm leading-6 text-slate-600">
                    {job.description} Our team kept the work area
                    protected and explained the completed repair.
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-copper-600">
              Need something similar?
            </p>

            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy-950 sm:text-3xl">
              Tell us what needs fixing.
            </h2>
          </div>

          <Link
            to="/services"
            className="inline-flex w-fit items-center gap-2 text-sm font-bold text-navy-900 transition-colors duration-300 hover:text-copper-600"
          >
            Explore our services
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      <CTA
        title="Have a project of your own?"
        text="Send us the details and we will help you choose the right service."
      />
    </div>
  )
}

