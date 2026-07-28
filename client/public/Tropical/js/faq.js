// =====================================================
// TROPICAL CAFÉ — FAQ Accordion
// =====================================================
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".faq-item");

    items.forEach(item => {
      const btn    = item.querySelector(".faq-question");
      const answer = item.querySelector(".faq-answer");
      if (!btn || !answer) return;

      // Remove HTML hidden attribute; control via CSS max-height
      answer.removeAttribute("hidden");
      answer.style.maxHeight = "0";

      btn.addEventListener("click", () => {
        const isOpen = btn.getAttribute("aria-expanded") === "true";

        // Close all others
        items.forEach(other => {
          if (other === item) return;
          const otherBtn    = other.querySelector(".faq-question");
          const otherAnswer = other.querySelector(".faq-answer");
          if (!otherBtn || !otherAnswer) return;
          otherBtn.setAttribute("aria-expanded", "false");
          otherAnswer.classList.remove("is-open");
          otherAnswer.style.maxHeight = "0";
        });

        // Toggle this one
        if (isOpen) {
          btn.setAttribute("aria-expanded", "false");
          answer.classList.remove("is-open");
          answer.style.maxHeight = "0";
        } else {
          btn.setAttribute("aria-expanded", "true");
          answer.classList.add("is-open");
          answer.style.maxHeight = answer.scrollHeight + "px";
        }
      });
    });
  });
})();
