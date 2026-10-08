// Keep each homepage summary tied to its named project instead of list position.
window.ARQEVIN_PROJECTS = [
  {
    id: 'nuvanti',
    summary: 'An independent e-commerce website for Nuvanti, a clothing brand. Its public site introduces the brand and provides an online-shop experience.'
  },
  {
    id: 'padelsync',
    summary: 'A four-student academic project for MIU course SWE230.'
  },
  {
    id: 'restaurant-management',
    summary: 'Restaurant tables, menu items, and staff booking workflow screens.'
  }
];

for (const project of window.ARQEVIN_PROJECTS) {
  document.querySelectorAll(`[data-project-summary="${project.id}"]`).forEach((node) => {
    node.textContent = project.summary;
  });
}
