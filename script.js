// --- DATA CONSTANTS ---

const RESEARCH_DATA = [
  {
    id: 'footwear-force-2025',
    category: 'research',
    topic: 'Footwear and Running',
    title: 'Modelling peak vertical ground reaction force from smart watch metrics reveals link between higher forces and softer cushioning perception',
    summary: 'Investigation into estimating ground reaction forces using wearable metrics and their correlation with athlete perception of shoe cushioning.',
    year: '2025',
    detailsHtml: '<p>Published in <em>Footwear Science</em> 17 (S1), S83-S84. This study leverages smart watch accelerometer data to model peak vertical ground reaction forces (vGRF) in runners. By correlating these modeled forces with subjective perception scores, we identified a significant link between higher impact forces and the perception of softer cushioning, challenging traditional assumptions about impact attenuation and comfort perception.</p>',
    links: [
      { label: 'View Publication', href: 'https://www.tandfonline.com/doi/full/10.1080/19424280.2025.2492263' }
    ],
    tags: ['biomechanics', 'wearables', 'perception', 'modeling'],
    pinned: true
  },
  {
    id: 'cognitive-vr-2020',
    category: 'research',
    topic: 'Cognitive Science',
    title: 'Feasibility of virtual and augmented reality devices as psychology research tools: a pilot study',
    summary: 'A pilot study evaluating the efficacy and reliability of consumer-grade VR/AR hardware for conducting rigorous psychological experiments.',
    year: '2020',
    detailsHtml: '<p>Thesis work conducted at UC Santa Barbara. This research assesses the temporal precision, spatial accuracy, and user experience of modern VR/AR headsets to determine their viability as replacements for traditional, expensive psychophysics setups in cognitive science research.</p>',
    links: [
      { label: 'View Publication', href: 'https://escholarship.org/uc/item/2v93g1xk' }
    ],
    tags: ['VR/AR', 'psychophysics', 'methodology'],
    pinned: false
  },
  {
    id: 'microbio-serotonin-2019',
    category: 'research',
    topic: 'Microbiology',
    title: 'Intestinal serotonin and fluoxetine exposure modulate bacterial colonization in the gut',
    summary: 'Research exploring the gut-brain axis, specifically how serotonin and antidepressants influence the composition of the gut microbiome.',
    year: '2019',
    detailsHtml: '<p>Published in <em>Nature Microbiology</em> 4 (12), 2064-2073. TC Fung, HE Vuong, CD Garduno Luna, et al. This paper demonstrates that gut bacteria can sense and respond to host-derived serotonin and pharmaceutical serotonin reuptake inhibitors (fluoxetine), altering bacterial colonization patterns. These findings highlight a direct mechanism of communication within the gut-brain axis.</p>',
    links: [
      { label: 'View Publication', href: 'https://www.nature.com/articles/s41564-019-0540-4' }
    ],
    tags: ['microbiome', 'gut-brain-axis', 'serotonin'],
    pinned: true
  },
  {
    id: 'cv-vessel-segmentation',
    category: 'research',
    topic: 'Computer Vision',
    title: 'Vessel Segmentation in Angiography',
    summary: 'Deep learning approaches for automated segmentation of cerebral vasculature in medical imaging.',
    year: '2016-2022',
    detailsHtml: '<p>A collection of work focused on improving the accuracy of vessel segmentation in cerebral angiography images. This includes utilizing weakly-supervised convolutional neural networks to reduce annotation burden and semi-automated methods for clinical workflow integration.</p>',
    links: [
      { label: 'View Publication (2022)', href: 'https://openaccess.thecvf.com/content/WACV2022/html/Vepa_Weakly-Supervised_Convolutional_Neural_Networks_for_Vessel_Segmentation_in_Cerebral_Angiography_WACV_2022_paper.html' },
      { label: 'View Publication (2016)', href: 'https://www.ahajournals.org/doi/abs/10.1161/str.47.suppl_1.wp67' }
    ],
    tags: ['deep-learning', 'medical-imaging', 'segmentation', 'CNN'],
    pinned: false
  },
];

const PROJECTS_DATA = [
  // PROJECT MANAGEMENT & ORGANIZATION
  {
    id: 'grind-sys',
    category: 'project',
    topic: 'Project Management & Organization',
    title: 'GRIND.sys',
    summary: 'A minimalist project management and knowledge-capture tool designed for users who require a high-density, distraction-free environment.',
    detailsHtml: '<p>GRIND.sys (General Registry of Important Notes and Deliverables).(system) is a minimalist project management and knowledge-capture tool designed for users who require a high-density, distraction-free environment for both professional research and personal projects. It provides a centralized interface to manage tasks, document technical wikis, and maintain detailed logs without the complexity and overhead of full-featured project management suites.</p>',
    links: [
      { label: 'Live Demo', href: 'https://cgarduno1garduno.github.io/GRIND.sys/' },
      { label: 'View Code', href: 'https://github.com/cgarduno1garduno/GRIND.sys' }
    ],
    tags: ['productivity', 'design-system', 'organization', 'react'],
    pinned: false
  },
  {
    id: 'spot',
    category: 'project',
    topic: 'Project Management & Organization',
    title: 'SPOT',
    summary: 'Single Point of Truth - A centralized organizational tool offering essential project management functionality.',
    detailsHtml: '<p>SPOT is a minimalist project management tool designed for users who need straightforward task organization without the complexity and overhead of full-featured project management suites. It provides essential project management functionality through a clean, intuitive interface.</p>',
    links: [
      { label: 'Live Demo', href: 'https://cgarduno1garduno.github.io/SPOT/' },
      { label: 'View Code', href: 'https://github.com/cgarduno1garduno/SPOT' }
    ],
    tags: ['organization', 'data', 'management'],
    pinned: false
  },
  
  // MATHEMATICS
  {
    id: 'collatz-coral',
    category: 'project',
    topic: 'Mathematics',
    title: 'CollatzCoral',
    summary: 'Visual exploration of the Collatz Conjecture resembling coral structures, combining pure mathematics with visual beauty.',
    detailsHtml: `<p>Transform the enigmatic Collatz conjecture into stunning coral-like algorithmic art. This interactive web application combines pure mathematics with visual beauty, creating unique organic structures from one of mathematics' most famous unsolved problems.</p>
    <p>The Collatz conjecture, also known as the 3n+1 problem, is one of mathematics' most fascinating unsolved problems. Despite its deceptively simple rules, it has puzzled mathematicians for nearly a century. This project serves as a visualization of one of my favorite mathematical curiosities.</p>`,
    links: [
      { label: 'Live Demo', href: 'https://cgarduno1garduno.github.io/CollatzCoral/' },
      { label: 'View Code', href: 'https://github.com/cgarduno1garduno/CollatzCoral' }
    ],
    tags: ['math', 'visualization', 'algorithms', 'p5.js'],
    pinned: false
  },

  // PERSONAL
  {
    id: 'trail',
    category: 'project',
    topic: 'Personal',
    title: 'Trail Running',
    summary: 'A rigorous mental and physical examination of the self through ultra-endurance environments.',
    detailsHtml: '<p>Trail running is more than physical endurance; it is a rigorous examination of the self. In the depths of an ultra race, when the mind seeks comfortable lies to justify quitting, the trail forces a confrontation with the truth. It strips away the ego\'s defenses, allowing me to observe my thoughts without judgment and address the reality within. This raw honesty is the foundation of my growth, offering a clarity that few other mindfulness practices can provide.</p>',
    links: [
      { label: 'View Races', href: 'https://ultrasignup.com/results_participant.aspx?fname=Cristopher&lname=Garduno%20Luna&age=33' }
    ],
    tags: ['running', 'ultra-running', 'mindfulness', 'analytics'],
    pinned: false
  }
];

// --- APP LOGIC ---

// --- ROUTER ---
const routes = {
  '': renderHome,
  '#': renderHome,
  '#home': renderHome,
  '#research': renderResearch,
  '#projects': renderProjects
};

function router() {
  const hash = window.location.hash.split('?')[0] || '#';
  const renderer = routes[hash] || routes['#'];
  renderer();
  updateNavState(hash);
  window.scrollTo(0, 0);
  closeMobileMenu();
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  router();
  setupNavbarScroll();
  setupMobileMenu();
});

// --- RENDERERS ---

function renderHome() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="animate-fade-in w-full">
      <!-- Hero Section -->
      <section class="pt-24 pb-16 text-center max-w-4xl mx-auto px-6">
        <div class="inline-block mb-6 px-3 py-1 bg-sys-surface border border-sys-border rounded-full shadow-sm">
             <span class="text-[10px] font-bold font-mono uppercase tracking-widest text-sys-green flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-sys-green animate-pulse"></span>
                System Online
             </span>
        </div>
        
        <h1 class="text-5xl md:text-6xl font-bold mb-6 tracking-tighter text-sys-ink">
          Hello, I'm Cris Garduño
        </h1>
        
        <div class="my-10 flex justify-center">
          <div class="w-[220px] h-[220px] rounded border border-sys-border bg-sys-chassis p-2 shadow-screen">
             <div class="w-full h-full rounded overflow-hidden border border-sys-border bg-sys-surface grayscale hover:grayscale-0 transition-all duration-500">
                <img 
                  src="./image1.jpg" 
                  alt="Cris Garduño" 
                  class="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>
        
        <p class="text-xl text-sys-inkSub font-mono">
          builder of stuff, breaker of things
        </p>
      </section>

      <!-- About Section -->
      <section class="py-12 w-full">
        <div class="max-w-3xl mx-auto px-6">
            <div class="bg-sys-surface border border-sys-border rounded shadow-sm">
                 <div class="bg-vents border-b border-sys-border p-4 flex justify-between items-center">
                      <h2 class="text-xs font-bold font-mono uppercase tracking-widest text-sys-ink">Profile / About</h2>
                      <div class="w-2 h-2 rounded-full bg-sys-orange"></div>
                 </div>
                 <div class="p-8 md:p-12 text-center">
                    <p class="text-lg leading-relaxed text-sys-ink font-medium">
                        I mix science, creativity, and technology to explore how people move and experience the world through multimodal research. At Brooks Running, I bridge perception, wearable analytics, and data science to elevate product experiences—leveraging AI-assisted development to build the tools and models my curiosity demands.
                    </p>
                 </div>
            </div>
        </div>
      </section>

      <!-- Module Navigation -->
      <section class="py-16 pb-24 w-full">
        <div class="max-w-[1000px] mx-auto px-6">
            <div class="flex items-center gap-4 mb-6">
                 <div class="h-px bg-sys-border flex-1"></div>
                 <span class="text-xs font-bold font-mono uppercase tracking-widest text-sys-inkSub">Select Module</span>
                 <div class="h-px bg-sys-border flex-1"></div>
            </div>
            
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Research Card -->
            <div class="group bg-sys-surface border border-sys-border rounded p-8 hover:shadow-floating transition-all duration-300 relative overflow-hidden">
              <div class="mb-6 flex justify-between items-start">
                  <h3 class="text-2xl font-bold text-sys-ink uppercase tracking-tight">Research</h3>
                  <span class="text-[10px] font-mono border border-sys-orange text-sys-orange px-1 rounded">01</span>
              </div>
              <p class="text-sm leading-relaxed text-sys-inkSub mb-8 font-mono">
                Fueled by curiosity and guided by the patterns that echo across disciplines
              </p>
              <a href="#research" class="btn-plastic inline-flex items-center px-6 py-2 text-xs font-bold uppercase tracking-widest group-hover:border-sys-orange group-hover:text-sys-orange">
                Access
              </a>
              <div class="absolute bottom-0 left-0 w-full h-1 bg-sys-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <!-- Projects Card -->
            <div class="group bg-sys-surface border border-sys-border rounded p-8 hover:shadow-floating transition-all duration-300 relative overflow-hidden">
              <div class="mb-6 flex justify-between items-start">
                  <h3 class="text-2xl font-bold text-sys-ink uppercase tracking-tight">Stuff & Things</h3>
                  <span class="text-[10px] font-mono border border-sys-orange text-sys-orange px-1 rounded">02</span>
              </div>
              <p class="text-sm leading-relaxed text-sys-inkSub mb-8 font-mono">
                Where side projects, curiosities, and questionable ideas live (or die)
              </p>
              <a href="#projects" class="btn-plastic inline-flex items-center px-6 py-2 text-xs font-bold uppercase tracking-widest group-hover:border-sys-orange group-hover:text-sys-orange">
                Access
              </a>
              <div class="absolute bottom-0 left-0 w-full h-1 bg-sys-orange opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderResearch() {
  const sections = ['Footwear and Running', 'Cognitive Science', 'Microbiology', 'Computer Vision'];
  renderGridPage('Research Database', 'Fueled by curiosity / Patterns across disciplines', RESEARCH_DATA, sections);
}

function renderProjects() {
  const sections = ['Project Management & Organization', 'Mathematics', 'Personal'];
  renderGridPage('Stuff & Things', 'Curiosities / Side Projects / Questionable Ideas', PROJECTS_DATA, sections);
}

function renderGridPage(title, subtitle, data, sectionOrder) {
  const app = document.getElementById('app');
  
  app.innerHTML = `
    <div class="animate-fade-in min-h-screen pb-20 w-full">
      <section class="pt-12 pb-8 text-center bg-sys-chassis border-b border-sys-border bg-vents">
        <div class="inline-block bg-sys-chassis px-4 py-2 border border-sys-border rounded mb-4">
            <h1 class="text-2xl font-bold text-sys-ink uppercase tracking-tight">${title}</h1>
        </div>
        <p class="text-sm font-mono text-sys-inkSub max-w-[600px] mx-auto uppercase tracking-wide px-6">
          ${subtitle}
        </p>
      </section>

      <!-- Search -->
      <section class="my-12 px-6 w-full">
        <div class="max-w-[500px] mx-auto relative group">
          <input
            type="search"
            id="search-input"
            placeholder="SEARCH..."
            class="input-screen w-full p-4 pl-12 rounded-lg bg-white text-sm font-mono text-sys-ink placeholder:text-gray-400 uppercase"
          />
           <svg class="absolute left-4 top-1/2 -translate-y-1/2 text-sys-inkSub pointer-events-none group-focus-within:text-sys-orange transition-colors" width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <circle cx="8" cy="8" r="6" stroke-width="1.5"/>
            <path d="M14 14L18 18" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </div>
      </section>

      <!-- Grid Content -->
      <section id="grid-container" class="max-w-[1200px] mx-auto px-6 w-full">
         <!-- Populated by JS -->
      </section>
    </div>
  `;

  // Filter Logic
  const searchInput = document.getElementById('search-input');
  
  function updateGrid(searchTerm = '') {
    const container = document.getElementById('grid-container');
    const lowerSearch = searchTerm.toLowerCase();
    
    // Filter items
    const filtered = data.filter(item => 
      item.title.toLowerCase().includes(lowerSearch) ||
      item.topic.toLowerCase().includes(lowerSearch) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(lowerSearch)))
    );

    // Group items
    const groups = {};
    sectionOrder.forEach(sec => groups[sec] = []);
    filtered.forEach(item => {
      const topic = item.topic || 'Other';
      if (!groups[topic]) {
          // If the topic isn't in our explicit order, add it to 'Other' or create new
          if(sectionOrder.includes(topic)) groups[topic].push(item);
          else {
              if(!groups['Other']) groups['Other'] = [];
              groups['Other'].push(item);
          }
      } else {
          groups[topic].push(item);
      }
    });

    const activeSections = [...sectionOrder];
    if (groups['Other'] && groups['Other'].length > 0) activeSections.push('Other');

    let html = '';
    let hasItems = false;

    activeSections.forEach(topic => {
      const items = groups[topic] || [];
      if (items.length === 0) return;
      hasItems = true;
      
      html += `
        <div class="mb-16 last:mb-0">
           <div class="border-b-2 border-sys-border pb-2 mb-8 flex items-end justify-between">
            <h2 class="text-lg font-bold font-mono text-sys-ink uppercase tracking-widest bg-sys-chassis pr-4">${topic}</h2>
            <span class="text-sm font-mono text-sys-inkSub">Count: ${items.length}</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${items.map(item => createCardHtml(item)).join('')}
          </div>
        </div>
      `;
    });

    if (!hasItems) {
      html = `
        <div class="text-center py-16 p-8 border border-dashed border-sys-border rounded">
          <p class="text-sm font-mono text-sys-inkSub uppercase">No entries found matching query.</p>
        </div>
      `;
    }

    container.innerHTML = html;
    
    // Re-attach event listeners for cards
    document.querySelectorAll('.card-trigger').forEach(card => {
        card.addEventListener('click', () => {
            const id = card.getAttribute('data-id');
            const item = data.find(i => i.id === id);
            openModal(item);
        });
    });
  }

  // Initial render
  updateGrid();

  // Search Listener
  searchInput.addEventListener('input', (e) => updateGrid(e.target.value));
}

function createCardHtml(item) {
    const tagsHtml = item.tags ? `
      <div class="flex flex-wrap gap-2 pt-4 border-t border-dashed border-sys-border">
        ${item.tags.map(tag => `<span class="text-[10px] text-sys-inkSub bg-sys-chassis border border-sys-border px-2 py-1 rounded-sm font-mono uppercase tracking-wide">${tag}</span>`).join('')}
      </div>
    ` : '';

    return `
    <div class="card-trigger group flex flex-col bg-sys-surface rounded border border-sys-border shadow-sm cursor-pointer transition-all duration-200 hover:shadow-floating hover:-translate-y-1 relative overflow-hidden h-full" data-id="${item.id}">
      <!-- Module Header -->
      <div class="bg-vents border-b border-sys-border p-4 flex justify-between items-center">
         <span class="font-bold font-mono text-[10px] uppercase tracking-widest text-sys-inkSub">
           ${item.topic}
         </span>
         <div class="w-2 h-2 rounded-full bg-sys-orange"></div>
      </div>

      <!-- Module Content -->
      <div class="p-6 flex-grow flex flex-col">
        <h3 class="text-lg font-bold text-sys-ink mb-3 leading-tight group-hover:text-sys-orange transition-colors">
          ${item.title}
        </h3>
        
        <p class="text-sm leading-relaxed text-sys-inkSub mb-6 line-clamp-3 flex-grow font-sans">
          ${item.summary}
        </p>
        
        ${tagsHtml}
      </div>
      
      <div class="h-1 bg-vents opacity-0 group-hover:opacity-100 transition-opacity w-full absolute bottom-0 left-0"></div>
    </div>
    `;
}

// --- MODAL ---

function openModal(item) {
    const modal = document.getElementById('modal-container');
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    document.body.classList.add('no-scroll');
    
    modal.classList.remove('hidden');
    // slight delay for transition
    requestAnimationFrame(() => modal.classList.remove('opacity-0'));

    const tagHtml = item.tags ? `
        <div class="flex flex-wrap gap-2 mt-6">
            ${item.tags.map(tag => `<span class="text-[10px] text-sys-inkSub bg-sys-chassis px-2 py-1 rounded font-mono uppercase tracking-wide border border-sys-border">${tag}</span>`).join('')}
        </div>` : '';

    const linksHtml = item.links ? `
        <div class="flex flex-wrap gap-3 border-t border-sys-border pt-6">
            ${item.links.map(link => `
                <a href="${link.href}" target="_blank" rel="noopener noreferrer" class="btn-plastic primary inline-flex items-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-widest">
                  ${link.label}
                  <svg width="10" height="10" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 1h3v3M13 1L7 7M11 7v4a1 1 0 01-1 1H2a1 1 0 01-1-1V3a1 1 0 011-1h4" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </a>
            `).join('')}
        </div>` : '';

    modal.innerHTML = `
      <div class="bg-sys-surface w-full max-w-[800px] max-h-[90vh] rounded border border-sys-border relative flex flex-col shadow-floating animate-slide-up" onclick="event.stopPropagation()">
        <!-- Header -->
        <div class="flex justify-between items-center px-6 py-4 border-b border-sys-border bg-gray-50/50 shrink-0">
             <div class="flex items-center gap-3">
                 <span class="text-[10px] font-bold font-mono uppercase tracking-widest text-sys-inkSub bg-sys-chassis px-2 py-1 rounded border border-sys-border">
                     ${item.category === 'research' ? 'RSCH' : 'PROJ'} // ${item.topic}
                 </span>
                 ${item.year ? `<span class="text-[10px] font-mono text-sys-inkSub">${item.year}</span>` : ''}
             </div>
             <button onclick="closeModal()" class="w-8 h-8 flex items-center justify-center rounded-full hover:bg-sys-chassis text-sys-inkSub hover:text-sys-orange transition-colors text-xl leading-none" aria-label="Close">×</button>
        </div>

        <div class="p-8 overflow-y-auto">
          <h1 class="text-3xl font-bold text-sys-ink mb-6 tracking-tight">${item.title}</h1>

          <div class="prose prose-stone max-w-none mb-8 text-sys-inkSub leading-relaxed font-sans text-sm 
            [&>h3]:text-base [&>h3]:font-bold [&>h3]:font-mono [&>h3]:uppercase [&>h3]:tracking-widest [&>h3]:text-sys-ink [&>h3]:mt-6 [&>h3]:mb-3 
            [&>p]:mb-4 
            [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:mb-4">
            ${item.detailsHtml || `<p>${item.summary}</p>`}
          </div>

          ${linksHtml}
          ${tagHtml}
        </div>
      </div>
    `;
}

function closeModal() {
    const modal = document.getElementById('modal-container');
    modal.classList.add('opacity-0');
    setTimeout(() => {
        modal.classList.add('hidden');
        document.body.classList.remove('no-scroll');
        document.body.style.paddingRight = '';
    }, 300);
}

// Close modal on escape or outside click
document.getElementById('modal-container').addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// --- NAVIGATION STATE ---

function updateNavState(hash) {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        // Strip # from hash to compare with link text (rough approximation)
        const href = link.getAttribute('href');
        // Simple active check
        if (href === hash || (hash === '#' && href === '#home')) {
            link.classList.add('active');
            link.classList.remove('text-sys-inkSub');
        } else {
            link.classList.remove('active');
            link.classList.add('text-sys-inkSub');
        }
    });
}

function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('h-[60px]', 'bg-sys-chassis/95', 'backdrop-blur-sm', 'border-sys-border', 'shadow-sm');
            navbar.classList.remove('h-[80px]', 'border-transparent');
        } else {
            navbar.classList.remove('h-[60px]', 'bg-sys-chassis/95', 'backdrop-blur-sm', 'border-sys-border', 'shadow-sm');
            navbar.classList.add('h-[80px]', 'border-transparent');
        }
    });
}

function setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    btn.addEventListener('click', () => {
        const isOpen = !menu.classList.contains('-translate-y-full');
        if (isOpen) {
            closeMobileMenu();
        } else {
            menu.classList.remove('-translate-y-full');
            document.getElementById('icon-menu').classList.add('hidden');
            document.getElementById('icon-close').classList.remove('hidden');
        }
    });
}

function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.add('-translate-y-full');
    document.getElementById('icon-menu').classList.remove('hidden');
    document.getElementById('icon-close').classList.add('hidden');
}