// Initialize Lucide icons
lucide.createIcons();

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Language switching
const languageSelectors = document.querySelectorAll('#language-selector, #mobile-language-selector');
languageSelectors.forEach(selector => {
    selector.addEventListener('change', (e) => {
        const lang = e.target.value;
        document.querySelectorAll('[data-lang]').forEach(el => {
            el.classList.add('hidden');
            if (el.getAttribute('data-lang') === lang) {
                el.classList.remove('hidden');
            }
        });
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (href !== '#') {
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Scroll-based animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

function goToContact(plan) {
    // Scroll to the contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Pre-select the price plan in the dropdown
    const dropdowns = document.querySelectorAll('select[name="price-plan"]');
    dropdowns.forEach(dropdown => {
        dropdown.value = plan;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
        console.log('Lucide icons initialized');
    } else {
        console.error('Lucide not loaded');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

import { createIcons } from '/node_modules/lucide/dist/esm/lucide.js';
document.addEventListener('DOMContentLoaded', () => {
    createIcons();
});