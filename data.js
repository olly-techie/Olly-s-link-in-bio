/**
 * SVG Icon Map
 * Contains all icon definitions as inline SVG
 */
const iconMap = {
  github: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.88 3.16 9.01 7.55 10.47.55.1.75-.24.75-.53v-1.86c-3.07.67-3.72-1.48-3.72-1.48-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.67.08-.67 1.12.08 1.7 1.15 1.7 1.15 1 .1 1.53-.78 1.9-1.2.1-.72.4-1.2.72-1.48-2.45-.28-5.03-1.23-5.03-5.48 0-1.2.42-2.18 1.12-2.95-.12-.28-.5-1.4.1-2.92 0 0 .93-.3 3.05 1.12a10.6 10.6 0 0 1 5.55 0c2.12-1.42 3.05-1.12 3.05-1.12.6 1.52.22 2.64.1 2.92.7.77 1.12 1.75 1.12 2.95 0 4.27-2.6 5.2-5.07 5.47.42.37.78 1.1.78 2.22v3.3c0 .3.2.64.76.53 4.38-1.46 7.53-5.6 7.53-10.47C23.25 5.48 18.27.5 12 .5z"/>
    </svg>
  `,
  x: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2H22l-6.8 7.77L23 22h-6.8l-5.3-6.9L4.8 22H1.7l7.3-8.35L1 2h6.9l4.8 6.3L18.9 2z"/>
    </svg>
  `,
  linkedin: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.07c.66-1.25 2.27-2.57 4.67-2.57 5 0 5.93 3.3 5.93 7.6V24h-5v-7.5c0-1.8-.03-4.12-2.5-4.12-2.5 0-2.88 1.95-2.88 3.98V24h-5V8z"/>
    </svg>
  `,
  facebook: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12H17l-.5 3h-2.7v7A10 10 0 0 0 22 12z"/>
    </svg>
  `,
  instagram: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.2 4.8 1.7 5 5 .1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.2 3.3-1.7 4.8-5 5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-3.3-.2-4.8-1.7-5-5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.2-3.3 1.7-4.8 5-5C8.4 2.2 8.8 2.2 12 2.2zM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm6.5-3.7a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
    </svg>
  `,
  mail: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  `,
  tiktok: `
   <svg viewBox="0 0 24 24" fill="currentColor">
  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
</svg>
`,
  ollyverse: `
    <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Big Ring -->
  <circle 
    cx="200" 
    cy="200" 
    r="140" 
    fill="none" 
    stroke="#1f4ea1" 
    stroke-width="60" 
  />

  <!-- Small Solid Circle -->
  <circle 
    cx="300" 
    cy="300" 
    r="55" 
    fill="#1f4ea1" 
  />
</svg>`
};

/**
 * Link Data Configuration
 */
const links = [
  {
    id: 'ollyverse',
    title: 'Ollyverse Tech',
    description: "Official website for Ollyverse",
    url: 'https://ollyverse.pxxl.click',
    icon: 'ollyverse',
    primary: true
  },
  {
    id: 'github',
    title: 'GitHub',
    description: 'Open source projects & contributions',
    url: 'https://github.com/olly-techie',
    icon: 'github',
    primary: true
  },
  {
    id: 'twitter',
    title: 'Twitter / X',
    description: 'Thoughts on tech & product',
    url: 'https://x.com/ollyverse01',
    icon: 'x',
    primary: true
  },
  {
    id: 'facebook',
    title: 'Facebook',
    description: 'Connect with me',
    url: 'https://www.facebook.com/olly09123',
    icon: 'facebook',
    primary: true
  },
  {
  id: 'tiktok',
  title: 'TikTok',
  description: 'Follow my dev updates',
  url: 'https://www.tiktok.com/@devolly_coder',
  icon: 'tiktok',
  primary: true
 },
  {
    id: 'instagram',
    title: 'Instagram',
    description: 'Visual updates',
    url: 'https://www.instagram.com/devolly1',
    icon: 'instagram',
    primary: true
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    description: 'Professional network & updates',
    url: 'https://www.linkedin.com/in/oluwatimilehin-olaoye',
    icon: 'linkedin',
    primary: true
  },
  {
    id: 'email',
    title: 'Email',
    description: 'Get in touch directly',
    url: 'mailto:ollytechie@gmail.com',
    icon: 'mail',
    primary: true
  }
];

/**
 * FUTURE ENHANCEMENTS:
 * 
 * 1. API Integration:
 *    Replace this static export with:
 *    
 *    async function fetchLinks() {
 *      const response = await fetch('https://api.example.com/links');
 *      return await response.json();
 *    }
 * 
 * 2. CMS Integration:
 *    Use a headless CMS like:
 *    - Sanity.io
 *    - Contentful
 *    - Strapi
 */

// Export for use in script.js
window.linksData = links;
window.iconMap = iconMap;
