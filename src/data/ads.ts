import { AdConfig } from '../types';

export const ads: AdConfig = {
  banners: {
    header: {
      code: '<div id="header-banner">Header Banner Ad Space</div>',
      enabled: true
    },
    sidebar: {
      code: '<div id="sidebar-banner">Sidebar Banner Ad Space</div>',
      enabled: true
    },
    footer: {
      code: '<div id="footer-banner">Footer Banner Ad Space</div>',
      enabled: true
    }
  },
  eventPopups: {
    'event-1': {
      title: 'Special Offer',
      content: 'Get 20% off on premium streaming subscription!',
      code: '<div id="event-popup-1">Event 1 Popup Ad Space</div>',
      enabled: true
    },
    'event-2': {
      title: 'Premium Access',
      content: 'Unlock all sports channels with our premium package!',
      code: '<div id="event-popup-2">Event 2 Popup Ad Space</div>',
      enabled: true
    }
  },
  globalPopup: {
    title: 'Welcome to NexusStream',
    content: 'Get access to all premium sports events!',
    code: '<div id="global-popup">Global Popup Ad Space</div>',
    enabled: true,
    showOnce: true
  }
};