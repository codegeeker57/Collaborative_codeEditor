import { useState } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Users, Crown, User, X, Shield } from 'lucide-react';
import { useCollaborationStore } from '@/lib/collaboration-store';
import { toast } from 'sonner';

export function UserPanel() {
  const { users, currentUser, executionResult, removeUser } = useCollaborationStore();
  const [showAdminControls, setShowAdminControls] = useState(false);

  const isAdmin = () => {
    const sessionData = localStorage.getItem('codetribe_session');
    if (sessionData) {
      const { role } = JSON.parse(sessionData);
      return role === 'creator';
    }
    return false;
  };

  const handleRemoveUser = (userId: string, username: string) => {
    if (userId === currentUser?.id) {
      toast.error('Cannot remove yourself');
      return;
    }

    removeUser(userId);
    toast.success(`Removed ${username} from session`);
  };

  return (
    <div className="border-b border-slate-800 bg-slate-950">
      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center justify-between text-white font-medium mb-4">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Users ({users.length})
          </div>
          {isAdmin() && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAdminControls(!showAdminControls)}
              className="h-6 w-6 p-0 text-gray-400 hover:text-white"
              title="Admin Controls"
            >
              <Shield className="h-3 w-3" />
            </Button>
          )}
        </div>

        <div className="space-y-3">
          {users.map((user) => (
            <div key={user.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback
                    className="text-xs font-medium"
                    style={{ backgroundColor: user.color, color: 'white' }}
                  >
                    {user.username.charAt(0).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-white text-sm">{user.username}</span>
                    {user.id === currentUser?.id && (
                      <User className="h-3 w-3 text-gray-400" />
                    )}
                    {isAdmin() && user.id === currentUser?.id && (
                      <Crown className="h-3 w-3 text-yellow-400" />
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-500">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: user.color }}
                    />
                    Online
                  </div>
                </div>
              </div>

              {showAdminControls && isAdmin() && user.id !== currentUser?.id && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleRemoveUser(user.id, user.username)}
                  className="h-6 w-6 p-0 text-red-400 hover:text-red-300 hover:bg-red-900/20"
                  title="Remove User"
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>

      {executionResult && (
        <div className="p-4 border-b border-slate-800">
          <h4 className="text-white font-medium mb-3 text-sm">Execution Result</h4>
          <div
            className={`p-3 rounded text-xs font-mono ${executionResult.success ? 'bg-green-950/30' : 'bg-red-950/30'}`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={executionResult.success ? 'text-green-400' : 'text-red-400'}>
                {executionResult.success ? 'Success' : 'Error'}
              </span>
              <span className="text-gray-500">{executionResult.executionTime}ms</span>
            </div>
            <pre className="whitespace-pre-wrap">
              {executionResult.output}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
