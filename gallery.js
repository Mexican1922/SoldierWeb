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

  // Show button on scroll
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Scroll to top when clicked
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
