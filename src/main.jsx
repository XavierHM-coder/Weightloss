<<<<<<< HEAD
import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

setInterval(() => {
  const banner = document.querySelector("iframe.goog-te-banner-frame")
  if (banner) {
    banner.style.display = "none"
  }
}, 500)
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import SocialCarousel from './components/frontend/SocialCarousel';
import Products from './components/frontend/Products';
import './styles/frontend.css';

document.addEventListener('DOMContentLoaded', () => {
    // Reveal Observer Logic
    const revealElements = document.querySelectorAll('.reveal-anim');
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));

    // Smooth Scroll Logic
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- Mount Social Carousel ---
    const carouselContainer = document.getElementById('social-carousel-root');
    if (carouselContainer) {
        ReactDOM.createRoot(carouselContainer).render(
          <React.StrictMode>
            <SocialCarousel />
          </React.StrictMode>
        );
    }

    // --- Mount Products (Featured - Limit 3) ---
    const productsHomeContainer = document.getElementById('products-home-root');
    if (productsHomeContainer) {
        ReactDOM.createRoot(productsHomeContainer).render(
          <React.StrictMode>
            <Products limit={3} />
          </React.StrictMode>
        );
    }

    // --- Mount Products (Full Catalog) ---
    const productsFullContainer = document.getElementById('products-full-root');
    if (productsFullContainer) {
        ReactDOM.createRoot(productsFullContainer).render(
          <React.StrictMode>
            <Products />
          </React.StrictMode>
        );
    }
});
>>>>>>> 5459292 (Cambios ligeros)
