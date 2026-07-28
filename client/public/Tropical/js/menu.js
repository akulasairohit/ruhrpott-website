// =====================================================
// TROPICAL CAFÉ — Menu Tab System
// =====================================================
/* global MENU_DATA, currentLang */

(function () {
  let activeCategory = "smoothiebowls";

  function init() {
    if (typeof MENU_DATA === "undefined") return;
    buildTabs();
    renderCards(activeCategory);
  }

  function buildTabs() {
    const tabsEl = document.querySelector(".menu-tabs");
    if (!tabsEl) return;
    tabsEl.innerHTML = "";

    MENU_DATA.categories.forEach((cat, idx) => {
      const btn = document.createElement("button");
      btn.className = "menu-tab" + (idx === 0 ? " is-active" : "");
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", idx === 0 ? "true" : "false");
      btn.setAttribute("data-cat", cat.id);
      btn.textContent = cat[(window.currentLang || "de")];

      btn.addEventListener("click", () => {
        document.querySelectorAll(".menu-tab").forEach(t => {
          t.classList.remove("is-active");
          t.setAttribute("aria-selected", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-selected", "true");
        activeCategory = cat.id;
        renderCards(cat.id);
      });

      tabsEl.appendChild(btn);
    });
  }

  function renderCards(catId) {
    const grid = document.getElementById("menu-grid");
    if (!grid) return;

    const lang = window.currentLang || "de";
    const cat  = MENU_DATA.categories.find(c => c.id === catId);
    if (!cat) return;

    // Fade out
    grid.style.opacity = "0";
    grid.style.transform = "translateY(10px)";

    setTimeout(() => {
      grid.innerHTML = "";

      cat.items.forEach((item, idx) => {
        const card = document.createElement("div");
        card.className = "menu-card";
        card.style.transitionDelay = `${idx * 55}ms`;

        const imgWrap = document.createElement("div");
        imgWrap.className = "menu-card-img-wrap";

        const img = document.createElement("img");
        img.src     = item.image;
        img.alt     = item[lang];
        img.loading = "lazy";
        img.className = "menu-card-img";
        imgWrap.appendChild(img);

        const name = document.createElement("p");
        name.className = "menu-card-name";
        name.textContent = item[lang];

        card.appendChild(imgWrap);
        card.appendChild(name);

        if (item.vegan) {
          const badge = document.createElement("span");
          badge.className = "badge-vegan";
          badge.setAttribute("data-i18n", "badge_vegan");
          badge.textContent = (window.TRANSLATIONS && window.TRANSLATIONS[lang])
            ? window.TRANSLATIONS[lang].badge_vegan
            : "Vegan";
          card.appendChild(badge);
        }

        grid.appendChild(card);
      });

      // Fade in
      grid.style.transition = "opacity 0.35s ease, transform 0.35s ease";
      grid.style.opacity    = "1";
      grid.style.transform  = "translateY(0)";

      // Stagger card reveal
      requestAnimationFrame(() => {
        grid.querySelectorAll(".menu-card").forEach((c, i) => {
          setTimeout(() => c.classList.add("is-visible"), i * 55);
        });
      });
    }, 200);
  }

  // Re-render on language change
  document.addEventListener("DOMContentLoaded", () => {
    init();

    const langBtn = document.getElementById("lang-toggle");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        // Small delay to let i18n update currentLang first
        setTimeout(() => {
          // Update tab labels
          document.querySelectorAll(".menu-tab").forEach(btn => {
            const catId = btn.getAttribute("data-cat");
            const cat   = MENU_DATA.categories.find(c => c.id === catId);
            if (cat) btn.textContent = cat[(window.currentLang || "de")];
          });
          renderCards(activeCategory);
        }, 10);
      });
    }
  });
})();
