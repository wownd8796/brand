fetch("./js/index.json")
  .then((response) => response.json())
  .then((bag) => callback(bag));

function callback(bag) {
  const elDot = document.querySelectorAll(".dot"),
    slider = document.querySelector(".slide"),
    elText = document.querySelector(".text");

  let bags = bag.data;


  function changeData(name) {
    let data = bag.data[name];
    elText.innerHTML = `<div class="name">${data.name}</div>
                      <div class="more">
                        <a href="./pages/hermes/history.html">MORE</a>
                      </div>`;

    let section = "";
    section = '<section class="customer-logos slider">';
    data.images.forEach((url) => {
      section += ` <div class="slide">
                                <img src="${url}" />
                              </div>`;
    });
    section += "</section>";

    slider.innerHTML = section;

    slideFn();
  }

  elDot.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      changeData(dot.dataset.name);
    });
  });
}

function slideFn() {
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
}
