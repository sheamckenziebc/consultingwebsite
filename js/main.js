document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Change icon based on menu state
            const icon = this.querySelector('i');
            if (nav.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (nav && nav.classList.contains('active') && 
            !nav.contains(event.target) && 
            !mobileMenuBtn.contains(event.target)) {
            nav.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Testimonial Slider
    const testimonialSlider = document.querySelector('.testimonial-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (testimonialSlider && prevBtn && nextBtn) {
        let slideIndex = 0;
        const testimonials = document.querySelectorAll('.testimonial');
        const totalSlides = testimonials.length;
        
        // Initialize slider
        updateSlider();
        
        // Previous button click
        prevBtn.addEventListener('click', function() {
            slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
            updateSlider();
        });
        
        // Next button click
        nextBtn.addEventListener('click', function() {
            slideIndex = (slideIndex + 1) % totalSlides;
            updateSlider();
        });
        
        // Auto slide every 5 seconds
        let autoSlide = setInterval(function() {
            slideIndex = (slideIndex + 1) % totalSlides;
            updateSlider();
        }, 5000);
        
        // Pause auto slide on hover
        testimonialSlider.addEventListener('mouseenter', function() {
            clearInterval(autoSlide);
        });
        
        testimonialSlider.addEventListener('mouseleave', function() {
            autoSlide = setInterval(function() {
                slideIndex = (slideIndex + 1) % totalSlides;
                updateSlider();
            }, 5000);
        });
        
        function updateSlider() {
            testimonialSlider.style.transform = `translateX(-${slideIndex * 100}%)`;
        }
    }
    
    // FAQ Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (faqItems.length > 0) {
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Toggle current item
                item.classList.toggle('active');
                
                // Update icon
                const icon = item.querySelector('.faq-toggle i');
                if (item.classList.contains('active')) {
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-minus');
                } else {
                    icon.classList.remove('fa-minus');
                    icon.classList.add('fa-plus');
                }
            });
        });
    }
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Here you would typically add code to handle the form submission
            // For example, using fetch to send the data to a server or email service
            
            // For demonstration purposes, we'll just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (nav && nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
}); 