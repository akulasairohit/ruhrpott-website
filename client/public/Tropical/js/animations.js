// =====================================================
// TROPICAL CAFÉ — GSAP Scroll Animations
// =====================================================
/* global gsap, ScrollTrigger */

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // ── Hero entrance (after loader) ────────────────
    const heroTL = gsap.timeline({ delay: 1.6, defaults: { ease: "power4.out" } });
    heroTL
      .from(".hero-tag",  { opacity: 0, y: 16, duration: 0.6, ease: "power3.out" })
      .from(".hero-title .hero-word-inner", {
        yPercent: 110,
        duration: 1.0,
        stagger: 0.12,
      }, "-=0.2")
      .from(".hero-sub",  { opacity: 0, y: 14, duration: 0.6, ease: "power3.out" }, "-=0.5")
      .from(".hero-ctas .btn", {
        opacity: 0,
        y: 18,
        duration: 0.55,
        stagger: 0.1,
        ease: "power3.out",
      }, "-=0.35")
      .from(".hero-scroll-hint", { opacity: 0, duration: 0.5 }, "-=0.15");

    // ── Hero parallax bg ─────────────────────────────
    const heroImgs = document.querySelectorAll(".hero-slide img");
    if (heroImgs.length) {
      gsap.to(heroImgs, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // ── Generic reveal helpers ───────────────────────
    function revealScrollTrigger(selector, vars) {
      gsap.to(selector, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        ...vars,
        scrollTrigger: {
          trigger: selector,
          start: "top 88%",
          toggleActions: "play none none none",
          ...((vars && vars.scrollTrigger) || {}),
        },
      });
    }

    revealScrollTrigger(".reveal-up");
    revealScrollTrigger(".reveal-left");
    revealScrollTrigger(".reveal-right");
    revealScrollTrigger(".reveal-scale");

    // ── Stars counter animation ──────────────────────
    const starsSection = document.querySelector("#stars");
    if (starsSection) {
      ScrollTrigger.create({
        trigger: "#stars",
        start: "top 80%",
        once: true,
        onEnter: () => {
          // Float counter
          const floatEl = document.querySelector(".counter");
          if (floatEl) animateCounter(floatEl, 4.9, 1, true);

          // Integer counter (2000+)
          const intEl = document.querySelector(".counter-int");
          if (intEl) animateCounter(intEl, 2000, 0, false);
        },
      });
    }

    function animateCounter(el, target, decimals, isFloat) {
      const start = { val: 0 };
      gsap.to(start, {
        val: target,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = isFloat
            ? start.val.toFixed(decimals).replace(".", ",")
            : Math.floor(start.val).toLocaleString("de-DE");
        },
      });
    }

    // ── Gallery stagger ──────────────────────────────
    gsap.to(".gallery-item", {
      opacity: 1,
      scale: 1,
      duration: 0.7,
      ease: "power3.out",
      stagger: { each: 0.08, from: "start" },
      scrollTrigger: {
        trigger: ".gallery-grid",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // ── About images stagger ─────────────────────────
    gsap.to([".about-img-main", ".about-img-accent"], {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".about-images",
        start: "top 82%",
        toggleActions: "play none none none",
      },
    });

    // ── FAQ items stagger ────────────────────────────
    gsap.from(".faq-item", {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power3.out",
      stagger: 0.07,
      scrollTrigger: {
        trigger: ".faq-list",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
})();
