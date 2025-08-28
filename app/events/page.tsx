'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { EventList } from '@/components/EventList';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useCollaborationStore } from '@/lib/collaboration-store';
import { toast } from 'sonner';

// Ensure we're only using browser APIs on the client side
const isBrowser = typeof window !== 'undefined';

export default function EventsPage() {
  const router = useRouter();
  const { sessionId, currentUser } = useCollaborationStore();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is in a session
    const checkSession = () => {
      if (!sessionId || !currentUser) {
        toast.error('You must be in an active session to view events');
        router.push('/');
        return;
      }
      setIsLoading(false);
    };
    
    // Add a small delay to simulate loading
    const timer = setTimeout(checkSession, 500);
    return () => clearTimeout(timer);
  }, [sessionId, currentUser, router]);
  
  const handleBack = () => {
    router.push(`/editor/${sessionId}`);
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading events...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <header className="border-b border-slate-800 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleBack}
              className="text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-bold text-white">Session Events</h1>
          </div>
          
          <div className="text-sm text-slate-400">
            Session: <span className="font-mono text-blue-400">{sessionId}</span>
          </div>
        </div>
      </header>
      
      <main className="flex-1 container mx-auto p-4 md:p-6 max-w-4xl">
        <EventList />
      </main>
    </div>
  );
}