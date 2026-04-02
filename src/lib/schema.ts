export function getRealEstateAgentSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Samsara Smartworld — Millennium Maritech Private Limited',
    url: 'https://samsara-smartworld.com',
    telephone: '+918130292965',
    email: 'info@samsara-smartworld.com',
    description:
      'Premium commercial office spaces for lease in Delhi and Gurugram by Millennium Maritech Private Limited.',
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress:
          '7th Floor, Le Meridien Commercial Complex, Raisina Road, Windsor Place',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        postalCode: '110001',
        addressCountry: 'IN',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Plot No. 87, Sector 44, Institutional Area',
        addressLocality: 'Gurugram',
        addressRegion: 'Haryana',
        postalCode: '122003',
        addressCountry: 'IN',
      },
    ],
  };
}

export function getLeMeridienOfferSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Le Meridien Commercial Tower Office Space — 7th Floor',
    description:
      'Premium furnished office space at Le Meridien Commercial Tower, Raisina Road, New Delhi. 1,140 sq. ft. carpet area, 7th floor with Lutyens Delhi views.',
    url: 'https://samsara-smartworld.com/properties/le-meridien-delhi/',
    priceCurrency: 'INR',
    price: '440000',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '400',
      priceCurrency: 'INR',
      unitText: 'per sq. ft. per month',
    },
    availability: 'https://schema.org/InStock',
    areaServed: {
      '@type': 'Place',
      name: 'New Delhi, India',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 28.6129,
        longitude: 77.2115,
      },
    },
    seller: {
      '@type': 'Organization',
      name: 'Millennium Maritech Private Limited',
    },
  };
}

export function getPlot87OfferSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Plot 87 Sector 44 Gurugram — Standalone Commercial Building',
    description:
      'Standalone institutional-zoned commercial building in Sector 44, Gurugram. 25,000 sq. ft. across B+G+4 floors with double-height ceilings and coworking space.',
    url: 'https://samsara-smartworld.com/properties/plot-87-sector-44-gurugram/',
    priceCurrency: 'INR',
    price: '50',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '50',
      priceCurrency: 'INR',
      unitText: 'per sq. ft. per month (starting)',
    },
    availability: 'https://schema.org/InStock',
    areaServed: {
      '@type': 'Place',
      name: 'Gurugram, Haryana, India',
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 28.4489,
        longitude: 77.0380,
      },
    },
    seller: {
      '@type': 'Organization',
      name: 'Millennium Maritech Private Limited',
    },
  };
}

export function getLeMeridienFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the rent for office space at Le Meridien Commercial Tower?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The rent is ₹400 per sq. ft. per month, which comes to approximately ₹4,40,000 per month plus GST for the 1,100 sq. ft. office on the 7th floor.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the office at Le Meridien furnished?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the office is fully furnished and executive-ready with plug-and-play setup. It includes executive cabins, a conference room, reception area, kitchen, server room, personal chamber, and shower facility.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is Le Meridien Commercial Tower located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Le Meridien Commercial Tower is located on Raisina Road, Windsor Place, New Delhi 110001. It is adjacent to Rashtrapati Bhavan, Parliament, and Central Secretariat, near Janpath, Connaught Place, and India Gate.',
        },
      },
      {
        '@type': 'Question',
        name: 'What companies are co-tenants at Le Meridien Commercial Tower?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Co-tenants include blue-chip corporates such as SAAB, NHAI, Reliance, Kawasaki, and other major companies.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is parking available at Le Meridien Commercial Tower?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, both covered and open parking options are available at Le Meridien Commercial Tower.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the lease structure for Le Meridien office space?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Long-term leases are available with flexible fit-out periods. The office is available for immediate possession with 100% power backup and 24x7 security.',
        },
      },
    ],
  };
}

export function getPlot87FAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How big is the commercial building at Plot 87 Sector 44 Gurugram?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The building offers approximately 25,000 sq. ft. of commercial space across Basement + Ground + 4 Upper Floors, with each floor plate being approximately 5,300 sq. ft.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the rent for office space at Plot 87 Sector 44 Gurugram?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Rents vary by floor: Basement at ₹50/sq. ft., Ground floor at ₹85/sq. ft., 1st-2nd floors (double height) at ₹160/sq. ft., 4th floor at ₹85/sq. ft. Coworking desks start from ₹12,000/month. Full building lease available at a blended rate of ₹75/sq. ft. (negotiable).',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a coworking space in Sector 44 Gurugram?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the 3rd floor has an operational Grade A+ coworking space with 20-30 dedicated desks, private cabins for 2-8 seats, a podcast and video studio, creator-ready makeup room, high-speed Wi-Fi, meeting rooms, and pantry. Desks start from ₹12,000/month.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is special about the 1st and 2nd floors at Plot 87?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 1st and 2nd floors feature 20-foot double-height ceilings, making them ideal for flagship offices, showrooms, training centres, or creative studios.',
        },
      },
      {
        '@type': 'Question',
        name: 'How far is Plot 87 from the nearest metro station?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Plot 87 is just 3 minutes from HUDA/Millennium City Centre Metro station, 5 minutes from IFFCO Chowk, 8 minutes from Golf Course Road, and 25 minutes from IGI Airport Terminal 3.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I lease a single floor at Plot 87 Gurugram?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, floor-wise leasing is available. You can lease individual floors or the entire building. Maintenance cost is ₹15/sq. ft. with separate electricity and water meters per floor.',
        },
      },
      {
        '@type': 'Question',
        name: 'What infrastructure does Plot 87 Sector 44 offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The building features 2 high-speed elevators, 100% DG power backup, fire detection and suppression systems, CCTV-monitored 24x7 security, separate electricity and water meters per floor, visitor management system, and uninterrupted water supply.',
        },
      },
    ],
  };
}
