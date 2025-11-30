/**
 * Neural Frontier v2 - WOW Edition
 * Interactive Effects for Hasan Hammoud's Website
 */

(function() {
  'use strict';

  // ==========================================================================
  // SCROLL PROGRESS INDICATOR
  // ==========================================================================
  function initScrollProgress() {
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    bar.style.cssText = 'position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,#00ffaa,#ff2d6a,#ffd700);z-index:9999;width:0;transition:width 0.1s linear;';
    document.body.appendChild(bar);

    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = `${(scrollTop / docHeight) * 100}%`;
    }, { passive: true });
  }

  // ==========================================================================
  // PARTICLE CONSTELLATION BACKGROUND
  // ==========================================================================
  function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles';
    canvas.style.cssText = 'position:fixed;inset:0;z-index:-3;pointer-events:none;opacity:0.7;';
    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null };

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    }

    function createParticles() {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 12000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 1,
          color: ['#00ffaa', '#ff2d6a', '#ffd700'][Math.floor(Math.random() * 3)]
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Mouse attraction
        if (mouse.x && mouse.y) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            p.vx += dx * 0.0003;
            p.vy += dy * 0.0003;
          }
        }

        // Boundaries
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.6;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p2.x - p.x;
          const dy = p2.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color;
            ctx.globalAlpha = 0.1 * (1 - dist / 100);
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
    document.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

    resize();
    draw();
  }

  // ==========================================================================
  // CURSOR GLOW FOLLOWER
  // ==========================================================================
  function initCursorGlow() {
    const glow = document.createElement('div');
    glow.style.cssText = `
      position: fixed;
      width: 500px;
      height: 500px;
      pointer-events: none;
      z-index: -1;
      background: radial-gradient(circle, rgba(0, 255, 170, 0.1) 0%, transparent 70%);
      transform: translate(-50%, -50%);
      transition: opacity 0.3s;
      opacity: 0;
    `;
    document.body.appendChild(glow);

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;

    document.addEventListener('mousemove', e => {
      targetX = e.clientX;
      targetY = e.clientY;
      glow.style.opacity = '1';
    });

    document.addEventListener('mouseleave', () => {
      glow.style.opacity = '0';
    });

    function animate() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      glow.style.left = currentX + 'px';
      glow.style.top = currentY + 'px';
      requestAnimationFrame(animate);
    }
    animate();
  }

  // ==========================================================================
  // AUTHOR NAME HIGHLIGHTING
  // ==========================================================================
  function highlightAuthorName() {
    const names = ['Hasan', 'Hammoud', 'Hasan Abed Al Kader Hammoud', 'H. Hammoud'];

    document.querySelectorAll('.article-metadata, .card-text, .pub-authors').forEach(el => {
      let html = el.innerHTML;
      names.forEach(name => {
        const regex = new RegExp(`(${name})`, 'gi');
        html = html.replace(regex, '<span style="color:#00ffaa;font-weight:700;text-shadow:0 0 10px rgba(0,255,170,0.3);">$1</span>');
      });
      el.innerHTML = html;
    });
  }

  // ==========================================================================
  // MAGNETIC BUTTONS
  // ==========================================================================
  function initMagneticButtons() {
    document.querySelectorAll('.btn-primary, .network-icon a, .easter-egg').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });
  }

  // ==========================================================================
  // TILT EFFECT ON CARDS
  // ==========================================================================
  function initTiltCards() {
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // ==========================================================================
  // SMOOTH ANCHOR SCROLLING
  // ==========================================================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // ==========================================================================
  // NAVBAR HIDE ON SCROLL DOWN
  // ==========================================================================
  function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 100) {
        navbar.style.transform = 'translateY(0)';
        return;
      }

      if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }

      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ==========================================================================
  // INITIALIZE
  // ==========================================================================
  function init() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    initScrollProgress();
    initSmoothScroll();
    initNavbarScroll();
    highlightAuthorName();

    if (!prefersReducedMotion) {
      initParticles();
      initCursorGlow();
      initMagneticButtons();
      initTiltCards();
    }

    // Console branding
    console.log('%c Neural Frontier v2 ', 'background: linear-gradient(90deg, #00ffaa, #ff2d6a); color: white; padding: 10px 20px; border-radius: 5px; font-weight: bold; font-size: 14px;');
    console.log('%c Built for Hasan Hammoud ', 'color: #00ffaa; font-style: italic;');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
