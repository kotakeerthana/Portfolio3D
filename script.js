<<<<<<< HEAD
// About Me Section 
document.addEventListener('DOMContentLoaded', function() {
  const aboutSection = document.querySelector('.about');
  
  const animateBubbles = () => {
      const bubbles = document.querySelectorAll('.bubble');
      bubbles.forEach((bubble, index) => {
          setTimeout(() => {
              bubble.style.opacity = '1';
              bubble.style.transform = 'translateY(0)';
          }, index * 100);
      });
  };
  
  const animateButtons = () => {
      const buttons = document.querySelectorAll('.btn-contact, .btn-resume');
      buttons.forEach((button, index) => {
          setTimeout(() => {
              button.style.opacity = '1';
              button.style.transform = 'translateY(0)';
          }, index * 100 + 300);
      });
  };
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateBubbles();
              animateButtons();
          }
      });
  }, { threshold: 0.1 });
  
  if (aboutSection) {
      observer.observe(aboutSection);
  }
  
  const bubbles = document.querySelectorAll('.bubble');
  bubbles.forEach(bubble => {
      bubble.addEventListener('mouseenter', () => {
          bubble.style.transform = 'translateY(-3px)';
          bubble.style.boxShadow = '0 5px 15px rgba(127, 67, 167, 0.3)';
      });
      
      bubble.addEventListener('mouseleave', () => {
          bubble.style.transform = 'translateY(0)';
          bubble.style.boxShadow = 'none';
      });
  });
});


// Experience 
document.addEventListener('DOMContentLoaded', function() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.1 });
  
  timelineItems.forEach(item => {
      timelineObserver.observe(item);
  });

  const projectLinks = document.querySelectorAll('.demo-link, .code-link');
  projectLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          console.log(`Clicked: ${this.textContent}`);
      });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPercent = (x / rect.width) * 100 - 50;
      const yPercent = (y / rect.height) * 100 - 50;
      
      card.style.setProperty('--mouse-x', `${xPercent}%`);
      card.style.setProperty('--mouse-y', `${yPercent}%`);
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--mouse-x', '0%');
      card.style.setProperty('--mouse-y', '0%');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {

    const deviconsCSS = document.createElement('link');
    deviconsCSS.rel = 'stylesheet';
    deviconsCSS.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    document.head.appendChild(deviconsCSS);
    
    const skillSection = document.querySelector('.skills');
    const meterItems = document.querySelectorAll('.meter-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillMeters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(skillSection);
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const skillName = this.getAttribute('data-skill');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.fa')) {
        const fontAwesomeCSS = document.createElement('link');
        fontAwesomeCSS.rel = 'stylesheet';
        fontAwesomeCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(fontAwesomeCSS);
    }
    
    const downloadBtn = document.querySelector('.resume-download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            console.log('Resume download initiated');
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.fa')) {
        const fontAwesomeCSS = document.createElement('link');
        fontAwesomeCSS.rel = 'stylesheet';
        fontAwesomeCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(fontAwesomeCSS);
    }
});
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    });
  });
=======
// About Me Section 
document.addEventListener('DOMContentLoaded', function() {
  const aboutSection = document.querySelector('.about');
  
  const animateBubbles = () => {
      const bubbles = document.querySelectorAll('.bubble');
      bubbles.forEach((bubble, index) => {
          setTimeout(() => {
              bubble.style.opacity = '1';
              bubble.style.transform = 'translateY(0)';
          }, index * 100);
      });
  };
  
  const animateButtons = () => {
      const buttons = document.querySelectorAll('.btn-contact, .btn-resume');
      buttons.forEach((button, index) => {
          setTimeout(() => {
              button.style.opacity = '1';
              button.style.transform = 'translateY(0)';
          }, index * 100 + 300);
      });
  };
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateBubbles();
              animateButtons();
          }
      });
  }, { threshold: 0.1 });
  
  if (aboutSection) {
      observer.observe(aboutSection);
  }
  
  const bubbles = document.querySelectorAll('.bubble');
  bubbles.forEach(bubble => {
      bubble.addEventListener('mouseenter', () => {
          bubble.style.transform = 'translateY(-3px)';
          bubble.style.boxShadow = '0 5px 15px rgba(127, 67, 167, 0.3)';
      });
      
      bubble.addEventListener('mouseleave', () => {
          bubble.style.transform = 'translateY(0)';
          bubble.style.boxShadow = 'none';
      });
  });
});


// Experience 
document.addEventListener('DOMContentLoaded', function() {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  const timelineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.1 });
  
  timelineItems.forEach(item => {
      timelineObserver.observe(item);
  });

  const projectLinks = document.querySelectorAll('.demo-link, .code-link');
  projectLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          console.log(`Clicked: ${this.textContent}`);
      });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPercent = (x / rect.width) * 100 - 50;
      const yPercent = (y / rect.height) * 100 - 50;
      
      card.style.setProperty('--mouse-x', `${xPercent}%`);
      card.style.setProperty('--mouse-y', `${yPercent}%`);
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--mouse-x', '0%');
      card.style.setProperty('--mouse-y', '0%');
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {

    const deviconsCSS = document.createElement('link');
    deviconsCSS.rel = 'stylesheet';
    deviconsCSS.href = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css';
    document.head.appendChild(deviconsCSS);
    
    const skillSection = document.querySelector('.skills');
    const meterItems = document.querySelectorAll('.meter-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillMeters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    observer.observe(skillSection);
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const skillName = this.getAttribute('data-skill');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.fa')) {
        const fontAwesomeCSS = document.createElement('link');
        fontAwesomeCSS.rel = 'stylesheet';
        fontAwesomeCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(fontAwesomeCSS);
    }
    
    const downloadBtn = document.querySelector('.resume-download-btn');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            console.log('Resume download initiated');
        });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    if (!document.querySelector('.fa')) {
        const fontAwesomeCSS = document.createElement('link');
        fontAwesomeCSS.rel = 'stylesheet';
        fontAwesomeCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        document.head.appendChild(fontAwesomeCSS);
    }
});
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    });
  });
>>>>>>> 8204ed9 (2026 portfolio commit)
