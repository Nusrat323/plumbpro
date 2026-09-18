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
} from 'lucide-react'

import { services } from '../data/siteData'
import { SectionHeading } from './SiteUI'

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
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="group relative"
    >
      {/* Gradient border glow — invisible until hover, avoids a static rainbow border */}
      <div
        className="pointer-events-none absolute -inset-px rounded-[1.75rem] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'linear-gradient(135deg, var(--color-copper-500), var(--color-navy-500))',
        }}
      />

      <div
        className="relative flex h-full flex-col overflow-hidden rounded-[1.7rem] border bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-xl"
        style={{ borderColor: 'var(--color-line)' }}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />

          {/* Price — glass pill, top right */}
          <span className="absolute right-3.5 top-3.5 flex items-center gap-1 rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
            <Clock3 size={11} />
            {service.price}
          </span>
        </div>

        {/* Icon badge — overlaps the image/content seam for depth */}
        <div className="relative px-6">
          <div
            className="absolute -top-7 flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-white bg-copper-500 text-white shadow-lg transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105"
          >
            <Icon size={22} />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col px-6 pb-6 pt-10">
          <h3 className="text-lg font-extrabold text-navy-950">
            {service.title}
          </h3>

          <p className="mt-2.5 flex-1 text-sm leading-6 text-slate-600">
            {service.short}
          </p>

          <div
            className="mt-5 flex items-center justify-between border-t pt-4"
            style={{ borderColor: 'var(--color-line)' }}
          >
            <Link
              to={`/services/${service.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-900 transition-colors group-hover:text-copper-600"
            >
              View service
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              to={`/book?service=${service.slug}`}
              className="text-xs font-bold text-slate-400 underline-offset-2 transition-colors hover:text-copper-600 hover:underline"
            >
              Book now
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our services"
          title="The plumbing help you actually need"
          text="One reliable team for everyday repairs, installations and the emergencies that cannot wait."
        />

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-copper-600"
          >
            View all services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}