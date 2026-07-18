const copyButton = document.querySelector('[data-copy-citation]');
const citation = document.querySelector('#bibtex-code');
const copyStatus = document.querySelector('#copy-status');

copyButton?.addEventListener('click', async () => {
  if (!citation || !copyStatus) return;

  try {
    await navigator.clipboard.writeText(citation.textContent.trim());
    copyStatus.textContent = 'BibTeX copied to clipboard.';
    copyButton.textContent = 'Copied';
  } catch {
    copyStatus.textContent = 'Select the citation text and copy it manually.';
  }

  window.setTimeout(() => {
    copyButton.textContent = 'Copy';
    copyStatus.textContent = '';
  }, 2400);
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const teaser = document.querySelector('#teaser-video');

function syncMotionPreference() {
  if (!teaser) return;
  if (reducedMotion.matches) {
    teaser.pause();
    teaser.removeAttribute('autoplay');
  } else {
    teaser.setAttribute('autoplay', '');
    teaser.play().catch(() => {});
  }
}

syncMotionPreference();
reducedMotion.addEventListener?.('change', syncMotionPreference);
