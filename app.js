// Cambio de tema
const toggle = document.querySelector('.theme-toggle');
const html = document.documentElement;

toggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// Restaurar tema
const stored = localStorage.getItem('theme');
const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
html.setAttribute('data-theme', stored || prefers);

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