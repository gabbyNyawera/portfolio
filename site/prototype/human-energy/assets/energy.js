/* Human Energy prototypes — small, dependency-free behaviour. */
(() => {
  "use strict";

  const embedded = window.self !== window.top;
  if (embedded) {
    document.body.classList.add("is-embedded");
    document.querySelectorAll('a[href^="/prototype/human-energy/"]').forEach((link) => {
      link.target = "_top";
    });
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  /* ------------------------------- Reveals ------------------------------- */

  const reveals = document.querySelectorAll(".he-reveal");
  if (reveals.length) {
    if ("IntersectionObserver" in window && !reduceMotion) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      reveals.forEach((element) => observer.observe(element));
    } else {
      reveals.forEach((element) => element.classList.add("is-visible"));
    }
  }

  /* ------------------------------ Local time ----------------------------- */

  const clocks = document.querySelectorAll("[data-time]");
  if (clocks.length) {
    const format = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Harare",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const tick = () => {
      const time = format.format(new Date());
      clocks.forEach((clock) => {
        clock.textContent = clock.closest(".he-footer-bottom")
          ? time
          : `Harare — ${time}`;
      });
    };
    tick();
    window.setInterval(tick, 60000);
  }

  /* --------------------------- Philosophy deck --------------------------- */

  document.querySelectorAll("[data-deck]").forEach((deck) => {
    const track = deck.querySelector("[data-deck-track]");
    const slides = [...deck.querySelectorAll(".he-slide")];
    const labels = [...deck.querySelectorAll("[data-deck-go]")];
    const previous = deck.querySelector("[data-deck-prev]");
    const next = deck.querySelector("[data-deck-next]");
    const index = deck.querySelector("[data-deck-index]");
    const progress = deck.querySelector("[data-deck-progress]");
    if (!track || slides.length === 0) return;

    let current = 0;
    let scrolling = false;

    const sync = () => {
      labels.forEach((label, i) => {
        const active = i === current;
        label.classList.toggle("is-active", active);
        label.setAttribute("aria-selected", String(active));
      });
      if (index) index.textContent = String(current + 1).padStart(2, "0");
      if (progress) progress.style.width = `${((current + 1) / slides.length) * 100}%`;
      if (previous) previous.disabled = current === 0;
      if (next) next.disabled = current === slides.length - 1;
    };

    const go = (target, smooth = true) => {
      current = Math.max(0, Math.min(slides.length - 1, target));
      track.scrollTo({
        left: current * track.clientWidth,
        behavior: smooth && !reduceMotion ? "smooth" : "auto",
      });
      sync();
    };

    labels.forEach((label, i) => {
      label.addEventListener("click", (event) => {
        event.preventDefault();
        go(i);
      });
    });
    previous?.addEventListener("click", () => go(current - 1));
    next?.addEventListener("click", () => go(current + 1));

    track.addEventListener(
      "scroll",
      () => {
        if (scrolling) return;
        scrolling = true;
        window.requestAnimationFrame(() => {
          const width = track.clientWidth || 1;
          const found = Math.round(track.scrollLeft / width);
          if (found !== current && found >= 0 && found < slides.length) {
            current = found;
            sync();
          }
          scrolling = false;
        });
      },
      { passive: true }
    );

    deck.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(current + 1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(current - 1);
      }
    });

    window.addEventListener("resize", () => go(current, false), { passive: true });
    sync();
  });

  /* ------------------------------- Parallax ------------------------------ */

  if (finePointer && !reduceMotion) {
    const shapes = [...document.querySelectorAll("[data-parallax]")];
    if (shapes.length) {
      let frame = 0;
      let pointerX = 0;
      let pointerY = 0;
      const render = () => {
        shapes.forEach((shape) => {
          const depth = Number.parseFloat(shape.dataset.parallax) || 1;
          shape.style.transform = `translate3d(${pointerX * depth * 16}px, ${pointerY * depth * 16}px, 0)`;
        });
        frame = 0;
      };
      window.addEventListener(
        "pointermove",
        (event) => {
          pointerX = event.clientX / window.innerWidth - 0.5;
          pointerY = event.clientY / window.innerHeight - 0.5;
          if (!frame) frame = window.requestAnimationFrame(render);
        },
        { passive: true }
      );
    }
  }

  /* ------------------------------ Mobile menu ---------------------------- */

  document.querySelectorAll(".he-menu").forEach((menu) => {
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => menu.removeAttribute("open"));
    });
  });

  /* --------------------------- Comparison view --------------------------- */

  const viewer = document.querySelector("[data-viewer]");
  if (viewer) {
    const stage = viewer.querySelector("[data-stage]");
    const panels = [...viewer.querySelectorAll("[data-panel]")];
    const tabs = [...document.querySelectorAll("[data-tab]")];
    const toggle = document.querySelector("[data-compare-toggle]");

    const setActive = (id, updateUrl = true) => {
      panels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.dataset.panel === id);
      });
      tabs.forEach((tab) => {
        const active = tab.dataset.tab === id;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
        tab.tabIndex = active ? 0 : -1;
      });
      if (updateUrl) {
        const url = new URL(window.location.href);
        url.searchParams.set("option", id);
        window.history.replaceState(null, "", url);
      }
    };

    tabs.forEach((tab) => {
      tab.addEventListener("click", (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        event.preventDefault();
        setActive(tab.dataset.tab);
      });
    });

    const requested = new URLSearchParams(window.location.search).get("option");
    if (requested && panels.some((panel) => panel.dataset.panel === requested)) {
      setActive(requested, false);
    }

    const setMode = (mode) => {
      if (!stage) return;
      stage.dataset.mode = mode;
      if (toggle) {
        const comparing = mode === "compare";
        toggle.textContent = comparing ? "Single view" : "Compare all";
        toggle.setAttribute("aria-pressed", String(comparing));
      }
    };

    toggle?.addEventListener("click", () => {
      setMode(stage?.dataset.mode === "compare" ? "single" : "compare");
    });

    document.addEventListener("keydown", (event) => {
      if (event.target instanceof Element && event.target.matches("input, textarea, select")) return;
      if (event.key >= "1" && event.key <= "4") {
        const id = ["a", "b", "c", "d"][Number(event.key) - 1];
        setActive(id);
        setMode("single");
      }
      if (event.key.toLowerCase() === "c") {
        setMode(stage?.dataset.mode === "compare" ? "single" : "compare");
      }
    });
  }
})();
