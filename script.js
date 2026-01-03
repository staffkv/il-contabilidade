const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
  mobileMenuBtn.classList.toggle('active');
});

document.querySelectorAll('.nav-link-mobile').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
  });
});

function initAccordion() {
  const accordionTrigger = document.getElementById('servicosAccordion');
  const accordionContent = document.getElementById('servicosContent');
  
  if (!accordionTrigger || !accordionContent) return;
  
  accordionTrigger.addEventListener('click', () => {
    accordionTrigger.classList.toggle('active');
    accordionContent.classList.toggle('active');
  });
}

// ==========================================
// SMOOTH SCROLL PARA ÂNCORAS
// ==========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Ignora links vazios ou apenas "#"
      if (href === '#' || href === '') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        // Calcula a posição considerando o header fixo
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20; // 20px de margem extra
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ==========================================
// HIGHLIGHT DO MENU NA SEÇÃO ATUAL (OPCIONAL)
// ==========================================
function highlightCurrentSection() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}
