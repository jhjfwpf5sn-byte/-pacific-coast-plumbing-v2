document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggle && navLinks) {
   toggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll("[data-action='call']").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = "tel:+16195550147";
    });
  });
  const form = document.querySelector("[data-contact-form]");
const status = document.querySelector("[data-form-status]");

if (form && status) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    status.textContent = "Sending...";

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        status.textContent = "Request sent. We'll be in touch soon.";
        form.reset();
      } else {
        status.textContent = "Something went wrong. Please try again.";
      }
    } catch (error) {
      status.textContent = "Unable to send. Please try again.";
    }
  });
}
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
});
