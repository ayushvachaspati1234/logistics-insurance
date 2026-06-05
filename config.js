// ============================================================
// BRAND CONFIG — edit these three lines to rebrand the site.
// Everything in the page that shows the company name, domain,
// or contact email is injected from here at load time.
// ============================================================
const BRAND = {
  companyName: "SureRoute",           // <- replace with real company name
  domain: "sureroute.example.com",    // <- replace with real domain
  contactEmail: "hello@sureroute.example.com"
};

// Inject brand values into all elements tagged with data attributes.
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-company]").forEach(function (el) {
    el.textContent = BRAND.companyName;
  });
  document.querySelectorAll("[data-domain]").forEach(function (el) {
    el.textContent = BRAND.domain;
  });
  document.querySelectorAll("[data-email]").forEach(function (el) {
    el.textContent = BRAND.contactEmail;
    if (el.tagName === "A") el.href = "mailto:" + BRAND.contactEmail;
  });
  document.title = BRAND.companyName + " — Cargo Insurance That Pays Before You File";
});
