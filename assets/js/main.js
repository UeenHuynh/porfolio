/**
 * Uyen Portfolio - Main JavaScript
 * Handles theme switching, navigation, and interactive features
 */

(function() {
    'use strict';

    // DOM Elements
    const themeToggle = document.querySelector('.theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    const header = document.querySelector('.header-area');

    // Theme Management
    const ThemeManager = {
        init() {
            this.loadTheme();
            this.bindEvents();
        },

        loadTheme() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            this.setTheme(savedTheme);
        },

        setTheme(theme) {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            
            if (themeIcon) {
                themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
            }
            
            if (themeToggle) {
                themeToggle.setAttribute('aria-pressed', theme === 'dark');
            }
        },

        toggleTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            this.setTheme(newTheme);
        },

        bindEvents() {
            if (themeToggle) {
                themeToggle.addEventListener('click', () => this.toggleTheme());
            }
        }
    };

    // Mobile Navigation
    const MobileNav = {
        init() {
            this.bindEvents();
        },

        bindEvents() {
            if (mobileMenuToggle) {
                mobileMenuToggle.addEventListener('click', () => this.toggleMenu());
            }

            // Close menu when clicking nav links
            navLinks.forEach(link => {
                link.addEventListener('click', () => this.closeMenu());
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!e.target.closest('.navbar')) {
                    this.closeMenu();
                }
            });

            // Handle escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeMenu();
                }
            });
        },

        toggleMenu() {
            const isOpen = navMenu.classList.contains('active');
            
            if (isOpen) {
                this.closeMenu();
            } else {
                this.openMenu();
            }
        },

        openMenu() {
            navMenu.classList.add('active');
            mobileMenuToggle.classList.add('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'true');
            
            // Focus first menu item for accessibility
            const firstLink = navMenu.querySelector('a');
            if (firstLink) {
                firstLink.focus();
            }
        },

        closeMenu() {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
    };

    // Smooth Scrolling Navigation
    const SmoothScroll = {
        init() {
            this.bindEvents();
            this.updateActiveLink();
        },

        bindEvents() {
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    const href = link.getAttribute('href');
                    
                    if (href.startsWith('#')) {
                        e.preventDefault();
                        this.scrollToSection(href);
                    }
                });
            });

            // Update active link on scroll
            window.addEventListener('scroll', () => {
                this.updateActiveLink();
                this.handleHeaderScroll();
            });
        },

        scrollToSection(targetId) {
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        },

        updateActiveLink() {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');
                const correspondingLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

                if (correspondingLink) {
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        // Remove active class from all links
                        navLinks.forEach(link => link.classList.remove('active'));
                        // Add active class to current link
                        correspondingLink.classList.add('active');
                    }
                }
            });
        },

        handleHeaderScroll() {
            if (header) {
                if (window.scrollY > 100) {
                    header.style.backgroundColor = 'var(--background-color)';
                    header.style.boxShadow = '0 2px 20px var(--shadow-light)';
                } else {
                    header.style.backgroundColor = 'var(--background-color)';
                    header.style.boxShadow = 'none';
                }
            }
        }
    };

    // Scroll Animations
    const ScrollAnimations = {
        init() {
            this.observeElements();
            this.observeSkills();
        },

        observeElements() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, observerOptions);

            // Observe sections for animation
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.classList.add('animate-on-scroll');
                observer.observe(section);
            });
        },

        observeSkills() {
            const skillsObserverOptions = {
                threshold: 0.3,
                rootMargin: '0px 0px -100px 0px'
            };

            const skillsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateSkillBars(entry.target);
                    }
                });
            }, skillsObserverOptions);

            // Observe skills section
            const skillsSection = document.querySelector('.skills-section');
            if (skillsSection) {
                skillsObserver.observe(skillsSection);
            }

            // Observe timeline items for experience section
            this.observeTimeline();

            // Immediate fallback for timeline visibility
            this.ensureTimelineVisibility();
        },

        observeTimeline() {
            const timelineObserverOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -20px 0px'
            };

            const timelineObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, timelineObserverOptions);

            // Observe timeline items
            const timelineItems = document.querySelectorAll('.timeline-item');

            if (timelineItems.length === 0) {
                // Fallback: try to find timeline items after a delay
                setTimeout(() => {
                    const delayedTimelineItems = document.querySelectorAll('.timeline-item');
                    delayedTimelineItems.forEach(item => {
                        timelineObserver.observe(item);
                    });
                }, 100);
            } else {
                timelineItems.forEach(item => {
                    timelineObserver.observe(item);
                });
            }
        },

        ensureTimelineVisibility() {
            // Immediate fallback to ensure timeline items are visible
            setTimeout(() => {
                const timelineItems = document.querySelectorAll('.timeline-item');

                timelineItems.forEach((item, index) => {
                    // Check if item is still hidden (opacity 0)
                    const computedStyle = window.getComputedStyle(item);
                    if (computedStyle.opacity === '0' || !item.classList.contains('animate-in')) {
                        item.classList.add('animate-in');
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }
                });
            }, 500); // Wait 500ms to allow normal animation to trigger first
        },

        animateSkillBars(skillsSection) {
            const skillBars = skillsSection.querySelectorAll('.skill-progress');
            
            skillBars.forEach((bar, index) => {
                const width = bar.getAttribute('data-width');
                if (width) {
                    setTimeout(() => {
                        bar.style.width = width + '%';
                    }, index * 100); // Stagger the animations
                }
            });
        }
    };

    // Utility Functions
    const Utils = {
        // Debounce function for performance
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        // Check if element is in viewport
        isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    };

    // Project Filtering
    const ProjectFilter = {
        init() {
            this.bindEvents();
        },

        bindEvents() {
            const filterButtons = document.querySelectorAll('.filter-btn');
            
            filterButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const filter = e.target.getAttribute('data-filter');
                    this.filterProjects(filter);
                    this.updateActiveButton(e.target);
                });
            });
        },

        filterProjects(filter) {
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category');
                
                if (filter === 'all' || categories.includes(filter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        },

        updateActiveButton(activeButton) {
            const filterButtons = document.querySelectorAll('.filter-btn');
            
            filterButtons.forEach(button => {
                button.classList.remove('active');
            });
            
            activeButton.classList.add('active');
        }
    };

    // Contact Form Management
    const ContactForm = {
        init() {
            this.form = document.getElementById('contactForm');
            this.bindEvents();
        },

        bindEvents() {
            if (this.form) {
                this.form.addEventListener('submit', (e) => this.handleSubmit(e));
                
                // Real-time validation
                const inputs = this.form.querySelectorAll('input, textarea');
                inputs.forEach(input => {
                    input.addEventListener('blur', () => this.validateField(input));
                    input.addEventListener('input', () => this.clearError(input));
                });
            }
        },

        handleSubmit(e) {
            e.preventDefault();
            
            if (this.validateForm()) {
                this.submitForm();
            }
        },

        validateForm() {
            const name = document.getElementById('contactName');
            const email = document.getElementById('contactEmail');
            const message = document.getElementById('contactMessage');
            
            let isValid = true;
            
            if (!this.validateField(name)) isValid = false;
            if (!this.validateField(email)) isValid = false;
            if (!this.validateField(message)) isValid = false;
            
            return isValid;
        },

        validateField(field) {
            const value = field.value.trim();
            const fieldName = field.name;
            let isValid = true;
            let errorMessage = '';

            // Clear previous error
            this.clearError(field);

            switch (fieldName) {
                case 'name':
                    if (!value) {
                        errorMessage = 'Name is required';
                        isValid = false;
                    } else if (value.length < 2) {
                        errorMessage = 'Name must be at least 2 characters';
                        isValid = false;
                    }
                    break;

                case 'email':
                    if (!value) {
                        errorMessage = 'Email is required';
                        isValid = false;
                    } else if (!this.isValidEmail(value)) {
                        errorMessage = 'Please enter a valid email address';
                        isValid = false;
                    }
                    break;

                case 'message':
                    if (!value) {
                        errorMessage = 'Message is required';
                        isValid = false;
                    } else if (value.length < 10) {
                        errorMessage = 'Message must be at least 10 characters';
                        isValid = false;
                    }
                    break;
            }

            if (!isValid) {
                this.showError(field, errorMessage);
            }

            return isValid;
        },

        isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        },

        showError(field, message) {
            field.classList.add('error');
            const errorElement = document.getElementById(field.name + 'Error');
            if (errorElement) {
                errorElement.textContent = message;
                errorElement.classList.add('show');
            }
        },

        clearError(field) {
            field.classList.remove('error');
            const errorElement = document.getElementById(field.name + 'Error');
            if (errorElement) {
                errorElement.textContent = '';
                errorElement.classList.remove('show');
            }
        },

        async submitForm() {
            const submitBtn = this.form.querySelector('.form-submit-btn');
            const successMessage = document.getElementById('formSuccess');

            // Show loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            try {
                // Simulate form submission (replace with actual endpoint)
                await this.simulateSubmission();

                // Show success message with animation
                this.form.style.display = 'none';
                successMessage.classList.add('show');

                // Reset form after delay
                setTimeout(() => {
                    this.resetForm();
                }, 5000);

            } catch (error) {
                console.error('Form submission error:', error);
                alert('Sorry, there was an error sending your message. Please try again or contact me directly via email.');
            } finally {
                // Reset button state
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
            }
        },

        simulateSubmission() {
            // TODO: Replace with actual form submission logic for production
            // Options for production:
            // 1. Formspree: https://formspree.io/
            // 2. Netlify Forms: https://www.netlify.com/products/forms/
            // 3. EmailJS: https://www.emailjs.com/
            // 4. Custom backend API

            // Example with Formspree:
            // const formData = new FormData(this.form);
            // return fetch('https://formspree.io/f/YOUR_FORM_ID', {
            //     method: 'POST',
            //     body: formData,
            //     headers: {
            //         'Accept': 'application/json'
            //     }
            // });

            // For now, simulate submission
            return new Promise((resolve) => {
                setTimeout(resolve, 2000);
            });
        },

        resetForm() {
            this.form.reset();
            this.form.style.display = 'block';
            document.getElementById('formSuccess').classList.remove('show');

            // Clear any remaining errors
            const inputs = this.form.querySelectorAll('input, textarea');
            inputs.forEach(input => this.clearError(input));
        }
    };

    // Accessibility Enhancements
    const AccessibilityManager = {
        init() {
            this.setupKeyboardNavigation();
            this.setupFocusManagement();
            this.setupAriaLiveRegions();
            this.detectInputMethod();
        },

        setupKeyboardNavigation() {
            // Handle escape key for closing mobile menu
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    MobileNav.closeMenu();
                    this.removeFocusFromActiveElement();
                }
            });

            // Trap focus in mobile menu when open
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu) {
                navMenu.addEventListener('keydown', (e) => {
                    if (navMenu.classList.contains('active')) {
                        this.trapFocus(e, navMenu);
                    }
                });
            }

            // Add keyboard support for project filtering
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(button => {
                button.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        button.click();
                    }
                });
            });
        },

        trapFocus(e, container) {
            const focusableElements = container.querySelectorAll(
                'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
            );
            const firstFocusable = focusableElements[0];
            const lastFocusable = focusableElements[focusableElements.length - 1];

            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusable) {
                        lastFocusable.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusable) {
                        firstFocusable.focus();
                        e.preventDefault();
                    }
                }
            }
        },

        setupFocusManagement() {
            // Add focus indicators for keyboard users
            let isKeyboardUser = false;

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Tab') {
                    isKeyboardUser = true;
                    document.body.classList.add('keyboard-user');
                }
            });

            document.addEventListener('mousedown', () => {
                isKeyboardUser = false;
                document.body.classList.remove('keyboard-user');
            });

            // Manage focus for skip links
            const skipLink = document.querySelector('.skip-link');
            if (skipLink) {
                skipLink.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(skipLink.getAttribute('href'));
                    if (target) {
                        target.focus();
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            }
        },

        setupAriaLiveRegions() {
            // Create live region for announcements
            const liveRegion = document.createElement('div');
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.className = 'live-region';
            document.body.appendChild(liveRegion);

            this.liveRegion = liveRegion;
        },

        announce(message) {
            if (this.liveRegion) {
                this.liveRegion.textContent = message;
                setTimeout(() => {
                    this.liveRegion.textContent = '';
                }, 1000);
            }
        },

        detectInputMethod() {
            // Detect if user prefers reduced motion
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
            
            if (prefersReducedMotion.matches) {
                document.body.classList.add('reduced-motion');
            }

            prefersReducedMotion.addEventListener('change', (e) => {
                if (e.matches) {
                    document.body.classList.add('reduced-motion');
                } else {
                    document.body.classList.remove('reduced-motion');
                }
            });
        },

        removeFocusFromActiveElement() {
            if (document.activeElement && document.activeElement.blur) {
                document.activeElement.blur();
            }
        }
    };

    // Initialize everything when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        ThemeManager.init();
        MobileNav.init();
        SmoothScroll.init();
        ScrollAnimations.init();
        ProjectFilter.init();
        ContactForm.init();
        PerformanceOptimizer.init();
        AccessibilityManager.init();

        // Add loading complete class to body
        document.body.classList.add('loaded');
    });

    // Handle page load
    window.addEventListener('load', function() {
        // Remove any loading states
        document.body.classList.add('fully-loaded');
    });

    // Performance Optimizations
    const PerformanceOptimizer = {
        init() {
            this.implementLazyLoading();
            this.addLoadingStates();
            this.optimizeFontLoading();
        },

        implementLazyLoading() {
            // Native lazy loading for modern browsers
            const images = document.querySelectorAll('img[loading="lazy"]');
            
            // Fallback for older browsers
            if ('IntersectionObserver' in window) {
                const imageObserver = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const img = entry.target;
                            if (img.dataset.src) {
                                img.src = img.dataset.src;
                                img.classList.remove('lazy');
                                imageObserver.unobserve(img);
                            }
                        }
                    });
                });

                // Observe images that don't have native lazy loading
                const lazyImages = document.querySelectorAll('img.lazy');
                lazyImages.forEach(img => imageObserver.observe(img));
            }
        },

        addLoadingStates() {
            // Add skeleton loading for sections
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.classList.add('loading');
            });

            // Remove loading states progressively
            window.addEventListener('load', () => {
                setTimeout(() => {
                    sections.forEach((section, index) => {
                        setTimeout(() => {
                            section.classList.remove('loading');
                            section.classList.add('loaded');
                        }, index * 100);
                    });
                }, 500);
            });
        },

        optimizeFontLoading() {
            // Preload critical fonts
            const fontPreloads = [
                'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
                'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap'
            ];

            fontPreloads.forEach(fontUrl => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'style';
                link.href = fontUrl;
                link.onload = function() {
                    this.onload = null;
                    this.rel = 'stylesheet';
                };
                document.head.appendChild(link);
            });
        }
    };

    // Export for potential external use
    window.UyenPortfolio = {
        ThemeManager,
        MobileNav,
        SmoothScroll,
        ScrollAnimations,
        ProjectFilter,
        ContactForm,
        PerformanceOptimizer,
        Utils
    };

})();    // 
Cross-Browser Compatibility Manager
    const CompatibilityManager = {
        init() {
            this.detectFeatures();
            this.addPolyfills();
            this.handleBrowserSpecificIssues();
        },

        detectFeatures() {
            // Detect IntersectionObserver support
            if (!('IntersectionObserver' in window)) {
                document.body.classList.add('no-intersection-observer');
                this.fallbackScrollAnimations();
            }

            // Detect CSS Grid support
            if (!CSS.supports('display', 'grid')) {
                document.body.classList.add('no-css-grid');
            }

            // Detect CSS Custom Properties support
            if (!CSS.supports('color', 'var(--primary-color)')) {
                document.body.classList.add('no-css-variables');
            }

            // Detect smooth scroll support
            if (!CSS.supports('scroll-behavior', 'smooth')) {
                document.body.classList.add('no-smooth-scroll');
            }
        },

        addPolyfills() {
            // Polyfill for Array.from (IE support)
            if (!Array.from) {
                Array.from = function(arrayLike) {
                    return Array.prototype.slice.call(arrayLike);
                };
            }

            // Polyfill for Object.assign (IE support)
            if (!Object.assign) {
                Object.assign = function(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                    return target;
                };
            }

            // Polyfill for Element.closest (IE support)
            if (!Element.prototype.closest) {
                Element.prototype.closest = function(selector) {
                    var element = this;
                    while (element && element.nodeType === 1) {
                        if (element.matches(selector)) {
                            return element;
                        }
                        element = element.parentElement;
                    }
                    return null;
                };
            }

            // Polyfill for Element.matches (IE support)
            if (!Element.prototype.matches) {
                Element.prototype.matches = Element.prototype.msMatchesSelector ||
                                          Element.prototype.webkitMatchesSelector;
            }
        },

        fallbackScrollAnimations() {
            // Fallback for browsers without IntersectionObserver
            const animatedElements = document.querySelectorAll('.animate-on-scroll, .timeline-item');
            
            function checkVisibility() {
                animatedElements.forEach(element => {
                    const rect = element.getBoundingClientRect();
                    const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                    
                    if (isVisible) {
                        element.classList.add('animate-in');
                    }
                });
            }

            // Use scroll event as fallback
            window.addEventListener('scroll', Utils.debounce(checkVisibility, 100));
            window.addEventListener('resize', Utils.debounce(checkVisibility, 100));
            
            // Initial check
            checkVisibility();
        },

        handleBrowserSpecificIssues() {
            // Detect browser
            const isIE = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.userAgent.indexOf('Trident/') !== -1;
            const isEdge = navigator.userAgent.indexOf('Edge/') !== -1;
            const isSafari = navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1;
            const isFirefox = navigator.userAgent.indexOf('Firefox') !== -1;

            if (isIE) {
                document.body.classList.add('browser-ie');
                this.handleIEIssues();
            }

            if (isEdge) {
                document.body.classList.add('browser-edge');
                this.handleEdgeIssues();
            }

            if (isSafari) {
                document.body.classList.add('browser-safari');
                this.handleSafariIssues();
            }

            if (isFirefox) {
                document.body.classList.add('browser-firefox');
                this.handleFirefoxIssues();
            }
        },

        handleIEIssues() {
            // Fix for IE's lack of CSS Grid support
            const gridContainers = document.querySelectorAll('.projects-grid, .skills-grid');
            gridContainers.forEach(container => {
                container.style.display = 'flex';
                container.style.flexWrap = 'wrap';
                
                const children = container.children;
                Array.from(children).forEach(child => {
                    child.style.flex = '1 1 300px';
                    child.style.margin = '16px';
                });
            });

            // Fix for IE's lack of object-fit support
            const images = document.querySelectorAll('.profile-image, .project-image img');
            images.forEach(img => {
                const parent = img.parentElement;
                parent.style.overflow = 'hidden';
                img.style.width = '100%';
                img.style.height = '100%';
            });
        },

        handleEdgeIssues() {
            // Fix for Edge's CSS Grid implementation
            const projectsGrid = document.querySelector('.projects-grid');
            if (projectsGrid) {
                projectsGrid.style.display = '-ms-grid';
                projectsGrid.style.msGridColumns = '1fr 1fr 1fr';
            }
        },

        handleSafariIssues() {
            // Fix for Safari's backdrop-filter performance
            const header = document.querySelector('.header-area');
            if (header) {
                header.style.webkitBackdropFilter = 'blur(10px)';
            }

            // Fix for Safari's flexbox issues
            const flexContainers = document.querySelectorAll('.flex');
            flexContainers.forEach(container => {
                container.style.webkitBoxFlex = '1';
            });
        },

        handleFirefoxIssues() {
            // Fix for Firefox's handling of CSS gradients
            const gradientElements = document.querySelectorAll('.skill-progress, .section-title::after');
            gradientElements.forEach(element => {
                const computedStyle = window.getComputedStyle(element);
                const background = computedStyle.background;
                if (background.includes('linear-gradient')) {
                    element.style.background = background.replace('linear-gradient', '-moz-linear-gradient');
                }
            });
        }
    };

    // Initialize compatibility manager early
    CompatibilityManager.init();    // F
inal Polish & Interactive Enhancements
    const InteractiveEnhancements = {
        init() {
            this.addScrollProgress();
            this.addSmoothTransitions();
            this.addMicroAnimations();
            this.addTextHighlights();
            this.addParallaxEffects();
        },

        addScrollProgress() {
            // Create scroll progress indicator
            const progressBar = document.createElement('div');
            progressBar.className = 'scroll-progress';
            document.body.appendChild(progressBar);

            // Update progress on scroll
            window.addEventListener('scroll', () => {
                const scrollTop = window.pageYOffset;
                const docHeight = document.body.scrollHeight - window.innerHeight;
                const scrollPercent = (scrollTop / docHeight) * 100;
                progressBar.style.width = scrollPercent + '%';
            });
        },

        addSmoothTransitions() {
            // Add page transition effects
            const sections = document.querySelectorAll('section');
            sections.forEach((section, index) => {
                section.classList.add('section-reveal');
                section.style.animationDelay = `${index * 0.1}s`;
            });

            // Reveal sections on scroll
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                    }
                });
            }, { threshold: 0.1 });

            sections.forEach(section => {
                revealObserver.observe(section);
            });
        },

        addMicroAnimations() {
            // Add staggered animations to cards
            const cards = document.querySelectorAll('.project-card, .skill-category, .experience-card');
            cards.forEach((card, index) => {
                card.classList.add(`stagger-${(index % 5) + 1}`);
            });

            // Add hover effects to interactive elements
            const interactiveElements = document.querySelectorAll('.btn, .filter-btn, .nav-menu a');
            interactiveElements.forEach(element => {
                element.addEventListener('mouseenter', () => {
                    element.style.transform = 'translateY(-2px)';
                });
                
                element.addEventListener('mouseleave', () => {
                    element.style.transform = '';
                });
            });

            // Add click ripple effect
            this.addRippleEffect();
        },

        addRippleEffect() {
            const buttons = document.querySelectorAll('.btn, .filter-btn');
            
            buttons.forEach(button => {
                button.addEventListener('click', (e) => {
                    const ripple = document.createElement('span');
                    const rect = button.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);
                    const x = e.clientX - rect.left - size / 2;
                    const y = e.clientY - rect.top - size / 2;
                    
                    ripple.style.cssText = `
                        position: absolute;
                        width: ${size}px;
                        height: ${size}px;
                        left: ${x}px;
                        top: ${y}px;
                        background: rgba(255, 255, 255, 0.3);
                        border-radius: 50%;
                        transform: scale(0);
                        animation: ripple 0.6s linear;
                        pointer-events: none;
                    `;
                    
                    button.style.position = 'relative';
                    button.style.overflow = 'hidden';
                    button.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                });
            });

            // Add ripple animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        },

        addTextHighlights() {
            // Add text highlight effects to key phrases
            const highlightPhrases = [
                'AI integration',
                'biotechnology',
                'machine learning',
                'deep learning',
                'innovative solutions'
            ];

            highlightPhrases.forEach(phrase => {
                const elements = document.querySelectorAll('p, li');
                elements.forEach(element => {
                    if (element.textContent.toLowerCase().includes(phrase.toLowerCase())) {
                        const regex = new RegExp(`(${phrase})`, 'gi');
                        element.innerHTML = element.innerHTML.replace(regex, '<span class="text-highlight">$1</span>');
                    }
                });
            });
        },

        addParallaxEffects() {
            // Add subtle parallax effect to hero section
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                window.addEventListener('scroll', () => {
                    const scrolled = window.pageYOffset;
                    const rate = scrolled * -0.5;
                    heroSection.style.transform = `translateY(${rate}px)`;
                });
            }

            // Add floating animation to profile image
            const profileImage = document.querySelector('.profile-image');
            if (profileImage) {
                profileImage.style.animation = 'float 6s ease-in-out infinite';
            }
        }
    };

    // Enhanced Theme Manager with smooth transitions
    const EnhancedThemeManager = {
        init() {
            this.addThemeTransitions();
        },

        addThemeTransitions() {
            const themeToggle = document.querySelector('.theme-toggle');
            if (themeToggle) {
                themeToggle.addEventListener('click', () => {
                    document.body.classList.add('theme-transitioning');
                    
                    setTimeout(() => {
                        document.body.classList.remove('theme-transitioning');
                    }, 300);
                });
            }

            // Add smooth theme transition styles
            const style = document.createElement('style');
            style.textContent = `
                .theme-transitioning * {
                    transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
                }
            `;
            document.head.appendChild(style);
        }
    };

    // Enhanced Form Interactions
    const EnhancedFormManager = {
        init() {
            this.addFormEnhancements();
        },

        addFormEnhancements() {
            const formInputs = document.querySelectorAll('.form-input, .form-textarea');
            
            formInputs.forEach(input => {
                // Add floating label effect
                input.addEventListener('focus', () => {
                    input.parentElement.classList.add('focused');
                });
                
                input.addEventListener('blur', () => {
                    if (!input.value) {
                        input.parentElement.classList.remove('focused');
                    }
                });

                // Add typing animation
                input.addEventListener('input', () => {
                    input.style.borderColor = 'var(--primary-color)';
                    clearTimeout(input.timeout);
                    input.timeout = setTimeout(() => {
                        input.style.borderColor = '';
                    }, 500);
                });
            });
        }
    };

    // Performance Monitor
    const PerformanceMonitor = {
        init() {
            this.monitorPerformance();
        },

        monitorPerformance() {
            // Monitor page load performance
            window.addEventListener('load', () => {
                const loadTime = performance.now();
                console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
                
                // Add performance indicator for development
                if (loadTime > 3000) {
                    console.warn('Page load time is above 3 seconds. Consider optimizing.');
                }
            });

            // Monitor scroll performance
            let scrollTimeout;
            window.addEventListener('scroll', () => {
                if (!scrollTimeout) {
                    scrollTimeout = setTimeout(() => {
                        scrollTimeout = null;
                        // Scroll performance is good
                    }, 16); // 60fps
                }
            });
        }
    };

    // Initialize all enhancements
    document.addEventListener('DOMContentLoaded', function() {
        // Add js-enabled class to enable JavaScript-dependent styles
        document.body.classList.add('js-enabled');

        // Initialize existing managers
        ThemeManager.init();
        MobileNav.init();
        SmoothScroll.init();
        ScrollAnimations.init();
        ProjectFilter.init();
        ContactForm.init();
        PerformanceOptimizer.init();
        AccessibilityManager.init();

        // Initialize new enhancements
        InteractiveEnhancements.init();
        EnhancedThemeManager.init();
        EnhancedFormManager.init();
        PerformanceMonitor.init();

        // Add final loading complete class
        document.body.classList.add('loaded', 'enhanced');
        
        // Announce completion to screen readers
        if (AccessibilityManager.announce) {
            AccessibilityManager.announce('Portfolio website loaded successfully');
        }
    });

    // Handle page visibility changes for performance
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            // Pause animations when page is not visible
            document.body.classList.add('page-hidden');
        } else {
            // Resume animations when page becomes visible
            document.body.classList.remove('page-hidden');
        }
    });

    // Export enhanced portfolio object
    window.UyenPortfolio = {
        ThemeManager,
        MobileNav,
        SmoothScroll,
        ScrollAnimations,
        ProjectFilter,
        ContactForm,
        PerformanceOptimizer,
        AccessibilityManager,
        CompatibilityManager,
        InteractiveEnhancements,
        EnhancedThemeManager,
        EnhancedFormManager,
        PerformanceMonitor,
        Utils
    };