import { AdConfig } from '../types';

// Código do banner reutilizável
const bannerCode = `
<script type="text/javascript">
  atOptions = {
    "key" : "ad7559a08148a2b2727602709f109258",
    "format" : "iframe",
    "height" : 50,
    "width" : 320,
    "params" : {}
  };
</script>
<script type="text/javascript" src="//www.highperformanceformat.com/ad7559a08148a2b2727602709f109258/invoke.js"></script>
`;

export const ads: AdConfig = {
  banners: {
    header: {
      code: bannerCode, // Código do banner no header
      enabled: true
    },
    sidebar: {
      code: bannerCode, // Código do banner no sidebar
      enabled: true
    },
    footer: {
      code: bannerCode, // Código do banner no footer
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
