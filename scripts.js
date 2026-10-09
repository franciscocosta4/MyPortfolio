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

// CV: download on desktop, open in new tab on mobile/tablet (so it can be viewed/shared/saved)
const resumeBtn = document.getElementById('resume-btn');
if (resumeBtn) {
  resumeBtn.addEventListener('click', () => {
    const isMobileOrTablet = /Android|iPhone|iPad|iPod|Mobile|Tablet/i.test(navigator.userAgent) || (navigator.maxTouchPoints > 0 && window.matchMedia('(pointer: coarse)').matches);
    if (isMobileOrTablet) {
      window.open('cv.pdf', '_blank', 'noopener');
    } else {
      const link = document.createElement('a');
      link.href = 'cv.pdf';
      link.download = 'Francisco_Costa_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });
}