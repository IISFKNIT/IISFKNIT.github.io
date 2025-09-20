// Modern UI/UX Enhancement Script for IISF KNIT Website

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // SMOOTH SCROLLING FOR NAVIGATION LINKS
    // ========================================
    
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ========================================
    // HEADER SCROLL EFFECT
    // ========================================
    
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add/remove scrolled class for styling
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // ========================================
    // ACTIVE NAVIGATION HIGHLIGHTING
    // ========================================
    
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-menu ul li a[href^="#"]');
    
    function updateActiveNav() {
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navItems.forEach(navItem => {
                    navItem.parentElement.classList.remove('active');
                    if (navItem.getAttribute('href') === `#${sectionId}`) {
                        navItem.parentElement.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    
    // ========================================
    // LOADING ANIMATION IMPROVEMENTS
    // ========================================
    
    // Add staggered animation for team members
    function addStaggeredAnimation() {
        const members = document.querySelectorAll('.member');
        members.forEach((member, index) => {
            member.style.animationDelay = `${index * 0.1}s`;
        });
    }
    
    // Call after a short delay to ensure content is loaded
    setTimeout(addStaggeredAnimation, 500);
    
    // ========================================
    // INTERSECTION OBSERVER FOR ANIMATIONS
    // ========================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll-triggered animations
    const animateElements = document.querySelectorAll('.member, .portfolio-wrap, .testimonial-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // ========================================
    // PERFORMANCE OPTIMIZATIONS
    // ========================================
    
    // Lazy load images
    const images = document.querySelectorAll('img[src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('fade-in');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
    
    // ========================================
    // CLICK EFFECTS
    // ========================================
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.btn, .btn-modern');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// ========================================
// CSS FOR ANIMATIONS (Added dynamically)
// ========================================

const animationCSS = `
    <style>
        .animate-in {
            animation: slideInUp 0.6s ease-out forwards;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .fade-in {
            animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: rippleEffect 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes rippleEffect {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .scrolled {
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
        }
        
        .btn, .btn-modern {
            position: relative;
            overflow: hidden;
        }
    </style>
`;

document.head.insertAdjacentHTML('beforeend', animationCSS);
