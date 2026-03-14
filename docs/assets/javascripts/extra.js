// Automatically open external links in a new tab
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a[href^='http']");

  links.forEach(link => {
    // Skip same-origin links
    if (link.hostname !== window.location.hostname) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});

// Toggle for expandable table sections
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".domain-header").forEach(header => {
    header.addEventListener("click", () => {
      const domain = header.dataset.domain;
      header.classList.toggle("open");

      document.querySelectorAll(`.domain.${domain}`).forEach(row => {
        row.style.display = header.classList.contains("open")
          ? "table-row"
          : "none";
      });
    });
  });
});
