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
window.addEventListener('load', function() {
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

document.querySelectorAll('a, button').forEach(el => {
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
window.addEventListener('scroll', function() {
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

menuToggle.addEventListener('click', function() {
  navbar.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
      });
      
      // Close mobile menu if open
      navbar.classList.remove('active');
      menuToggle.classList.remove('active');
      
      // Update active nav link
      document.querySelectorAll('.navbar ul li a').forEach(link => {
          link.classList.remove('active');
      });
      this.classList.add('active');
  });
});

// Typed Text Effect
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ["Flutter Developer","Android App Developer","IOS App Developer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
  } else {
      cursorSpan.classList.remove('typing');
      setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
      if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
  } else {
      cursorSpan.classList.remove('typing');
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
      // Update active filter button
      filterBtns.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      // Filter portfolio items
      portfolioItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
              item.style.display = 'block';
          } else {
              item.style.display = 'none';
          }
      });
  });
});

// Animate Skills on Scroll
function animateSkills() {
  const skillBars = document.querySelectorAll('.progress-bar span');
  
  skillBars.forEach(bar => {
      const width = bar.parentElement.previousElementSibling.querySelector('span').textContent;
      bar.style.width = width;
  });
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          if (entry.target.id === 'about') {
              animateSkills();
          }
          
          // Add animation class if needed
          if (entry.target.classList.contains('service-card')) {
              entry.target.classList.add('animate');
          }
      }
  });
}, observerOptions);

document.querySelectorAll('section, .service-card').forEach(section => {
  observer.observe(section);
});

// Set active nav link based on scroll position
window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  
  document.querySelectorAll('section').forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelectorAll('.navbar ul li a').forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === `#${sectionId}`) {
                  link.classList.add('active');
              }
          });
      }
  });
});
// Animate on scroll functionality
function animateOnScroll() {
  const elements = document.querySelectorAll('[data-aos]');
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('aos-animate');
              
              // Animate skill bars
              if (entry.target.classList.contains('skills-section')) {
                  animateSkillBars();
              }
          }
      });
  }, { threshold: 0.1 });
  
  elements.forEach(el => observer.observe(el));
}

// Skill bar animation
function animateSkillBars() {
  const progressFills = document.querySelectorAll('.progress-fill');
  
  progressFills.forEach(fill => {
      const width = fill.getAttribute('data-width');
      fill.style.width = width + '%';
  });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', function() {
  animateOnScroll();
  
  // Add hover effect to timeline items
  const timelineItems = document.querySelectorAll('.timeline-content');
  timelineItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-5px)';
          this.style.boxShadow = '0 10px 20px rgba(108, 99, 255, 0.1)';
      });
      
      item.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0)';
          this.style.boxShadow = 'none';
      });
  });
});
// Initialize animations
document.addEventListener('DOMContentLoaded', function() {
  // Animate on scroll
  const serviceCards = document.querySelectorAll('.service-card');
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = 1;
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, { threshold: 0.1 });
  
  serviceCards.forEach(card => observer.observe(card));
  
  // Add hover effect to service cards
  serviceCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-10px) scale(1.02)';
          this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
      });
      
      card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0) scale(1)';
          this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
      });
  });
});

// Form Validation and Submission
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const resultDiv = document.getElementById('result');
  
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Validate form
          if (!validateForm()) {
              return;
          }
          
          // Change button state
          const submitBtn = contactForm.querySelector('.submit-btn');
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
          
          // Get form data
          const formData = new FormData(contactForm);
          
          // Send to Web3Forms
          fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              body: formData
          })
          .then(response => response.json())
          .then(data => {
              if (data.success) {
                  showResult('success', 'Message sent successfully! We will get back to you soon.');
                  contactForm.reset();
              } else {
                  showResult('error', 'Error sending message. Please try again later.');
              }
          })
          .catch(error => {
              showResult('error', 'Network error. Please check your connection and try again.');
          })
          .finally(() => {
              submitBtn.disabled = false;
              submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
          });
      });
      
      // Add input validation on blur
      const inputs = contactForm.querySelectorAll('.form-input');
      inputs.forEach(input => {
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
      
      inputs.forEach(input => {
          const errorSpan = input.nextElementSibling.nextElementSibling.nextElementSibling;
          
          if (!input.checkValidity()) {
              errorSpan.textContent = input.validationMessage;
              errorSpan.style.opacity = '1';
              isValid = false;
              
              // Add shake animation
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
      
      // Hide after 5 seconds
      setTimeout(() => {
          resultDiv.style.opacity = '0';
          setTimeout(() => {
              resultDiv.className = 'form-result';
              resultDiv.textContent = '';
          }, 300);
      }, 5000);
  }
  
  // Animation on scroll
  const contactItems = document.querySelectorAll('[data-aos]');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('aos-animate');
          }
      });
  }, { threshold: 0.1 });
  
  contactItems.forEach(item => observer.observe(item));
});

// Add shake animation
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
      0%, 100% { transform: translateX(0); }
      20%, 60% { transform: translateX(-5px); }
      40%, 80% { transform: translateX(5px); }
  }
`;
document.head.appendChild(style);
// Download resume button
    // Alternative with timeout for better UX
    const downloadResume = document.getElementById('download-resume');
    if (downloadResume) {
        downloadResume.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Change button text temporarily
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
            
            setTimeout(() => {
                const link = document.createElement('a');
                link.href = 'resume/prasnn_cv.pdf';
                link.download = 'prasnn_cv.pdf'; // Custom filename for download
                link.target = '_blank'; // Open in new tab if download fails
                link.style.display = 'none'; // Hide the link element
                
                // Important: Add these attributes to force download
                link.setAttribute('download', '');
                link.setAttribute('type', 'application/pdf');
                
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Restore button text
                this.innerHTML = originalText;
                
                // Show download notification
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

    