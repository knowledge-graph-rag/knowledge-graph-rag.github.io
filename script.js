const copyButton = document.querySelector('[data-copy-citation]');
const copyStatus = document.querySelector('#copy-status');
const citationTabs = [...document.querySelectorAll('[data-citation-tab]')];
const citationPanels = [...document.querySelectorAll('[data-citation-panel]')];

function selectCitation(name, moveFocus = false) {
  citationTabs.forEach((tab) => {
    const isSelected = tab.dataset.citationTab === name;
    tab.classList.toggle('is-active', isSelected);
    tab.setAttribute('aria-selected', String(isSelected));
    tab.tabIndex = isSelected ? 0 : -1;
    if (isSelected && moveFocus) tab.focus();
  });

  citationPanels.forEach((panel) => {
    panel.hidden = panel.dataset.citationPanel !== name;
  });

  if (copyStatus) copyStatus.textContent = '';
}

citationTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectCitation(tab.dataset.citationTab));
  tab.addEventListener('keydown', (event) => {
    let nextIndex;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % citationTabs.length;
    if (event.key === 'ArrowLeft') nextIndex = (index - 1 + citationTabs.length) % citationTabs.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = citationTabs.length - 1;
    if (nextIndex === undefined) return;
    event.preventDefault();
    selectCitation(citationTabs[nextIndex].dataset.citationTab, true);
  });
});

copyButton?.addEventListener('click', async () => {
  const activePanel = citationPanels.find((panel) => !panel.hidden);
  const citation = activePanel?.querySelector('[data-citation-code]');
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
