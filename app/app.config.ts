export default defineAppConfig({
  title: 'Yoii',
  github: 'https://github.com/',
  coffee: 'https://yoii.me/coffee',
  twitter: 'https://yoii.me/x',
  telegram: 'https://yoii.me/telegram',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://yoii.me/banner.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
