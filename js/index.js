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
    PL: "STRONA GŁÓWNA",
  },
  navAbout: {
    EN: "About",
    PL: "O MNIE",
  },
  navProjects: {
    EN: "Projects",
    PL: "PROJEKTY",
  },
  navContact: {
    EN: "Contact",
    PL: "KONTAKT",
  },
  homePageWelcome: {
    EN: "Welcome to my digital space, my name is",
    PL: "Witam w mojej cyfrowej przestrzeni, nazywam się",
  },
  homePageTitle: {
    EN: "I am a Jr. Front-End developer based in London, UK.",
    PL: "Jestem Jr. Front-End developerem w Londynie",
  },
  introPart1: {
    EN: "Within my portfolio, I showcase a panel of significant achievements and tackled challenges. I applied my skills in",
    PL: "W swoim portfolio przedstawiam panel osiągnięć i projektów. Użyłam :",
  },
  codingLan: {
    EN: "HTML, CSS, JavaScript, React",
    PL: "HTML, CSS, JavaScript, React",
  },
  introPart2: {
    EN: "incorporating",
    PL: "z wykorzystaniem",
  },
  bootstrap: {
    EN: "Bootstrap",
    PL: "Bootstrap",
  },
  introPart3: {
    EN: "to design pages on various topics. I also integrated",
    PL: "do projektowania stron o różnej tematyce. Integrowałam",
  },
  introPart4: {
    EN: "and",
    PL: "i",
  },
  api: {
    EN: "API",
    PL: "API",
  },
  apiS: {
    EN: "APIs",
    PL: "APIs",
  },
  introPart5: {
    EN: "to increase the functionality of the applications I developed. Head over to my",
    PL: "aby zwiększyć funkcjonalność tworzonych przeze mnie aplikacji. Przejdź na stronę moich",
  },
  homePageIntroLink: {
    EN: "projects",
    PL: "projektów",
  },
  introPart6: {
    EN: "page to see my work.",
    PL: ".",
  },
  cert: {
    EN: "Certificates",
    PL: "Certyfikaty",
  },
  certCard1: {
    EN: "I gained a solid foundation in web development. This program provided me with the necessary tools to start a Front-End career.",
    PL: "Na kursie zdobyłam wiedzę i solidne podstawy w tworzeniu stron internetowych. Ten program zapewnił mi niezbędne narzędzia do rozpoczęcia kariery Front-End developer.",
  },
  certCard2: {
    EN: "I learned the basics of HTML, style with CSS, build interaction with JavaScript, and craft my very first interactive landing page.",
    PL: "Nauczyłam się podstaw HTML, CSS, budowania interakcji z JavaScript i stworzyłam moją pierwszą interaktywną stronę internetową.",
  },
  certCard3: {
    EN: "I learned HTML class manipilation and advanced CSS : background properties, transform, grids, change theme.",
    PL: "Nauczyłam się manipulowania klasami HTML i zaawansowanych opcji w CSS: background properties, transform, grids, change theme. ",
  },
  certCard4: {
    EN: "I advanced my web development skills, mastering HTML, CSS and JavaScript.",
    PL: "Rozwinęłam swoje umiejętności tworzenia stron internetowych, szlifując HTML, CSS i JavaScript.",
  },
  certCard5: {
    EN: "I built website with live data using APIs, advanced JavaScript and modern coding tools.",
    PL: "Zbudowałam stronę internetową z bieżącymi danymi wykorzystując API i JavaScript.",
  },
  certCard6: {
    EN: "I learned to build applications using Artificial Intelligence, SheCodes AI API.",
    PL: "Nauczyłam się budować aplikacje z wykorzystaniem sztucznej inteligencji, SheCodes API AI.",
  },
  certCard7: {
    EN: "I learned how to code responsive websites that adapt to any device.",
    PL: "Nauczyłam się budować responsywne strony internetowe, które dostosowują się rozmiarem do każdego urządzenia.",
  },
  certCard8: {
    EN: "I learned responsive design techniques and CSS framework - Bootstrap to ensure an optimal user experience.",
    PL: "Nauczyłam się techniki projektowania responsywnego i CSS framework- Bootstrap.",
  },
  certCard9: {
    EN: "I learned how to build highly interactive weather app using the React.js.",
    PL: "Nauczyłam się, jak zbudować wysoce interaktywną aplikację pogodową przy użyciu React.js.",
  },
  certCard10: {
    EN: "I learned how to build fully functional dictionary app using the React.js and APIs.",
    PL: "Nauczyłam się, jak zbudować w pełni funkcjonalną aplikację-słownik angielski  przy użyciu React.js i API",
  },
  certCard11: {
    EN: "This career workshop helped me to understand how to build portfolio and motivated me to challenge myself.",
    PL: "Ten warsztat pomógł mi zbudować portfolio, przygotował i zmotywował do ciągłego udoskonalania aby rozpocząć karierę programisty.",
  },
  projects: {
    EN: "Selected projects",
    PL: "Wybrane Projekty",
  },
  project1Heding: {
    EN: "React Weather App",
    PL: "Aplikacja Pogodowa React",
  },
  project1: {
    EN: "This weather application was the final project of my SheCodes React workshop. It includes a search engine and displays results powered by the OpenWeatherMap API.",
    PL: "Aplikacja pogodowa React była ostatnim projektem warsztatów SheCodes React. Zawiera wyszukiwarkę i wyświetla bieżące dane obsługiwane przez API OpenWeatherMap.",
  },
  project2Heding: {
    EN: "AI Wishes Generator",
    PL: "Generator Życzeń AI ",
  },
  project2: {
    EN: "AI-powered wishes generator is build with HTML, Vanilla JavaScript, CSS and SheCodes API. Users can select various option from drop down menu to find words for any occasion.",
    PL: "Generator życzeń zbudowany przy użyciu AI , HTML, Vanilla Java Script, CSS i SheCodes API. Użytkownicy mogą wybierać różne opcje z rozwijanego menu, aby znaleźć słowa na każdą okazję.",
  },
  project3Heding: {
    EN: "Travel Guide",
    PL: "Przewodnik Turystyczny",
  },
  project3: {
    EN: "I built responsive page using HTML and Vanilla CSS. Goal of this project was to create website about something I am passionate about. I chosed Bermuda where I've been lucky to live and work.",
    PL: "Zbudowałam responsywną stronę przy użyciu HTML i Vanilla CSS. Celem tego projektu było stworzenie strony internetowej o pasji do czegoś. Wybrałam Bermudy, gdzie miałam szczęście mieszkać i pracować.",
  },
  project4Heding: {
    EN: "Panda Dictionary",
    PL: "Słownik Panda",
  },
  project4: {
    EN: "The user-friendly interactive dictionary includes a search engine, displays meanings, synonyms, phonetics and photos powered by the Dictionary and Pexels APIs.",
    PL: "Przyjazny dla użytkownika interaktywny słownik który zawiera wyszukiwarkę, wyświetla znaczenia, synonimy i fonetykę słów wraz z obrazkami, z wykorzystaniem APIs dictionary i Pexels.",
  },
  project5Heding: {
    EN: "World Clock App",
    PL: "Apikacja - Zegar Świata",
  },
  project5: {
    EN: "The user-friendly dashboard shows time in four distinct locations. Select from a list of 59 cities using a dropdown menu. Customize experience with a choice between light and dark mode.",
    PL: "Przyjazny dla użytkownika pulpit nawigacyjny pokazuje czas w czterech różnych lokalizacjach oraz listę 59 miast do wyboru. Zawiera opcję zmiany tła pomiędzy trybem jasnym a ciemnym.",
  },
  project6Heding: {
    EN: "Vanilla Weather App",
    PL: "Aplikacja Pogodowa - Vanilla JavaScript",
  },
  project6: {
    EN: "Switch between Celsius and Fahrenheit units to check the current temperature. This app is powered by the SheCodes Weather API, ensuring accurate and up-to-date weather information.",
    PL: "Aplikacja w której można sprawdzić aktualną pogodę i przełączyć jednostkę temperatury pomiędzy Celsjusz a Fahrenheit. Ta aplikacja korzysta z  API pogodowego SheCodes.",
  },
  contact1: {
    EN: "Let's",
    PL: "Skontaktuj się!",
  },
  contact2: {
    EN: "Connect!",
    PL: "📧",
  },

  contactParagraph: {
    EN: "If you are looking for a passionate Junior Front-end Developer, do not hesitate to contact me!✨",
    PL: "Jeśli szukasz Junior Front-end Developera z pasją, skontaktuj się ze mną✨",
  },
  message: {
    EN: "Send me a message",
    PL: "Napisz wiadomość",
  },
  contactBtn: {
    EN: "Contact me",
    PL: "Wyślij wiadomość",
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
