// Keep each homepage summary tied to its named project instead of list position.
window.ARQEVIN_PROJECTS = [
  {
    id: 'nuvanti',
    summary: 'Commercial e-commerce storefront for a fashion brand, presenting its collection and products in a live online shop.'
  },
  {
    id: 'padelsync',
    summary: 'A web-based padel court reservation and scheduling platform developed as a four-student academic project for MIU course SWE230.'
  },
  {
    id: 'restaurant-management',
    summary: 'Juicy Lucy staff tools for managing tables and menu items, booking guests, adding meals to reservations, and checking out orders.'
  }
];

for (const project of window.ARQEVIN_PROJECTS) {
  document.querySelectorAll(`[data-project-summary="${project.id}"]`).forEach((node) => {
    node.textContent = project.summary;
  });
}
