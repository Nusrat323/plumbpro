
import emergencyPlumbingImg from '../assets/services/emergency.jpg'
import drainCleaningImg from '../assets/services/drainclean.jpg'
import waterHeatersImg from '../assets/services/heater.jpg'
import leakDetectionImg from '../assets/services/leak detection.jpg'
import fixtureInstallationImg from '../assets/services/fricture.jpg'
import repipingImg from '../assets/services/repiping.jpg'

import workDrainCleaningImg from '../assets/services/workdrainrestoration.jpg'
import workLeakDetectionImg from '../assets/services/workhidden.jpg'
import workRepipingImg from '../assets/services/workrepiping.jpg'

export const services = [
  {
    slug: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    short:
      'Burst pipes, major leaks, blocked drains and urgent repairs — day or night.',
    description:
      'When a plumbing problem cannot wait, our emergency plumbing service helps you quickly identify the issue and take the right steps to protect your home. We focus on stopping active problems, assessing the cause and explaining the repair options clearly before work begins.',
    icon: 'Siren',
    price: 'From $149',
    image: emergencyPlumbingImg,
    features: [
      'Rapid assessment of urgent plumbing problems',
      'Diagnosis of leaks, burst pipes and major blockages',
      'Emergency leak isolation and repair',
      'Clear explanation of available repair options',
      'Careful cleanup and respectful service',
    ],
    whyChoose: [
      'Fast response for urgent plumbing problems',
      'Clear communication during stressful situations',
      'Professional repairs focused on preventing further damage',
    ],
  },

  {
    slug: 'drain-cleaning',
    title: 'Drain Cleaning',
    short:
      'Clear stubborn clogs and restore fast, reliable drainage without the mess.',
    description:
      'Slow or blocked drains can quickly become a bigger problem. Our drain cleaning service focuses on identifying the cause of the blockage and restoring proper flow with professional equipment and careful work.',
    icon: 'Waves',
    price: 'From $119',
    image: drainCleaningImg,
    features: [
      'Inspection of slow or blocked drains',
      'Professional removal of stubborn clogs',
      'Kitchen, bathroom and utility drain cleaning',
      'Identification of recurring drainage problems',
      'Careful testing to confirm proper water flow',
    ],
    whyChoose: [
      'Thorough approach to stubborn blockages',
      'Professional equipment and careful techniques',
      'Clean and respectful service in your home',
    ],
  },

  {
    slug: 'water-heaters',
    title: 'Water Heaters',
    short:
      'Repair, replacement and installation for dependable hot water.',
    description:
      'Whether your water heater is not producing enough hot water, making unusual sounds or has stopped working, we can help assess the problem and determine whether repair or replacement makes the most sense for your home.',
    icon: 'Flame',
    price: 'From $189',
    image: waterHeatersImg,
    features: [
      'Water heater inspection and diagnosis',
      'Troubleshooting heating and performance issues',
      'Repair of common water heater problems',
      'Water heater replacement recommendations',
      'Professional installation and system testing',
    ],
    whyChoose: [
      'Clear recommendations based on your situation',
      'Careful installation and testing',
      'Solutions designed for dependable hot water',
    ],
  },

  {
    slug: 'leak-detection',
    title: 'Leak Detection',
    short:
      'Find hidden leaks early and prevent expensive structural damage.',
    description:
      'Hidden plumbing leaks can cause serious damage before they become obvious. Our leak detection service helps locate the source of suspected leaks so the problem can be addressed before unnecessary water damage becomes a larger concern.',
    icon: 'ScanSearch',
    price: 'From $129',
    image: leakDetectionImg,
    features: [
      'Inspection for visible and hidden plumbing leaks',
      'Assessment of unusual water usage or moisture',
      'Targeted leak source identification',
      'Clear explanation of the problem',
      'Repair recommendations based on the findings',
    ],
    whyChoose: [
      'Focused approach to finding hidden problems',
      'Clear explanation of what we discover',
      'Early detection can help limit unnecessary damage',
    ],
  },

  {
    slug: 'fixture-installation',
    title: 'Fixture Installation',
    short:
      'Professional installation for faucets, sinks, toilets, showers and more.',
    description:
      'A new faucet, sink, toilet or shower fixture should be installed correctly from the beginning. Our fixture installation service helps ensure your new plumbing fixtures are properly connected, tested and ready to use.',
    icon: 'Bath',
    price: 'From $99',
    image: fixtureInstallationImg,
    features: [
      'Faucet and sink installation',
      'Toilet installation and replacement',
      'Shower and bathroom fixture installation',
      'Proper plumbing connections and testing',
      'Removal of old fixtures when applicable',
    ],
    whyChoose: [
      'Professional installation from start to finish',
      'Careful attention to connections and fit',
      'Clean and respectful work in your home',
    ],
  },

  {
    slug: 'repiping',
    title: 'Repiping & Repairs',
    short:
      'Long-term solutions for aging, corroded or unreliable plumbing lines.',
    description:
      'Older or heavily damaged plumbing lines can lead to repeated leaks, poor water flow and ongoing repairs. Our repiping service helps assess the condition of your plumbing system and determine where replacement or major repairs may be appropriate.',
    icon: 'Pipette',
    price: 'Free estimate',
    image: repipingImg,
    features: [
      'Assessment of aging or damaged plumbing lines',
      'Identification of recurring pipe problems',
      'Repiping recommendations based on system condition',
      'Clear explanation of repair and replacement options',
      'Professional installation and testing',
    ],
    whyChoose: [
      'Long-term solutions instead of repeated temporary repairs',
      'Clear recommendations based on your plumbing system',
      'Professional workmanship throughout the project',
    ],
  },
]

export const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Brooklyn, NY',
    text:
      'A pipe burst under our kitchen sink late at night. PlumbPro arrived quickly, explained everything clearly and had it fixed before the morning.',
    rating: 5,
  },
  {
    name: 'James R.',
    location: 'Queens, NY',
    text:
      'The technician was on time, respectful of our home and gave us a clear quote before starting. No surprises on the invoice.',
    rating: 5,
  },
  {
    name: 'Maya T.',
    location: 'Jamaica, NY',
    text:
      'Our water heater stopped working and they handled the replacement from start to finish. The whole process felt easy.',
    rating: 5,
  },
]

export const stats = [
  {
    value: 12,
    suffix: '+',
    label: 'Years in Business',
  },
  {
    value: 4800,
    suffix: '+',
    label: 'Jobs Completed',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Satisfaction Rate',
  },
  {
    value: 45,
    suffix: ' min',
    label: 'Avg. Response Time',
  },
]

export const processSteps = [
  {
    title: 'Choose a Service',
    text:
      "Browse our services and pick what fits your issue — or call if you're not sure.",
  },
  {
    title: 'Book an Appointment',
    text:
      'Pick a date and time that works for you. It only takes a couple of minutes.',
  },
  {
    title: 'A Professional Arrives',
    text:
      'A licensed, background-checked technician shows up in the window we confirmed.',
  },
  {
    title: 'Problem Solved',
    text:
      'Upfront pricing, clean work, and a 1-year guarantee on the completed repair.',
  },
]

export const serviceAreas = [
  'Downtown',
  'Riverside',
  'Westbrook',
  'Fairview Heights',
  'Lakeside',
  'Old Town',
  'Brookline',
  'Maple Grove',
  'Sunset Park',
  'Cedar Hills',
]

export const galleryPreview = [
  {
    title: 'Drain Restoration',
    image: workDrainCleaningImg,
  },
  {
    title: 'Hidden Leak Detection',
    image: workLeakDetectionImg,
  },
  {
    title: 'Repiping Project',
    image: workRepipingImg,
  },
]

export const faqs = [
  [
    'Do you offer emergency plumbing?',
    'Yes. Our emergency line is available 24/7 for urgent issues such as burst pipes, severe leaks, sewer backups and loss of essential water service.',
  ],
  [
    'Do you provide upfront pricing?',
    'Yes. We inspect the issue first and explain the recommended repair and price before work begins.',
  ],
  [
    'Are your plumbers licensed?',
    'Yes. PlumbPro works with licensed and insured plumbing professionals.',
  ],
  [
    'How quickly can you arrive?',
    'For urgent calls, we prioritize the nearest available technician. Typical emergency response is designed to be within 60–90 minutes depending on traffic and availability.',
  ],
  [
    'What areas do you serve?',
    'We serve the greater metro area. Enter your ZIP code when booking and we will confirm service availability.',
  ],
  [
    'Can I book online?',
    'Absolutely. Choose a service, preferred date and time, and your contact details. A team member will confirm the appointment.',
  ],
]
