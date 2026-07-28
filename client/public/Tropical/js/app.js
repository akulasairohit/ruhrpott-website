// =====================================================
// TROPICAL CAFÉ — App Init (Navbar, Loader, Reviews, Scroll)
// =====================================================
(function () {
  document.addEventListener("DOMContentLoaded", () => {

    // ── Lenis Smooth Scroll ───────────────────────────
    if (typeof Lenis !== "undefined") {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      if (typeof gsap !== "undefined") {
        // Tick Lenis through GSAP RAF for perfect sync
        gsap.ticker.add((time) => { lenis.raf(time * 1000); });
        gsap.ticker.lagSmoothing(0);
        // Keep ScrollTrigger positions accurate
        if (typeof ScrollTrigger !== "undefined") {
          lenis.on("scroll", ScrollTrigger.update);
        }
      } else {
        function rafLoop(time) {
          lenis.raf(time);
          requestAnimationFrame(rafLoop);
        }
        requestAnimationFrame(rafLoop);
      }

      // Override anchor scroll to use Lenis
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener("click", e => {
          const target = document.querySelector(a.getAttribute("href"));
          if (!target) return;
          e.preventDefault();
          const navbar = document.getElementById("navbar");
          const navH = navbar ? navbar.offsetHeight : 72;
          lenis.scrollTo(target, { offset: -navH, duration: 1.4 });
        });
      });
    }

    // ── Custom Cursor (desktop/fine pointer only) ─────
    const cursorDot  = document.getElementById("cursor-dot");
    const cursorRing = document.getElementById("cursor-ring");

    if (cursorDot && cursorRing && window.matchMedia("(pointer: fine)").matches) {
      document.body.classList.add("use-custom-cursor");
      document.body.style.cursor = "none";

      let mouseX = -100, mouseY = -100;
      let ringX  = -100, ringY  = -100;

      document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorDot.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
      });

      if (typeof gsap !== "undefined") {
        gsap.ticker.add(() => {
          ringX += (mouseX - ringX) * 0.12;
          ringY += (mouseY - ringY) * 0.12;
          cursorRing.style.transform = `translate(calc(${ringX}px - 50%), calc(${ringY}px - 50%))`;
        });
      }

      document.querySelectorAll("a, button").forEach(el => {
        el.addEventListener("mouseenter", () => {
          cursorDot.style.width  = "14px";
          cursorDot.style.height = "14px";
          cursorRing.style.width  = "56px";
          cursorRing.style.height = "56px";
          cursorRing.style.borderColor = "rgba(201,164,76,0.8)";
        });
        el.addEventListener("mouseleave", () => {
          cursorDot.style.width  = "8px";
          cursorDot.style.height = "8px";
          cursorRing.style.width  = "36px";
          cursorRing.style.height = "36px";
          cursorRing.style.borderColor = "rgba(201,164,76,0.5)";
        });
      });
    }

    // ── Loading Screen ────────────────────────────────
    const loader    = document.getElementById("loader");
    const loaderLogo = document.querySelector(".loader-logo");

    if (loaderLogo) {
      setTimeout(() => loaderLogo.classList.add("is-visible"), 100);
    }
    // Hide loader after 1.8s (well before GSAP hero anim starts at 1.6s + anim time)
    setTimeout(() => {
      if (loader) loader.classList.add("is-hidden");
    }, 1800);

    // ── Scroll Progress Bar ───────────────────────────
    const progressBar = document.getElementById("scroll-progress");
    window.addEventListener("scroll", () => {
      if (!progressBar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = pct + "%";
    }, { passive: true });

    // ── Navbar Scroll Behavior ────────────────────────
    const navbar = document.getElementById("navbar");
    const heroEl = document.getElementById("hero");

    function updateNavbar() {
      if (!navbar) return;
      const scrolled = window.scrollY > 40;
      navbar.classList.toggle("is-scrolled", scrolled);

      // Switch logo color: white on hero, dark on scroll
      const heroBottom = heroEl ? heroEl.offsetTop + heroEl.offsetHeight : 0;
      navbar.classList.toggle("is-dark", window.scrollY >= heroBottom - 80);
    }
    window.addEventListener("scroll", updateNavbar, { passive: true });
    updateNavbar();

    // ── Hamburger Mobile Menu ─────────────────────────
    const hamburger   = document.getElementById("hamburger");
    const mobileMenu  = document.getElementById("mobile-menu");

    if (hamburger && mobileMenu) {
      hamburger.addEventListener("click", () => {
        const open = hamburger.classList.toggle("is-open");
        mobileMenu.classList.toggle("is-open", open);
        hamburger.setAttribute("aria-expanded", String(open));
        mobileMenu.setAttribute("aria-hidden", String(!open));
        document.body.style.overflow = open ? "hidden" : "";
      });

      // Close on link click
      mobileMenu.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => {
          hamburger.classList.remove("is-open");
          mobileMenu.classList.remove("is-open");
          hamburger.setAttribute("aria-expanded", "false");
          mobileMenu.setAttribute("aria-hidden", "true");
          document.body.style.overflow = "";
        });
      });
    }

    // ── Smooth anchor scroll (fallback when Lenis not loaded) ─
    if (typeof Lenis === "undefined") {
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener("click", e => {
          const target = document.querySelector(a.getAttribute("href"));
          if (!target) return;
          e.preventDefault();
          const navH = navbar ? navbar.offsetHeight : 72;
          const top  = target.getBoundingClientRect().top + window.scrollY - navH;
          window.scrollTo({ top, behavior: "smooth" });
        });
      });
    }

    // ── Hero Image Slideshow ──────────────────────────
    const heroSlides = Array.from(document.querySelectorAll(".hero-slide"));
    if (heroSlides.length > 1) {
      let heroIdx = 0;
      setInterval(() => {
        heroSlides[heroIdx].classList.remove("is-active");
        heroIdx = (heroIdx + 1) % heroSlides.length;
        heroSlides[heroIdx].classList.add("is-active");
      }, 5500);
    }

    // ── Reviews Carousel ─────────────────────────────
    const track   = document.getElementById("reviews-track");
    const dotsEl  = document.getElementById("reviews-dots");
    const prevBtn = document.getElementById("rev-prev");
    const nextBtn = document.getElementById("rev-next");

    if (track) {
      const cards   = Array.from(track.querySelectorAll(".review-card"));
      let current   = 0;
      let autoTimer = null;

      // Build dots
      if (dotsEl) {
        cards.forEach((_, i) => {
          const dot = document.createElement("button");
          dot.className  = "rev-dot" + (i === 0 ? " is-active" : "");
          dot.setAttribute("role", "tab");
          dot.setAttribute("aria-label", `Review ${i + 1}`);
          dot.addEventListener("click", () => goTo(i));
          dotsEl.appendChild(dot);
        });
      }

      function goTo(idx) {
        cards[current].classList.remove("is-active");
        if (dotsEl) dotsEl.querySelectorAll(".rev-dot")[current].classList.remove("is-active");

        current = (idx + cards.length) % cards.length;

        cards[current].classList.add("is-active");
        if (dotsEl) dotsEl.querySelectorAll(".rev-dot")[current].classList.add("is-active");
      }

      function startAuto() {
        autoTimer = setInterval(() => goTo(current + 1), 4500);
      }
      function stopAuto() {
        clearInterval(autoTimer);
      }

      goTo(0);
      startAuto();

      if (prevBtn) prevBtn.addEventListener("click", () => { stopAuto(); goTo(current - 1); startAuto(); });
      if (nextBtn) nextBtn.addEventListener("click", () => { stopAuto(); goTo(current + 1); startAuto(); });

      const carousel = document.getElementById("reviews-carousel");
      if (carousel) {
        carousel.addEventListener("mouseenter", stopAuto);
        carousel.addEventListener("mouseleave", startAuto);
      }

      // Touch swipe support
      let touchStartX = 0;
      track.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; }, { passive: true });
      track.addEventListener("touchend", e => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
          stopAuto();
          goTo(diff > 0 ? current + 1 : current - 1);
          startAuto();
        }
      }, { passive: true });
    }

  });
})();
