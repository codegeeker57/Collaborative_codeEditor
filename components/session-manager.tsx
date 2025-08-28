'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { LogOut, Copy, Users } from 'lucide-react';
import { useCollaborationStore } from '@/lib/collaboration-store';
import { toast } from 'sonner';

interface SessionManagerProps {
  sessionId: string;
}

export function SessionManager({ sessionId }: SessionManagerProps) {
  const router = useRouter();
  const { users, currentUser } = useCollaborationStore();

  const handleLeaveSession = () => {
    localStorage.removeItem('codetribe_session');
    router.push('/');
    toast.info('Left session');
  };

  const copySessionId = async () => {
    try {
      await navigator.clipboard.writeText(sessionId);
      toast.success('Session ID copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy session ID');
    }
  };

  return (
    <header className="bg-slate-900/50 border-b border-slate-800 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-white">CodeTribe</h1>
          <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1.5 rounded-lg">
            <span className="text-sm text-gray-400">Session:</span>
            <span className="font-mono text-sm text-white">{sessionId}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={copySessionId}
              className="h-6 w-6 p-0 text-gray-400 hover:text-white"
            >
              <Copy className="h-3 w-3" />
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Users className="h-4 w-4" />
            <span>{users.length} users</span>
          </div>
          
          <div className="text-sm text-gray-400">
            Welcome, <span className="text-white font-medium">{currentUser?.username}</span>
          </div>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleLeaveSession}
            className="border-red-500/20 text-red-400 hover:bg-red-500/10 hover:border-red-500/40"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Leave
          </Button>
        </div>
      </div>
    </header>
  );
}