const openPopup = (trigger, popupSelector, activeClass) => {
  const popup = document.querySelector(popupSelector);
  trigger.addEventListener("click", () => {
    popup?.classList.add(activeClass);
  });
};

const closePopup = (trigger, popupSelector, activeClass) => {
  const popup = document.querySelector(popupSelector);
  const close = () => popup?.classList.remove(activeClass);

  const closeHelper = (event) => {
    if (event.type === "keydown" && event.key === "Escape") {
      close()
    }

    if (event.type === "click" && event.target === popup) {
      close();
    }
  }

  trigger.addEventListener("click", close);
  document.addEventListener("keydown", closeHelper);
  document.addEventListener("click", closeHelper);
};

//option with refactoring to one toggle function
const togglePopup = (trigger, popupSelector, activeClass) => {
  const popup = document.querySelector(popupSelector);
  const toggle = () => popup?.classList.toggle(activeClass);
  const close = () => popup?.classList.remove(activeClass);

  if (!trigger || !popup) return;

  const closeHelper = (event) => {
    if (event.type === "keydown" && event.key === "Escape") {
      close()
    }

    if (event.type === "click" && event.target === popup) {
      close();
    }
  }

  trigger.addEventListener("click", toggle);
  document.addEventListener("keydown", closeHelper);
  document.addEventListener("click", closeHelper);
}