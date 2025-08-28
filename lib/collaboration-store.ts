import { create } from 'zustand';

export interface User {
  id: string;
  username: string;
  color: string;
  cursor?: {
    line: number;
    column: number;
  };
}

export interface Message {
  id: string;
  userId: string;
  username: string;
  color: string;
  content: string;
  timestamp: number;
}

export interface ExecutionResult {
  success: boolean;
  output: string;
  error?: string;
  executionTime: number;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
  createdBy: string;
  participants: string[];
}

interface CollaborationState {
  // Session
  sessionId: string | null;
  isConnected: boolean;
  
  // Users
  currentUser: User | null;
  users: User[];
  
  // Code
  code: string;
  language: string;
  
  // Chat
  messages: Message[];
  
  // Execution
  executionResult: ExecutionResult | null;
  
  // Events
  events: Event[];
  
  // Actions
  setCurrentUser: (user: User) => void;
  joinSession: (sessionId: string) => void;
  leaveSession: () => void;
  addUser: (user: User) => void;
  removeUser: (userId: string) => void;
  updateUserCursor: (userId: string, cursor: { line: number; column: number }) => void;
  setCode: (code: string) => void;
  setLanguage: (language: string) => void;
  addMessage: (message: Message) => void;
  setExecutionResult: (result: ExecutionResult | null) => void;
  
  // Event actions
  addEvent: (event: Event) => void;
  updateEvent: (event: Event) => void;
  removeEvent: (eventId: string) => void;
  getEvents: () => Event[];
}

export const useCollaborationStore = create<CollaborationState>((set, get) => ({
  // Initial state
  sessionId: null,
  isConnected: false,
  currentUser: null,
  users: [],
  code: `// Welcome to CodeTribe!
// Start coding together in real-time

function hello(name) {
  return "Hello, " + name + "!";
}

console.log(hello("CodeTribe"));`,
  language: 'javascript',
  messages: [],
  executionResult: null,
  events: [],

  // Actions
  setCurrentUser: (user) => {
    set({ currentUser: user });
    // Add current user to users list if not already present
    const { users } = get();
    if (!users.find(u => u.id === user.id)) {
      set({ users: [...users, user] });
    }
  },

  joinSession: (sessionId) => {
    set({ sessionId, isConnected: true });
  },

  leaveSession: () => {
    set({ 
      sessionId: null, 
      isConnected: false,
      users: [],
      messages: [],
      executionResult: null
    });
  },

  addUser: (user) => {
    const { users } = get();
    if (!users.find(u => u.id === user.id)) {
      set({ users: [...users, user] });
    }
  },

  removeUser: (userId) => {
    const { users } = get();
    set({ users: users.filter(user => user.id !== userId) });
  },

  updateUserCursor: (userId, cursor) => {
    const { users } = get();
    set({
      users: users.map(user =>
        user.id === userId ? { ...user, cursor } : user
      )
    });
  },

  setCode: (code) => {
    set({ code });
  },

  setLanguage: (language) => {
    set({ language });
  },

  addMessage: (message) => {
    const { messages } = get();
    const newMessages = [...messages, message];
    // Keep only last 100 messages
    if (newMessages.length > 100) {
      newMessages.splice(0, newMessages.length - 100);
    }
    set({ messages: newMessages });
  },

  setExecutionResult: (result) => {
    set({ executionResult: result });
  },

  // Event actions
  addEvent: (event) => {
    const { events } = get();
    set({ events: [...events, event] });
  },

  updateEvent: (event) => {
    const { events } = get();
    set({
      events: events.map(e => e.id === event.id ? event : e)
    });
  },

  removeEvent: (eventId) => {
    const { events } = get();
    set({
      events: events.filter(e => e.id !== eventId)
    });
  },

  getEvents: () => {
    return get().events;
  },
}));