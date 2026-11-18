document.addEventListener("DOMContentLoaded", () => {
  const toggle = [...document.querySelectorAll("button, a")].find((element) =>
    /^(show|hide) other projects$/i.test(element.textContent.trim())
  );

  if (!toggle) return;

  const targetId = toggle.getAttribute("aria-controls");
  const projects = targetId ? document.getElementById(targetId) : null;

  if (projects && projects.parentElement === toggle.parentElement) {
    projects.parentElement.insertBefore(toggle, projects);
  }
});
