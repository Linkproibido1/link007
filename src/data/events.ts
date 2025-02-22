import { SportEvent } from '../types';

export const events: SportEvent[] = [
  {
    id: '1',
    title: 'Champions League Final',
    description: 'UEFA Champions League Final 2024',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&q=80&w=1200',
    date: '2024-06-01',
    time: '20:00',
    sport: 'Football',
    providerIds: ['RDCgloboSP', 'RDCgloboSP']
  },
  {
    id: '2',
    title: 'NBA Finals Game 1',
    description: 'NBA Finals 2024 Opening Game',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=1200',
    date: '2024-06-05',
    time: '21:00',
    sport: 'Basketball',
    providerIds: ['RDCgloboSP', 'RDCgloboSP']
  },
  {
    id: '3',
    title: 'F1 Monaco Grand Prix',
    description: 'Formula 1 Monaco Grand Prix 2024',
    image: 'https://images.unsplash.com/photo-1515733392795-38565e4cf916?auto=format&fit=crop&q=80&w=1200',
    date: '2024-05-26',
    time: '14:00',
    sport: 'Formula 1',
    providerIds: ['RDCgloboSP', 'RDCgloboSP']
  },
  {
    id: '4',
    title: 'Wimbledon Finals',
    description: 'Wimbledon Tennis Championship Finals 2024',
    image: 'https://images.unsplash.com/photo-1531315630201-bb15abeb1653?auto=format&fit=crop&q=80&w=1200',
    date: '2024-07-14',
    time: '15:00',
    sport: 'Tennis',
    providerIds: ['RDCgloboSP']
  }
];