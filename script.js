/**
 * Link Bio Application
 * 
 * This script handles:
 * - Dynamic rendering of links from data.js
 * - Click tracking and analytics
 * - Interaction animations
 * - Future-ready for API integration
 */

class LinkBioApp {
  constructor() {
    this.links = [];
    this.container = null;
    this.analytics = {
      clicks: [],
      pageViews: 0
    };
  }

  /**
   * Initialize the application
   */
  async init() {
    try {
      // Load data (currently from data.js, can be swapped with API)
      this.links = await this.loadLinks();
      
      // Get container element
      this.container = document.getElementById('links-container');
      
      if (!this.container) {
        throw new Error('Links container not found');
      }

      // Render all links
      this.render();
      
      // Track page view
      this.trackPageView();
      
      // Add keyboard navigation
      this.setupKeyboardNavigation();
      
      console.log('✅ Link Bio App initialized successfully');
    } catch (error) {
      console.error('❌ Failed to initialize app:', error);
    }
  }

  /**
   * Load links data
   * Currently reads from window.linksData
   * Can be replaced with API call
   */
  async loadLinks() {
    // Static data from data.js
    if (window.linksData) {
      return window.linksData;
    }

    // Fallback if data.js fails to load
    console.warn('⚠️ No data found, using fallback');
    return [];
  }

  /**
   * Render all links to the DOM
   */
  render() {
    // Clear existing content
    this.container.innerHTML = '';

    // Create and append each link card
    this.links.forEach((link, index) => {
      const linkElement = this.createLinkElement(link, index);
      this.container.appendChild(linkElement);
    });
  }

  /**
   * Create a single link element
   */
  createLinkElement(link, index) {
    // Create main anchor element
    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.className = `link-card ${link.primary ? 'link-card--primary' : ''}`;
    anchor.setAttribute('data-link-id', link.id);
    anchor.setAttribute('target', '_blank');
    anchor.setAttribute('rel', 'noopener noreferrer');
    anchor.style.setProperty('--animation-order', index);

    // Add click handler
    anchor.addEventListener('click', (e) => this.handleLinkClick(e, link));

    // Add hover handlers for animation
    anchor.addEventListener('mouseenter', () => this.handleHover(anchor, true));
    anchor.addEventListener('mouseleave', () => this.handleHover(anchor, false));

    // Create icon element
    const icon = document.createElement('span');
    icon.className = 'link-card__icon';
    
    // Get SVG from iconMap, fallback to text if not found
    if (window.iconMap && window.iconMap[link.icon]) {
      icon.innerHTML = window.iconMap[link.icon];
    } else {
      // Fallback to text/emoji if icon not found in map
      icon.textContent = link.icon;
    }

    // Create content wrapper
    const content = document.createElement('div');
    content.className = 'link-card__content';

    // Create title
//     const title = document.createElement('h3');
//     title.className = 'link-card__title';
//     title.textContent = link.title;
const title = document.createElement("div");
title.classList.add("link-title");

const iconWrapper = document.createElement("span");
iconWrapper.classList.add("icon");
iconWrapper.innerHTML = iconMap[link.icon] || "";

title.appendChild(iconWrapper);
title.insertAdjacentText("beforeend", ` ${link.title}`);

    // Create description
    const description = document.createElement('p');
    description.className = 'link-card__description';
    description.textContent = link.description;

    // Create arrow indicator
    const arrow = document.createElement('span');
    arrow.className = 'link-card__arrow';
    arrow.innerHTML = '→';

    // Assemble the card
    content.appendChild(title);
    content.appendChild(description);
    anchor.appendChild(icon);
    anchor.appendChild(content);
    anchor.appendChild(arrow);

    return anchor;
  }

  /**
   * Handle link click with analytics tracking
   */
  handleLinkClick(event, link) {
    // Track the click
    this.trackClick(link);

    // Log to console (replace with real analytics)
    console.log('🔗 Link clicked:', {
      id: link.id,
      title: link.title,
      url: link.url,
      timestamp: new Date().toISOString(),
      primary: link.primary
    });

    // Don't prevent default - let the link open naturally
  }

  /**
   * Handle hover animation
   */
  handleHover(element, isHovering) {
    if (isHovering) {
      element.classList.add('link-card--hover');
    } else {
      element.classList.remove('link-card--hover');
    }
  }

  /**
   * Track click event (ready for analytics integration)
   */
  trackClick(link) {
    const clickData = {
      linkId: link.id,
      title: link.title,
      url: link.url,
      timestamp: Date.now(),
      primary: link.primary
    };

    this.analytics.clicks.push(clickData);

    // Store in localStorage for persistence
    this.saveAnalytics();
  }

  /**
   * Track page view
   */
  trackPageView() {
    this.analytics.pageViews++;
    console.log('👀 Page view tracked');
    this.saveAnalytics();
  }

  /**
   * Save analytics to localStorage
   */
  saveAnalytics() {
    try {
      localStorage.setItem('linkBioAnalytics', JSON.stringify(this.analytics));
    } catch (error) {
      console.warn('Could not save analytics:', error);
    }
  }

  /**
   * Setup keyboard navigation for accessibility
   */
  setupKeyboardNavigation() {
    const linkCards = document.querySelectorAll('.link-card');
    
    linkCards.forEach((card, index) => {
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          card.click();
        }
      });
    });
  }
}

/**
 * FUTURE ENHANCEMENTS GUIDE:
 * 
 * 1. ANALYTICS INTEGRATION:
 * 
 *    A) Google Analytics:
 *    trackClick(link) {
 *      gtag('event', 'link_click', {
 *        link_id: link.id,
 *        link_title: link.title,
 *        link_url: link.url,
 *        is_primary: link.primary
 *      });
 *    }
 * 
 *    B) Plausible Analytics:
 *    trackClick(link) {
 *      plausible('Link Click', {
 *        props: {
 *          linkId: link.id,
 *          linkTitle: link.title
 *        }
 *      });
 *    }
 * 
 *    C) Custom Analytics API:
 *    async trackClick(link) {
 *      await fetch('/api/analytics/track', {
 *        method: 'POST',
 *        headers: { 'Content-Type': 'application/json' },
 *        body: JSON.stringify({
 *          event: 'link_click',
 *          linkId: link.id,
 *          timestamp: Date.now()
 *        })
 *      });
 *    }
 * 
 * 2. API INTEGRATION:
 * 
 *    Replace loadLinks() method:
 *    async loadLinks() {
 *      try {
 *        const response = await fetch('https://api.example.com/links');
 *        if (!response.ok) throw new Error('Failed to fetch');
 *        return await response.json();
 *      } catch (error) {
 *        console.error('Error loading links:', error);
 *        return []; // Fallback to empty
 *      }
 *    }
 * 
 * 3. CMS SYSTEM:
 * 
 *    A) Add admin panel (separate HTML page):
 *    - Create links/admin.html with form
 *    - POST new links to API
 *    - Update/delete existing links
 * 
 *    B) Backend API structure:
 *    GET    /api/links           - Fetch all links
 *    POST   /api/links           - Create new link
 *    PUT    /api/links/:id       - Update link
 *    DELETE /api/links/:id       - Delete link
 *    GET    /api/analytics       - Get analytics data
 * 
 *    C) Add authentication:
 *    class LinkBioApp {
 *      async loadLinks() {
 *        const token = localStorage.getItem('authToken');
 *        const response = await fetch('/api/links', {
 *          headers: {
 *            'Authorization': `Bearer ${token}`
 *          }
 *        });
 *        return await response.json();
 *      }
 *    }
 * 
 * 4. REAL-TIME UPDATES:
 * 
 *    Add WebSocket connection:
 *    setupRealTimeUpdates() {
 *      const ws = new WebSocket('wss://api.example.com/updates');
 *      ws.onmessage = (event) => {
 *        const update = JSON.parse(event.data);
 *        if (update.type === 'links_updated') {
 *          this.loadLinks().then(() => this.render());
 *        }
 *      };
 *    }
 * 
 * 5. A/B TESTING:
 * 
 *    trackClick(link) {
 *      const variant = this.getABTestVariant();
 *      // Send variant info with analytics
 *    }
 */

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const app = new LinkBioApp();
    app.init();
  });
} else {
  const app = new LinkBioApp();
  app.init();
}
