// ================================================= //
// ======== Preloader with spinner Function ======== //
// ================================================= //
window.addEventListener("load", function () {
  document.getElementById("preloader").style.display = "flex";

  setTimeout(function () {
    document.getElementById("preloader").style.display = "none";

    document.getElementById("content").style.display = "block";
  }, 500);
});

setTimeout(function () {
  document.querySelector(".camera-shutter").style.display = "none";
  document.body.style.overflow = "auto";
}, 2000);
// ================================================= //

// ================================================= //
// ================ Nav Bar Functions ============== //
// ================================================= //

// ===== Desktop ===== //
let navbarDesktop = document.getElementById("navbar-example2");
let navbarMobile = document.getElementById("navbar-mobile");

// Listen for the scroll event
window.addEventListener("scroll", function () {
  if (window.scrollY >= window.innerHeight) {
    navbarDesktop.classList.add("nav-scroll");
    navbarMobile.classList.add("nav-scroll");
  } else {
    navbarDesktop.classList.remove("nav-scroll");
    navbarMobile.classList.remove("nav-scroll");
  }
});

// ===== Mobile ===== //
document.addEventListener("DOMContentLoaded", function () {
  let offcanvasNavbar = new bootstrap.Offcanvas(
    document.getElementById("offcanvasNavbar")
  );

  // Prevent offcanvas menu from closing when clicking outside
  document.body.addEventListener("click", function (event) {
    if (!event.target.closest(".offcanvas") && offcanvasNavbar._backdrop) {
      event.preventDefault();
      event.stopPropagation();
    }
  });

  // Close offcanvas menu when a navigation link is clicked
  var navLinks = document.querySelectorAll(".navbar-nav a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default behavior of the click event
      var targetSectionId = link.getAttribute("href").substring(1);
      var targetSection = document.getElementById(targetSectionId);

      if (targetSection) {
        // Scroll to the target section after a short delay to allow the offcanvas to close
        setTimeout(function () {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }, 300);

        // Close the offcanvas menu
        offcanvasNavbar.hide();
      }
    });
  });
});
// ================================================= //

// ================================================= //
// ================= Typing Function =============== //
// ================================================= //
document.addEventListener("DOMContentLoaded", function () {
  animateWord();
});

function animateWord() {
  let wordElement = document.querySelector(".typed-text");
  let words = ["Larry Daniels", "Developer", "Designer"];
  let currentWordIndex = 0;

  setInterval(function () {
    wordElement.textContent = words[currentWordIndex];
    wordElement.style.width = "100%";

    setTimeout(function () {
      wordElement.style.width = "0";
    }, 1000); // Adjust the delay for typing

    currentWordIndex = (currentWordIndex + 1) % words.length;
  }, 2250); // Adjust the overall duration
}
// ================================================= //

// ================================================= //
// ========== Back To Top Button =================== //
// ================================================= //
window.addEventListener("load", function () {
  let mybutton = document.getElementById("myBtn");

  function scrollFunction() {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  window.onscroll = function () {
    scrollFunction();
  };

  mybutton.onclick = function () {
    topFunction();
  };

  // Use requestAnimationFrame to delay the execution slightly
  requestAnimationFrame(function () {
    scrollFunction();
  });
});
// ================================================= //
