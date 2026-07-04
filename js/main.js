/* Garret Keyhani, personal site.
   Progressive enhancement only. The page reads completely with JS off:
   the app switcher renders all four panels stacked, the nav stays inline.
   Modules: mobile nav, app switcher tabs, copy email. Nothing else. */
(function () {
  "use strict";

  /* ---------- Mobile nav ---------- */
  var toggle = document.getElementById("nav-toggle");
  var links = document.getElementById("site-nav");
  if (toggle && links) {
    var closeNav = function () {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeNav();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("is-open")) {
        closeNav();
        toggle.focus();
      }
    });
  }

  /* ---------- App switcher (the one exhibit) ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab[role='tab']"));
  var panels = Array.prototype.slice.call(document.querySelectorAll(".panel[role='tabpanel']"));
  if (tabs.length && panels.length) {
    var container = document.querySelector(".switcher__panels");
    panels.forEach(function (p) { p.removeAttribute("hidden"); });
    if (container) container.classList.add("is-ready");
    var select = function (tab, focus) {
      tabs.forEach(function (t) {
        var active = t === tab;
        t.setAttribute("aria-selected", String(active));
        t.tabIndex = active ? 0 : -1;
      });
      panels.forEach(function (p) {
        /* visibility:hidden (CSS) keeps inactive panels out of the a11y tree */
        p.classList.toggle("is-active", p.id === tab.getAttribute("aria-controls"));
      });
      if (focus) tab.focus();
    };
    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { select(tab, false); });
      tab.addEventListener("keydown", function (e) {
        var next = null;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") next = tabs[(i + 1) % tabs.length];
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === "Home") next = tabs[0];
        if (e.key === "End") next = tabs[tabs.length - 1];
        if (next) { e.preventDefault(); select(next, true); }
      });
    });
    /* initial state: first tab active */
    select(tabs[0], false);
  }

  /* ---------- Copy email ---------- */
  var copyBtn = document.getElementById("copy-email");
  if (copyBtn && navigator.clipboard) {
    var original = copyBtn.textContent;
    copyBtn.addEventListener("click", function () {
      navigator.clipboard.writeText(copyBtn.getAttribute("data-email")).then(function () {
        copyBtn.textContent = "Copied";
        setTimeout(function () { copyBtn.textContent = original; }, 2000);
      });
    });
  } else if (copyBtn) {
    copyBtn.hidden = true;
  }
})();
