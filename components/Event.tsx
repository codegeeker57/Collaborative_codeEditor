'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CalendarIcon, Clock, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { useCollaborationStore, Event as EventType } from '@/lib/collaboration-store';
import { toast } from 'sonner';

// Ensure we're only using browser APIs on the client side
const isBrowser = typeof window !== 'undefined';

// Using the Event type from collaboration-store instead of defining EventData

interface EventProps {
  onClose?: () => void;
  initialEvent?: EventType;
  onSubmit?: (event: EventType) => void;
}

export function Event({ onClose, initialEvent, onSubmit }: EventProps) {
  const [date, setDate] = useState<Date | undefined>(initialEvent?.date || new Date());
  const [time, setTime] = useState(initialEvent?.time || '12:00');
  const [title, setTitle] = useState(initialEvent?.title || '');
  const [description, setDescription] = useState(initialEvent?.description || '');
  const { currentUser, users, addEvent, updateEvent } = useCollaborationStore();
  const [isEditing, setIsEditing] = useState(!!initialEvent);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      toast.error('Please enter an event title');
      return;
    }
    
    if (!date) {
      toast.error('Please select a date');
      return;
    }
    
    const eventData: EventType = {
      id: initialEvent?.id || Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      date: date,
      time: time,
      createdBy: currentUser?.username || 'Anonymous',
      participants: initialEvent?.participants || [currentUser?.username || 'Anonymous']
    };
    
    // Use the onSubmit prop if provided, otherwise use the store directly
    if (onSubmit) {
      onSubmit(eventData);
      toast.success(isEditing ? 'Event updated successfully' : 'Event created successfully');
    } else {
      // Save the event to the collaboration store directly
      if (isEditing) {
        updateEvent(eventData);
        toast.success('Event updated successfully');
      } else {
        addEvent(eventData);
        toast.success('Event created successfully');
      }
    }
    
    if (onClose) onClose();
  };
  
  return (
    <Card className="w-full max-w-md mx-auto bg-slate-900 border-slate-800 text-white">
      <CardHeader>
        <CardTitle>{isEditing ? 'Edit Event' : 'Create Event'}</CardTitle>
        <CardDescription className="text-slate-400">
          Schedule a coding session with your team
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Event Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Team coding session"
              className="bg-slate-800 border-slate-700"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="What will you be working on?"
              className="bg-slate-800 border-slate-700"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal bg-slate-800 border-slate-700 hover:bg-slate-700"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-slate-800 border-slate-700">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    className="bg-slate-800"
                  />
                </PopoverContent>
              </Popover>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4 text-slate-400" />
                <Input
                  id="time"
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="bg-slate-800 border-slate-700"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label>Participants</Label>
            <div className="flex items-center gap-2 bg-slate-800 p-2 rounded-md border border-slate-700">
              <Users className="h-4 w-4 text-slate-400" />
              <span className="text-sm">
                {users.length} user{users.length !== 1 ? 's' : ''} in session
              </span>
            </div>
          </div>
          
          <div className="flex justify-end gap-2 pt-2">
            {onClose && (
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
                className="bg-slate-800 border-slate-700 hover:bg-slate-700"
              >
                Cancel
              </Button>
            )}
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              {isEditing ? 'Update Event' : 'Create Event'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}