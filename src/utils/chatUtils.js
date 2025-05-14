import {
  INVEST_OPTIONS,
  CONVERSATION_START,
  CONVERSATION_END,
  ASSISTANT_QUESTIONS,
  HELP_OPTIONS,
} from './chatbotData';
import { getNextMessageId } from './messageCounter';

// Helper: time-based greeting
const getTimeBasedGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return 'Good morning! 👋 Welcome to Konza Technopolis.';
  }
  if (hour >= 12 && hour < 17) {
    return 'Good afternoon! 👋 Welcome to Konza Technopolis.';
  }
  if (hour >= 17 && hour < 21) {
    return 'Good evening! 👋 Welcome to Konza Technopolis.';
  }
  return 'Hello! 👋 Welcome to Konza Technopolis.';
};

// Create assistant message
export const createNewAssistantMessage = (content, options = null, reference = null) => {
  const newMessage = {
    id: getNextMessageId(),
    content: content || '',
    role: 'assistant',
  };

  if (options) {
    newMessage.options = options;
  }
  if (reference) {
    newMessage.reference = reference;
  }

  return newMessage;
};

// Create user message
export const createNewUserMessage = (content) => ({
  id: getNextMessageId(),
  content,
  role: 'user',
});

// Main response conditions
export const responseConditions = [
  {
    check: (message) =>
      ['connect me to a human', 'connect me to an agent', 'talk to human', 'talk to agent', 'human agent', 'live agent', 'customer support']
        .some((phrase) => message.toLowerCase().includes(phrase)),
    response: () => ({
      content: 'I am connecting you to a human agent now. Please hold on a moment...',
      reference: 'connect-human-agent',
      isTerminal: true,
    }),
  },
  {
    check: (message) =>
      ['support', 'help', 'contact', 'assistance', 'customer service', 'technical support']
        .some((keyword) => message.toLowerCase().includes(keyword)),
    response: () => ({
      content:
        'You can contact Konza Technopolis Development Authority at:\n'
        + '- Address: 7th floor, Konza Complex, Nairobi-Mombasa Road, 90150 Konza\n'
        + '- Phone: (+254) 111 121 100\n'
        + '- Email: konza@konza.go.ke\n'
        + '- Website: https://konza.go.ke/\n\n'
        + 'How else can I assist you?',
      options: HELP_OPTIONS,
      isTerminal: true,
    }),
  },
  {
    check: (message) => {
      const lower = message.toLowerCase();
      const isStart = CONVERSATION_START.some((start) =>
        lower.includes(start.toLowerCase())
      );
      const isSupport = ['support', 'help', 'contact', 'assistance']
        .some((k) => lower.includes(k));
      return isStart && !isSupport;
    },
    response: () => ({
      content: ASSISTANT_QUESTIONS[0] || 'Welcome! May I have your username to get started?',
    }),
  },
  {
    check: (_, question) => question.toLowerCase().includes('username'),
    response: () => ({
      content: ASSISTANT_QUESTIONS[1] || 'Please enter your password to continue securely.',
    }),
  },
  {
    check: (_, question) => question.toLowerCase().includes('password'),
    response: (context) => ({
      content: context.user
        ? `Great to have you here, ${context.user}! How can I assist you about Konza Technopolis today?`
        : ASSISTANT_QUESTIONS[2] || 'How can I assist you today?',
    }),
  },
  {
    check: (message) =>
      INVEST_OPTIONS.some(
        ({ response }) => response.toLowerCase() === message.toLowerCase()
      ),
    response: (context) => {
      const investOption = INVEST_OPTIONS.find(
        ({ response }) => response.toLowerCase() === context.message.toLowerCase()
      );
      return {
        content: investOption.description,
        reference: investOption.reference,
      };
    },
  },
  {
    check: (message) =>
      ['invest', 'investment', 'investing', 'opportunities']
        .some((keyword) => message.toLowerCase().includes(keyword)),
    response: () => ({
      content: 'Here are some popular investment topics at Konza Technopolis:',
      options: INVEST_OPTIONS,
    }),
  },
  {
    check: (message) =>
      CONVERSATION_END
        .some((end) => message.toLowerCase().includes(end.toLowerCase())),
    response: () => ({
      content: 'Thank you for chatting with Konza AI Assistant. Have a wonderful day! 👋',
    }),
  },
  {
    check: () => true,
    response: () => ({
      content: "I'm sorry, I didn't quite understand that. Here are some questions you can ask me:",
      options: [...INVEST_OPTIONS, ...HELP_OPTIONS],
    }),
  },
];

// Initial greeting message
export const firstMessage = {
  id: getNextMessageId(),
  content: getTimeBasedGreeting(),
  role: 'assistant',
};
