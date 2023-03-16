fetch("./js/index.json")
  .then((response) => response.json())
  .then((bag) => callback(bag));

function callback(bag) {
  const elDot = document.querySelectorAll(".dot"),
    slider = document.querySelector(".customer-logos");
  console.log(slider);
  console.log(elDot);
  let bags = bag.data;
  console.log(bags.chanel.images);

  elDot.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      const ttt = bags.chanel.images;

      console.log("hhhh");
      slider.innerHTML = "";
      console.log(ttt);
      ttt[0].forEach((o, k) => {
        slider.innerHTML += `<div class="slide">
        <img src="${o}" />
      </div>`;
      });
    });
  });
}

$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});
