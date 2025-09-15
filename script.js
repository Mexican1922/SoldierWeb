  // === Login Modal Logic ===
  const loginModal = document.getElementById('loginModal');
  const loginLinks = [
    document.getElementById('loginLink'),        // desktop top bar
    document.getElementById('loginLinkMobile')   // sidebar
  ];

  loginLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      registerModal.classList.remove('active'); // close register if open
      loginModal.classList.add('active');
    });
  });

  // Close login modal
  loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal.classList.remove('active');
  });
  loginModal.querySelector('.modal-close').addEventListener('click', () => {
    loginModal.classList.remove('active');
  });


  // === Register Modal Logic ===
  const registerModal = document.getElementById('registerModal');
  const registerLinks = [
    document.getElementById('registerLink'),        // desktop top bar
    document.getElementById('registerLinkMobile')   // sidebar
  ];

  registerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      loginModal.classList.remove('active'); // close login if open
      registerModal.classList.add('active');
    });
  });

  // Close register modal
  registerModal.addEventListener('click', (e) => {
    if (e.target === registerModal) registerModal.classList.remove('active');
  });
  registerModal.querySelector('.modal-close').addEventListener('click', () => {
    registerModal.classList.remove('active');
  });


  // === Cross-links inside the modals ===
  const goToRegister = loginModal.querySelector('.link-create'); // inside login
  const goToLogin = registerModal.querySelector('.link-create'); // inside register

  goToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.classList.remove('active');
    registerModal.classList.add('active');
  });

  goToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.classList.remove('active');
    loginModal.classList.add('active');
  });



//   Animations For activities

const animatedEls = document.querySelectorAll(
    ".animate-fade, .animate-fade-delay, .animate-slide-up, .animate-slide-up-delay, .animate-scale, .animate-fade-down, .animate-card"
  );

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  }, { threshold: 0.2 });

  animatedEls.forEach(el => {
    el.style.animationPlayState = "paused"; // pause until visible
    observer.observe(el);
  });

// Slider behaviour

document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('track');
    const slides = Array.from(track.querySelectorAll('.slide'));
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const dots = Array.from(document.querySelectorAll('#dots .dot'));

    let index = 0;

    function update() {
      // move track
      track.style.transform = `translateX(-${index * 100}%)`;
      // update dots
      dots.forEach((d, i) => d.classList.toggle('active', i === index));
      // optional: disable arrows at ends
      prevBtn.disabled = index === 0;
      nextBtn.disabled = index === slides.length - 1;
    }

    // click handlers
    prevBtn.addEventListener('click', () => {
      if (index > 0) index--;
      update();
    });

    nextBtn.addEventListener('click', () => {
      if (index < slides.length - 1) index++;
      update();
    });

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        index = i;
        update();
      });
    });

    // init
    update();
  });

// Animation for the Gallery section

document.addEventListener("DOMContentLoaded", function () {
    const left = document.querySelector(".gallery_left");
    const right = document.querySelector(".right_gallery");

    function handleScroll() {
      const triggerPoint = window.innerHeight * 0.8;

      [left, right].forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < triggerPoint) {
          el.classList.add("animate");
        }
      });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on load
  });

//   Animation for blog section

document.addEventListener("DOMContentLoaded", () => {
    const figures = document.querySelectorAll(".blog_news figure");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // add stagger effect (each card delays a bit)
          entry.target.style.animationDelay = `${index * 0.2}s`;
          entry.target.classList.add("animate");
        }
      });
    }, { threshold: 0.2 });

    figures.forEach(fig => observer.observe(fig));
  });

  document.addEventListener("DOMContentLoaded", () => {
    const figures = document.querySelectorAll(".blog_news figure");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    }, { threshold: 0.2 }); // triggers when 20% is visible

    figures.forEach(fig => observer.observe(fig));
  });

// Animation for About section
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  });

// Show button when scrolling down
window.onscroll = function() {
  let btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top on click
document.getElementById("backToTop").onclick = function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
