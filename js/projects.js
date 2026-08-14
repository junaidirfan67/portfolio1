/* ==========================================================================
   DEVELOPER PORTFOLIO - PROJECTS DATA & MODAL INTERACTIVITY
   ========================================================================== */

const PROJECTS_DATA = [
  {
    id: 'ai-analytics-dashboard',
    title: 'NexusAI - Intelligence Dashboard',
    category: 'ai-ml',
    categoryLabel: 'AI / Machine Learning',
    tagline: 'Real-time predictive analytics dashboard with neural graph visualization.',
    description: 'NexusAI is an enterprise-grade AI analytics platform designed to monitor real-time data streams, detect anomalies using deep learning models, and generate predictive business metrics with sub-second latency.',
    thumbnail: 'assets/project-ai-dashboard.jpg',
    tags: ['React', 'TypeScript', 'Python FastAPI', 'TensorFlow', 'Tailwind', 'Chart.js'],
    liveUrl: 'https://example.com/demo-ai',
    githubUrl: 'https://github.com/example/nexus-ai-dashboard',
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
    githubUrl: 'https://github.com/example/aura3d-spatial-commerce',
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
    tags: ['Vue 3', 'Node.js', 'WebSockets', 'TradingView API', 'Redis'],
    liveUrl: 'https://example.com/demo-pulsefx',
    githubUrl: 'https://github.com/example/pulsefx-trading-terminal',
    features: [
      'Low-latency WebSocket order book & candlestick depth charts',
      'Custom algorithmic strategy script editor with pine script support',
      'Multi-portfolio risk management & profit/loss visual tracker',
      'Biometric & 2FA secure authentication login flow'
    ],
    stats: { volume: '$45M+', uptime: '99.99%', tradesProcessed: '1M+' }
  },
  {
    id: 'saas-productivity',
    title: 'SyncSphere - SaaS Task Management',
    category: 'saas',
    categoryLabel: 'SaaS Platform',
    tagline: 'Collaborative workspace management with automated Kanban workflows.',
    description: 'SyncSphere helps remote teams streamline product roadmaps, manage task dependencies, track time metrics, and automate recurring engineering workflows with an intuitive drag-and-drop interface.',
    thumbnail: 'assets/project-saas-platform.jpg',
    tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Docker', 'Zustand'],
    liveUrl: 'https://example.com/demo-syncsphere',
    githubUrl: 'https://github.com/example/syncsphere-saas-app',
    features: [
      'Fluid drag-and-drop Kanban boards with custom status columns',
      'Automated GitHub & Jira webhook task syncer',
      'Real-time collaborative document editing with cursor presence',
      'Granular team permission roles & SSO enterprise login'
    ],
    stats: { teams: '450+', tasksCompleted: '250K+', rating: '4.9/5' }
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const projectsGrid = document.getElementById('projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const modalBackdrop = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');

  if (!projectsGrid) return;

  // Render Projects Grid
  function renderProjects(filter = 'all') {
    projectsGrid.innerHTML = '';

    const filtered = filter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter(p => p.category === filter);

    filtered.forEach((project, idx) => {
      const card = document.createElement('div');
      card.className = `project-card reveal delay-${(idx + 1) * 100}`;
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

    // Re-trigger scroll reveal observer if active
    if (window.refreshObserver) window.refreshObserver();

    // Bind event listener to View Details buttons
    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openProjectModal(btn.dataset.id);
      });
    });

    // Also click anywhere on card to open
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('click', () => {
        openProjectModal(card.dataset.id);
      });
    });
  }

  // Filter Buttons Logic
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });

  // Modal Open Handler
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
      <h2 style="margin-bottom: 0.75rem; font-size: var(--text-3xl);">${project.title}</h2>
      <p style="color: #cbd5e1; font-size: var(--text-lg); margin-bottom: 1.5rem;">${project.description}</p>
      
      <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem;">
        ${tagsHtml}
      </div>

      <h4 style="margin-bottom: 1rem; color: #ffffff;">Key Features & Architecture:</h4>
      <ul class="modal-features-list">
        ${featuresListHtml}
      </ul>

      <div style="display: flex; gap: 1rem; margin-top: 2.5rem; flex-wrap: wrap;">
        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
          <i class="fas fa-external-link-alt"></i> Launch Live App
        </a>
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
          <i class="fab fa-github"></i> View Source Code
        </a>
      </div>
    `;

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Modal Close Handlers
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

  // Initial Render
  renderProjects('all');
});
