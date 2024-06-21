const toggleMenu = () => document.body.classList.toggle("open");

document.addEventListener("DOMContentLoaded", function () {
  console.log("Index script DOMContentLoaded");

  function toggleLanguage() {
    let switchElement = document.getElementById("btn");
    let language = switchElement.checked ? "PL" : "EN";
    translatePage(language);
  }
  function translatePage(language) {
    console.log("Current language:", language);
    const elementsToTranslate = document.querySelectorAll("[data-translate]");

    elementsToTranslate.forEach((element) => {
      const translationKey = element.getAttribute("data-translate");
      const translatedText = translations[translationKey]
        ? translations[translationKey][language]
        : null;

      if (translatedText) {
        console.log(`Translating "${translationKey}" to "${translatedText}"`);
        element.textContent = translatedText;
      } else {
        console.warn(`Translation not found for key "${translationKey}"`);
      }
    });
  }
  let switchElement = document.getElementById("btn");
  switchElement.addEventListener("click", toggleLanguage);

  toggleLanguage();
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("Translation script loaded");
});

const translations = {
  navHome: {
    EN: "Home",
    PL: "STRONA GLOWNA",
  },
  navAbout: {
    EN: "About",
    PL: "O MNIE",
  },
  navProjects: {
    EN: "Projects",
    PL: "PROJEKTY",
  },
};

var form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML =
          "<div style = 'color:#00c9ec;font-size:20px; text-align:center'> Thanks for your submission!</div>";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML =
              "<div style = 'color:#00c9ec'> Oops! There was a problem submitting your form </div>";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML =
        "<div style = 'color:#00c9ec'> Oops! There was a problem submitting your form </div>";
    });
}
form.addEventListener("submit", handleSubmit);

document.addEventListener("DOMContentLoaded", function () {
  let multipleCardCarousel = document.querySelector(
    "#carouselCertificatesControls"
  );

  if (window.matchMedia("(min-width: 768px)").matches) {
    let carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false, // Disable automatic sliding
      wrap: false, // Prevent wrapping at the end
    });

    let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
    let cardWidth = document.querySelector(".carousel-item").offsetWidth;
    let scrollPosition = 0;

    document
      .querySelector("#carouselCertificatesControls .carousel-control-next")
      .addEventListener("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
          scrollPosition += cardWidth;
          document
            .querySelector("#carouselCertificatesControls .carousel-inner")
            .scroll({ left: scrollPosition, behavior: "smooth" });
        }
      });

    document
      .querySelector("#carouselCertificatesControls .carousel-control-prev")
      .addEventListener("click", function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          document
            .querySelector("#carouselCertificatesControls .carousel-inner")
            .scroll({ left: scrollPosition, behavior: "smooth" });
        }
      });
  } else {
    multipleCardCarousel.classList.add("slide");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let multipleCardCarousel = document.querySelector(
    "#carouselProjectsControls"
  );

  if (window.matchMedia("(min-width: 768px)").matches) {
    let carousel = new bootstrap.Carousel(multipleCardCarousel, {
      interval: false, // Disable automatic sliding
      wrap: false, // Prevent wrapping at the end
    });

    let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
    let cardWidth = document.querySelector(".carousel-item").offsetWidth;
    let scrollPosition = 0;

    document
      .querySelector("#carouselProjectsControls .carousel-control-next")
      .addEventListener("click", function () {
        if (scrollPosition < carouselWidth - cardWidth * 4) {
          scrollPosition += cardWidth;
          document
            .querySelector("#carouselProjectsControls .carousel-inner")
            .scroll({ left: scrollPosition, behavior: "smooth" });
        }
      });

    document
      .querySelector("#carouselProjectsControls .carousel-control-prev")
      .addEventListener("click", function () {
        if (scrollPosition > 0) {
          scrollPosition -= cardWidth;
          document
            .querySelector("#carouselProjectsControls .carousel-inner")
            .scroll({ left: scrollPosition, behavior: "smooth" });
        }
      });
  } else {
    multipleCardCarousel.classList.add("slide");
  }
});
