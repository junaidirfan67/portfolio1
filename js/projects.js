/* ==========================================================================
   JUNAID IRFAN PORTFOLIO - PROJECTS DATA & MODAL INTERACTIVITY
   ========================================================================== */

const PROJECTS_DATA = [
  {
    id: 'mobile-app-fintech',
    title: 'Nova Mobile - iOS & Android Financial App',
    category: 'mobile-app',
    categoryLabel: 'Mobile App Development',
    tagline: 'Cross-platform mobile wallet and investment app built for iOS and Android.',
    description: 'Nova Mobile is a high-performance cross-platform mobile application developed with React Native and native iOS/Android modules. It provides biometric security, real-time push notifications, offline transaction caching, and interactive portfolio analytics.',
    thumbnail: 'assets/project-mobile-app.jpg',
    tags: ['React Native', 'iOS / Android', 'TypeScript', 'Redux Toolkit', 'Firebase', 'REST API'],
    liveUrl: 'https://example.com/demo-mobile',
    githubUrl: 'https://github.com/junaidirfan67/nova-mobile-app',
    features: [
      'Native iOS (Swift) & Android (Kotlin) bridge integration',
      'Biometric authentication (FaceID & Fingerprint scanner)',
      'Offline data synchronization using AsyncStore & SQLite',
      'Custom animated chart visualizers for mobile viewports'
    ],
    stats: { downloads: '50,000+', rating: '4.8/5', crashRate: '< 0.01%' }
  },
  {
    id: 'django-python-api',
    title: 'PulseEngine - Django REST & SEO Analytics',
    category: 'python-django',
    categoryLabel: 'Python & Django Architecture',
    tagline: 'Scalable Python Django backend with automated SEO keyword & rank tracker.',
    description: 'PulseEngine is an enterprise backend microservice built with Python 3 and Django REST Framework (DRF). It automates web scraping, tracks Google search engine rankings, performs keyword competition analysis, and serves high-throughput APIs for digital marketing teams.',
    thumbnail: 'assets/project-ai-dashboard.jpg',
    tags: ['Python 3', 'Django REST Framework', 'PostgreSQL', 'Celery / Redis', 'BeautifulSoup', 'Docker'],
    liveUrl: 'https://example.com/demo-django-seo',
    githubUrl: 'https://github.com/junaidirfan67/django-seo-analytics',
    features: [
      'High-speed async scraping pipeline with Python & Celery worker tasks',
      'Automated SEO audit reporting engine with PDF export',
      'JWT authenticated RESTful API endpoints with Swagger docs',
      'Optimized PostgreSQL ORM database queries handling 1M+ daily rows'
    ],
    stats: { keywordsTracked: '100K+', apiLatency: '42ms', uptime: '99.9%' }
  },
  {
    id: 'marketing-growth-platform',
    title: 'GrowthScale - Digital Marketing & Campaign Suite',
    category: 'digital-marketing',
    categoryLabel: 'Digital Marketing & Growth',
    tagline: 'Conversion rate optimization and automated multi-channel campaign manager.',
    description: 'GrowthScale integrates Google Analytics 4, Facebook Ads API, and custom SEO tracking algorithms into a unified digital marketing dashboard to maximize campaign ROI and user acquisition.',
    thumbnail: 'assets/project-saas-platform.jpg',
    tags: ['Digital Marketing', 'SEO Optimization', 'Google Analytics 4', 'Conversion Rate Optimization', 'Python'],
    liveUrl: 'https://example.com/demo-growthscale',
    githubUrl: 'https://github.com/junaidirfan67/digital-marketing-suite',
    features: [
      'Multi-channel ad campaign attribution & ROI calculator',
      'Automated technical SEO site audit & broken link crawler',
      'Dynamic A/B testing lander integration for higher conversions',
      'Real-time traffic anomaly detection and email alert triggers'
    ],
    stats: { roiBoost: '+45%', trafficIncrease: '3x', leadsGenerated: '25,000+' }
  },
  {
    id: 'ai-analytics-dashboard',
    title: 'NexusAI - Intelligence Dashboard',
    category: 'web-app',
    categoryLabel: 'Web Application / AI',
    tagline: 'Real-time predictive analytics dashboard with neural graph visualization.',
    description: 'NexusAI is an enterprise-grade AI analytics platform designed to monitor real-time data streams, detect anomalies using deep learning models, and generate predictive business metrics with sub-second latency.',
    thumbnail: 'assets/project-ai-dashboard.jpg',
    tags: ['React', 'TypeScript', 'Python FastAPI', 'TensorFlow', 'Tailwind', 'Chart.js'],
    liveUrl: 'https://example.com/demo-ai',
    githubUrl: 'https://github.com/junaidirfan67/nexus-ai-dashboard',
    features: [
      'Real-time WebSocket streaming telemetry visualizer',
      'Custom trained LSTM predictive neural network model integration',
      'Interactive dark-mode glassmorphism dashboard UI components',
      'Automated PDF & CSV executive summary reporting engine'
    ],
    stats: { users: '12,500+', latency: '< 50ms', accuracy: '99.4%' }
  },
  {
    id: 'spatial-ecommerce',
    title: 'Aura3D - Spatial E-Commerce Platform',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce / Web3',
    tagline: 'Immersive 3D shopping experience with WebGL product customizer.',
    description: 'Aura3D revolutionizes digital retail by combining Three.js 3D viewport rendering with a seamless headless checkout flow, allowing users to inspect and customize high-end products in real-time AR/VR environments.',
    thumbnail: 'assets/project-ecommerce.jpg',
    tags: ['Next.js', 'Three.js / WebGL', 'Tailwind CSS', 'Stripe API', 'GraphQL'],
    liveUrl: 'https://example.com/demo-aura3d',
    githubUrl: 'https://github.com/junaidirfan67/aura3d-spatial-commerce',
    features: [
      'Interactive 360° product material & texture customization',
      'Augmented Reality (AR) quick-look viewer for mobile web browsers',
      'Sub-second cart calculations & global currency converter',
      'Stripe Elements & Apple Pay instant checkout integration'
    ],
    stats: { conversion: '+34%', loadTime: '0.8s', productsRendered: '5,000+' }
  },
  {
    id: 'crypto-analytics',
    title: 'PulseFX - Crypto & Forex Terminal',
    category: 'web-app',
    categoryLabel: 'Web Application / Fintech',
    tagline: 'High-frequency financial trading suite with live order book execution.',
    description: 'PulseFX delivers institutional-grade charting tools, automated strategy backtesting algorithms, and multi-exchange order routing inside a high-performance web browser terminal.',
    thumbnail: 'assets/project-crypto-analytics.jpg',
    tags: ['Vue 3', 'Python', 'Node.js', 'WebSockets', 'TradingView API', 'Redis'],
    liveUrl: 'https://example.com/demo-pulsefx',
    githubUrl: 'https://github.com/junaidirfan67/pulsefx-trading-terminal',
    features: [
      'Low-latency WebSocket order book & candlestick depth charts',
      'Custom algorithmic strategy script editor with pine script support',
      'Multi-portfolio risk management & profit/loss visual tracker',
      'Biometric & 2FA secure authentication login flow'
    ],
    stats: { volume: '$45M+', uptime: '99.99%', tradesProcessed: '1M+' }
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const projectsGrid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modalBackdrop = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (!projectsGrid) return;

  function renderProjects(filter = 'all') {
    projectsGrid.innerHTML = '';

    const filtered = filter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(p => p.category === filter);

    filtered.forEach((project, idx) => {
      const card = document.createElement('div');
      card.className = `project-card reveal delay-${(idx % 4 + 1) * 100}`;
      card.dataset.id = project.id;

      const tagsHtml = project.tags.map(t => `<span class="badge">${t}</span>`).join('');

      card.innerHTML = `
        <div class="project-thumb">
          <img src="${project.thumbnail}" alt="${project.title}" loading="lazy" />
          <div class="project-overlay">
            <button class="btn btn-primary btn-sm view-details-btn" data-id="${project.id}">
              <i class="fas fa-eye"></i> View Details
            </button>
            <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-icon" title="Live Preview">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
        <div class="project-content">
          <span class="project-category">${project.categoryLabel}</span>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.tagline}</p>
          <div class="project-tags">${tagsHtml}</div>
        </div>
      `;

      projectsGrid.appendChild(card);
    });

    if (window.refreshObserver) window.refreshObserver();

    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openProjectModal(btn.dataset.id);
      });
    });

    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        openProjectModal(card.dataset.id);
      });
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });

  function openProjectModal(id) {
    const project = PROJECTS_DATA.find(p => p.id === id);
    if (!project || !modalBackdrop) return;

    const modalBody = document.getElementById('modal-body-content');
    const featuresListHtml = project.features.map(f => `<li><i class="fas fa-check-circle"></i> ${f}</li>`).join('');
    const tagsHtml = project.tags.map(t => `<span class="badge badge-status">${t}</span>`).join('');

    modalBody.innerHTML = `
      <div class="modal-image">
        <img src="${project.thumbnail}" alt="${project.title}" />
      </div>
      <div class="section-subtitle">${project.categoryLabel}</div>
      <h2 style="margin-bottom: 0.75rem; font-size: var(--text-3xl); font-family: var(--font-heading);">${project.title}</h2>
      <p style="color: #cbd5e1; font-size: var(--text-lg); margin-bottom: 1.5rem;">${project.description}</p>
      
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem;">
        ${tagsHtml}
      </div>

      <h4 style="margin-bottom: 1rem; color: #ffffff; font-family: var(--font-heading);">Key Features & Architecture:</h4>
      <ul class="modal-features-list">
        ${featuresListHtml}
      </ul>

      <div style="display: flex; gap: 1rem; margin-top: 2.5rem; flex-wrap: wrap;">
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i class="fas fa-external-link-alt"></i> Launch Live Demo
        </a>
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
          <i class="fab fa-github"></i> View GitHub Source
        </a>
      </div>
    `;

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  renderProjects('all');
});
