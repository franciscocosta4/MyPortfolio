// Mobile menu toggle
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  const navToggle = document.getElementById('nav-toggle');
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
  
  // Close menu when clicking a link
  if (isOpen) {
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu, { once: true });
    });
  }
}

function closeMenu() {
  const navLinks = document.getElementById('nav-links');
  const navToggle = document.getElementById('nav-toggle');
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

// Close menu on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

// Close menu on resize to desktop
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMenu();
});