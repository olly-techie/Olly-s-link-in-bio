# 🚀 Quick Deployment Guide

## Fastest Methods (5 minutes)

### Method 1: Netlify Drop (Easiest)

1. Go to https://app.netlify.com/drop
2. Drag the entire `links` folder onto the page
3. Done! You'll get a URL like `https://random-name.netlify.app`
4. Optional: Add custom domain in settings

### Method 2: Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Navigate to folder and deploy:
   ```bash
   cd links
   vercel
   ```

3. Follow prompts (just press Enter for defaults)
4. Done! You'll get a URL like `https://your-project.vercel.app`

### Method 3: GitHub Pages

1. Create new GitHub repository
2. Upload all files from `links` folder
3. Go to Settings → Pages
4. Source: Deploy from branch `main` or `master`
5. Save and wait 2-3 minutes
6. Your site: `https://yourusername.github.io/repo-name`

## Custom Domain Setup

### On Netlify
1. Domain settings → Add custom domain
2. Add CNAME record: `your-domain.com` → `yoursite.netlify.app`

### On Vercel
1. Project settings → Domains
2. Add your domain
3. Configure DNS with provided records

### On GitHub Pages
1. Create file `CNAME` with your domain
2. Add DNS record: `your-domain.com` → `yourusername.github.io`

## Troubleshooting

**Icons not showing?**
- Make sure `data.js` is loaded before `script.js`
- Check browser console for errors

**Image not loading?**
- Verify `me.webp` is in the same folder as `index.html`
- Check image file size (should be < 500KB)

**Links not clickable?**
- Check `data.js` has `window.linksData` and `window.iconMap` exports
- Verify all URLs start with `https://` or `http://`

## Performance Tips

1. **Optimize image:**
   ```bash
   # Convert to WebP and compress
   cwebp -q 85 me.png -o me.webp
   ```

2. **Test performance:**
   - Google PageSpeed: https://pagespeed.web.dev
   - GTmetrix: https://gtmetrix.com

3. **Enable CDN:**
   - Netlify and Vercel automatically use CDN
   - For others, use CloudFlare (free)

## Need Help?

- Check README.md for detailed documentation
- Test locally by opening `index.html` in browser
- Email: ollytechie@gmail.com

**You're ready to go live! 🎉**
