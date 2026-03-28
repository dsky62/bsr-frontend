export const mediaItems = [
  {
    id: 'dom-brooks-hero',
    url: 'https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/reel/516215884681019&show_text=false&width=500',
    platform: 'facebook',
    type: 'video',
    title: 'Dom Brooks – Foundation of BSR',
    category: ['hero', 'highlight'],
    postedAt: '2024-01-15T12:00:00Z',
    hasMusicRightsDisclaimer: true,
  },

  {
    id: 'reportbrooks-photo-1',
    url: 'https://x.com/ReportBrooks/status/1568329693564407809/photo/1',
    platform: 'x',
    type: 'photo',
    title: 'ReportBrooks Highlight',
    category: ['highlight'],
    postedAt: '2022-09-09T12:00:00Z',
    hasMusicRightsDisclaimer: false,
  },

  {
    id: 'connor-oertel-photo-1',
    url: 'https://x.com/ConnorOertel/status/2014509295275278445/photo/1',
    platform: 'x',
    type: 'photo',
    title: 'Connor Oertel – BSR Mention',
    category: ['community', 'mention'],
    postedAt: '2024-05-21T12:00:00Z',
    hasMusicRightsDisclaimer: false,
  },

  {
    id: 'jamie-shaw-photo-1',
    url: 'https://x.com/JamieShaw5/status/2022075913098473964/photo/1',
    platform: 'x',
    type: 'photo',
    title: 'Jamie Shaw – National Evaluator Post',
    category: ['community', 'evaluator', 'mention'],
    postedAt: '2024-05-23T12:00:00Z',
    hasMusicRightsDisclaimer: false,
  },

  {
    id: 'tytan-mcneal-photo-1',
    url: 'https://x.com/TytanMcNeal24/status/2024575429211017691/photo/1',
    platform: 'x',
    type: 'photo',
    title: 'Tytan McNeal – Player Post',
    category: ['community', 'player', 'mention'],
    postedAt: '2024-05-28T12:00:00Z',
    hasMusicRightsDisclaimer: false,
  },

  {
    id: 'dj-johnson-photo-1',
    url: 'https://x.com/DJ11johnson3/status/2023139858399789531/photo/1',
    platform: 'x',
    type: 'photo',
    title: 'DJ Johnson – Player Post',
    category: ['community', 'player', 'mention'],
    postedAt: '2024-05-25T12:00:00Z',
    hasMusicRightsDisclaimer: false,
  },
];

export const getSortedMedia = () =>
  [...mediaItems].sort(
    (a, b) => new Date(b.postedAt) - new Date(a.postedAt)
  );

export const getHomepageHighlights = () => {
  const sorted = getSortedMedia();
  const videos = sorted.filter((i) => i.type === 'video');
  const others = sorted.filter((i) => i.type !== 'video');
  return [...videos, ...others].slice(0, 12);
};

export const getCommunityItems = () =>
  getSortedMedia().filter((i) => i.category?.includes('community'));

