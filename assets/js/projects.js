// Update project facts here after reviewing each source repository.
// Static HTML copy remains available if JavaScript is disabled.
window.ARQEVIN_PROJECTS = [
  {
    id: 'nuvanti',
    name: 'Nuvanti',
    type: 'Independent project',
    category: 'E-commerce',
    summary: 'A clothing brand storefront with a focused product browsing and shopping experience.',
    status: 'Case study in progress; implementation details need source verification.',
    url: 'https://nuvanti-shop.pages.dev/'
  },
  {
    id: 'padelsync',
    name: 'PadelSync',
    type: 'University team project',
    category: 'Academic software engineering project',
    summary: 'A university project associated with MIU course SWE230, created by a team of four.',
    status: 'Purpose, features, and implementation details need source verification.'
  },
  {
    id: 'inventory-tracker',
    name: 'Inventory & Sales Tracker',
    type: 'Academic project',
    category: 'C++',
    summary: 'A C++ console application listed as an academic project.',
    status: 'Functionality and implementation details need source verification.'
  }
];

for (const [index, project] of window.ARQEVIN_PROJECTS.entries()) {
  const card = document.querySelector(`#${project.id}`);
  const summaryTargets = [
    card?.querySelector('.case-summary'),
    project.id === 'nuvanti' ? document.querySelector('.featured-project .project-info > p:not(.eyebrow)') : null,
    project.id === 'padelsync' ? document.querySelector('.work-secondary .mini-project:nth-child(1) p:not(.eyebrow)') : null,
    project.id === 'inventory-tracker' ? document.querySelector('.work-secondary .mini-project:nth-child(2) p:not(.eyebrow)') : null
  ];
  summaryTargets.filter(Boolean).forEach((node) => { node.textContent = project.summary; });

  if (card) {
    const eyebrow = card.querySelector('.case-content .eyebrow');
    const type = card.querySelector('.case-meta strong');
    if (eyebrow) eyebrow.textContent = `${String(index + 1).padStart(2, '0')} / ${project.type} · ${project.category}`;
    if (type) type.textContent = project.type;
    const status = card.querySelector('[data-project-status]');
    if (status) status.textContent = project.status;
    if (project.url) {
      const link = card.querySelector('.case-meta a');
      if (link) link.href = project.url;
    }
  }
}
