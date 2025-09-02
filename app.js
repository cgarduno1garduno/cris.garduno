/**
 * Personal Website - Modern Implementation
 * Vanilla JavaScript for navigation, search, projects, and research display
 */

class WebsiteApp {
  constructor() {
    // State
    this.projects = [];
    this.research = [];
    this.filteredItems = [];
    this.currentModal = null;
    this.searchTerm = '';
    this.currentPage = this.getCurrentPage();
    
    // Initialize
    this.init();
  }
  
  getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('projects.html')) return 'projects';
    if (path.includes('research.html')) return 'research';
    return 'home';
  }
  
  async init() {
    try {
      // Setup scroll behavior for nav shrinking
      this.setupScrollBehavior();
      
      // Load data and setup page-specific functionality
      if (this.currentPage === 'projects' || this.currentPage === 'research') {
        await this.loadData();
        this.setupSearch();
        this.setupModal();
        this.renderContent();
        this.handleDeepLink();
      }
    } catch (error) {
      console.error('Failed to initialize app:', error);
      this.showError('Failed to load content. Please refresh the page.');
    }
  }
  
  setupScrollBehavior() {
    const topNav = document.getElementById('topNav');
    if (!topNav) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      // Add shrunk class when scrolled down
      if (currentScroll > 50) {
        topNav.classList.add('shrunk');
      } else {
        topNav.classList.remove('shrunk');
      }
      
      lastScroll = currentScroll;
    });
  }
  
  async loadData() {
    try {
      const response = await fetch('data/projects.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const allData = await response.json();
      
      // Separate projects and research based on category
      this.projects = allData.filter(item => item.category === 'project' || !item.category);
      this.research = allData.filter(item => item.category === 'research');
      
      // Set filtered items based on current page
      if (this.currentPage === 'projects') {
        this.filteredItems = [...this.projects];
      } else if (this.currentPage === 'research') {
        this.filteredItems = [...this.research];
      }
    } catch (error) {
      console.error('Error loading data:', error);
      throw error;
    }
  }
  
  setupSearch() {
    const searchInput = document.getElementById('projectSearch') || document.getElementById('researchSearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
      this.searchTerm = e.target.value.toLowerCase().trim();
      this.filterItems();
    });
  }
  
  setupModal() {
    const modalOverlay = document.getElementById('modalOverlay') || document.getElementById('researchModalOverlay');
    const modalClose = document.getElementById('modalClose') || document.getElementById('researchModalClose');
    
    if (!modalOverlay || !modalClose) return;
    
    // Close modal on overlay click
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        this.closeModal();
      }
    });
    
    // Close modal on close button click
    modalClose.addEventListener('click', () => {
      this.closeModal();
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.currentModal) {
        this.closeModal();
      }
    });
  }
  
  renderContent() {
    if (this.currentPage === 'projects') {
      this.renderProjects();
    } else if (this.currentPage === 'research') {
      this.renderResearch();
    }
  }
  
  renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    if (this.filteredItems.length === 0) {
      projectsGrid.innerHTML = `
        <div class="empty-state">
          <p>No projects found matching your search.</p>
        </div>
      `;
      return;
    }
    
    // Group by topic and sort
    const grouped = this.groupByTopic(this.filteredItems);
    
    projectsGrid.innerHTML = '';
    
    grouped.forEach(topic => {
      // Add topic header
      const topicHeader = document.createElement('div');
      topicHeader.className = 'topic-header-grid';
      topicHeader.style.cssText = 'grid-column: 1 / -1; margin: 2rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--border);';
      topicHeader.innerHTML = `<h2 style="margin: 0; font-size: var(--font-size-xl); font-weight: 600; color: var(--text-primary);">${this.escapeHtml(topic.name)}</h2>`;
      projectsGrid.appendChild(topicHeader);
      
      // Add projects in this topic
      topic.projects.forEach(project => {
        const projectCard = this.createProjectCard(project);
        projectsGrid.appendChild(projectCard);
      });
    });
  }
  
  renderResearch() {
    const researchGrid = document.getElementById('researchGrid');
    if (!researchGrid) return;
    
    if (this.filteredItems.length === 0) {
      researchGrid.innerHTML = `
        <div class="empty-state">
          <p>No research found matching your search.</p>
        </div>
      `;
      return;
    }
    
    // Group by topic and sort
    const grouped = this.groupByTopic(this.filteredItems);
    
    researchGrid.innerHTML = '';
    
    grouped.forEach(topic => {
      // Add topic header
      const topicHeader = document.createElement('div');
      topicHeader.className = 'topic-header-grid';
      topicHeader.style.cssText = 'grid-column: 1 / -1; margin: 2rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 1px solid var(--border);';
      topicHeader.innerHTML = `<h2 style="margin: 0; font-size: var(--font-size-xl); font-weight: 600; color: var(--text-primary);">${this.escapeHtml(topic.name)}</h2>`;
      researchGrid.appendChild(topicHeader);
      
      // Add research in this topic
      topic.projects.forEach(research => {
        const researchCard = this.createResearchCard(research);
        researchGrid.appendChild(researchCard);
      });
    });
  }
  
  groupByTopic(items) {
    const grouped = {};
    
    items.forEach(item => {
      const topic = item.topic || 'Other';
      if (!grouped[topic]) {
        grouped[topic] = [];
      }
      grouped[topic].push(item);
    });
    
    // Sort topics alphabetically and items within each topic (pinned first)
    return Object.keys(grouped)
      .sort()
      .map(topicName => ({
        name: topicName,
        projects: grouped[topicName].sort((a, b) => {
          if (a.pinned && !b.pinned) return -1;
          if (!a.pinned && b.pinned) return 1;
          return a.title.localeCompare(b.title);
        })
      }));
  }
  
  createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-project-id', project.id);
    
    card.innerHTML = `
      <div class="project-meta">
        <span class="project-topic">${this.escapeHtml(project.topic || 'Other')}</span>
        ${project.pinned ? '<span class="project-pin">★</span>' : ''}
      </div>
      <h3 class="project-title">${this.escapeHtml(project.title)}</h3>
      <p class="project-summary">${this.escapeHtml(project.summary)}</p>
      ${project.tags && project.tags.length > 0 ? `
        <div class="project-tags">
          ${project.tags.map(tag => `<span class="project-tag">${this.escapeHtml(tag)}</span>`).join('')}
        </div>
      ` : ''}
    `;
    
    card.addEventListener('click', () => {
      this.openProjectModal(project);
    });
    
    return card;
  }
  
  createResearchCard(research) {
    const card = document.createElement('div');
    card.className = 'research-card';
    card.setAttribute('data-research-id', research.id);
    
    card.innerHTML = `
      <div class="research-meta">
        <span class="research-topic">${this.escapeHtml(research.topic || 'Other')}</span>
        ${research.pinned ? '<span class="project-pin">★</span>' : ''}
      </div>
      <h3 class="research-title">${this.escapeHtml(research.title)}</h3>
      <p class="research-summary">${this.escapeHtml(research.summary)}</p>
      ${research.tags && research.tags.length > 0 ? `
        <div class="research-tags">
          ${research.tags.map(tag => `<span class="research-tag">${this.escapeHtml(tag)}</span>`).join('')}
        </div>
      ` : ''}
    `;
    
    card.addEventListener('click', () => {
      this.openResearchModal(research);
    });
    
    return card;
  }
  
  openProjectModal(project) {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalBody = document.getElementById('modalBody');
    
    if (!modalOverlay || !modalBody) return;
    
    this.currentModal = project;
    
    modalBody.innerHTML = `
      <div class="modal-header">
        <div class="modal-subtitle">${this.escapeHtml(project.topic || 'Other')}</div>
        <h1 class="modal-title">${this.escapeHtml(project.title)}</h1>
        ${project.tags && project.tags.length > 0 ? `
          <div class="modal-tags">
            ${project.tags.map(tag => `<span class="modal-tag">${this.escapeHtml(tag)}</span>`).join('')}
          </div>
        ` : ''}
      </div>
      
      <div class="modal-content-body">
        ${project.detailsHtml || `<p>${this.escapeHtml(project.summary)}</p>`}
      </div>
      
      ${project.links && project.links.length > 0 ? `
        <div class="modal-links">
          ${project.links.map(link => `
            <a href="${this.escapeHtml(link.href)}" class="modal-link" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1h3v3M13 1L7 7M11 7v4a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              ${this.escapeHtml(link.label)}
            </a>
          `).join('')}
        </div>
      ` : ''}
    `;
    
    modalOverlay.classList.add('active');
    this.updateUrl(project.id);
    
    // Focus management
    modalOverlay.focus();
  }
  
  openResearchModal(research) {
    const modalOverlay = document.getElementById('researchModalOverlay');
    const modalBody = document.getElementById('researchModalBody');
    
    if (!modalOverlay || !modalBody) return;
    
    this.currentModal = research;
    
    modalBody.innerHTML = `
      <div class="modal-header">
        <div class="modal-subtitle">${this.escapeHtml(research.topic || 'Other')}</div>
        <h1 class="modal-title">${this.escapeHtml(research.title)}</h1>
        ${research.tags && research.tags.length > 0 ? `
          <div class="modal-tags">
            ${research.tags.map(tag => `<span class="modal-tag">${this.escapeHtml(tag)}</span>`).join('')}
          </div>
        ` : ''}
      </div>
      
      <div class="modal-content-body">
        ${research.detailsHtml || `<p>${this.escapeHtml(research.summary)}</p>`}
      </div>
      
      ${research.links && research.links.length > 0 ? `
        <div class="modal-links">
          ${research.links.map(link => `
            <a href="${this.escapeHtml(link.href)}" class="modal-link" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 1h3v3M13 1L7 7M11 7v4a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              ${this.escapeHtml(link.label)}
            </a>
          `).join('')}
        </div>
      ` : ''}
    `;
    
    modalOverlay.classList.add('active');
    this.updateUrl(research.id);
    
    // Focus management
    modalOverlay.focus();
  }
  
  closeModal() {
    const modalOverlay = document.getElementById('modalOverlay') || document.getElementById('researchModalOverlay');
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
    }
    
    this.currentModal = null;
    this.clearUrl();
  }
  
  filterItems() {
    const baseItems = this.currentPage === 'projects' ? this.projects : this.research;
    
    if (!this.searchTerm) {
      this.filteredItems = [...baseItems];
    } else {
      this.filteredItems = baseItems.filter(item => {
        const searchableText = [
          item.title,
          item.summary,
          item.topic,
          ...(item.tags || [])
        ].join(' ').toLowerCase();
        
        return searchableText.includes(this.searchTerm);
      });
    }
    
    this.renderContent();
  }
  
  updateUrl(itemId) {
    const url = new URL(window.location);
    url.hash = `item-${itemId}`;
    window.history.replaceState(null, '', url);
  }
  
  clearUrl() {
    const url = new URL(window.location);
    url.hash = '';
    window.history.replaceState(null, '', url);
  }
  
  handleDeepLink() {
    const hash = window.location.hash;
    if (hash.startsWith('#item-')) {
      const itemId = hash.substring(6); // Remove '#item-'
      const item = [...this.projects, ...this.research].find(i => i.id === itemId);
      if (item) {
        if (item.category === 'research') {
          this.openResearchModal(item);
        } else {
          this.openProjectModal(item);
        }
      }
    }
  }
  
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
  
  showError(message) {
    const container = document.getElementById('projectsGrid') || document.getElementById('researchGrid');
    if (container) {
      container.innerHTML = `
        <div class="empty-state">
          <p>${this.escapeHtml(message)}</p>
        </div>
      `;
    }
  }
}

// Initialize the app when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new WebsiteApp();
});
