// Keep these summaries aligned with the verified information shown on the work page.
window.ARQEVIN_PROJECTS = [
  {
    id: 'nuvanti',
    type: 'Independent project',
    category: 'E-commerce',
    summary: 'An independent e-commerce website for Nuvanti, a clothing brand. Its public site introduces the brand and provides an online-shop experience.',
    url: 'https://nuvanti-shop.pages.dev/'
  },
  {
    id: 'padelsync',
    type: 'University team project',
    category: 'MIU · SWE230',
    summary: 'A four-student academic project for MIU course SWE230.'
  },
  {
    id: 'inventory-tracker',
    type: 'Academic project',
    category: 'C++ console application',
    summary: 'A C++ console project focused on inventory and sales tracking.'
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

  if (!card) continue;
  const eyebrow = card.querySelector('.case-content .eyebrow');
  if (eyebrow) eyebrow.textContent = `${String(index + 1).padStart(2, '0')} / ${project.type} · ${project.category}`;

  if (project.url) {
    const link = card.querySelector('.case-meta a');
    if (link) link.href = project.url;
  }
}
