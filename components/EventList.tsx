'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { CalendarIcon, Clock, Plus, Users, Edit, Trash2 } from 'lucide-react';
import { format } from 'date-fns';
import { Event } from '@/components/Event';
import { toast } from 'sonner';
import { useCollaborationStore, Event as EventType } from '@/lib/collaboration-store';

// Ensure we're only using browser APIs on the client side
const isBrowser = typeof window !== 'undefined';

export function EventList() {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<EventType | null>(null);
  const { currentUser, events, addEvent, updateEvent, removeEvent } = useCollaborationStore();
  
  // We're now using the collaboration store for events management
  
  const handleCreateEvent = (newEvent: EventType) => {
    addEvent(newEvent);
    setIsCreateDialogOpen(false);
  };
  
  const handleEditEvent = (updatedEvent: EventType) => {
    updateEvent(updatedEvent);
    setEditingEvent(null);
  };
  
  const handleDeleteEvent = (eventId: string) => {
    if (confirm('Are you sure you want to delete this event?')) {
      removeEvent(eventId);
      toast.success('Event deleted successfully');
    }
  };
  
  const canModifyEvent = (createdBy: string) => {
    return currentUser?.username === createdBy;
  };
  
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-white">Upcoming Events</h2>
        
        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" /> New Event
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md p-0 bg-transparent border-none">
            <Event onSubmit={handleCreateEvent} onClose={() => setIsCreateDialogOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>
      
      {events.length === 0 ? (
        <Card className="bg-slate-800/50 border-slate-700 text-center p-6">
          <p className="text-slate-400">No upcoming events</p>
        </Card>
      ) : (
        <div className="space-y-3">
          {events.map(event => (
            <Card key={event.id} className="bg-slate-800/50 border-slate-700 text-white overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  
                  {canModifyEvent(event.createdBy) && (
                    <div className="flex gap-1">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit className="h-4 w-4 text-slate-400 hover:text-white" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md p-0 bg-transparent border-none">
                          <Event 
                            initialEvent={event} 
                            onSubmit={handleEditEvent}
                            onClose={() => setEditingEvent(null)} 
                          />
                        </DialogContent>
                      </Dialog>
                      
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="h-8 w-8 p-0"
                        onClick={() => handleDeleteEvent(event.id)}
                      >
                        <Trash2 className="h-4 w-4 text-slate-400 hover:text-red-500" />
                      </Button>
                    </div>
                  )}
                </div>
                <CardDescription className="text-slate-400">
                  Created by {event.createdBy}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pb-2">
                {event.description && (
                  <p className="text-sm text-slate-300 mb-3">{event.description}</p>
                )}
                
                <div className="flex flex-wrap gap-3 text-xs">
                  <div className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded-md">
                    <CalendarIcon className="h-3 w-3 text-blue-400" />
                    <span>{format(event.date, 'MMM d, yyyy')}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded-md">
                    <Clock className="h-3 w-3 text-blue-400" />
                    <span>{event.time}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 bg-slate-700/50 px-2 py-1 rounded-md">
                    <Users className="h-3 w-3 text-blue-400" />
                    <span>{event.participants.length} participants</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}