export const services = [
  {
    slug: 'calibration',
    name: 'Calibration Services',
    icon: 'Gauge',
    tagline: 'Professional calibration for industrial instruments, traceable to NABL standards.',
    intro:
      'Professional calibration services for all types of industrial instruments, ensuring accuracy and compliance with standards traceable to NABL.',
    offeringsTitle: 'Scope of Calibration',
    offerings: [
      'Flow, Pressure & Temperature Instruments',
      'Electrical and Level Instruments',
      'On-site and Laboratory Calibration',
      'Detailed Reports with Traceability',
    ],
    highlights: [
      'Ensures process accuracy & compliance',
      'Reduces downtime & enhances equipment life',
    ],
    image:
      'https://images.pexels.com/photos/3862631/pexels-photo-3862631.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    slug: 'testing-instruments',
    name: 'Testing & Measuring Instruments',
    icon: 'PackageCheck',
    tagline: 'Precision instruments from reputed brands for industrial, laboratory, and field applications.',
    intro:
      'A trusted supplier of high-quality, precision instruments from reputed brands for industrial, laboratory, and field applications.',
    offeringsTitle: 'We Supply',
    offerings: [
      'Electrical & Electronic Testing Instruments',
      'Temperature, Pressure & Flow Devices',
      'Portable Calibration Instruments',
      'Process Control & Automation Tools',
      'Environmental Testing Instruments',
    ],
    highlights: [
      'Wide range of globally recognized brands',
      'Ready stock and fast delivery',
    ],
    image:
      'https://images.pexels.com/photos/7018177/pexels-photo-7018177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    slug: 'technical-manpower',
    name: 'Skilled Labour & Technical Manpower',
    icon: 'Users',
    tagline: 'Trained personnel for installation, commissioning, maintenance, and plant operations.',
    intro:
      'We deploy trained personnel for installation, commissioning, maintenance, and plant operations to meet your project or operational needs.',
    offeringsTitle: 'We Provide',
    offerings: [
      'Instrumentation Technicians & Engineers',
      'Electricians and Maintenance Technicians',
      'Skilled Fitters, Welders, and Helpers',
      'Plant Operators and Supervisors',
    ],
    highlights: [
      'Experienced and well-trained manpower',
      'Flexible project-based or monthly contracts',
    ],
    image:
      'https://images.pexels.com/photos/5532838/pexels-photo-5532838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    slug: 'industrial-audits',
    name: 'Audit & Validation Services',
    icon: 'ScanSearch',
    tagline: 'Industrial audits that enhance energy efficiency, reliability, and compliance.',
    intro:
      'ABFlowgenix provides advanced industrial audit and testing services designed to enhance energy efficiency, improve system reliability, and ensure compliance with international standards. We deliver accurate audits, actionable reports, and performance-driven solutions for safer, more efficient, and compliant industrial operations.',
    audits: [
      {
        title: 'Infrared Thermography Audit',
        text: 'Non-contact thermal inspection to identify overheating, electrical faults, and energy losses in panels, motors, transformers, and critical equipment — before failures occur.',
        benefits: [
          'Early detection of overheating & hot spots',
          'Identifies electrical faults in panels & motors',
          'Prevents unplanned breakdowns & failures',
          'Non-contact, zero-downtime inspection',
        ],
      },
      {
        title: 'Compressed Air Leakage Audit (ISO 11011)',
        text: 'Ultrasonic detection of compressed air leaks with accurate calculation of air loss, power loss, and annual energy wastage to help industries significantly reduce operating costs.',
        benefits: [
          'Accurate ultrasonic leak detection',
          'Calculates air loss & power wastage',
          'Quantifies annual energy cost savings',
          'ISO 11011 compliant methodology',
        ],
      },
      {
        title: 'Compressed Air Quality Audit (ISO 8573)',
        text: 'Measurement of moisture (dew point), oil vapour, and particle contamination to ensure clean, dry, and compliant compressed air for sensitive and critical applications.',
        benefits: [
          'Dew point & moisture measurement',
          'Oil vapour & particle contamination analysis',
          'Ensures clean & compliant compressed air',
          'ISO 8573 compliant testing',
        ],
      },
    ],
    highlights: [
      'Accurate audits with actionable reports',
      'ISO-aligned methodologies',
    ],
    image:
      'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwyfHxvaWwlMjByZWZpbmVyeSUyMGNoZW1pY2FsJTIwcGxhbnQlMjBpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMHBpcGV8ZW58MHx8fHwxNzkyNjY5MTQxfDA&ixlib=rb-4.1.0&q=85',
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
