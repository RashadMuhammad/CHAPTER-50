
import { Service, Value, ContactInfo } from './types';

export const SERVICES: Service[] = [
  {
    id: 'ground-handling',
    title: 'Ground Handling & Cargo Flight Supervision',
    description: 'Expert supervision for secure and efficient cargo loading and unloading.',
    details: [
      'Loading / Unloading supervision',
      'Special Cargo handling (Perishables, Pharma, DG, Live Animals)',
      'Build-up & Breakdown of cargo units',
      'Correct placement and securing'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1566415033480-1a221f008f1b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'supervision',
    title: 'Complete Supervision of Cargo Acceptance',
    description: 'End-to-end verification and documentation from acceptance to flight loading.',
    details: [
      'Verifying cargo against export documents',
      'Maintaining records and customs documentation',
      'DNATA handling for all shipments',
      'Flight loading coordination'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'flight-planning',
    title: 'Flight Planning & Ground Support',
    description: 'Critical coordination between airlines, ground agents, and airport authorities.',
    details: [
      'Liaison between airlines and ground agents',
      'Crew coordination',
      'Landing and overfly permits',
      'Turn-around support'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'air-freight',
    title: 'Air Freight & Documentation',
    description: 'Reliable air freight solutions for international and domestic shipments.',
    details: [
      'End-to-end cargo handling expertise',
      'Customs clearance and local regulations',
      'Tariff updates and processing',
      'Secure and cost-effective movement'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800'
  }
];

export const VALUES: Value[] = [
  {
    title: 'Integrity',
    description: 'Conducting business with honesty and transparency.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    title: 'Excellence',
    description: 'Striving for the highest standards in every service we provide.',
    icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
  },
  {
    title: 'Reliability',
    description: 'Ensuring timely and dependable delivery for all clients.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Customer Centricity',
    description: 'Putting client needs at the heart of every solution.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'Innovation',
    description: 'Continuously improving processes for smarter logistics.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z'
  }
];

export const CONTACT_INFO: ContactInfo = {
  address: 'Chapter50 Aviation service FZCO, Dubai World Central (DWC), Dnata Agent Building Office No: 30, Jebel Ali, UAE',
  email: 'ops@chapter50as.com', // Example email based on context
  phone: ['052 9029984', '056 5572169']
};
