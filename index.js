// Hide custom cursor on touch devices
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
  const style = document.createElement('style');
  style.textContent = `
    .cursor, .cursor-follower {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
}

// Preloader
window.addEventListener('load', function () {
  const preloader = document.querySelector('.preloader');
  preloader.style.opacity = '0';
  setTimeout(() => {
    preloader.style.display = 'none';
  }, 500);
});

// Cursor Effect
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  setTimeout(() => {
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
  }, 100);
});

document.querySelectorAll('a, button').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursor.style.width = '40px';
    cursor.style.height = '40px';
    cursor.style.opacity = '0.3';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.width = '8px';
    cursor.style.height = '8px';
    cursor.style.opacity = '1';
  });
});

// Header Scroll Effect
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', function () {
  navbar.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: 'smooth',
    });
    navbar.classList.remove('active');
    menuToggle.classList.remove('active');
    document.querySelectorAll('.navbar ul li a').forEach((link) => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});

// Typed Text Effect
const typedTextSpan = document.querySelector('.typed-text');
const textArray = window.portfolioConfig?.hero?.typedText || ["Flutter Developer", "Android App Developer", "IOS App Developer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  if (textArray.length && typedTextSpan) setTimeout(type, newTextDelay + 250);
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', function () {
    filterBtns.forEach((btn) => btn.classList.remove('active'));
    this.classList.add('active');
    const filter = this.getAttribute('data-filter');
    portfolioItems.forEach((item) => {
      if (filter === 'all' || item.getAttribute('data-category') === filter) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Form Validation and Submission
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const resultDiv = document.getElementById('result');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateForm()) return;
      const submitBtn = contactForm.querySelector('.submit-btn');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
      const formData = new FormData(contactForm);
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            showResult('success', 'Message sent successfully! We will get back to you soon.');
            contactForm.reset();
          } else {
            showResult('error', 'Error sending message. Please try again later.');
          }
        })
        .catch((error) => {
          showResult('error', 'Network error. Please check your connection and try again.');
        })
        .finally(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
        });
    });

    const inputs = contactForm.querySelectorAll('.form-input');
    inputs.forEach((input) => {
      input.addEventListener('blur', validateInput);
    });
  }

  function validateInput(e) {
    const input = e.target;
    const errorSpan = input.nextElementSibling.nextElementSibling.nextElementSibling;
    if (!input.checkValidity()) {
      errorSpan.textContent = input.validationMessage;
      errorSpan.style.opacity = '1';
    } else {
      errorSpan.style.opacity = '0';
    }
  }

  function validateForm() {
    let isValid = true;
    const inputs = contactForm.querySelectorAll('.form-input[required]');
    inputs.forEach((input) => {
      const errorSpan = input.nextElementSibling.nextElementSibling.nextElementSibling;
      if (!input.checkValidity()) {
        errorSpan.textContent = input.validationMessage;
        errorSpan.style.opacity = '1';
        isValid = false;
        input.style.animation = 'shake 0.5s';
        setTimeout(() => {
          input.style.animation = '';
        }, 500);
      }
    });
    return isValid;
  }

  function showResult(type, message) {
    resultDiv.textContent = message;
    resultDiv.className = 'form-result ' + type;
    setTimeout(() => {
      resultDiv.style.opacity = '0';
      setTimeout(() => {
        resultDiv.className = 'form-result';
        resultDiv.textContent = '';
      }, 300);
    }, 5000);
  }
});

// Download Resume
const downloadResume = document.getElementById('download-resume');
if (downloadResume) {
  downloadResume.addEventListener('click', function (e) {
    e.preventDefault();
    const originalText = this.innerHTML;
    this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = 'resume/prasnn_cv.pdf';
      link.download = 'prasnn_cv.pdf';
      link.target = '_blank';
      link.style.display = 'none';
      link.setAttribute('download', '');
      link.setAttribute('type', 'application/pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      this.innerHTML = originalText;
      showDownloadNotification();
    }, 500);
  });
}

function showDownloadNotification() {
  const notification = document.createElement('div');
  notification.className = 'download-notification';
  notification.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <span>Resume downloaded successfully!</span>
  `;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 500);
  }, 2500);
}