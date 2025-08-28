'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { CodeXml, Users, Eye, MessageSquare, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

function generateSessionId(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default function Home() {
  const [username, setUsername] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [generatedSessionId, setGeneratedSessionId] = useState('');
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  const handleCreateSession = () => {
    if (!username.trim()) {
      toast.error('Please enter a username');
      return;
    }
    const newSessionId = generateSessionId();
    setGeneratedSessionId(newSessionId);
    
    // Store session data in localStorage
    localStorage.setItem('codetribe_session', JSON.stringify({
      username: username.trim(),
      sessionId: newSessionId,
      role: 'creator'
    }));
    
    toast.success('Session created successfully!');
    
    // Redirect to editor after a short delay
    setTimeout(() => {
      router.push(`/editor/${newSessionId}?username=${encodeURIComponent(username.trim())}`);
    }, 1000);
  };

  const handleJoinSession = () => {
    if (!username.trim()) {
      toast.error('Please enter a username');
      return;
    }
    if (!sessionId.trim()) {
      toast.error('Please enter a session ID');
      return;
    }
    
    if (sessionId.length !== 8) {
      toast.error('Session ID must be 8 characters long');
      return;
    }
    
    // Store session data in localStorage
    localStorage.setItem('codetribe_session', JSON.stringify({
      username: username.trim(),
      sessionId: sessionId.toUpperCase(),
      role: 'participant'
    }));
    
    toast.success('Joining session...');
    
    // Redirect to editor
    setTimeout(() => {
      router.push(`/editor/${sessionId.toUpperCase()}?username=${encodeURIComponent(username.trim())}`);
    }, 500);
  };

  const copySessionId = async () => {
    try {
      await navigator.clipboard.writeText(generatedSessionId);
      setCopied(true);
      toast.success('Session ID copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy session ID');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="relative max-w-md w-full space-y-8">
        {/* Logo and Title */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-600/20 rounded-2xl backdrop-blur-sm border border-blue-500/20">
              <CodeXml className="h-8 w-8 text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">CodeTribe</h1>
          <p className="text-gray-400">Real-time collaborative code editor</p>
        </div>

        {/* Main Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
          <Tabs defaultValue="create" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-white/5 border border-white/10">
              <TabsTrigger value="create" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Create Session
              </TabsTrigger>
              <TabsTrigger value="join" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                Join Session
              </TabsTrigger>
            </TabsList>

            <div className="mt-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                    Username
                  </label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-blue-500"
                    maxLength={20}
                  />
                </div>

                <TabsContent value="create" className="space-y-4 mt-4">
                  {generatedSessionId && (
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300">
                        Session ID
                      </label>
                      <div className="flex gap-2">
                        <Input
                          value={generatedSessionId}
                          readOnly
                          className="bg-white/5 border-white/10 text-white font-mono"
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={copySessionId}
                          className="border-white/10 bg-white/5 hover:bg-white/10 text-white"
                        >
                          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  <Button 
                    onClick={handleCreateSession}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={!username.trim()}
                  >
                    Create Session
                  </Button>
                </TabsContent>

                <TabsContent value="join" className="space-y-4 mt-4">
                  <div>
                    <label htmlFor="sessionId" className="block text-sm font-medium text-gray-300 mb-2">
                      Session ID
                    </label>
                    <Input
                      id="sessionId"
                      type="text"
                      placeholder="Enter session ID (8 characters)"
                      value={sessionId}
                      onChange={(e) => setSessionId(e.target.value.toUpperCase())}
                      className="bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-blue-500 font-mono"
                      maxLength={8}
                    />
                  </div>
                  
                  <Button 
                    onClick={handleJoinSession}
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                    disabled={!username.trim() || !sessionId.trim()}
                  >
                    Join Session
                  </Button>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>

        {/* Features */}
        <div className="text-center space-y-4">
          <div className="flex justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CodeXml className="h-4 w-4" />
              <span>16 Languages</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Real-time Collaboration</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              <span>Live Preview</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-500">
            Multi-language support • Real-time collaboration • Live preview
          </p>
        </div>
      </div>
    </div>
  );
}