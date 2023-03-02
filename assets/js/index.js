// =============== Play video ===============
function playVideo() {
  const videoFile = document.querySelector(".video__file");
  const videoOverlay = document.querySelector(".video__overlay");
  const videoBtn = document.querySelector(".video__button");
  videoBtn.addEventListener("click", () => {
    videoFile.play();
    videoOverlay.style.display = "none";
  });
}
playVideo();

// =============== Slider ===============
const swiper = new Swiper(".swiper1", {
  slidesPerView: 1,
  spaceBetween: 32,
  draggable: true,
  grabCursor: true,
  speed: 500,
  grid: {
    fill: "row",
    rows: 2,
  },

  // BreakPoints
  breakpoints: {
    1050: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 1,
      },
    },
  },

  // Autoplay
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// =============== Slider 2 ===============
const tinySwiper = new Swiper(".swiper2", {
  slidesPerView: 1,
  draggable: true,
  grabCursor: true,
  grid: {
    fill: "row",
    rows: 1,
  },

  // BreakPoints
  breakpoints: {
    520: {
      grid: {
        rows: 2,
      },
    },
  },

  // Autoplay
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
