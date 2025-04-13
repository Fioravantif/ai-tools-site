document.addEventListener('DOMContentLoaded', function() {
  // Inizializzazione particelle
  if (typeof particlesJS !== 'undefined') {
    particlesJS('particles-js', {
      particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: "#00fff7" },
        shape: { type: "circle" },
        opacity: { value: 0.4, random: true },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#00fff7",
          opacity: 0.3,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "bounce"
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "repulse" },
          onclick: { enable: true, mode: "push" }
        },
        modes: {
          repulse: { distance: 100 },
          push: { particles_nb: 4 }
        }
      },
      retina_detect: true
    });
  }

  // Inizializzazione ScrollReveal
  if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal().reveal('.animated-section', {
      distance: '50px',
      origin: 'bottom',
      duration: 800,
      interval: 150,
      reset: false
    });
  }

  // Funzione di ricerca
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const query = this.value.trim().toLowerCase();
      const tools = document.querySelectorAll('.tool');
      
      tools.forEach(tool => {
        const textContent = tool.textContent.toLowerCase();
        const isVisible = textContent.includes(query);
        tool.style.display = isVisible ? 'block' : 'none';
      });
    });
  }

  // Filtri per categoria
  const filterButtons = document.querySelectorAll('.filter-btn');
  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const category = this.dataset.category;
        
        // Rimuovi active da tutti i pulsanti
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Aggiungi active al pulsante cliccato
        this.classList.add('active');
        
        // Filtra gli strumenti
        document.querySelectorAll('.tool').forEach(tool => {
          if (category === 'all' || tool.dataset.category === category) {
            tool.style.display = 'block';
          } else {
            tool.style.display = 'none';
          }
        });
        
        // Scroll alla sezione chat se applicabile
        if (category === 'chat') {
          document.querySelector('.tool-section').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // Apri automaticamente i dettagli nella sezione chat
  if (window.location.pathname.includes('tool.html')) {
    document.querySelectorAll('[data-category="chat"] details').forEach(detail => {
      detail.open = true;
    });
  }
});