document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('contentOverlay');
  const content = document.getElementById('contentDisplay');
  const closeBtn = document.getElementById('closeButton');
  const buttons = document.querySelectorAll('.main-button');

  const htmlBlocks = {
    website: `
      <h2 id="dialogTitle" class="text-3xl font-bold mb-4">Website Under Construction</h2>
      <p class="text-lg mb-2">Our official CONCORDIA CASH website is currently under development.</p>
      <p class="text-lg mb-4">Please check back regularly for updates!</p>
      <p class="text-lg"><a href="https://concordia.cash/" target="_blank" rel="noopener noreferrer" class="text-[var(--concordia-green)] hover:text-[var(--concordia-red)] font-semibold underline">https://concordia.cash/</a></p>
    `,
    whitepaper: `
      __WHITEPAPER_HTML__
    `,
    branding: `
      __BRANDING_HTML__
    `
  };

  function showOverlay(type) {
    content.innerHTML = htmlBlocks[type] || '';
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function hideOverlay() {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
    content.innerHTML = '';
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
});
