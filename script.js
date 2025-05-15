document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.menu a');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 300)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        menuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.skill-item, .projeto-card, .soft-skill-item').forEach(item => {
        observer.observe(item);
    });
    
    document.querySelectorAll('.skill-icon').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    document.querySelectorAll('.social-icon, .ver-projeto').forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.onscroll = function () {
        const btn = document.getElementById("btnTopo");
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          btn.style.display = "block";
        } else {
          btn.style.display = "none";
        }
      };
    
      function voltarAoTopo() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }

    
    // Efeito de typing na seção hero
    const heroTitle = document.querySelector('.hero h1');
    const originalText = heroTitle.innerHTML;
    heroTitle.innerHTML = '';
    
    let i = 0;
    function typeWriter() {
        if (i < originalText.length) {
            heroTitle.innerHTML += originalText.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    }
    
    setTimeout(typeWriter, 500);
    
    document.querySelectorAll('.projeto-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (!e.target.classList.contains('ver-projeto')) {
                const verProjeto = this.querySelector('.ver-projeto');
                verProjeto.click();
            }
        });
    });
    
    const contatoBtn = document.querySelector('.btn-outline');
    contatoBtn.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 0 15px rgba(0, 225, 206, 0.5)';
    });
    
    contatoBtn.addEventListener('mouseleave', function() {
        this.style.boxShadow = 'none';
    });

});