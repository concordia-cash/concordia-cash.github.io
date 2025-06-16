document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('contentOverlay');
  const closeBtn = document.getElementById('closeButton');
  const buttons = document.querySelectorAll('.main-button');
  const currentYearSpan = document.getElementById('currentYear');

  const contentBlocks = {
    whitepaper: document.getElementById('whitepaperContent'),
    branding: document.getElementById('brandingContent'),
    social_media: document.getElementById('socialContent'),
  };

  let currentVisible = null;

  function showOverlay(type) {
    if (currentVisible) currentVisible.classList.add('hidden');
    const block = contentBlocks[type];
    if (block) {
      block.classList.remove('hidden');
      currentVisible = block;
      overlay.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
  }

  function hideOverlay() {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
    if (currentVisible) currentVisible.classList.add('hidden');
    currentVisible = null;
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => showOverlay(btn.dataset.content));
  });

  closeBtn.addEventListener('click', hideOverlay);

  overlay.addEventListener('click', e => {
    if (e.target === overlay) hideOverlay();
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') hideOverlay();
  });

  if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
  }
});
