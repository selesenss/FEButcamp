const openPopup = (trigger, popupSelector, activeClass) => {
  const popup = document.querySelector(popupSelector);
  trigger.addEventListener("click", () => {
    popup?.classList.add(activeClass);
  });
};

const closePopup = (trigger, popupSelector, activeClass) => {
  const popup = document.querySelector(popupSelector);
  trigger.addEventListener("click", () => {
    popup?.classList.remove(activeClass);
  });

  document.addEventListener("keydown", (e) => {
    const key = e.key;

    if (key === "Escape") {
      popup?.classList.remove(activeClass);
    }
  });

  document.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup?.classList.remove(activeClass);
    }
  });
};