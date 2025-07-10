
const sections = document.querySelectorAll('main .step');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; 
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

function initParticles(colorPart, colorLines) {
  particlesJS("particles-js", {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: colorPart },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: { value: 4, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: colorLines,
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: false },
        resize: true
      },
      modes: {
        repulse: { distance: 100, duration: 0.4 }
      }
    },
    retina_detect: true
  });
}

const particlesLightColor = "#3b82f6";
const particlesLightLines = "#60a5fa";

const particlesDarkColor = "#a5b4fc";
const particlesDarkLines = "#818cf8";

initParticles(particlesLightColor, particlesLightLines);

const toggleBtn = document.getElementById('darkModeToggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    toggleBtn.textContent = '☀️';

    initParticles(particlesDarkColor, particlesDarkLines);
  } else {
    toggleBtn.textContent = '🌙';

    initParticles(particlesLightColor, particlesLightLines);
  }
});
