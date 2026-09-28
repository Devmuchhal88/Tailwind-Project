// Configure Tailwind CSS Custom Theme dynamically
tailwind.config = {
  theme: {
    extend: {
      colors: {
        black: "#0b0b0a",
        dark: "#11100e",
        "dark-soft": "#181613",
        gold: "#c8a96b",
        "gold-light": "#e7cf9a",
        cream: "#f4efe5",
        muted: "#8d8982",
        "border-custom": "rgba(255, 255, 255, 0.12)",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
};

// Modal Visibility Controls
function toggleModal(show) {
  const modal = document.getElementById("bookingModal");
  if (modal) {
    if (show) {
      modal.classList.remove("hidden");
    } else {
      modal.classList.add("hidden");
    }
  }
}

// Event Listeners Initialization
document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("hidden");
    });
  }

  // Reservation Modal Trigger Buttons
  const reserveButtons = document.querySelectorAll(".btn-reserve");
  reserveButtons.forEach((button) => {
    button.addEventListener("click", () => toggleModal(true));
  });

  // Modal Close Button
  const closeModalBtn = document.getElementById("closeModal");
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => toggleModal(false));
  }

  // Close modal when clicking on backdrop
  const bookingModal = document.getElementById("bookingModal");
  if (bookingModal) {
    bookingModal.addEventListener("click", (event) => {
      if (event.target === bookingModal) {
        toggleModal(false);
      }
    });
  }

  // Navbar Scroll Transition Effect
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    if (!nav) return;

    if (window.scrollY > 50) {
      nav.classList.add(
        "scrolled",
        "shadow-[0_10px_40px_rgba(0,0,0,0.3)]",
        "py-3.5"
      );
      nav.classList.remove("py-6");
    } else {
      nav.classList.remove(
        "scrolled",
        "shadow-[0_10px_40px_rgba(0,0,0,0.3)]",
        "py-3.5"
      );
      nav.classList.add("py-6");
    }
  });
});