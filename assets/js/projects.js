// Keep each homepage summary tied to its named project instead of list position.
window.ARQEVIN_PROJECTS = [
  {
    id: 'nuvanti',
    summary: 'Commercial e-commerce storefront for a fashion brand, presenting its collection and products in a live online shop.'
  },
  {
    id: 'padelsync',
    summary: 'A four-student MIU SWE230 team web app concept for court availability, reservations, and court administration.'
  },
  {
    id: 'restaurant-management',
    summary: 'Juicy Lucy staff screens for managing tables and menu items, then booking a guest, table, time, and meal selection.'
  }
];

for (const project of window.ARQEVIN_PROJECTS) {
  document.querySelectorAll(`[data-project-summary="${project.id}"]`).forEach((node) => {
    node.textContent = project.summary;
  });
}
