import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  PhoneCall,
  Droplets,
  SearchCheck,
  Thermometer,
  Wrench,
  Clock3,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

import { services } from '../data/siteData'
import { SectionHeading, CTA } from '../components/SiteUI'
import heroImage from '../assets/services/servicesimage.jpg'

const icons = {
  Siren: PhoneCall,
  Waves: Droplets,
  Flame: Thermometer,
  ScanSearch: SearchCheck,
  Bath: Wrench,
  Pipette: Wrench,
}

function ServiceCard({ service, index }) {
  const Icon = icons[service.icon] || Wrench

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -7 }}
      className="group relative"
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-[1.75rem] opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'linear-gradient(135deg, var(--color-copper-500), var(--color-navy-500))',
        }}
      />

      <div
        className="relative flex h-full flex-col overflow-hidden rounded-[1.7rem] border bg-white shadow-sm transition-all duration-500 group-hover:shadow-xl"
        style={{ borderColor: 'var(--color-line)' }}
      >
        <div className="relative h-56 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/65 via-transparent to-transparent" />

          <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-navy-950/40 text-xs font-extrabold text-white backdrop-blur-md">
            {String(index + 1).padStart(2, '0')}
          </div>

          <div className="absolute right-4 top-4">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-navy-950/45 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
              <Clock3 size={12} />
              {service.price}
            </span>
          </div>
        </div>

        <div className="relative px-6">
          <motion.div
            className="absolute -top-7 flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-white bg-copper-500 text-white shadow-lg"
            whileHover={{
              rotate: -7,
              scale: 1.08,
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 15,
            }}
          >
            <Icon size={22} />
          </motion.div>
        </div>

        <div className="flex flex-1 flex-col px-6 pb-6 pt-10">
          <h2 className="text-xl font-extrabold tracking-tight text-navy-950">
            {service.title}
          </h2>

          <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
            {service.short}
          </p>

          <div
            className="mt-6 flex items-center justify-between gap-4 border-t pt-4"
            style={{ borderColor: 'var(--color-line)' }}
          >
            <Link
              to={`/services/${service.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 transition-colors duration-300 group-hover:text-copper-600"
            >
              View service
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to={`/book?service=${service.slug}`}
              className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-bold text-navy-900 transition-all duration-300 hover:bg-copper-500 hover:text-white"
            >
              Book now
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function AllServices() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative isolate overflow-hidden">
        <motion.img
          src={heroImage}
          alt="Professional plumber working"
          initial={{ scale: 1.04, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-navy-950/25" />

        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/75 via-navy-950/35 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center px-4 py-16 sm:px-6 sm:py-20 lg:min-h-[540px] lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-copper-400" />
              Our services
            </motion.div>

            <h1 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              Plumbing help for{' '}
              <span className="text-copper-400">
                every situation.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-white drop-shadow-md sm:text-lg">
              From everyday repairs to urgent plumbing problems, our team
              provides dependable service designed to get your home back to
              normal.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-copper-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-copper-600 hover:shadow-xl"
              >
                Book a plumber
                <ArrowRight size={17} />
              </Link>

              <a
                href="tel:5550102200"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                <PhoneCall size={17} />
                (555) 010-2200
              </a>
            </div>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2.5">
              {[
                'Licensed technicians',
                'Clear communication',
                'Workmanship guarantee',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs font-medium text-white drop-shadow-md"
                >
                  <CheckCircle2
                    size={14}
                    className="shrink-0 text-copper-400"
                  />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What we do"
            title="Services built around your needs"
            text="From small repairs to urgent plumbing problems, we've got the tools and experience to help."
            center
          />

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative overflow-hidden rounded-[2rem] bg-navy-900 shadow-xl"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl"
              style={{
                backgroundColor: 'rgba(193,102,47,0.18)',
              }}
            />

            <div className="relative grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center lg:px-12 lg:py-12">
              <div>
                <div className="flex items-center gap-2 text-copper-400">
                  <Wrench size={17} />

                  <span className="text-xs font-bold uppercase tracking-[0.18em]">
                    Need plumbing help?
                  </span>
                </div>

                <h2 className="mt-3 max-w-2xl text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                  Let's get your plumbing problem sorted.
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                  Tell us what's going on and we'll help you figure out the
                  right next step.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-copper-500 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-copper-600"
                >
                  Book a plumber
                  <ArrowRight size={16} />
                </Link>

                <a
                  href="tel:5550102200"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  <PhoneCall size={16} />
                  Call now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </div>
  )
}