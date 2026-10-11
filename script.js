const themeToggle = document.querySelector('#theme-toggle');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
let savedTheme = null;

// Storage can be unavailable in private browsing or restricted contexts.
try {
  savedTheme = localStorage.getItem('codplay-theme');
} catch {
  // The toggle still works without persistence.
}

let hasPreference = savedTheme === 'light' || savedTheme === 'dark';

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.dataset.theme = theme;
  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute('aria-label', `Switch to ${isDark ? 'light' : 'dark'} theme`);
  themeToggle.innerHTML = `${isDark ? 'Light' : 'Dark'} theme <span aria-hidden="true">◐</span>`;
}

applyTheme(hasPreference ? savedTheme : systemTheme.matches ? 'dark' : 'light');

themeToggle.addEventListener('click', () => {
  const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  hasPreference = true;
  applyTheme(theme);
  try {
    localStorage.setItem('codplay-theme', theme);
  } catch {
    // Keep the selected theme for this visit even when storage is blocked.
  }
});

systemTheme.addEventListener('change', (event) => {
  if (!hasPreference) applyTheme(event.matches ? 'dark' : 'light');
});
