import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Clock3,
  ShieldCheck,
  Droplets,
  Siren,
  CircleAlert,
  Waves,
  House,
  Wrench,
  Search,
  ThumbsUp,
  ChevronRight,
} from 'lucide-react'

const EMERGENCY_PHONE = '+12125550123'
const DISPLAY_PHONE = '(212) 555-0123'

const emergencyIssues = [
  {
    icon: Droplets,
    number: '01',
    title: 'Burst pipes',
    text: 'A burst pipe can release a large amount of water quickly. Shut off the supply if safe and call for help.',
  },
  {
    icon: Waves,
    number: '02',
    title: 'Severe leaks',
    text: 'Active leaks around walls, ceilings, floors or fixtures should be addressed before the damage spreads.',
  },
  {
    icon: CircleAlert,
    number: '03',
    title: 'Sewer backups',
    text: 'Avoid contact with backed-up water and keep people and pets away from the affected area.',
  },
  {
    icon: House,
    number: '04',
    title: 'Loss of essential water',
    text: 'If a major plumbing failure leaves your home without essential water service, contact our team.',
  },
]

const safetySteps = [
  {
    number: '01',
    title: 'Stop the water if you can',
    text: 'If it is safe to do so, shut off the nearest fixture valve or your main water supply.',
  },
  {
    number: '02',
    title: 'Protect what you can',
    text: 'Move furniture, valuables and electronics away from standing or actively leaking water.',
  },
  {
    number: '03',
    title: 'Stay away from electrical hazards',
    text: 'Never operate electrical appliances or switches around active water leaks.',
  },
  {
    number: '04',
    title: 'Document the situation',
    text: 'Take photos of the affected area if you can do so safely. They may help explain the problem.',
  },
]

const responseSteps = [
  {
    icon: PhoneCall,
    number: '01',
    title: 'Call our emergency line',
    text: 'Tell us what is happening and where the problem is located.',
  },
  {
    icon: Search,
    number: '02',
    title: 'We assess the situation',
    text: 'We ask a few questions to understand the urgency and determine the appropriate next step.',
  },
  {
    icon: Wrench,
    number: '03',
    title: 'A professional responds',
    text: 'We arrange service based on technician availability and the nature of the emergency.',
  },
  {
    icon: ThumbsUp,
    number: '04',
    title: 'The problem gets addressed',
    text: 'We explain what we find, discuss the available options and proceed with approved work.',
  },
]

export default function Emergency() {
  return (
    <div className="overflow-hidden bg-white">
      <section className="relative overflow-hidden bg-navy-950">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -left-48 top-1/4 h-[600px] w-[600px] rounded-full bg-copper-500/[0.08] blur-[120px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.45, 0.75, 0.45],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-48 -top-48 h-[600px] w-[600px] rounded-full bg-blue-500/[0.07] blur-[120px]"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid min-h-[720px] items-center gap-14 py-20 lg:grid-cols-[1.08fr_.92fr] lg:gap-20 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-copper-400/25 bg-copper-500/10 text-copper-400">
                  <Siren size={18} />

                  <motion.span
                    className="absolute inset-[-5px] rounded-full border border-copper-400/20"
                    animate={{
                      scale: [0.8, 1.35],
                      opacity: [0.65, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-copper-400">
                    Emergency plumbing
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <motion.span
                      className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                      animate={{
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                      }}
                    />

                    <span className="text-xs text-slate-400">
                      Emergency line available 24 / 7
                    </span>
                  </div>
                </div>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-[5.5rem]"
              >
                Plumbing problems
                <span className="block text-copper-400">
                  don't wait.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                }}
                className="mt-7 max-w-xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
              >
                When water is actively damaging your home or a major
                plumbing failure has left you without an essential
                service, getting the right help quickly matters.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.42,
                }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href={`tel:${EMERGENCY_PHONE}`}
                  className="group inline-flex items-center justify-center gap-3 rounded-xl bg-copper-500 px-6 py-4 text-sm font-extrabold text-white shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-copper-600"
                >
                  <PhoneCall size={17} />
                  Call emergency line
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                <Link
                  to="/book"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
                >
                  Request a visit
                  <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.58,
                }}
                className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
              >
                {[
                  'Licensed professionals',
                  'Clear communication',
                  'Upfront pricing',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs font-semibold text-slate-400"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-copper-400"
                    />
                    {item}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 35,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <div className="relative mx-auto max-w-[430px]">
                <motion.div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-copper-400/[0.08]"
                  animate={{
                    scale: [1, 1.12, 1],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <motion.div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-copper-400/[0.1]"
                  animate={{
                    scale: [1.08, 1, 1.08],
                    opacity: [0.55, 0.2, 0.55],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-2xl shadow-black/30 backdrop-blur-xl">
                  <div className="relative overflow-hidden px-7 pb-7 pt-8 sm:px-8 sm:pb-8">
                    <div className="absolute right-[-60px] top-[-70px] h-48 w-48 rounded-full bg-copper-500/[0.07] blur-3xl" />

                    <div className="relative flex items-center justify-between">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/50">
                          Emergency dispatch
                        </p>

                        <p className="mt-2 text-sm font-bold text-white">
                          We're ready when you need us.
                        </p>
                      </div>

                      <div className="flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-2.5 py-1.5">
                        <motion.span
                          className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                          animate={{
                            opacity: [0.4, 1, 0.4],
                          }}
                          transition={{
                            duration: 1.7,
                            repeat: Infinity,
                          }}
                        />

                        <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-emerald-400">
                          Active
                        </span>
                      </div>
                    </div>

                    <div className="relative mt-9">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
                        Call now
                      </p>

                      <a
                        href={`tel:${EMERGENCY_PHONE}`}
                        className="mt-2 block text-4xl font-extrabold tracking-[-0.03em] text-white transition-colors hover:text-copper-400 sm:text-[2.8rem]"
                      >
                        {DISPLAY_PHONE}
                      </a>

                      <p className="mt-2 max-w-xs text-xs leading-5 text-slate-400">
                        For burst pipes, severe leaks, sewer backups
                        and other urgent plumbing problems.
                      </p>
                    </div>

                    <div className="mt-8 grid grid-cols-2 border-y border-white/10">
                      <div className="py-5 pr-5">
                        <Clock3
                          size={17}
                          className="text-copper-400"
                        />

                        <p className="mt-3 text-[10px] uppercase tracking-[0.15em] text-slate-500">
                          Typical response
                        </p>

                        <p className="mt-1 text-xl font-extrabold text-white">
                          15–30 min
                        </p>
                      </div>

                      <div className="border-l border-white/10 py-5 pl-5">
                        <ShieldCheck
                          size={17}
                          className="text-copper-400"
                        />

                        <p className="mt-3 text-[10px] uppercase tracking-[0.15em] text-slate-500">
                          Service
                        </p>

                        <p className="mt-1 text-xl font-extrabold text-white">
                          Professional
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex items-start gap-3">
                      <AlertTriangle
                        size={16}
                        className="mt-0.5 shrink-0 text-copper-400"
                      />

                      <p className="text-[11px] leading-5 text-slate-400">
                        Response times vary depending on traffic,
                        technician availability and the nature of
                        the emergency.
                      </p>
                    </div>
                  </div>

                  <a
                    href={`tel:${EMERGENCY_PHONE}`}
                    className="group flex items-center justify-between border-t border-white/10 bg-copper-500 px-7 py-4 transition-colors duration-300 hover:bg-copper-600 sm:px-8"
                  >
                    <span className="text-xs font-extrabold text-white">
                      Speak with our emergency team
                    </span>

                    <ArrowRight
                      size={16}
                      className="text-white transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-7 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <span className="h-px flex-1 bg-white/10" />

            <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-slate-600">
              Emergency support
            </span>

            <span className="h-px flex-1 bg-white/10" />
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
              }}
            >
              <div className="sticky top-24">
                <div className="flex items-center gap-2.5">
                  <span className="h-px w-7 bg-copper-500" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-copper-600">
                    Know the signs
                  </span>
                </div>

                <h2 className="mt-4 max-w-md text-3xl font-extrabold leading-[1.08] tracking-tight text-navy-950 sm:text-4xl">
                  When is a plumbing problem an emergency?
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
                  Not every plumbing issue requires an emergency
                  visit. But active water damage, major blockages
                  and failures affecting essential service should
                  be addressed quickly.
                </p>

                <div className="mt-7 border-l-2 border-copper-500 pl-4">
                  <p className="text-sm font-bold leading-6 text-navy-950">
                    If you're unsure, it's better to call and
                    explain what's happening.
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    We'll help you understand the next appropriate
                    step.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="border-t border-slate-200">
              {emergencyIssues.map(
                ({ icon: Icon, number, title, text }, index) => (
                  <motion.div
                    key={title}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.25,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    className="group grid gap-5 border-b border-slate-200 py-7 sm:grid-cols-[52px_1fr_auto] sm:items-start sm:gap-6"
                  >
                    <span className="text-[10px] font-extrabold tracking-[0.16em] text-slate-300">
                      {number}
                    </span>

                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-copper-600 transition-all duration-300 group-hover:bg-navy-950 group-hover:text-copper-400">
                          <Icon size={17} />
                        </div>

                        <h3 className="text-base font-extrabold text-navy-950">
                          {title}
                        </h3>
                      </div>

                      <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:ml-12">
                        {text}
                      </p>
                    </div>

                    <ChevronRight
                      size={17}
                      className="hidden text-slate-300 transition-transform duration-300 group-hover:translate-x-1 sm:block"
                    />
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-copper-500/[0.035] blur-[100px]"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5"
            >
              <span className="h-px w-7 bg-copper-500" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-copper-600">
                Stay safe
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
                delay: 0.05,
              }}
              className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-navy-950 sm:text-4xl"
            >
              What to do before your plumber arrives.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.55,
                delay: 0.1,
              }}
              className="mt-4 max-w-xl text-sm leading-7 text-slate-600"
            >
              Your first priority is safety. If you can safely
              limit the source of the problem, doing so may help
              reduce further damage while assistance is arranged.
            </motion.p>
          </div>

          <div className="mt-12 grid gap-x-12 gap-y-0 lg:grid-cols-2">
            {safetySteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{
                  opacity: 0,
                  y: 18,
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
                  duration: 0.45,
                  delay: index * 0.07,
                }}
                className="group flex gap-5 border-t border-slate-200 py-6"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-950 text-[10px] font-extrabold text-white transition-colors duration-300 group-hover:bg-copper-500">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-sm font-extrabold text-navy-950">
                    {step.title}
                  </h3>

                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                    {step.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
            }}
            className="mt-5 flex gap-3 border-l-2 border-amber-400 bg-white px-5 py-4"
          >
            <AlertTriangle
              size={17}
              className="mt-0.5 shrink-0 text-amber-500"
            />

            <p className="text-xs leading-5 text-slate-600">
              If there is immediate danger to life, fire, gas or
              electrical safety, contact the appropriate emergency
              service first.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-end lg:gap-20">
            <div>
              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="flex items-center gap-2.5"
              >
                <span className="h-px w-7 bg-copper-500" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-copper-600">
                  The process
                </span>
              </motion.div>

              <motion.h2
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.05,
                }}
                className="mt-4 max-w-md text-3xl font-extrabold leading-tight tracking-tight text-navy-950 sm:text-4xl"
              >
                From emergency call to next step.
              </motion.h2>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.1,
                }}
                className="mt-4 max-w-md text-sm leading-7 text-slate-600"
              >
                We keep the process straightforward so you know
                what is happening at every stage.
              </motion.p>
            </div>

            <div className="grid border-y border-slate-200 sm:grid-cols-2">
              {responseSteps.map(
                ({ icon: Icon, number, title, text }, index) => (
                  <motion.div
                    key={title}
                    initial={{
                      opacity: 0,
                      y: 15,
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
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    className={`group border-b border-slate-200 p-6 sm:p-7 ${
                      index % 2 === 1
                        ? 'sm:border-l'
                        : ''
                    } ${
                      index >= 2
                        ? 'sm:border-b-0'
                        : ''
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-copper-600 transition-all duration-300 group-hover:bg-navy-950 group-hover:text-copper-400">
                        <Icon size={18} />
                      </div>

                      <span className="text-[9px] font-bold tracking-[0.18em] text-slate-300">
                        {number}
                      </span>
                    </div>

                    <h3 className="mt-6 text-sm font-extrabold text-navy-950">
                      {title}
                    </h3>

                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      {text}
                    </p>
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-950 px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-copper-500/10 blur-[100px]"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <motion.div
              initial={{
                opacity: 0,
                x: -15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
              }}
            >
              <div className="flex items-center gap-2.5">
                <span className="h-px w-7 bg-copper-500" />

                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-copper-400">
                  Need help now?
                </span>
              </div>

              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                Don't wait for a plumbing emergency to become
                a bigger problem.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
                Call our emergency line and tell us what is
                happening. We'll help you determine the next step.
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: 0.1,
              }}
              className="flex shrink-0 flex-col gap-3 sm:flex-row"
            >
              <a
                href={`tel:${EMERGENCY_PHONE}`}
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-copper-500 px-6 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:bg-copper-600"
              >
                <PhoneCall size={17} />
                {DISPLAY_PHONE}
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-white/[0.06]"
              >
                Other services
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs font-medium text-slate-500">
            For urgent plumbing problems, our emergency line is
            available 24 / 7.
          </p>

          <a
            href={`tel:${EMERGENCY_PHONE}`}
            className="flex items-center gap-2 text-xs font-bold text-navy-950 transition-colors hover:text-copper-600"
          >
            <Clock3
              size={14}
              className="text-copper-600"
            />
            Typical response: 60–90 minutes
          </a>
        </div>
      </section>
    </div>
  )
}