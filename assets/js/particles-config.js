const particlesConfig = {
  particles: {
    number: { 
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: { 
      value: "#00fff7" 
    },
    shape: { 
      type: "circle" 
    },
    opacity: { 
      value: 0.4,
      random: true
    },
    size: { 
      value: 3,
      random: true
    },
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
      onhover: { 
        enable: true, 
        mode: "repulse" 
      },
      onclick: { 
        enable: true, 
        mode: "push" 
      }
    },
    modes: {
      repulse: { 
        distance: 100 
      },
      push: { 
        particles_nb: 4 
      }
    }
  },
  retina_detect: true
};

export default particlesConfig;