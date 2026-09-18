import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  ShieldCheck,
  BadgeCheck,
  CircleCheck,
} from 'lucide-react'

import { services } from '../data/siteData'
import { CTA } from '../components/SiteUI'

const defaultFeatures = [
  'Professional diagnosis and careful inspection',
  'Clear explanation of repair or replacement options',
  'Upfront pricing before approved work',
  'Clean and respectful service in your home',
  'Professional workmanship backed by our service promise',
]

const defaultWhyChoose = [
  'Experienced and professional technicians',
  'Clear communication from start to finish',
  'Careful work with attention to your home',
]

export default function ServiceDetails() {
  const { slug } = useParams()

  const serviceIndex = services.findIndex(
    (item) => item.slug === slug,
  )

  const service =
    serviceIndex >= 0 ? services[serviceIndex] : services[0]

  if (!service) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-navy-950">
            Service not found
          </h1>

          <p className="mt-3 text-slate-600">
            The service you're looking for is not available.
          </p>

          <Link
            to="/services"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-copper-500"
          >
            View all services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    )
  }

  const features =
    Array.isArray(service.features) && service.features.length
      ? service.features
      : defaultFeatures

  const whyChoose =
    Array.isArray(service.whyChoose) && service.whyChoose.length
      ? service.whyChoose
      : defaultWhyChoose

  const description =
    service.description ||
    service.long ||
    service.details ||
    service.short ||
    'Reliable plumbing service delivered with careful inspection, clear communication and professional workmanship.'

  const serviceNumber = String(serviceIndex + 1).padStart(2, '0')

  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3)

  return (
    <div className="overflow-hidden bg-white">
      <section className="relative overflow-hidden bg-navy-950">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-navy-950/30" />

          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/55 to-navy-950/10" />

          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-[420px] max-w-7xl items-center px-4 py-16 sm:min-h-[440px] sm:px-6 sm:py-16 lg:min-h-[460px] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-copper-400" />

              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/45">
                PlumbPro Service
              </span>

              <span className="text-[11px] font-extrabold tracking-[0.2em] text-white/45">
                {serviceNumber}
              </span>
            </div>

            <h1 className="mt-4 max-w-2xl text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:text-base sm:leading-8">
              {service.short}
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to={`/book?service=${service.slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-copper-500 px-5 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper-600 hover:shadow-xl"
              >
                Book this service
                <ArrowRight size={16} />
              </Link>

              <a
                href="tel:5550102200"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15"
              >
                <PhoneCall size={16} />
                Call us
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 sm:text-sm">
                <CheckCircle2
                  size={15}
                  className="text-copper-400"
                />
                Clear communication
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 sm:text-sm">
                <CheckCircle2
                  size={15}
                  className="text-copper-400"
                />
                Professional workmanship
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 sm:text-sm">
                <CheckCircle2
                  size={15}
                  className="text-copper-400"
                />
                Respectful service
              </div>
            </div>
          </motion.div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-copper-400/50 to-transparent" />
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1fr_340px] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-copper-600">
                About this service
              </span>

              <h2 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-navy-950 sm:text-4xl">
                Reliable help when your plumbing needs attention.
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
                {description}
              </p>

              <div className="mt-12">
                <h3 className="text-2xl font-extrabold text-navy-950">
                  What's included
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                  Every service is handled with a focus on careful
                  diagnosis, clear communication and quality workmanship.
                </p>

                <div className="mt-7 divide-y border-y border-slate-200">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{
                        once: true,
                        amount: 0.2,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                      }}
                      className="flex items-start gap-4 py-5"
                    >
                      <CheckCircle2
                        size={20}
                        className="mt-0.5 shrink-0 text-copper-600"
                      />

                      <span className="text-sm font-semibold leading-7 text-slate-700">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="h-fit lg:sticky lg:top-24"
            >
              <div className="rounded-[1.7rem] bg-navy-950 p-7 shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper-500 text-white">
                  <BadgeCheck size={22} />
                </div>

                <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-copper-400">
                  Starting at
                </p>

                <p className="mt-2 text-3xl font-extrabold text-white">
                  {service.price || 'Contact us'}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-400">
                  Final pricing depends on the issue, required parts and
                  overall scope of work.
                </p>

                <div className="my-6 h-px bg-white/10" />

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                    <CircleCheck
                      size={17}
                      className="text-copper-400"
                    />
                    Clear communication
                  </div>

                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                    <CircleCheck
                      size={17}
                      className="text-copper-400"
                    />
                    Professional workmanship
                  </div>

                  <div className="flex items-center gap-3 text-sm font-semibold text-slate-300">
                    <CircleCheck
                      size={17}
                      className="text-copper-400"
                    />
                    Respectful service
                  </div>
                </div>

                <Link
                  to={`/book?service=${service.slug}`}
                  className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-copper-500 px-4 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-copper-600"
                >
                  Request service
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-copper-600">
              Why PlumbPro
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
              Service you can feel confident about.
            </h2>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                }}
                className="flex gap-4"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-copper-600 shadow-sm">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <p className="text-sm font-bold leading-6 text-navy-950">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {relatedServices.length > 0 && (
        <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-copper-600">
                  Explore more
                </span>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-950 sm:text-4xl">
                  Other services
                </h2>
              </div>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-navy-900 transition-colors hover:text-copper-600"
              >
                View all services
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {relatedServices.map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.07,
                  }}
                >
                  <Link
                    to={`/services/${item.slug}`}
                    className="group block"
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />

                      <span className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-[0.15em] text-white">
                        Service{' '}
                        {String(
                          services.findIndex(
                            (serviceItem) =>
                              serviceItem.slug === item.slug,
                          ) + 1,
                        ).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-extrabold text-navy-950 transition-colors group-hover:text-copper-600">
                          {item.title}
                        </h3>

                        <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-600">
                          {item.short}
                        </p>
                      </div>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all group-hover:border-copper-500 group-hover:bg-copper-500 group-hover:text-white">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </div>
  )
}