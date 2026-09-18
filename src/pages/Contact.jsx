import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  MapPin,
  Phone,
  Clock3,
  Send,
} from 'lucide-react'
import toast from 'react-hot-toast'
import { SectionHeading } from '../components/SiteUI'

const contactItems = [
  [Phone, 'Phone', '(555) 010-2200'],
  [Mail, 'Email', 'hello@plumbpro.com'],
  [MapPin, 'Service area', 'Greater metro area'],
  [Clock3, 'Hours', 'Mon–Sat, 7am–7pm · Emergency 24/7'],
]

const fieldVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      delay: index * 0.07,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    toast.success(
      'Message received. We will get back to you shortly.',
    )
    e.currentTarget.reset()
  }

  return (
    <div className="overflow-hidden bg-white">
      <section className="relative overflow-hidden bg-navy-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.18) 1px,transparent 1px), linear-gradient(90deg,rgba(255,255,255,.18) 1px,transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto max-w-7xl"
        >
          <div className="flex items-center gap-3">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 30 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="h-px bg-copper-400"
            />

            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-copper-400">
              Contact
            </p>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Tell us what is going on.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
            className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
          >
            For urgent issues, call us. For everything else, send
            a message and our team will follow up.
          </motion.p>
        </motion.div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <SectionHeading
              title="Get in touch"
              text="We are happy to answer questions, discuss a project or help you choose the right service."
            />

            <div className="mt-8 space-y-5">
              {contactItems.map(([Icon, title, detail], index) => (
                <motion.div
                  key={title}
                  custom={index}
                  variants={fieldVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  className="group flex gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-copper-100 text-copper-600 transition-all duration-300 group-hover:bg-copper-500 group-hover:text-white">
                    <Icon size={19} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-navy-950">
                      {title}
                    </p>

                    <p className="mt-1 text-sm text-slate-600">
                      {detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8"
            style={{
              borderColor: 'var(--color-line)',
            }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <motion.label
                custom={0}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="text-sm font-semibold text-slate-700"
              >
                Name

                <input
                  required
                  name="name"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-copper-500 focus:ring-2 focus:ring-copper-500/10"
                  placeholder="Your name"
                />
              </motion.label>

              <motion.label
                custom={1}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="text-sm font-semibold text-slate-700"
              >
                Phone

                <input
                  required
                  name="phone"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-copper-500 focus:ring-2 focus:ring-copper-500/10"
                  placeholder="(555) 000-0000"
                />
              </motion.label>

              <motion.label
                custom={2}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="text-sm font-semibold text-slate-700 sm:col-span-2"
              >
                Email

                <input
                  required
                  type="email"
                  name="email"
                  className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-copper-500 focus:ring-2 focus:ring-copper-500/10"
                  placeholder="you@example.com"
                />
              </motion.label>

              <motion.label
                custom={3}
                variants={fieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                className="text-sm font-semibold text-slate-700 sm:col-span-2"
              >
                How can we help?

                <textarea
                  required
                  name="message"
                  rows="5"
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 px-4 py-3 font-normal text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-copper-500 focus:ring-2 focus:ring-copper-500/10"
                  placeholder="Tell us about the issue or project..."
                />
              </motion.label>
            </div>

            <motion.button
              type="submit"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.45,
                delay: 0.25,
              }}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-navy-900 px-5 py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-navy-950"
            >
              <Send size={16} />
              Send message
            </motion.button>

            {sent && (
              <motion.p
                initial={{
                  opacity: 0,
                  y: 5,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="mt-3 text-xs font-semibold text-emerald-700"
              >
                Thanks — your message has been submitted.
              </motion.p>
            )}
          </motion.form>
        </div>
      </section>
    </div>
  )
}


