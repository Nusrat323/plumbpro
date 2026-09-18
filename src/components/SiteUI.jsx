import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, animate } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Star,
  Sparkles,
  PhoneCall,
  MapPin,
} from 'lucide-react'

export function SectionHeading({
  eyebrow,
  title,
  text,
  center = false,
}) {
  return (
    <div
      className={
        center
          ? 'mx-auto max-w-2xl text-center'
          : 'max-w-2xl'
      }
    >
      {eyebrow && (
        <div
          className={`mb-2.5 flex items-center gap-2.5 ${
            center ? 'justify-center' : ''
          }`}
        >
          {!center && (
            <span className="h-px w-6 bg-copper-500" />
          )}

          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-copper-600">
            {eyebrow}
          </p>

          {center && (
            <span className="h-px w-6 bg-copper-500" />
          )}
        </div>
      )}

      <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-navy-950 sm:text-3xl">
        {title}
      </h2>

      {text && (
        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
          {text}
        </p>
      )}
    </div>
  )
}

export function CTA({
  title = 'Need a plumber you can count on?',
  text = 'Get a clear quote, a convenient appointment and professional work from start to finish.',
}) {
  return (
    <section className="bg-navy-950 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900 px-6 py-6 sm:px-8 sm:py-7 lg:px-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-copper-500/10 blur-3xl" />

          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2.5">
                <span className="h-px w-6 bg-copper-500" />

                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
                  Ready when you are
                </p>
              </div>

              <h2 className="mt-2.5 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
                {title}
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">
                {text}
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Link
                to="/book"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-copper-500 px-4 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-copper-600"
              >
                Book a service
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/15 px-4 py-2.5 text-sm font-bold text-white transition-colors duration-300 hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function TrustStrip() {
  const items = [
    [ShieldCheck, 'Licensed & insured'],
    [Clock3, 'Fast response'],
    [CheckCircle2, 'Upfront pricing'],
    [Sparkles, 'Quality workmanship'],
  ]

  return (
    <div
      className="border-y bg-white"
      style={{ borderColor: 'var(--color-line)' }}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
        {items.map(([Icon, label], index) => (
          <div
            key={label}
            className={`flex items-center justify-center gap-2 px-3 py-3 text-[11px] font-bold text-slate-700 sm:py-3.5 sm:text-xs ${
              index < items.length - 1
                ? 'border-r'
                : ''
            } ${
              index < 2
                ? 'border-b sm:border-b-0'
                : ''
            }`}
            style={{
              borderColor: 'var(--color-line)',
            }}
          >
            <Icon
              size={15}
              strokeWidth={2}
              className="shrink-0 text-copper-600"
            />

            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Rating({
  count = '5.0',
  label = 'from 250+ local reviews',
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
      <div className="flex items-center gap-0.5 text-amber-500">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            size={14}
            fill="currentColor"
            strokeWidth={1.5}
          />
        ))}
      </div>

      <span className="text-xs font-bold text-white">
        {count}
      </span>

      <span className="text-xs text-slate-300">
        {label}
      </span>
    </div>
  )
}

export function Counter({ value, suffix = '' }) {
  const ref = useRef(null)

  const isInView = useInView(ref, {
    once: true,
    margin: '-80px',
  })

  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const controls = animate(0, value, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate: (v) => {
        setDisplay(Math.round(v))
      },
    })

    return () => controls.stop()
  }, [isInView, value])

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsStrip({ stats }) {
  return (
    <section className="bg-navy-900 px-4 py-9 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`px-3 text-center sm:px-5 ${
              index < stats.length - 1
                ? 'border-r border-white/10'
                : ''
            }`}
          >
            <p
              className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
              style={{
                fontFamily: 'var(--font-display)',
              }}
            >
              <Counter
                value={stat.value}
                suffix={stat.suffix}
              />
            </p>

            <p className="mt-1 text-[11px] font-medium text-slate-400 sm:text-xs">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function ProcessSteps({ steps }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <motion.div
          key={step.title}
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
            delay: i * 0.07,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative rounded-xl border bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          style={{
            borderColor: 'var(--color-line)',
          }}
        >
          <div className="flex items-center justify-between">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-extrabold text-white"
              style={{
                backgroundColor:
                  'var(--color-copper-500)',
              }}
            >
              {i + 1}
            </span>

            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-slate-300">
              Step {String(i + 1).padStart(2, '0')}
            </span>
          </div>

          <h3 className="mt-4 text-sm font-bold text-navy-950">
            {step.title}
          </h3>

          <p className="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm">
            {step.text}
          </p>

          {i < steps.length - 1 && (
            <ArrowRight
              size={15}
              className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-slate-300 lg:block"
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}

export function ServiceAreaChips({ areas }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {areas.map((area) => (
        <span
          key={area}
          className="group flex items-center gap-1.5 rounded-full border bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700 transition-all duration-200 hover:border-copper-300 hover:text-navy-950"
          style={{
            borderColor: 'var(--color-line)',
          }}
        >
          <MapPin
            size={12}
            className="text-copper-600"
          />

          {area}
        </span>
      ))}
    </div>
  )
}

export function StickyCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 flex border-t bg-white p-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] sm:hidden"
      style={{
        borderColor: 'var(--color-line)',
        paddingBottom:
          'max(0.625rem, env(safe-area-inset-bottom))',
      }}
    >
      <a
        href="tel:5550102200"
        className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-navy-900 py-2.5 text-xs font-bold text-white transition-colors duration-200 active:bg-navy-950"
      >
        <PhoneCall size={15} />
        Call Now
      </a>

      <Link
        to="/book"
        className="ml-2 flex flex-1 items-center justify-center gap-2 rounded-lg bg-copper-500 py-2.5 text-xs font-bold text-white transition-colors duration-200 active:bg-copper-600"
      >
        Book Online
        <ArrowRight size={14} />
      </Link>
    </div>
  )
}