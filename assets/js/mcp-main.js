// MCP Servers Demo JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav a, .btn[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Copy code functionality
    window.copyCode = function(button) {
        const codeBlock = button.parentElement;
        const code = codeBlock.querySelector('code');
        const text = code.textContent;
        
        navigator.clipboard.writeText(text).then(function() {
            // Visual feedback
            const originalIcon = button.innerHTML;
            button.innerHTML = '<i class="fas fa-check"></i>';
            button.style.background = '#10b981';
            
            setTimeout(() => {
                button.innerHTML = originalIcon;
                button.style.background = '';
            }, 2000);
        }).catch(function(err) {
            console.error('Could not copy text: ', err);
        });
    };

    // Animate stats on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };

    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) {
        statsObserver.observe(heroStats);
    }

    function animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const finalValue = stat.textContent;
            const isNumber = !isNaN(parseInt(finalValue));
            
            if (isNumber) {
                const finalNum = parseInt(finalValue);
                let currentNum = 0;
                const increment = finalNum / 30;
                
                const timer = setInterval(() => {
                    currentNum += increment;
                    if (currentNum >= finalNum) {
                        stat.textContent = finalValue;
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(currentNum) + '+';
                    }
                }, 50);
            }
        });
    }

    // Animate feature cards on scroll
    const cardObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const cards = document.querySelectorAll('.feature-card, .demo-card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        cardObserver.observe(card);
    });

    // Server status simulation
    const serverRows = document.querySelectorAll('.server-row');
    serverRows.forEach((row, index) => {
        setTimeout(() => {
            row.style.opacity = '0';
            row.style.transform = 'translateX(-20px)';
            row.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            
            setTimeout(() => {
                row.style.opacity = '1';
                row.style.transform = 'translateX(0)';
            }, 100);
        }, index * 100);
    });

    // Demo interaction
    const demoCards = document.querySelectorAll('.demo-card');
    demoCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const output = this.querySelector('.demo-output');
            if (output) {
                output.style.background = '#dcfce7';
                output.style.transform = 'scale(1.02)';
                output.style.transition = 'all 0.3s ease';
            }
        });

        card.addEventListener('mouseleave', function() {
            const output = this.querySelector('.demo-output');
            if (output) {
                output.style.background = '#f0fdf4';
                output.style.transform = 'scale(1)';
            }
        });
    });

    // Add loading animation to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.href && this.href.includes('github.com')) {
                // Add loading state for external links
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                this.style.pointerEvents = 'none';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.pointerEvents = 'auto';
                }, 1000);
            }
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add active state to navigation
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
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

    // Add typing effect to demo examples
    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Trigger typing effect when demo cards are visible
    const demoObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const output = entry.target.querySelector('.demo-output');
                if (output && !output.classList.contains('typed')) {
                    const originalText = output.textContent;
                    setTimeout(() => {
                        typeWriter(output, originalText, 30);
                        output.classList.add('typed');
                    }, 500);
                }
            }
        });
    }, { threshold: 0.5 });

    demoCards.forEach(card => {
        demoObserver.observe(card);
    });

    // Add CSS for active navigation
    const style = document.createElement('style');
    style.textContent = `
        .nav a.active {
            color: var(--primary-color);
            position: relative;
        }
        .nav a.active::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            right: 0;
            height: 2px;
            background: var(--primary-color);
            border-radius: 1px;
        }
    `;
    document.head.appendChild(style);

    console.log('🚀 MCP Servers Demo loaded successfully!');
});