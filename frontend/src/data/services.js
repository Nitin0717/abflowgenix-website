import processInstrumentImg from '../assets/img/hero/slider1.jpg';
import powerQualityImg from '../assets/img/hero/slider2.jpg';
import energyAuditImg from '../assets/img/hero/slider3.webp';

export const services = [
  {
    slug: 'compressed-air-leakage-audit',
    navLabel: 'Compressed Air Leakage Audit',
    name: 'Compressed Air Leakage Detection & Audit',
    icon: 'Wind',
    tagline: 'Acoustic and ultrasonic detection of costly compressed-air leaks across your plant.',
    heroImage: 'https://images.pexels.com/photos/5532838/pexels-photo-5532838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    intro:
      'Compressed-air leaks can result in significant energy losses and unnecessary operating costs. AB Flowgenix uses acoustic and ultrasonic leak detection technology to identify and assess compressed-air leaks across industrial plants.',
    description: [
      'Compressed air is one of the most expensive utilities in any industrial plant — and one of the most wasted. Even small, inaudible leaks across pipelines, fittings, valves and equipment add up to continuous energy loss and higher compressor loading.',
      'Our audit locates and quantifies leaks using acoustic cameras and ultrasonic detection instruments, so maintenance teams can act on evidence instead of guesswork.',
    ],
    scope: [
      'Compressed-air leak detection',
      'Acoustic camera inspection',
      'Ultrasonic leak detection',
      'Leak location identification',
      'Leak tagging',
      'Leak severity assessment',
      'Air-loss estimation',
      'Energy-loss estimation',
      'Compressed-air system inspection',
      'Detailed audit report',
    ],
    parameters: ['Leak location', 'Leak severity', 'Estimated air loss', 'Estimated energy loss'],
    deliverables: [
      'Leak location',
      'Leak image',
      'Leak severity',
      'Estimated air loss',
      'Estimated energy loss',
      'Observations',
      'Technical recommendations',
    ],
    whyItMatters:
      'Undetected leaks force compressors to work harder and longer, inflating power bills and accelerating wear. A structured leakage audit converts invisible losses into a prioritized, costed repair list.',
    ctaLabel: 'Book a Compressed Air Leakage Audit',
  },
  {
    slug: 'flow-measurement-testing',
    navLabel: 'Flow Measurement Testing',
    name: 'Flow Measurement Testing & Verification',
    icon: 'Gauge',
    tagline: 'On-site verification of flowmeter accuracy and measurement performance.',
    heroImage: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwxfHxvaWwlMjByZWZpbmVyeSUyMGNoZW1pY2FsJTIwcGxhbnQlMjBpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMHBpcGV8ZW58MHx8fHwxNzkyNjY5MTQxfDA&ixlib=rb-4.1.0&q=85',
    intro:
      'Accurate flow measurement is essential for process control, production monitoring and energy management. We test and verify the performance of installed flowmeters on-site, against suitable reference methods.',
    description: [
      'Installed flowmeters drift, foul, or are sometimes simply misapplied for the actual process conditions. Our testing establishes whether your measurement can be trusted — and where it cannot.',
      'We perform comparative measurement and performance evaluation without unnecessary process interruption, and document findings in a clear technical report.',
    ],
    scope: [
      'Flowmeter testing',
      'Flow measurement verification',
      'Accuracy verification',
      'Performance testing',
      'On-site flow testing',
      'Comparative measurement',
      'Flowmeter troubleshooting',
      'Installation assessment',
      'Measurement performance evaluation',
      'Technical test report',
    ],
    applications: ['Air', 'Gas', 'Water', 'Steam', 'Oil', 'Industrial Fluids'],
    deliverables: ['Measurement results', 'Accuracy assessment', 'Installation observations', 'Technical test report'],
    whyItMatters:
      'Billing, batching, and energy balances all depend on flow readings you can trust. Verification exposes measurement error before it becomes a commercial or process problem.',
    ctaLabel: 'Request Flow Measurement Testing',
  },
  {
    slug: 'nabl-calibration',
    navLabel: 'NABL Calibration',
    name: 'NABL Calibration Services',
    icon: 'BadgeCheck',
    tagline: 'Calibration support through NABL-accredited facilities and applicable scopes.',
    heroImage: 'https://images.pexels.com/photos/3862631/pexels-photo-3862631.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    intro:
      'We provide calibration support for process, electrical and electronic measuring instruments through suitable NABL-accredited calibration facilities and applicable scopes.',
    description: [
      'Instrument accuracy underpins product quality, safety and compliance. We manage the calibration of your measuring instruments through NABL-accredited laboratories, matching each instrument to a facility whose accredited scope covers it.',
    ],
    disclaimer:
      'Calibration is carried out through NABL-accredited calibration facilities under their respective accredited scopes. AB Flowgenix provides calibration coordination and support services and is not itself a NABL-accredited laboratory.',
    scopeGroups: [
      {
        title: 'Process Instruments',
        items: [
          'Flow instruments',
          'Pressure instruments',
          'Temperature instruments',
          'Level instruments',
          'Process transmitters',
          'Gauges',
          'Sensors',
        ],
      },
      {
        title: 'Electrical & Electronic Instruments',
        items: [
          'Digital multimeters',
          'Clamp meters',
          'Insulation testers',
          'Earth testers',
          'Electrical measuring instruments',
          'Other applicable test and measurement equipment',
        ],
      },
    ],
    deliverables: [
      'Calibration certificate',
      'Measurement results',
      'Traceability details',
      'As-found / as-left results, where applicable',
      'Calibration status identification',
    ],
    whyItMatters:
      'Out-of-calibration instruments silently corrupt every decision made from their readings. Traceable calibration keeps your measurements defensible in audits and quality systems.',
    ctaLabel: 'Request Calibration Support',
  },
  {
    slug: 'thermal-imaging',
    navLabel: 'Thermal Imaging',
    name: 'Thermal Imaging & Infrared Thermography',
    icon: 'Thermometer',
    tagline: 'Detect abnormal temperature patterns before they become failures.',
    heroImage: 'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwyfHxvaWwlMjByZWZpbmVyeSUyMGNoZW1pY2FsJTIwcGxhbnQlMjBpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMHBpcGV8ZW58MHx8fHwxNzkyNjY5MTQxfDA&ixlib=rb-4.1.0&q=85',
    intro:
      'Infrared thermography helps identify abnormal temperature patterns in electrical and industrial equipment before they develop into serious failures.',
    description: [
      'Loose connections, overloaded circuits and failing components almost always announce themselves as heat — long before they fail. A thermographic survey finds these hot spots while the equipment keeps running.',
      'Our inspections are non-contact and require no shutdown, making them ideal for preventive maintenance programs.',
    ],
    scope: [
      'Electrical panels',
      'MCC/PCC panels',
      'Cable connections',
      'Busbars',
      'Switchgear',
      'Motors',
      'Transformers',
      'Electrical equipment',
      'Other industrial assets',
    ],
    scopeTitle: 'Inspection Areas',
    parameters: ['Hot spots', 'Loose connections', 'Abnormal temperature rise', 'Uneven thermal distribution', 'Potential electrical issues'],
    parametersTitle: 'We Identify',
    deliverables: [
      'Thermal image',
      'Visual image',
      'Temperature readings',
      'Hot-spot identification',
      'Observations',
      'Recommended action',
    ],
    whyItMatters:
      'A single overheating connection can shut down a line or start a fire. Thermography turns invisible electrical stress into a documented, prioritized action list.',
    ctaLabel: 'Book a Thermal Imaging Survey',
  },
  {
    slug: 'industrial-energy-audit',
    navLabel: 'Industrial Energy Audit',
    name: 'Industrial Energy Audit',
    icon: 'Zap',
    tagline: 'Understand consumption, identify losses, and find efficiency opportunities.',
    heroImage: energyAuditImg,
    intro:
      'Our energy audit services help industries understand energy consumption, identify losses and identify opportunities for improving energy efficiency.',
    description: [
      'Rising energy costs and efficiency targets make it essential to know exactly where energy is consumed and where it is lost. Our audits combine measurement, data logging and analysis to build that picture.',
      'Findings are presented as practical, technically grounded opportunities — not generic recommendations.',
    ],
    scope: [
      'Energy consumption assessment',
      'Equipment energy analysis',
      'Load analysis',
      'Power consumption measurement',
      'Energy-loss identification',
      'Utility assessment',
      'Operating-condition assessment',
      'Energy-saving opportunity identification',
      'Measurement and data logging',
      'Technical energy audit report',
    ],
    deliverables: ['Consumption and load analysis', 'Identified energy losses', 'Energy-saving opportunities', 'Technical energy audit report'],
    whyItMatters:
      'You cannot manage what you do not measure. An energy audit replaces assumptions with metered data and a costed set of improvement opportunities.',
    ctaLabel: 'Book an Energy Audit',
  },
  {
    slug: 'power-quality-audit',
    navLabel: 'Power Quality Audit',
    name: 'Power Quality Analysis & Audit',
    icon: 'Activity',
    tagline: 'Measure and analyze the electrical parameters that affect reliability and efficiency.',
    heroImage: powerQualityImg,
    intro:
      'Power-quality problems can affect equipment performance, reliability and energy efficiency. Our analysis captures the electrical parameters that matter, over a meaningful operating period.',
    description: [
      'Harmonics, imbalance, poor power factor and transients stress equipment, inflate losses and cause unexplained trips. We log and analyze power quality at your panels and loads to identify the actual condition of your electrical system.',
    ],
    parameters: [
      'Voltage',
      'Current',
      'Frequency',
      'Power factor',
      'Active power',
      'Reactive power',
      'Apparent power',
      'Harmonics',
      'Voltage imbalance',
      'Load profile',
      'Transients, where applicable',
    ],
    parametersTitle: 'Measured Parameters',
    deliverables: ['Logged measurement data', 'Parameter-wise analysis', 'Observations and findings', 'Detailed Power Quality Analysis Report'],
    whyItMatters:
      'Poor power quality quietly degrades motors, drives and electronics while raising losses. A structured analysis identifies the issues and supports corrective action such as compensation or filtering.',
    ctaLabel: 'Request a Power Quality Audit',
  },
  {
    slug: 'electrical-testing',
    navLabel: 'Electrical Testing',
    name: 'Electrical Testing & Inspection',
    icon: 'PlugZap',
    tagline: 'Condition assessment of electrical installations, panels, cables and motors.',
    heroImage: 'https://images.pexels.com/photos/7018177/pexels-photo-7018177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    intro:
      'We perform electrical testing and inspection to assess the condition and safety of your electrical installations and equipment.',
    description: [
      'Insulation degradation, poor earthing and loose connections are among the most common causes of electrical failure. Systematic testing establishes the condition of your installation and highlights what needs attention.',
    ],
    scope: [
      'Insulation resistance testing',
      'Earth resistance testing',
      'Continuity testing',
      'Voltage measurement',
      'Current measurement',
      'Electrical equipment testing',
      'Panel inspection',
      'Cable testing',
      'Motor testing',
      'Electrical condition assessment',
    ],
    deliverables: ['Test readings', 'Condition assessment', 'Observations', 'Technical test report'],
    whyItMatters:
      'Electrical faults rarely appear without warning signs. Periodic testing catches deterioration early, supporting safety, reliability and insurance or compliance requirements.',
    ctaLabel: 'Request Electrical Testing',
  },
  {
    slug: 'compressed-air-quality-testing',
    navLabel: 'Compressed Air Quality Testing',
    name: 'Compressed Air Quality Testing',
    icon: 'Droplets',
    tagline: 'Verify contamination levels and air quality for critical applications.',
    heroImage: 'https://images.unsplash.com/photo-1738918922725-d70c666ddccb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTF8MHwxfHNlYXJjaHw0fHx3YXRlciUyMHRyZWF0bWVudCUyMHBsYW50JTIwcG93ZXIlMjBwbGFudCUyMGluZHVzdHJpYWwlMjBmYWNpbGl0eXxlbnwwfHx8fDE3OTI2NjkxNDF8MA&ixlib=rb-4.1.0&q=85',
    intro:
      'Compressed-air quality testing helps industries evaluate contamination levels and verify air quality requirements for critical applications.',
    description: [
      'Moisture, oil vapour and particles in compressed air damage pneumatic equipment and can compromise product quality in sensitive processes. Testing verifies whether your air meets the quality your application demands.',
    ],
    parameters: [
      'Particle measurement',
      'Dew point',
      'Oil vapour',
      'Compressed-air contamination',
      'Air quality assessment',
      'ISO 8573-based evaluation',
    ],
    parametersTitle: 'Test Parameters',
    deliverables: ['Measured contamination levels', 'ISO 8573-based evaluation', 'Observations', 'Compressed Air Quality Test Report'],
    whyItMatters:
      'For instrumentation, painting, food, pharma and electronics, air quality is a product-quality parameter. Testing confirms compliance instead of assuming it.',
    ctaLabel: 'Book Air Quality Testing',
  },
  {
    slug: 'process-instrument-testing',
    navLabel: 'Process Instrument Testing',
    name: 'Process Instrument Testing & Verification',
    icon: 'Wrench',
    tagline: 'Functional testing and verification of installed process instruments.',
    heroImage: processInstrumentImg,
    intro:
      'We provide testing and verification support for process instruments across your plant — confirming that what the instrument reads is what the process is doing.',
    description: [
      'Control loops, interlocks and production decisions all rely on field instruments reading correctly. Our testing verifies functional performance and measurement integrity, and documents any deviation found.',
    ],
    scopeGroups: [
      {
        title: 'Instruments Covered',
        items: [
          'Flow instruments',
          'Pressure instruments',
          'Temperature instruments',
          'Level instruments',
          'Transmitters',
          'Sensors',
          'Switches',
          'Gauges',
          'Industrial measuring instruments',
        ],
      },
      {
        title: 'Services',
        items: ['Functional testing', 'Measurement verification', 'Performance testing', 'Troubleshooting', 'Inspection', 'Technical reporting'],
      },
    ],
    deliverables: ['Test and verification results', 'Deviation observations', 'Technical report'],
    whyItMatters:
      'A drifting transmitter or sticking gauge undermines every decision built on it. Verification restores confidence in your measurement layer.',
    ctaLabel: 'Request Instrument Testing',
  },
];

export const serviceHighlightStrip = [
  'Compressed Air Leakage Audit',
  'Flow Measurement Testing',
  'NABL Calibration',
  'Thermal Imaging',
  'Energy Audit',
  'Power Quality Audit',
  'Electrical Testing',
];

export const getService = (slug) => services.find((s) => s.slug === slug);

export const relatedServices = (slug, count = 3) =>
  services.filter((s) => s.slug !== slug).slice(0, count);
