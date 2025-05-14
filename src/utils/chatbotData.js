// Conversation triggers for starting and ending chats
export const CONVERSATION_START = [
  'Hello',
  'Hi',
  'Good morning',
  'Good afternoon',
  'Good evening',
  'I want to invest',
  'Tell me about Konza',
  'How do I invest',
  'Help',
  'Support',
  'I need assistance',
  'Connect me to a human',
];

export const CONVERSATION_END = [
  'Goodbye',
  'Thanks',
  'Thank you',
  'Exit',
  'Close',
  'Bye',
  'See you',
];

// Assistant's initial questions/prompts to guide user onboarding
export const ASSISTANT_QUESTIONS = [
  'Welcome! May I know your username to get started?',
  'Please enter your password to continue securely.',
  'How can I assist you with investing in Konza Technopolis today?',
];

// Investment-related options and FAQs for user selection
export const INVEST_OPTIONS = [
  {
    id: 1,
    option: 'How do I invest in Konza Technopolis?',
    response: 'I want to know how to invest in Konza',
    description:
      'Discover the investment opportunities at Konza Technopolis, including the application process, benefits, and requirements.',
    reference: 'https://konza.go.ke/investment-opportunities',
  },
  {
    id: 2,
    option: 'What incentives are available for investors?',
    response: 'Tell me about investor incentives',
    description:
      'Learn about tax breaks, subsidies, and other incentives offered to investors at Konza Technopolis.',
    reference: 'https://konza.go.ke/investor-incentives',
  },
  {
    id: 3,
    option: 'Can I lease or buy land at Konza?',
    response: 'I want to know about land ownership and leasing',
    description:
      'Information on land acquisition, leasing terms, and ownership options within Konza Technopolis.',
    reference: 'https://konza.go.ke/land-leasing',
  },
  {
    id: 4,
    option: 'What are the development guidelines?',
    response: 'Tell me about development guidelines',
    description:
      'Understand the zoning, building codes, and allowable developments within Konza Technopolis.',
    reference: 'https://konza.go.ke/development-guidelines',
  },
  {
    id: 5,
    option: 'How long is the lease period?',
    response: 'What is the lease period?',
    description:
      'Details on lease durations, renewal terms, and obligations for tenants at Konza.',
    reference: 'https://konza.go.ke/lease-terms',
  },
  {
    id: 6,
    option: 'Are there support services for startups?',
    response: 'I want to know about startup support',
    description:
      'Explore programs, incubation, and support services available for startups and SMEs at Konza.',
    reference: 'https://konza.go.ke/startup-support',
  },
  {
    id: 7,
    option: 'How do I apply for a construction permit?',
    response: 'Tell me how to apply for construction permits',
    description:
      'Step-by-step guide to obtaining construction permits within Konza Technopolis.',
    reference: 'https://konza.go.ke/construction-permits',
  },
  {
    id: 8,
    option: 'Who manages Konza Technopolis?',
    response: 'Who manages Konza Technopolis?',
    description:
      'Learn about the Konza Technopolis Development Authority and its role.',
    reference: 'https://konza.go.ke/management',
  },
  {
    id: 9,
    option: 'How can I contact support?',
    response: 'I need support or contact information',
    description:
      'Contact details and support channels for investors and tenants at Konza.',
    reference: 'https://konza.go.ke/contact',
  },
  {
    id: 10,
    option: 'What are the office hours?',
    response: 'What are your office hours?',
    description:
      'Our office is open Monday to Friday, 8 AM to 5 PM EAT.',
    reference: 'https://konza.go.ke/contact',
  },
];

// General help options for common user needs
export const HELP_OPTIONS = [
  {
    id: 1,
    option: 'I need help with investing',
    response: 'I need help with investing',
    description:
      'Get assistance with investment procedures, eligibility, and documentation.',
    reference: 'https://konza.go.ke/investment-help',
  },
  {
    id: 2,
    option: 'I want to speak to a human agent',
    response: 'Connect me to a human agent',
    description:
      'Connect directly with a Konza support representative for personalized help.',
    reference: 'https://konza.go.ke/contact',
  },
  {
    id: 3,
    option: 'Tell me about Konza Technopolis',
    response: 'Tell me about Konza Technopolis',
    description:
      'Learn about the vision, mission, and projects of Konza Technopolis.',
    reference: 'https://konza.go.ke/about',
  },
  {
    id: 4,
    option: 'How do I contact support?',
    response: 'How do I contact support?',
    description:
      'Find out how to reach our support team for any questions or assistance.',
    reference: 'https://konza.go.ke/contact',
  },
  {
    id: 5,
    option: 'What are the office hours?',
    response: 'What are your office hours?',
    description:
      'Our office hours are Monday to Friday, 8 AM to 5 PM EAT.',
    reference: 'https://konza.go.ke/contact',
  },
];

// Generate initial help options from conversation starters
export const HELP_START_OPTIONS = CONVERSATION_START.map((option, index) => ({
  id: index + 1,
  option,
  response: option,
  description: ASSISTANT_QUESTIONS[index] || '',
}));
