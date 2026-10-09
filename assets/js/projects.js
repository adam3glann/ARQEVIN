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
    summary: 'A restaurant management interface for Juicy Lucy staff to manage tables and menu items, book guests, add meals to reservations, and check out orders.'
  },
  {
    id: 'stockflow',
    summary: 'StockFlow ERP is an inventory and business operations system in development. Current screens show inventory monitoring, product and category records, with additional sections for suppliers, customers, purchasing, sales, returns, employees, and reports.'
  }
];

for (const project of window.ARQEVIN_PROJECTS) {
  document.querySelectorAll(`[data-project-summary="${project.id}"]`).forEach((node) => {
    node.textContent = project.summary;
  });
}
