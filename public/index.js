
(function () {
  const btn = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('icon-open');
  const closeIcon = document.getElementById('icon-close');

  function setMenuOpen(isOpen) {
    if (!menu) return;

    menu.classList.toggle('hidden', !isOpen);
    menu.classList.toggle('flex', isOpen);
    menu.classList.toggle('flex-col', isOpen);
    btn?.setAttribute('aria-expanded', String(isOpen));
    openIcon?.classList.toggle('hidden', isOpen);
    closeIcon?.classList.toggle('hidden', !isOpen);
  }

  function initNavigation() {
    if (btn && menu) {
      btn.addEventListener('click', () => {
        const isOpen = menu.classList.contains('hidden');
        setMenuOpen(isOpen);
      });

      menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenuOpen(false));
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation, { once: true });
  } else {
    initNavigation();
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href')?.slice(1);
      if (!targetId) return;

      const target = document.getElementById(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', `#${targetId}`);
    });
  });

  const navLinks = document.querySelectorAll('[data-nav-link]');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const currentHash = window.location.hash;

  navLinks.forEach((link) => {
    const href = link.getAttribute('href') || '';
    let isActive = false;

    if (href === currentPath || href === './' || href === 'index.html') {
      isActive = currentPath === 'index.html' || currentPath === '';
    } else if (href.includes('product.html')) {
      isActive = currentPath === 'product.html';
    } else if (href.includes('about.html')) {
      isActive = currentPath === 'about.html';
    } else if (href.startsWith('#')) {
      isActive = currentHash === href;
    }

    link.classList.toggle('text-primary', isActive);
    link.classList.toggle('border-primary', isActive);
    link.classList.toggle('border-b-2', isActive);
    link.classList.toggle('pb-1', isActive);
    link.classList.toggle('font-semibold', isActive);
    link.classList.toggle('text-text', !isActive);
  });

  if (window.location.hash) {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target) {
      setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    }
  }

  const thumbnails = document.querySelectorAll('.product-thumbnail');
  thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', () => {
      const full = thumb.getAttribute('data-full');
      if (!full) return;
      const card = thumb.closest('.product-card');
      const mainImage = card?.querySelector('.product-main-image');
      if (mainImage) mainImage.setAttribute('src', full);
      card?.querySelectorAll('.product-thumbnail').forEach((item) => item.classList.remove('border-primary'));
      thumb.classList.add('border-primary');
    });
  });
})();
