// Mock Socket.io implementation for collaborative features

type EventCallback = (...args: any[]) => void;

type EventMap = {
  'join-session': (sessionId: string, username: string) => void;
  'code-change': (code: string) => void;
  'language-change': (language: string) => void;
  'cursor-change': (userId: string, cursor: { line: number; column: number }) => void;
  'chat-message': (message: { id: string; sender: string; text: string; timestamp: number }) => void;
  'run-code': (code: string, language: string) => void;
  'create-event': (event: any) => void;
  'update-event': (event: any) => void;
  'delete-event': (eventId: string) => void;
};

export interface SocketConnection {
  connect: () => void;
  disconnect: () => void;
  emit: (event: string, data: any) => void;
  on: (event: string, callback: (data: any) => void) => void;
  off: (event: string, callback?: (data: any) => void) => void;
}

class MockSocket implements SocketConnection {
  private listeners: { [event: string]: ((data: any) => void)[] } = {};
  private connected = false;

  connect() {
    this.connected = true;
    this.emit('connect', {});
    console.log('Mock socket connected');
  }

  disconnect() {
    this.connected = false;
    this.emit('disconnect', {});
    console.log('Mock socket disconnected');
  }

  emit(event: string, data: any) {
    console.log('Socket emit:', event, data);
    
    // Mock server responses
    if (event === 'join-session') {
      setTimeout(() => {
        this.trigger('session-joined', { sessionId: data.sessionId, users: [] });
      }, 500);
    }
    
    if (event === 'code-change') {
      setTimeout(() => {
        this.trigger('code-updated', data);
      }, 50);
    }
    
    if (event === 'chat-message') {
      setTimeout(() => {
        this.trigger('message-received', data);
      }, 100);
    }
  }

  on(event: string, callback: (data: any) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event: string, callback?: (data: any) => void) {
    if (!this.listeners[event]) return;
    
    if (callback) {
      this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
    } else {
      this.listeners[event] = [];
    }
  }

  private trigger(event: string, data: any) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(callback => callback(data));
    }
  }
}

// Singleton socket instance
let socketInstance: MockSocket | null = null;

export function getSocket(): SocketConnection {
  if (!socketInstance) {
    socketInstance = new MockSocket();
  }
  return socketInstance;
}

export function createSession(sessionId: string, username: string) {
  const socket = getSocket();
  socket.connect();
  socket.emit('create-session', { sessionId, username });
  return socket;
}

export function joinSession(sessionId: string, username: string) {
  const socket = getSocket();
  socket.connect();
  socket.emit('join-session', { sessionId, username });
  return socket;
}

export function leaveSession() {
  const socket = getSocket();
  socket.emit('leave-session', {});
  socket.disconnect();
}

// Real Socket.io implementation (commented out for mock)
/*
import { io, Socket } from 'socket.io-client';

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:3001';

class RealSocket implements SocketConnection {
  private socket: Socket;

  constructor() {
    this.socket = io(SOCKET_URL, {
      transports: ['websocket', 'polling'],
      upgrade: true,
      autoConnect: false,
    });
  }

  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  emit(event: string, data: any) {
    this.socket.emit(event, data);
  }

  on(event: string, callback: (data: any) => void) {
    this.socket.on(event, callback);
  }

  off(event: string, callback?: (data: any) => void) {
    if (callback) {
      this.socket.off(event, callback);
    } else {
      this.socket.off(event);
    }
  }
}

export function getSocket(): SocketConnection {
  if (!socketInstance) {
    socketInstance = new RealSocket();
  }
  return socketInstance;
}
*/