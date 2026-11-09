/* Plain-site behaviour. No framework, no dependencies. */
(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  /* ------------------------------- Reveals ------------------------------- */

  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    if ("IntersectionObserver" in window && !reduceMotion) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            entry.target.dataset.visible = "true";
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
      );
      reveals.forEach((element) => observer.observe(element));
    } else {
      reveals.forEach((element) => {
        element.dataset.visible = "true";
      });
    }
  }

  /* -------------------------------- Cursor ------------------------------- */

  const dot = document.querySelector("[data-cursor-dot]");
  const ring = document.querySelector("[data-cursor-ring]");

  if (dot && ring && finePointer && !reduceMotion) {
    const ringInner = ring.firstElementChild;
    const pointer = { x: 0, y: 0 };
    const dotPos = { x: 0, y: 0 };
    const ringPos = { x: 0, y: 0 };
    let visible = false;
    let hovering = false;

    /* The dot rests alone; over a control it gives way to the filled circle. */
    const syncCursor = () => {
      dot.classList.toggle("opacity-0", !visible || hovering);
      dot.classList.toggle("opacity-100", visible && !hovering);
      ring.classList.toggle("opacity-0", !visible);
      ring.classList.toggle("opacity-100", visible);
    };

    const show = () => {
      if (visible) return;
      visible = true;
      syncCursor();
    };

    const onMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      show();
    };

    const onOver = (event) => {
      const target = event.target;
      if (!(target instanceof Element) || !ringInner) return;
      const dark = Boolean(
        target.closest(".dark-section, .site-header-dark")
      );
      ringInner.classList.toggle("bg-background", dark);
      ringInner.classList.toggle("text-foreground", dark);
      ringInner.classList.toggle("bg-foreground", !dark);
      ringInner.classList.toggle("text-background", !dark);
      const next = Boolean(
        target.closest(
          "a, button, [role='button'], input[type='submit'], label"
        )
      );
      if (next === hovering) return;
      hovering = next;
      ringInner.classList.toggle("size-9", hovering);
      ringInner.classList.toggle("size-0", !hovering);
      ringInner.classList.toggle("opacity-100", hovering);
      ringInner.classList.toggle("opacity-0", !hovering);
      syncCursor();
    };

    const loop = () => {
      dotPos.x += (pointer.x - dotPos.x) * 0.4;
      dotPos.y += (pointer.y - dotPos.y) * 0.4;
      ringPos.x += (pointer.x - ringPos.x) * 0.13;
      ringPos.y += (pointer.y - ringPos.y) * 0.13;
      dot.style.transform = `translate3d(${dotPos.x}px, ${dotPos.y}px, 0)`;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", () => {
      visible = false;
      hovering = false;
      if (ringInner) {
        ringInner.classList.add("size-0", "opacity-0");
        ringInner.classList.remove("size-9", "opacity-100");
      }
      syncCursor();
    });
    document.addEventListener("mouseover", onOver, { passive: true });
    requestAnimationFrame(loop);
  }

  /* ---------------------------- Pointer light ---------------------------- */

  const aliveRoot = document.querySelector("[data-alive-pointer]");
  if (aliveRoot && finePointer && !reduceMotion) {
    const light = aliveRoot.firstElementChild;
    if (light) {
      light.style.opacity = "1";
      let x = window.innerWidth * 0.5;
      let y = window.innerHeight * 0.35;
      let targetX = x;
      let targetY = y;
      let idle = true;
      const started = performance.now();

      window.addEventListener(
        "pointermove",
        (event) => {
          targetX = event.clientX;
          targetY = event.clientY;
          idle = false;
        },
        { passive: true }
      );

      const loop = (now) => {
        if (idle) {
          const t = (now - started) * 0.00008;
          targetX = window.innerWidth * (0.5 + 0.3 * Math.cos(t));
          targetY = window.innerHeight * (0.45 + 0.2 * Math.sin(t * 1.27));
        }
        x += (targetX - x) * 0.045;
        y += (targetY - y) * 0.045;
        light.style.transform = `translate3d(${x - 480}px, ${y - 480}px, 0)`;
        requestAnimationFrame(loop);
      };

      requestAnimationFrame(loop);
    }
  }

  /* --------------------------- Scroll progress --------------------------- */

  const progressBar = document.querySelector("[data-scroll-progress]");
  if (progressBar) {
    let frame = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? window.scrollY / max : 0;
      progressBar.style.transform = `scaleX(${clamp(value, 0, 1)})`;
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  /* -------------------------------- Tilt --------------------------------- */

  const tilt = document.querySelector("[data-tilt]");
  if (tilt && finePointer && !reduceMotion) {
    let rotateX = 0;
    let rotateY = 0;
    let targetX = 0;
    let targetY = 0;
    let parallax = 0;
    let targetParallax = 0;

    tilt.addEventListener("pointermove", (event) => {
      const rect = tilt.getBoundingClientRect();
      const nx = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const ny = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      targetY = nx * 4;
      targetX = -ny * 4;
    });

    tilt.addEventListener("pointerleave", () => {
      targetX = 0;
      targetY = 0;
    });

    const onScroll = () => {
      const rect = tilt.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      targetParallax = clamp((window.innerHeight / 2 - center) * 0.035, -16, 16);
    };

    const loop = () => {
      rotateX += (targetX - rotateX) * 0.07;
      rotateY += (targetY - rotateY) * 0.07;
      parallax += (targetParallax - parallax) * 0.07;
      tilt.style.transform = `translate3d(0, ${parallax.toFixed(
        2
      )}px, 0) perspective(1000px) rotateX(${rotateX.toFixed(
        3
      )}deg) rotateY(${rotateY.toFixed(3)}deg)`;
      requestAnimationFrame(loop);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    requestAnimationFrame(loop);
  }

  /* ------------------------------- Magnetic ------------------------------ */

  document.querySelectorAll("span.inline-flex").forEach((outer) => {
    const inner = outer.querySelector(":scope > span.will-change-transform");
    if (!inner) return;

    outer.addEventListener("pointermove", (event) => {
      if (event.pointerType !== "mouse" || reduceMotion) return;
      const rect = outer.getBoundingClientRect();
      const dx = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const dy = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      inner.style.transform = `translate3d(${(dx * 9).toFixed(2)}px, ${(dy * 9 * 0.6).toFixed(2)}px, 0)`;
    });

    outer.addEventListener("pointerleave", () => {
      inner.style.transform = "translate3d(0, 0, 0)";
    });
  });

  /* ------------------------------ Local time ----------------------------- */

  const timeElement = document.querySelector("[data-local-time]");
  if (timeElement) {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Africa/Harare",
    });
    const tick = () => {
      timeElement.textContent = `Harare ${formatter.format(new Date())}`;
    };
    tick();
    window.setInterval(tick, 20000);
  }

  /* ---------------------------- Book covers ------------------------------ */

  document.querySelectorAll("img").forEach((image) => {
    const frame = image.closest(".aspect-\\[2\\/3\\]");
    if (!frame) return;
    image.addEventListener("error", () => {
      const figure = image.closest("figure");
      const title = (figure && figure.querySelector("figcaption p")?.textContent) || image.alt;
      const author = figure && figure.querySelectorAll("figcaption p")[1]?.textContent;
      frame.innerHTML = "";
      const fallback = document.createElement("div");
      fallback.className =
        "flex h-full w-full flex-col justify-between bg-surface-strong p-3";
      const titleElement = document.createElement("span");
      titleElement.className = "font-display text-sm leading-tight";
      titleElement.textContent = title || "";
      fallback.append(titleElement);
      if (author) {
        const authorElement = document.createElement("span");
        authorElement.className =
          "font-sans font-medium text-[8px] uppercase tracking-[0.14em] text-muted-foreground";
        authorElement.textContent = author;
        fallback.append(authorElement);
      }
      frame.append(fallback);
    });
  });

  /* --------------------------- Philosophy deck --------------------------- */

  const slugify = (text) =>
    text
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  const deck = document.querySelector(".snap-x.snap-mandatory.overflow-x-auto");

  if (deck) {
    const slides = Array.from(deck.children);
    const total = slides.length;
    const navs = Array.from(document.querySelectorAll("nav"));
    const railButtons = Array.from(
      document.querySelectorAll("button.group.flex.w-full")
    );
    const prevButtons = Array.from(
      document.querySelectorAll('button[aria-label="Previous slide"]')
    );
    const nextButtons = Array.from(
      document.querySelectorAll('button[aria-label="Next slide"]')
    );
    const floatingNext = document.querySelector(
      'button[aria-label="Next slide"].fixed'
    );
    let current = 0;

    const railTargets = railButtons.map((button) => {
      const label = button.lastElementChild?.textContent ?? "";
      const id = slugify(label);
      return slides.findIndex(
        (slide) => slide.id === id || slide.id === `process-${id}`
      );
    });

    const labelById = new Map();
    railButtons.forEach((button) => {
      const label = button.lastElementChild?.textContent?.trim() ?? "";
      labelById.set(slugify(label), label);
    });

    const labelFor = (slide) => {
      const id = slide.id;
      const base = id.replace(/-example$/, "");
      const label =
        labelById.get(base) ??
        labelById.get(id) ??
        base.replace(/-/g, " ");
      return id.endsWith("-example") ? `${label} — Example` : label;
    };

    const paint = () => {
      railButtons.forEach((button, index) => {
        const active = railTargets[index] === current;
        const dotElement = button.firstElementChild;
        const label = button.lastElementChild;
        button.classList.toggle("text-foreground", active);
        button.classList.toggle("text-muted-foreground", !active);
        if (dotElement) {
          dotElement.classList.toggle("w-6", active);
          dotElement.classList.toggle("bg-accent", active);
          dotElement.classList.toggle("w-1.5", !active);
          dotElement.classList.toggle("bg-border", !active);
          dotElement.classList.toggle("group-hover:bg-muted-foreground", !active);
        }
        if (label) {
          label.classList.toggle("opacity-100", active);
          label.classList.toggle("opacity-60", !active);
        }
      });

      navs.forEach((nav) => {
        const counter = nav.querySelector("span.tabular-nums");
        if (counter) {
          const spaced = counter.textContent.includes(" / ");
          counter.textContent = spaced ? `${current + 1} / ${total}` : `${current + 1}/${total}`;
        }
        const mobileLabel = nav.querySelector("span.truncate");
        if (mobileLabel && slides[current]) {
          mobileLabel.textContent = labelFor(slides[current]);
        }
        const bar = nav.querySelector("div.h-px > div");
        if (bar) bar.style.width = `${((current + 1) / total) * 100}%`;
      });

      prevButtons.forEach((button) => {
        button.disabled = current === 0;
      });
      nextButtons.forEach((button) => {
        button.disabled = current === total - 1;
      });

      if (floatingNext) {
        floatingNext.classList.toggle("opacity-0", current === total - 1);
        floatingNext.classList.toggle("opacity-100", current !== total - 1);
      }
    };

    const goTo = (index) => {
      const target = clamp(index, 0, total - 1);
      deck.scrollTo({ left: deck.clientWidth * target, behavior: reduceMotion ? "auto" : "smooth" });
      current = target;
      paint();
    };

    deck.addEventListener(
      "scroll",
      () => {
        const next = clamp(Math.round(deck.scrollLeft / deck.clientWidth), 0, total - 1);
        if (next === current) return;
        current = next;
        paint();
      },
      { passive: true }
    );

    railButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        if (railTargets[index] >= 0) goTo(railTargets[index]);
      });
    });

    prevButtons.forEach((button) => {
      button.addEventListener("click", () => goTo(current - 1));
    });
    nextButtons.forEach((button) => {
      button.addEventListener("click", () => goTo(current + 1));
    });

    window.addEventListener("resize", () => {
      deck.scrollTo({ left: deck.clientWidth * current, behavior: "auto" });
    });

    paint();
  } else {
    // Standalone navigation specimens (design system page): toggle in place.
    document.querySelectorAll("nav").forEach((nav) => {
      const items = Array.from(nav.querySelectorAll("button.group.flex.w-full"));
      if (!items.length) return;
      let active = items.findIndex((item) => item.classList.contains("text-foreground"));
      if (active < 0) active = 0;

      const paint = () => {
        items.forEach((item, index) => {
          const on = index === active;
          const dotElement = item.firstElementChild;
          const label = item.lastElementChild;
          item.classList.toggle("text-foreground", on);
          item.classList.toggle("text-muted-foreground", !on);
          if (dotElement) {
            dotElement.classList.toggle("w-6", on);
            dotElement.classList.toggle("bg-accent", on);
            dotElement.classList.toggle("w-1.5", !on);
            dotElement.classList.toggle("bg-border", !on);
            dotElement.classList.toggle("group-hover:bg-muted-foreground", !on);
          }
          if (label) {
            label.classList.toggle("opacity-100", on);
            label.classList.toggle("opacity-60", !on);
          }
        });
      };

      items.forEach((item, index) => {
        item.addEventListener("click", () => {
          active = index;
          paint();
        });
      });

      nav.querySelectorAll('button[aria-label="Previous slide"]').forEach((button) => {
        button.addEventListener("click", () => {
          active = clamp(active - 1, 0, items.length - 1);
          paint();
        });
      });
      nav.querySelectorAll('button[aria-label="Next slide"]').forEach((button) => {
        button.addEventListener("click", () => {
          active = clamp(active + 1, 0, items.length - 1);
          paint();
        });
      });
      paint();
    });
  }

  /* ------------------------- Prototype button glow ----------------------- */

  document.querySelectorAll("button").forEach((button) => {
    const sheen = button.querySelector('span[style*="--glow-x"]');
    if (!sheen) return;
    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      button.style.setProperty(
        "--glow-x",
        `${((event.clientX - rect.left) / rect.width) * 100}%`
      );
      button.style.setProperty(
        "--glow-y",
        `${((event.clientY - rect.top) / rect.height) * 100}%`
      );
    });
  });
})();
