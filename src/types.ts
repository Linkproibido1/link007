export interface SportEvent {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  sport: string;
  providerIds: string[];
}

export interface StreamProvider {
  id: string;
  name: string;
  embedUrl: string;
}

export interface DailyEvent {
  id: string;
  title: string;
  time: string;
  sport: string;
  status: 'upcoming' | 'live' | 'finished';
}

export interface Banner {
  code: string;
  enabled: boolean;
}

export interface EventPopup {
  title: string;
  content: string;
  code: string;
  enabled: boolean;
}

export interface GlobalPopup {
  title: string;
  content: string;
  code: string;
  enabled: boolean;
  showOnce: boolean;
}

export interface AdConfig {
  banners: {
    header: Banner;
    sidebar: Banner;
    footer: Banner;
  };
  eventPopups: {
    [key: string]: EventPopup;
  };
  globalPopup: GlobalPopup;
}