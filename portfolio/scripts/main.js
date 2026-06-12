// main.js – Proyectos actualizados, sin thumbs, con iconos tecnológicos

const projects = [
  {
    n: 'Google Clone',
    d: 'Clon fiel de la interfaz de búsqueda de Google. Práctica de replicar layouts reales con HTML y CSS, prestando atención a detalles visuales y responsividad.',
    t: ['html5', 'css3-alt', 'flexbox'],   // para Font Awesome
    c: '#4285f4', bg: '#0a0a1a',
    img: 'assets/img/portfolio/1-google-copy.png'
  },
  {
    n: 'Primer Portfolio',
    d: 'Primer diseño de portafolio personal. Incluye secciones de inicio, sobre mí, proyectos, habilidades y contacto.',
    t: ['html5', 'css3-alt', 'js'],
    c: '#6b4e9c', bg: '#1a0a2e',
    img: 'assets/img/portfolio/2-primer-portfolio.png'
  },
  {
    n: 'Mokepon',
    d: 'Juego de combate por turnos inspirado en Pokémon. Elige mascota y combate contra la computadora.',
    t: ['js', 'gamepad', 'brain'],
    c: '#ff8800', bg: '#1a0800',
    img: 'assets/img/portfolio/3-last-mokepon.PNG'
  },
  {
    n: 'Guía ADSO',
    d: 'Guía completa del programa ADSO del SENA. Documentación, estructura curricular y recursos. Repositorio: github.com/santiagoencodigo/Guia-Completa-de-Analisis-y-Desarrollo-de-Software',
    t: ['markdown', 'book', 'code'],
    c: '#0b4eff', bg: '#0a1a4a',
    img: 'assets/img/portfolio/4-adso.PNG',
    url: 'https://santiagoencodigo.github.io/Guia-Completa-de-Analisis-y-Desarrollo-de-Software/'
  },
  {
    n: 'Port Avolio · Robots',
    d: 'Landing page conceptual de robótica para almacenes. Robot de Almacén, DroneBuilder y Articulado ABB.',
    t: ['html5', 'css3-alt', 'paint-brush'],
    c: '#8fb8b0', bg: '#0a1a0a',
    img: 'assets/img/portfolio/5-botfriends.png'
  },
  {
    n: 'Desarrollo Web Profesional',
    d: 'Ruta de aprendizaje profesional: Internet, Terminal, Git, HTML, CSS, JS, fundamentos de ingeniería. Repositorio: github.com/santiagoencodigo/Desarrollo-Web-Profesional',
    t: ['html5', 'css3-alt', 'js', 'git-alt'],
    c: '#6b4e9c', bg: '#1a0a2e',
    img: 'assets/img/portfolio/6-desarrollo-profesional.PNG',
    url: 'https://santiagoencodigo.github.io/Desarrollo-Web-Profesional/'
  },
  {
    n: 'Instant Talent',
    d: 'Sitio corporativo para outsourcing. Incluye servicios, proceso de selección y contacto.',
    t: ['html5', 'css3-alt', 'mobile-alt'],
    c: '#f0a500', bg: '#1a1000',
    img: 'assets/img/portfolio/7-instant-talent.PNG'
  },
  {
    n: 'AI Learning',
    d: 'Repositorio de aprendizaje sobre IA. Documentación de herramientas, modelos y experimentos con Claude.',
    t: ['brain', 'robot', 'markdown'],
    c: '#0b4eff', bg: '#0a0a2e',
    img: 'assets/img/portfolio/8-ai-learning.PNG'
  },
  {
    n: 'Carta de Amor',
    d: 'Proyecto creativo que muestra una declaración de amor en más de 100 idiomas.',
    t: ['html5', 'css3-alt', 'heart'],
    c: '#ff4444', bg: '#1a0000',
    img: 'assets/img/portfolio/9-carta-amor.PNG'
  },
  {
    n: 'Bochy Portfolio',
    d: 'Portafolio de obras seleccionadas con diseño minimalista. Secciones de perfil, experiencia y contacto.',
    t: ['html5', 'css3-alt', 'palette'],
    c: '#8fb8b0', bg: '#0a1a1a',
    img: 'assets/img/portfolio/10-bochy-portfolio.png'
  },
  {
    n: 'Santiagoencodigo Contacto',
    d: 'Página de contacto profesional con enlaces a redes sociales y correo.',
    t: ['html5', 'css3-alt', 'address-card'],
    c: '#6b4e9c', bg: '#1a0a2e',
    img: 'assets/img/portfolio/11-santiagoencodigo-portfolio.PNG'
  }
];

const featuredIndices = [1, 3, 9];
const featuredProjects = featuredIndices.map(i => projects[i]);

// Reloj
const clockEl = document.getElementById('clock');
function updateClock() {
  const n = new Date();
  clockEl.textContent = `${String(n.getHours()).padStart(2,'0')}:${String(n.getMinutes()).padStart(2,'0')}:${String(n.getSeconds()).padStart(2,'0')}`;
}
updateClock(); setInterval(updateClock, 1000);

// Typing
const phrases = ['Desarrollo a medida', 'Innovación Digital', 'Soluciones Full-Stack', 'UI/UX Design'];
let phraseIdx=0, charIdx=0, isDeleting=false;
const typingEl = document.getElementById('typing');
function typeEffect() {
  const cur = phrases[phraseIdx];
  if (!isDeleting) {
    typingEl.textContent = cur.slice(0, ++charIdx);
    if (charIdx === cur.length) { isDeleting = true; setTimeout(typeEffect, 2000); return; }
  } else {
    typingEl.textContent = cur.slice(0, --charIdx);
    if (!charIdx) { isDeleting = false; phraseIdx = (phraseIdx+1)%phrases.length; }
  }
  setTimeout(typeEffect, isDeleting ? 60 : 100);
}
typeEffect();

// Carrusel
let carouselCurrent = 0;
const slides = document.querySelectorAll('.cs');
const carouselDots = document.querySelectorAll('.cdot');
function carouselGo(i) {
  slides[carouselCurrent].classList.remove('on');
  carouselDots[carouselCurrent].classList.remove('on');
  carouselCurrent = (i+slides.length)%slides.length;
  slides[carouselCurrent].classList.add('on');
  carouselDots[carouselCurrent].classList.add('on');
}
carouselDots.forEach((d,i)=> d.addEventListener('click', ()=> carouselGo(i)));
let carouselInterval = setInterval(()=> carouselGo(carouselCurrent+1), 5000);
document.getElementById('carousel').addEventListener('mouseenter', ()=> clearInterval(carouselInterval));
document.getElementById('carousel').addEventListener('mouseleave', ()=> carouselInterval = setInterval(()=> carouselGo(carouselCurrent+1), 5000));

// Paneles
const rail = document.getElementById('rail');
const panels = document.querySelectorAll('.panel');
const totalPanels = panels.length;
let currentPanel = 0;
const dotsContainer = document.getElementById('pdots');
panels.forEach((_,i)=> {
  const d = document.createElement('div');
  d.className = 'pd' + (i===0?' on':'');
  d.addEventListener('click', ()=> goToPanel(i));
  dotsContainer.appendChild(d);
});

function goToPanel(idx) {
  if (idx<0 || idx>=totalPanels) return;
  currentPanel = idx;
  rail.style.transform = `translateX(-${idx*100}vw)`;
  document.querySelectorAll('.pd').forEach((d,i)=> d.classList.toggle('on', i===idx));
  document.getElementById('ap').classList.toggle('gone', idx===0);
  document.getElementById('an').classList.toggle('gone', idx===totalPanels-1);
}
goToPanel(0);

document.getElementById('ap').addEventListener('click', ()=> goToPanel(currentPanel-1));
document.getElementById('an').addEventListener('click', ()=> goToPanel(currentPanel+1));
document.addEventListener('keydown', e=> {
  if (e.key === 'ArrowRight') goToPanel(currentPanel+1);
  else if (e.key === 'ArrowLeft') goToPanel(currentPanel-1);
  else if (e.key === 'Escape') closeModal();
});

// Wheel ultra sensible (200ms timeout)
let wheelTimeout;
document.addEventListener('wheel', e => {
  if (document.getElementById('mbg').classList.contains('on')) return;
  if (e.target.closest('.strip, .ed-l, .ed-r, .grid-body')) return;
  if (wheelTimeout) return;
  const delta = e.deltaY || e.deltaX;
  if (Math.abs(delta) > 5) {
    delta > 0 ? goToPanel(currentPanel+1) : goToPanel(currentPanel-1);
    wheelTimeout = setTimeout(()=> wheelTimeout = null, 200);
  }
}, { passive: true });

// Touch
let touchStartX = 0;
document.addEventListener('touchstart', e=> { touchStartX = e.touches[0].clientX; }, {passive:true});
document.addEventListener('touchend', e=> {
  if (document.getElementById('mbg').classList.contains('on')) return;
  const dx = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(dx) > 30) dx>0 ? goToPanel(currentPanel+1) : goToPanel(currentPanel-1);
});

document.querySelectorAll('[data-panel]').forEach(el=> {
  el.addEventListener('click', ()=> goToPanel(parseInt(el.dataset.panel)));
});

// Icon mapping
const techIcons = {
  'html5': 'fab fa-html5', 'css3-alt': 'fab fa-css3-alt', 'js': 'fab fa-js',
  'flexbox': 'fas fa-arrows-alt', 'markdown': 'fab fa-markdown', 'book': 'fas fa-book',
  'code': 'fas fa-code', 'paint-brush': 'fas fa-paint-brush', 'git-alt': 'fab fa-git-alt',
  'mobile-alt': 'fas fa-mobile-alt', 'brain': 'fas fa-brain', 'robot': 'fas fa-robot',
  'heart': 'fas fa-heart', 'palette': 'fas fa-palette', 'address-card': 'fas fa-address-card',
  'gamepad': 'fas fa-gamepad'
};

// Construir strip
const stripEl = document.getElementById('strip');
featuredProjects.forEach((p, idx)=> {
  const card = document.createElement('div'); card.className = 'pc';
  const techHtml = p.t.map(t => `<i class="${techIcons[t] || 'fas fa-code'}"></i>`).join('');
  card.innerHTML = `
    <img class="pc-img" src="${p.img}" alt="${p.n}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
    <div class="pc-grad"></div>
    <div class="pc-foot"><div><div class="pc-num">// ${String(idx+1).padStart(2,'0')}</div><div class="pc-name">${p.n.toUpperCase()}</div></div><div class="pc-tech">${techHtml}</div></div>
    <div class="pc-cta">VER DETALLES</div>`;
  card.addEventListener('click', ()=> openModal(projects.indexOf(p)));
  stripEl.appendChild(card);
});
stripEl.addEventListener('wheel', e=> { e.stopPropagation(); stripEl.scrollLeft += e.deltaY*1.6; }, {passive:true});

// Grid
const gridEl = document.getElementById('pgrid');
projects.forEach((p,i)=> {
  const card = document.createElement('div'); card.className = 'gc';
  const techHtml = p.t.slice(0,2).map(t => `<i class="${techIcons[t] || 'fas fa-code'}"></i>`).join('');
  card.innerHTML = `
    <div class="gi"><img src="${p.img}" alt="${p.n}"><div class="gi-cta">VER DETALLES</div></div>
    <div class="ginfo"><span class="gname">${p.n}</span><span class="gicon">${techHtml}</span></div>`;
  card.addEventListener('click', ()=> openModal(i));
  gridEl.appendChild(card);
});

// Chips tecnológicos en P3
const chipContainer = document.getElementById('tech-chips');
const technologies = [
  { name: 'HTML5', icon: 'fab fa-html5' }, { name: 'CSS3', icon: 'fab fa-css3-alt' },
  { name: 'JavaScript', icon: 'fab fa-js' }, { name: 'PHP', icon: 'fab fa-php' },
  { name: 'Laravel', icon: 'fab fa-laravel' }, { name: 'JIRA', icon: 'fab fa-jira' },
  { name: 'Git', icon: 'fab fa-git-alt' }, { name: 'GitHub', icon: 'fab fa-github' },
  { name: 'SQL', icon: 'fas fa-database' }
];
technologies.forEach(tech => {
  const chip = document.createElement('span'); chip.className = 'chip';
  chip.innerHTML = `<i class="${tech.icon}"></i> ${tech.name}`;
  chipContainer.appendChild(chip);
});

// Modal (sin thumbs)
let currentModalIndex = 0;
function openModal(idx) {
  currentModalIndex = idx;
  const p = projects[idx];
  document.getElementById('mtitle').textContent = p.n;
  document.getElementById('mdesc').textContent = p.d;
  document.getElementById('mimg').innerHTML = `<img src="${p.img}" alt="${p.n}" style="filter:brightness(.55) saturate(.7)">`;
  document.getElementById('mbadges').innerHTML = p.t.map(t => {
    const icon = techIcons[t] || 'fas fa-code';
    return `<span class="mbadge"><i class="${icon}"></i> ${t}</span>`;
  }).join('');
  document.getElementById('mbg').classList.add('on');
}
function closeModal() { document.getElementById('mbg').classList.remove('on'); }
function mbgClick(e) { if (e.target === document.getElementById('mbg')) closeModal(); }

window.openModal = openModal;
window.closeModal = closeModal;
window.mbgClick = mbgClick;