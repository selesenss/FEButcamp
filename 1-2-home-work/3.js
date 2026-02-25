export const clearXPosition = (target) =>
  gsap.to(target, {
    xPercent: 0,
    repeat: 0,
    ease: "none",
    duration: 0.4,
  });

export const clearYPosition = (target) =>
  gsap.to(target, {
    yPercent: 0,
    repeat: 0,
    ease: "none",
    duration: 0.4,
  });

export const moveLeft = (target) =>
  gsap.to(target, {
    xPercent: -120,
    repeat: 0,
    ease: "none",
    duration: 0.3,
  });

export const moveRight = (target) =>
  gsap.to(target, {
    xPercent: 120,
    repeat: 0,
    ease: "none",
    duration: 0.3,
  });

export const moveTop = (target) =>
  gsap.to(target, {
    yPercent: -120,
    repeat: 0,
    ease: "none",
    duration: 0.3,
  });

export const moveFromLeft = (target) =>
  gsap.from(target, {
    xPercent: 120,
    repeat: 0,
    ease: "none",
    duration: 0.3,
  });

export const moveFromRight200 = (target) =>
  gsap.from(target, {
    xPercent: -200,
    repeat: 0,
    ease: "none",
    duration: 0.4,
  });

// ===============================================

function init(origin, destination, direction, trigger) {
  const isDesktopMedia = window.matchMedia("(min-width: 1200px)").matches;

  if (origin.index == 0 && direction == "down") {
    moveLeft(document.querySelector(".cta"));

    moveRight(document.querySelector(".mg"));
  } else if (origin.index == 1 && direction == "up") {
    clearXPosition(document.querySelector(".cta"));

    clearXPosition(document.querySelector(".img"));
  }

  if (destination.index == 0 && direction == "up" && isDesktopMedia) {
    clearXPosition(document.querySelector(".cta"));

    clearXPosition(document.querySelector(".img"));

    clearYPosition(document.querySelector(".block"));

    clearXPosition(document.querySelector(".grid"));
  }

  if (origin.index == 0 && direction == "down" && isDesktopMedia) {
    moveTop(document.querySelector(".block"));
    destination.item.classList.add("bg");
  } else if (origin.index == 1 && direction == "up" && isDesktopMedia) {
    clearYPosition(document.querySelector(".block"));
    origin.item.classList.remove("bg");
  }

  if (origin.index == 2 && direction == "up" && isDesktopMedia) {
    destination.item.classList.add("bg");
  }

  if (origin.index == 1 && direction == "down") {
    moveRight(document.querySelector(".grid"));
  } else if (origin.index == 2 && direction == "up") {
    clearXPosition(document.querySelector(".grid"));
  }

  if (origin.index == 2 && direction == "down") {
    moveRight(document.querySelector(".container"));
    moveRight(document.querySelector(".mobile-text"));
  } else if (origin.index == 3 && direction == "up") {
    clearXPosition(document.querySelector(".container"));
    clearXPosition(document.querySelector(".mobile-text"));
  }
}