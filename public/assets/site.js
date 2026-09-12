const COMPANY = {
  phoneDisplay: "+43 000 000 00 00",
  phoneLink: "+430000000000",
  email: "kontakt@guericke-gebaeudetechnik.at",
  area: "Wien und Umgebung"
};

document.querySelectorAll("[data-phone]").forEach((el) => {
  el.textContent = COMPANY.phoneDisplay;
  if (el.tagName === "A") el.href = `tel:${COMPANY.phoneLink}`;
});
document.querySelectorAll("[data-email]").forEach((el) => {
  el.textContent = COMPANY.email;
  if (el.tagName === "A") el.href = `mailto:${COMPANY.email}`;
});
document.querySelectorAll("[data-area]").forEach((el) => (el.textContent = COMPANY.area));

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
}

const form = document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    const submit = form.querySelector("button[type=submit]");
    status.textContent = "Ihre Anfrage wird gesendet …";
    submit.disabled = true;
    const payload = Object.fromEntries(new FormData(form));
    payload.privacy = form.elements.privacy.checked;
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      status.textContent = result.message;
      status.className = `form-status ${response.ok ? "success" : "error"}`;
      if (response.ok) form.reset();
    } catch {
      status.textContent = "Die Nachricht konnte nicht gesendet werden. Bitte kontaktieren Sie uns direkt.";
      status.className = "form-status error";
    } finally {
      submit.disabled = false;
    }
  });
}

document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
