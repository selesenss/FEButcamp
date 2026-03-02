const defaultOptions = {
  repeat: 0,
  ease: "none",
  duration: 0.4,
}

export const clearXPosition = (target) =>
  gsap.to(target, {
    ...defaultOptions,
    xPercent: 0,
  });

export const clearYPosition = (target) =>
  gsap.to(target, {
    ...defaultOptions,
    yPercent: 0,
  });

export const moveX = (target, x) =>
  gsap.to(target, {
    ...defaultOptions,
    xPercent: x,
    duration: 0.3,
  });

export const moveY = (target, y) =>
  gsap.to(target, {
    ...defaultOptions,
    yPercent: y,
    duration: 0.3,
  });

//этот код вообще нигде не используется, не думаю что целесообразно его хранить
// export const moveFromLeft = (target) =>
//   gsap.from(target, {
//     xPercent: 120,
//     repeat: 0,
//     ease: "none",
//     duration: 0.3,
//   });

//этот код вообще нигде не используется, не думаю что целесообразно его хранить и к тому же очень странная функция с хардкодом moveFromRight200, это непонятное число 200 нужно передавать переменной
// export const moveFromRight200 = (target) =>
//   gsap.from(target, {
//     xPercent: -200,
//     repeat: 0,
//     ease: "none",
//     duration: 0.4,
//   });

// ===============================================

function init(origin, destination, direction, moveSize) {
  const isDesktopMedia = window.matchMedia("(min-width: 1200px)").matches;

  if (isDesktopMedia) {
    if (destination.index === 0 && direction === "up") {
      clearXPosition(document.querySelector(".cta"));
      clearXPosition(document.querySelector(".img"));
      clearYPosition(document.querySelector(".block"));
      clearXPosition(document.querySelector(".grid"));
    }

    if (origin.index === 0 && direction === "down") {
      moveY(document.querySelector(".block"), -moveSize);
      destination.item.classList.add("bg");
    }
    else if (origin.index === 1 && direction === "up") {
      clearYPosition(document.querySelector(".block"));
      origin.item.classList.remove("bg");
    }
    else if (origin.index === 2 && direction === "up") {
      destination.item.classList.add("bg");
    }
  } else {
    if (origin.index === 0 && direction === "down") {
      moveX(document.querySelector(".cta"), -moveSize);
      moveX(document.querySelector(".mg"), moveSize);
    }
    else if (origin.index === 1 && direction === "up") {
      clearXPosition(document.querySelector(".cta"));
      clearXPosition(document.querySelector(".img"));
    }
    else if (origin.index === 1 && direction === "down") {
      moveX(document.querySelector(".grid"), moveSize);
    }
    else if (origin.index === 2 && direction === "up") {
      clearXPosition(document.querySelector(".grid"));
    }
    else if (origin.index === 2 && direction === "down") {
      moveX(document.querySelector(".container"), moveSize);
      moveX(document.querySelector(".mobile-text"), moveSize);
    }
    else if (origin.index === 3 && direction === "up") {
      clearXPosition(document.querySelector(".container"));
      clearXPosition(document.querySelector(".mobile-text"));
    }
  }
}



