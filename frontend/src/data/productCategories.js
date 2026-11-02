export const instrumentCategories = [
  {
    slug: 'process-instrumentation',
    name: 'Process Instrumentation',
    shortName: 'Process Instruments',
    icon: 'Gauge',
    tagline: 'Field instruments for measuring and controlling industrial processes.',
    description:
      'Process instruments for flow, pressure, temperature and level measurement — selected to suit your medium, line conditions and control requirements, based on application requirements and technical specifications.',
    items: [
      'Flowmeters',
      'Pressure instruments',
      'Temperature instruments',
      'Level instruments',
      'Process transmitters',
      'Sensors',
      'Switches',
      'Controllers',
    ],
    image: 'https://images.pexels.com/photos/5532838/pexels-photo-5532838.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    slug: 'flowmeters',
    name: 'Flowmeters',
    shortName: 'Flowmeters',
    icon: 'Workflow',
    tagline: 'Six flow measurement technologies for gases, liquids, steam and viscous media.',
    description:
      'Thermal mass, electromagnetic, ultrasonic, turbine, oval gear and vortex flowmeters — with detailed specifications and datasheets available for each technology.',
    items: [
      'Thermal Mass Flowmeters',
      'Electromagnetic Flowmeters',
      'Ultrasonic Flowmeters',
      'Turbine Flowmeters',
      'Oval Gear Flowmeters',
      'Vortex Flowmeters',
    ],
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwxfHxvaWwlMjByZWZpbmVyeSUyMGNoZW1pY2FsJTIwcGxhbnQlMjBpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMHBpcGV8ZW58MHx8fHwxNzkyNjY5MTQxfDA&ixlib=rb-4.1.0&q=85',
    isFlowmeters: true,
  },
  {
    slug: 'electrical-test-instruments',
    name: 'Electrical & Test Instruments',
    shortName: 'Electrical Test Instruments',
    icon: 'PlugZap',
    tagline: 'Electrical testing and measurement instruments for maintenance and inspection.',
    description:
      'Electrical test and measurement equipment for installation testing, maintenance and troubleshooting — multimeters, clamp meters, insulation and earth testers, power quality analyzers and energy meters.',
    items: [
      'Digital Multimeters',
      'Clamp Meters',
      'Insulation Testers',
      'Earth Testers',
      'Power Quality Analyzers',
      'Energy Meters',
    ],
    image: 'https://images.pexels.com/photos/7018177/pexels-photo-7018177.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    slug: 'thermal-acoustic-instruments',
    name: 'Thermal & Acoustic Instruments',
    shortName: 'Thermal & Acoustic Instruments',
    icon: 'Thermometer',
    tagline: 'Imaging and detection instruments for inspection and audit applications.',
    description:
      'Thermal imaging cameras, acoustic cameras, electrical test equipment and calibration equipment for inspection, audit and verification work.',
    items: [
      'Thermal Imaging Cameras',
      'Acoustic Cameras',
      'Electrical Test Equipment',
      'Calibration Equipment',
    ],
    image: 'https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NjV8MHwxfHNlYXJjaHwyfHxvaWwlMjByZWZpbmVyeSUyMGNoZW1pY2FsJTIwcGxhbnQlMjBpbmR1c3RyaWFsJTIwYXV0b21hdGlvbiUyMHBpcGV8ZW58MHx8fHwxNzkyNjY5MTQxfDA&ixlib=rb-4.1.0&q=85',
  },
];

export const getInstrumentCategory = (slug) => instrumentCategories.find((c) => c.slug === slug);
