const controls = document.querySelector(".dot-controls");
const dots = controls.querySelectorAll(".dot");
const cls = {
  previous: "previous",
  active: "active",
  next: "next",
};
let activeIndex = 0;

const handleClassUpdates = (el) => {
  dots.forEach((dot) => dot.classList.remove(...Object.values(cls)));

  el.classList.add(cls.active);

  if (el.previousElementSibling) {
    el.previousElementSibling.classList.add(cls.previous);
  }

  if (el.nextElementSibling) {
    el.nextElementSibling.classList.add(cls.next);
  }
};

const handleClick = (event) => {
  if (event.target.matches(".dot")) setActive(event.target);
};

const setActive = (el) => {
  let previousActiveIndex = activeIndex;
  let selectedIndex = [...dots].indexOf(el);

  if (selectedIndex === -1) selectedIndex = dots.length - 1;
  activeIndex = selectedIndex;
  animateDots(previousActiveIndex);
};

const animateDots = (count) => {
  handleClassUpdates(dots[count]);
  if (count === activeIndex) return;
  count < activeIndex ? count++ : count--;
  setTimeout(() => animateDots(count), 1000 / 30);
};

const init = (active) => setActive(dots[active - 1]);

init(4);

controls.addEventListener("click", handleClick);
