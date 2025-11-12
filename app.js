// Cambio de tema
const toggle = document.querySelector('.theme-toggle');
const html = document.documentElement;
const sunIcon = document.querySelector('.theme-toggle use[href="#icon-sun"]');
const moonIcon = document.querySelector('.theme-toggle use[href="#icon-moon"]');

function updateThemeIcon(theme) {
  if (theme === 'dark') {
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
  } else {
    sunIcon.style.display = 'block';
    moonIcon.style.display = 'none';
  }
}

toggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
});

// Restaurar tema
const stored = localStorage.getItem('theme');
const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const initialTheme = stored || prefers;
html.setAttribute('data-theme', initialTheme);
updateThemeIcon(initialTheme);

// Año dinámico
document.getElementById('year').textContent = new Date().getFullYear();

// Prefetch links al pasar el ratón (mejora 100 ms en hover)
const links = document.querySelectorAll('a[href^="http"]');
links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const hint = document.createElement('link');
    hint.rel = 'prefetch';
    hint.href = link.href;
    document.head.appendChild(hint);
  });
});