import { DailyEvent } from '../types';

// This file should be updated manually each day
export const dailyEvents: DailyEvent[] = [
  {
    id: '1',
    title: 'Manchester United vs Liverpool',
    time: '15:00',
    sport: 'Football',
    status: 'upcoming'
  },
  {
    id: '2',
    title: 'Lakers vs Warriors',
    time: '19:30',
    sport: 'Basketball',
    status: 'live'
  },
  {
    id: '3',
    title: 'ATP Madrid Open',
    time: '12:00',
    sport: 'Tennis',
    status: 'finished'
  }
];