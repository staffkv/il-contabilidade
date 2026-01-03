// Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileNav = document.getElementById('mobileNav');
    
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      mobileMenuBtn.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link-mobile').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
      });
    });