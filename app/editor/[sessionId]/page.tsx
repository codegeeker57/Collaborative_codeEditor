'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { SessionManager } from '@/components/session-manager';
import { CodeEditor } from '@/components/code-editor';
import { ChatPanel } from '@/components/chat-panel';
import { ControlPanel } from '@/components/control-panel';
import { PreviewPanel } from '@/components/preview-panel';
import { UserPanel } from '@/components/user-panel';
import { useCollaborationStore } from '@/lib/collaboration-store';
import { toast } from 'sonner';

export default function EditorPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const sessionId = params.sessionId as string;
  const username = searchParams.get('username') || 'Anonymous';
  
  const [isConnected, setIsConnected] = useState(false);
  const { currentUser, setCurrentUser, joinSession } = useCollaborationStore();

  useEffect(() => {
    if (sessionId && username) {
      setCurrentUser({ 
        id: Date.now().toString(), 
        username, 
        color: `hsl(${Math.random() * 360}, 70%, 50%)` 
      });
      
      // Mock connection
      setTimeout(() => {
        setIsConnected(true);
        joinSession(sessionId);
        toast.success(`Connected to session ${sessionId}`);
      }, 1000);
    }
  }, [sessionId, username, setCurrentUser, joinSession]);

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Connecting to session...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-slate-950 flex flex-col">
      <SessionManager sessionId={sessionId} />
      
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Editor and Controls */}
        <div className="flex-1 flex flex-col">
          <ControlPanel />
          <div className="flex-1 flex">
            <div className="flex-1">
              <CodeEditor />
            </div>
            <PreviewPanel />
          </div>
        </div>
        
        {/* Right Panel - Users and Chat */}
        <div className="w-80 border-l border-slate-800 flex flex-col">
          <UserPanel />
          <ChatPanel />
        </div>
      </div>
    </div>
  );
}