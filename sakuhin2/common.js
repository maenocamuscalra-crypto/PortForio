
"use strict";

document.addEventListener("DOMContentLoaded", function () {

  const carousel = document.querySelector(".seisaku");

  if (!carousel) return;

  const track = carousel.querySelector(".track");
  const slides = carousel.querySelectorAll(".slide");
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");
  const dots = carousel.querySelector(".dots");

  let currentIndex = 0;

  // ドットを作成
  slides.forEach((slide, index) => {
    const dot = document.createElement("span");

    dot.addEventListener("click", () => {
      currentIndex = index;
      updateCarousel();
    });

    dots.appendChild(dot);
  });

  const dotItems = dots.querySelectorAll("span");

  // 表示を更新
  
 function updateCarousel() {
  track.style.transform =
    `translateX(-${currentIndex * 100}%)`;

  // 表示中のスライドの高さに合わせる
  const currentSlide = slides[currentIndex];

  carousel.style.height = "auto";

  const slideHeight = currentSlide.offsetHeight;

  carousel.style.height =
    (slideHeight + 200) + "px";

  dotItems.forEach((dot, index) => {
    dot.classList.toggle(
      "active",
      index === currentIndex
    );
  });
 }


  // 次へ
  next.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
  });

  // 前へ
  prev.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + slides.length) % slides.length;

    updateCarousel();
  });

  // 初期表示
  updateCarousel();

});
