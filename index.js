// // Preloader
// window.addEventListener('load', function() {
//   const preloader = document.querySelector('.preloader');
//   preloader.style.opacity = '0';
//   setTimeout(() => {
//       preloader.style.display = 'none';
//   }, 500);
// });

// // Cursor Effect
// const cursor = document.querySelector('.cursor');
// const cursorFollower = document.querySelector('.cursor-follower');

// document.addEventListener('mousemove', (e) => {
//   cursor.style.left = e.clientX + 'px';
//   cursor.style.top = e.clientY + 'px';
  
//   setTimeout(() => {
//       cursorFollower.style.left = e.clientX + 'px';
//       cursorFollower.style.top = e.clientY + 'px';
//   }, 100);
// });

// document.querySelectorAll('a, button').forEach(el => {
//   el.addEventListener('mouseenter', () => {
//       cursor.style.width = '40px';
//       cursor.style.height = '40px';
//       cursor.style.opacity = '0.3';
//   });
  
//   el.addEventListener('mouseleave', () => {
//       cursor.style.width = '8px';
//       cursor.style.height = '8px';
//       cursor.style.opacity = '1';
//   });
// });

// // Header Scroll Effect
// window.addEventListener('scroll', function() {
//   const header = document.querySelector('.header');
//   if (window.scrollY > 100) {
//       header.classList.add('scrolled');
//   } else {
//       header.classList.remove('scrolled');
//   }
// });

// // Mobile Menu Toggle
// const menuToggle = document.querySelector('.menu-toggle');
// const navbar = document.querySelector('.navbar');

// menuToggle.addEventListener('click', function() {
//   navbar.classList.toggle('active');
//   menuToggle.classList.toggle('active');
// });

// // Smooth Scrolling for Navigation Links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//       e.preventDefault();
      
//       const targetId = this.getAttribute('href');
//       const targetElement = document.querySelector(targetId);
      
//       window.scrollTo({
//           top: targetElement.offsetTop - 80,
//           behavior: 'smooth'
//       });
      
//       // Close mobile menu if open
//       navbar.classList.remove('active');
//       menuToggle.classList.remove('active');
      
//       // Update active nav link
//       document.querySelectorAll('.navbar ul li a').forEach(link => {
//           link.classList.remove('active');
//       });
//       this.classList.add('active');
//   });
// });

// // Typed Text Effect
// const typedTextSpan = document.querySelector('.typed-text');
// const cursorSpan = document.querySelector('.cursor');

// const textArray = ["Flutter Developer","Android App Developer","IOS App Developer"];
// const typingDelay = 200;
// const erasingDelay = 100;
// const newTextDelay = 2000;
// let textArrayIndex = 0;
// let charIndex = 0;

// function type() {
//   if (charIndex < textArray[textArrayIndex].length) {
//       if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
//       typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//       charIndex++;
//       setTimeout(type, typingDelay);
//   } else {
//       cursorSpan.classList.remove('typing');
//       setTimeout(erase, newTextDelay);
//   }
// }

// function erase() {
//   if (charIndex > 0) {
//       if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
//       typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
//       charIndex--;
//       setTimeout(erase, erasingDelay);
//   } else {
//       cursorSpan.classList.remove('typing');
//       textArrayIndex++;
//       if (textArrayIndex >= textArray.length) textArrayIndex = 0;
//       setTimeout(type, typingDelay + 1100);
//   }
// }

// document.addEventListener('DOMContentLoaded', function() {
//   if (textArray.length) setTimeout(type, newTextDelay + 250);
// });

// // Portfolio Filter
// const filterBtns = document.querySelectorAll('.filter-btn');
// const portfolioItems = document.querySelectorAll('.portfolio-item');

// filterBtns.forEach(btn => {
//   btn.addEventListener('click', function() {
//       // Update active filter button
//       filterBtns.forEach(btn => btn.classList.remove('active'));
//       this.classList.add('active');
      
//       const filter = this.getAttribute('data-filter');
      
//       // Filter portfolio items
//       portfolioItems.forEach(item => {
//           if (filter === 'all' || item.getAttribute('data-category') === filter) {
//               item.style.display = 'block';
//           } else {
//               item.style.display = 'none';
//           }
//       });
//   });
// });

// // Animate Skills on Scroll
// function animateSkills() {
//   const skillBars = document.querySelectorAll('.progress-bar span');
  
//   skillBars.forEach(bar => {
//       const width = bar.parentElement.previousElementSibling.querySelector('span').textContent;
//       bar.style.width = width;
//   });
// }

// // Intersection Observer for animations
// const observerOptions = {
//   threshold: 0.1
// };

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//       if (entry.isIntersecting) {
//           if (entry.target.id === 'about') {
//               animateSkills();
//           }
          
//           // Add animation class if needed
//           if (entry.target.classList.contains('service-card')) {
//               entry.target.classList.add('animate');
//           }
//       }
//   });
// }, observerOptions);

// document.querySelectorAll('section, .service-card').forEach(section => {
//   observer.observe(section);
// });

// // Set active nav link based on scroll position
// window.addEventListener('scroll', function() {
//   const scrollPosition = window.scrollY;
  
//   document.querySelectorAll('section').forEach(section => {
//       const sectionTop = section.offsetTop - 100;
//       const sectionHeight = section.offsetHeight;
//       const sectionId = section.getAttribute('id');
      
//       if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
//           document.querySelectorAll('.navbar ul li a').forEach(link => {
//               link.classList.remove('active');
//               if (link.getAttribute('href') === `#${sectionId}`) {
//                   link.classList.add('active');
//               }
//           });
//       }
//   });
// });
// // Animate on scroll functionality
// function animateOnScroll() {
//   const elements = document.querySelectorAll('[data-aos]');
  
//   const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               entry.target.classList.add('aos-animate');
              
//               // Animate skill bars
//               if (entry.target.classList.contains('skills-section')) {
//                   animateSkillBars();
//               }
//           }
//       });
//   }, { threshold: 0.1 });
  
//   elements.forEach(el => observer.observe(el));
// }

// // Skill bar animation
// function animateSkillBars() {
//   const progressFills = document.querySelectorAll('.progress-fill');
  
//   progressFills.forEach(fill => {
//       const width = fill.getAttribute('data-width');
//       fill.style.width = width + '%';
//   });
// }

// // Initialize animations when page loads
// document.addEventListener('DOMContentLoaded', function() {
//   animateOnScroll();
  
//   // Add hover effect to timeline items
//   const timelineItems = document.querySelectorAll('.timeline-content');
//   timelineItems.forEach(item => {
//       item.addEventListener('mouseenter', function() {
//           this.style.transform = 'translateY(-5px)';
//           this.style.boxShadow = '0 10px 20px rgba(108, 99, 255, 0.1)';
//       });
      
//       item.addEventListener('mouseleave', function() {
//           this.style.transform = 'translateY(0)';
//           this.style.boxShadow = 'none';
//       });
//   });
// });
// // Initialize animations
// document.addEventListener('DOMContentLoaded', function() {
//   // Animate on scroll
//   const serviceCards = document.querySelectorAll('.service-card');
  
//   const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               entry.target.style.opacity = 1;
//               entry.target.style.transform = 'translateY(0)';
//           }
//       });
//   }, { threshold: 0.1 });
  
//   serviceCards.forEach(card => observer.observe(card));
  
//   // Add hover effect to service cards
//   serviceCards.forEach(card => {
//       card.addEventListener('mouseenter', function() {
//           this.style.transform = 'translateY(-10px) scale(1.02)';
//           this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
//       });
      
//       card.addEventListener('mouseleave', function() {
//           this.style.transform = 'translateY(0) scale(1)';
//           this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
//       });
//   });
// });

// // Form Validation and Submission
// document.addEventListener('DOMContentLoaded', function() {
//   const contactForm = document.getElementById('contactForm');
//   const resultDiv = document.getElementById('result');
  
//   if (contactForm) {
//       contactForm.addEventListener('submit', function(e) {
//           e.preventDefault();
          
//           // Validate form
//           if (!validateForm()) {
//               return;
//           }
          
//           // Change button state
//           const submitBtn = contactForm.querySelector('.submit-btn');
//           submitBtn.disabled = true;
//           submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
          
//           // Get form data
//           const formData = new FormData(contactForm);
          
//           // Send to Web3Forms
//           fetch('https://api.web3forms.com/submit', {
//               method: 'POST',
//               body: formData
//           })
//           .then(response => response.json())
//           .then(data => {
//               if (data.success) {
//                   showResult('success', 'Message sent successfully! We will get back to you soon.');
//                   contactForm.reset();
//               } else {
//                   showResult('error', 'Error sending message. Please try again later.');
//               }
//           })
//           .catch(error => {
//               showResult('error', 'Network error. Please check your connection and try again.');
//           })
//           .finally(() => {
//               submitBtn.disabled = false;
//               submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
//           });
//       });
      
//       // Add input validation on blur
//       const inputs = contactForm.querySelectorAll('.form-input');
//       inputs.forEach(input => {
//           input.addEventListener('blur', validateInput);
//       });
//   }
  
//   function validateInput(e) {
//       const input = e.target;
//       const errorSpan = input.nextElementSibling.nextElementSibling.nextElementSibling;
      
//       if (!input.checkValidity()) {
//           errorSpan.textContent = input.validationMessage;
//           errorSpan.style.opacity = '1';
//       } else {
//           errorSpan.style.opacity = '0';
//       }
//   }
  
//   function validateForm() {
//       let isValid = true;
//       const inputs = contactForm.querySelectorAll('.form-input[required]');
      
//       inputs.forEach(input => {
//           const errorSpan = input.nextElementSibling.nextElementSibling.nextElementSibling;
          
//           if (!input.checkValidity()) {
//               errorSpan.textContent = input.validationMessage;
//               errorSpan.style.opacity = '1';
//               isValid = false;
              
//               // Add shake animation
//               input.style.animation = 'shake 0.5s';
//               setTimeout(() => {
//                   input.style.animation = '';
//               }, 500);
//           }
//       });
      
//       return isValid;
//   }
  
//   function showResult(type, message) {
//       resultDiv.textContent = message;
//       resultDiv.className = 'form-result ' + type;
      
//       // Hide after 5 seconds
//       setTimeout(() => {
//           resultDiv.style.opacity = '0';
//           setTimeout(() => {
//               resultDiv.className = 'form-result';
//               resultDiv.textContent = '';
//           }, 300);
//       }, 5000);
//   }
  
//   // Animation on scroll
//   const contactItems = document.querySelectorAll('[data-aos]');
//   const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               entry.target.classList.add('aos-animate');
//           }
//       });
//   }, { threshold: 0.1 });
  
//   contactItems.forEach(item => observer.observe(item));
// });

// // Add shake animation
// const style = document.createElement('style');
// style.textContent = `
//   @keyframes shake {
//       0%, 100% { transform: translateX(0); }
//       20%, 60% { transform: translateX(-5px); }
//       40%, 80% { transform: translateX(5px); }
//   }
// `;
// document.head.appendChild(style);
// // Download resume button
//     // Alternative with timeout for better UX
//     const downloadResume = document.getElementById('download-resume');
//     if (downloadResume) {
//         downloadResume.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             // Change button text temporarily
//             const originalText = this.innerHTML;
//             this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
            
//             setTimeout(() => {
//                 const link = document.createElement('a');
//                 link.href = 'resume/prasnn_cv.pdf';
//                 link.download = 'prasnn_cv.pdf'; // Custom filename for download
//                 link.target = '_blank'; // Open in new tab if download fails
//                 link.style.display = 'none'; // Hide the link element
                
//                 // Important: Add these attributes to force download
//                 link.setAttribute('download', '');
//                 link.setAttribute('type', 'application/pdf');
                
//                 document.body.appendChild(link);
//                 link.click();
//                 document.body.removeChild(link);
                
//                 // Restore button text
//                 this.innerHTML = originalText;
                
//                 // Show download notification
//                 showDownloadNotification();
//             }, 500);
//         });
//     }
    
//     function showDownloadNotification() {
//         const notification = document.createElement('div');
//         notification.className = 'download-notification';
//         notification.innerHTML = `
//             <i class="fas fa-check-circle"></i>
//             <span>Resume downloaded successfully!</span>
//         `;
//         document.body.appendChild(notification);
        
//         setTimeout(() => {
//             notification.classList.add('fade-out');
//             setTimeout(() => {
//                 document.body.removeChild(notification);
//             }, 500);
//         }, 2500);
//     }

    
// Utility: Debounce function for performance optimization
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Utility: Easing function for smooth animations
function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// Preloader with fade and scale effect
window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    preloader.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    preloader.style.opacity = '0';
    preloader.style.transform = 'scale(0.95)';
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 500);
  }
});

// Custom Cursor (Disabled on Mobile)
if (!/Mobi|Android/i.test(navigator.userAgent)) {
  const cursor = document.querySelector('.cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  if (cursor && cursorFollower) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.transition = 'transform 0.1s ease';
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) scale(1)`;
      setTimeout(() => {
        cursorFollower.style.transition = 'transform 0.2s ease, background 0.3s ease';
        cursorFollower.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        cursorFollower.style.background = 'radial-gradient(circle, rgba(108, 99, 255, 0.3), transparent)';
      }, 100);
    });

    document.querySelectorAll('a, button, .portfolio-item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform += ' scale(1.5)';
        cursor.style.background = 'rgba(108, 99, 255, 0.5)';
        cursor.style.boxShadow = '0 0 20px rgba(108, 99, 255, 0.7)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
        cursor.style.background = 'rgba(108, 99, 255, 0.3)';
        cursor.style.boxShadow = 'none';
      });
    });
  }
}

// Header with Parallax and Shadow
window.addEventListener('scroll', debounce(() => {
  const header = document.querySelector('.header');
  if (header) {
    const scrollY = window.scrollY;
    header.style.transform = `translateY(${scrollY * 0.2}px)`;
    header.style.boxShadow = scrollY > 100 ? '0 4px 15px rgba(0, 0, 0, 0.2)' : 'none';
    header.classList.toggle('scrolled', scrollY > 100);
  }
}, 10));

// Mobile Menu with Slide Animation
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');
if (menuToggle && navbar) {
  menuToggle.addEventListener('click', () => {
    const isActive = navbar.classList.toggle('active');
    menuToggle.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isActive);
    navbar.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    navbar.style.transform = isActive ? 'translateX(0)' : 'translateX(100%)';
    navbar.style.opacity = isActive ? '1' : '0';
    document.body.style.overflow = isActive ? 'hidden' : '';
  });
}

// Smooth Scrolling with Easing
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const start = window.scrollY;
      const target = targetElement.offsetTop - 80;
      const duration = 800;
      let startTime = null;

      function scrollAnimation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutQuad(progress);
        window.scrollTo(0, start + (target - start) * ease);
        if (progress < 1) requestAnimationFrame(scrollAnimation);
      }

      requestAnimationFrame(scrollAnimation);
      navbar.classList.remove('active');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.querySelectorAll('.navbar ul li a').forEach(link => link.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// Typed Text with Color and Bounce
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');
const textArray = ["Flutter Developer", "Android App Developer", "iOS App Developer"];
const colors = ["#6C63FF", "#FF6C6C", "#63FF9B"];
const typingDelay = 150;
const erasingDelay = 80;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    typedTextSpan.style.color = colors[textArrayIndex];
    typedTextSpan.style.transform = `scale(1.05)`;
    setTimeout(() => typedTextSpan.style.transform = 'scale(1)', 100);
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
    textArrayIndex = (textArrayIndex + 1) % textArray.length;
    setTimeout(type, typingDelay + 500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (textArray.length) setTimeout(type, newTextDelay);
});

// Portfolio Filter with Animations
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
filterBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    filterBtns.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const filter = this.getAttribute('data-filter');
    portfolioItems.forEach(item => {
      const isVisible = filter === 'all' || item.getAttribute('data-category') === filter;
      item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      item.style.opacity = isVisible ? '1' : '0';
      item.style.transform = isVisible ? 'scale(1)' : 'scale(0.95)';
      item.style.display = isVisible ? 'block' : 'none';
    });
  });
});

// Skill Bars with Gradient and Counter
function animateSkillBars() {
  const progressFills = document.querySelectorAll('.progress-fill');
  progressFills.forEach(fill => {
    const width = fill.getAttribute('data-width');
    const counter = fill.parentElement.querySelector('.progress-counter');
    fill.style.transition = 'width 1.5s ease';
    fill.style.background = 'linear-gradient(90deg, #6C63FF, #FF6C6C)';
    fill.style.width = `${width}%`;
    if (counter) {
      let count = 0;
      const target = parseInt(width);
      const increment = target / 50;
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        counter.textContent = `${Math.round(count)}%`;
      }, 30);
    }
  });
}

// Intersection Observer for Animations
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      if (entry.target.classList.contains('skills-section')) animateSkillBars();
      if (entry.target.classList.contains('service-card')) {
        entry.target.style.transform += ' scale(1.02)';
      }
    }
  });
}, observerOptions);

document.querySelectorAll('section, .service-card').forEach(el => observer.observe(el));

// Scroll-based Active Nav
window.addEventListener('scroll', debounce(() => {
  const scrollPosition = window.scrollY;
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      document.querySelectorAll('.navbar ul li a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) link.classList.add('active');
      });
    }
  });
}, 10));

// Timeline Hover Effects
document.addEventListener('DOMContentLoaded', () => {
  const timelineItems = document.querySelectorAll('.timeline-content');
  timelineItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
      item.style.transform = 'translateY(-10px) scale(1.02)';
      item.style.boxShadow = '0 15px 30px rgba(108, 99, 255, 0.2)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'translateY(0) scale(1)';
      item.style.boxShadow = 'none';
    });
  });
});

// Form Validation with Animations
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const resultDiv = document.getElementById('result');
  if (contactForm && resultDiv) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (!validateForm()) return;
      const submitBtn = contactForm.querySelector('.submit-btn');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
      const formData = new FormData(contactForm);
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const data = await response.json();
        showResult(data.success ? 'success' : 'error', 
          data.success ? 'Message sent successfully!' : 'Error sending message.');
        if (data.success) contactForm.reset();
      } catch (error) {
        showResult('error', 'Network error. Please try again.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Send Message</span><i class="fas fa-paper-plane"></i>';
      }
    });

    contactForm.querySelectorAll('.form-input').forEach(input => {
      input.addEventListener('blur', validateInput);
      input.addEventListener('input', validateInput);
    });
  }

  function validateInput(e) {
    const input = e.target;
    const errorSpan = input.nextElementSibling?.nextElementSibling?.nextElementSibling;
    if (errorSpan) {
      errorSpan.style.transition = 'opacity 0.3s ease';
      if (!input.checkValidity()) {
        errorSpan.textContent = input.validationMessage;
        errorSpan.style.opacity = '1';
        input.style.borderColor = '#FF6C6C';
        input.style.animation = 'shake 0.5s';
        setTimeout(() => input.style.animation = '', 500);
      } else {
        errorSpan.style.opacity = '0';
        input.style.borderColor = '#6C63FF';
      }
    }
  }

  function validateForm() {
    let isValid = true;
    contactForm.querySelectorAll('.form-input[required]').forEach(input => {
      const errorSpan = input.nextElementSibling?.nextElementSibling?.nextElementSibling;
      if (!input.checkValidity()) {
        errorSpan.textContent = input.validationMessage;
        errorSpan.style.opacity = '1';
        input.style.borderColor = '#FF6C6C';
        input.style.animation = 'shake 0.5s';
        setTimeout(() => input.style.animation = '', 500);
        isValid = false;
      }
    });
    return isValid;
  }

  function showResult(type, message) {
    resultDiv.textContent = message;
    resultDiv.className = `form-result ${type}`;
    resultDiv.style.opacity = '1';
    resultDiv.style.transform = 'translateY(0)';
    setTimeout(() => {
      resultDiv.style.opacity = '0';
      resultDiv.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        resultDiv.className = 'form-result';
        resultDiv.textContent = '';
      }, 300);
    }, 4000);
  }
});

// Resume Download with Confetti
document.addEventListener('DOMContentLoaded', () => {
  const downloadResume = document.getElementById('download-resume');
  if (downloadResume) {
    downloadResume.addEventListener('click', (e) => {
      e.preventDefault();
      const originalText = downloadResume.innerHTML;
      downloadResume.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = 'resume/prasnn_cv.pdf';
        link.download = 'prasnn_cv.pdf';
        link.setAttribute('type', 'application/pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        downloadResume.innerHTML = originalText;
        showDownloadNotification();
        triggerConfetti();
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
      setTimeout(() => document.body.removeChild(notification), 500);
    }, 2500);
  }

  function triggerConfetti() {
    // Simple confetti effect using canvas
    const canvas = document.createElement('canvas');
    canvas.className = 'confetti-canvas';
    document.body.appendChild(canvas);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    const particles = [];
    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 2,
        speedX: Math.random() * 3 - 1.5,
        speedY: Math.random() * 3 - 1.5,
        color: `hsl(${Math.random() * 360}, 70%, 50%)`
      });
    }
    function animateConfetti() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.size *= 0.98;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      if (particles.some(p => p.size > 0.2)) requestAnimationFrame(animateConfetti);
      else document.body.removeChild(canvas);
    }
    requestAnimationFrame(animateConfetti);
  }
});

// Parallax Background
document.addEventListener('DOMContentLoaded', () => {
  const parallaxSections = document.querySelectorAll('.parallax-section');
  window.addEventListener('scroll', debounce(() => {
    parallaxSections.forEach(section => {
      const speed = section.getAttribute('data-parallax-speed') || 0.3;
      const offset = window.scrollY * speed;
      section.style.backgroundPositionY = `${offset}px`;
    });
  }, 10));
});

// CSS for Animations
const style = document.createElement('style');
style.textContent = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-5px); }
    40%, 80% { transform: translateX(5px); }
  }
  .cursor {
    position: fixed;
    width: 8px;
    height: 8px;
    background: rgba(108, 99, 255, 0.3);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease, background 0.3s ease, box-shadow 0.3s ease;
  }
  .cursor-follower {
    position: fixed;
    width: 24px;
    height: 24px;
    background: radial-gradient(circle, rgba(108, 99, 255, 0.2), transparent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9998;
    transition: transform 0.2s ease;
  }
  .download-notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: #6C63FF;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 1;
    transition: opacity 0.3s ease;
  }
  .download-notification.fade-out {
    opacity: 0;
  }
  .confetti-canvas {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 10000;
  }
  .form-result {
    transition: opacity 0.3s ease, transform 0.3s ease;
    opacity: 0;
    transform: translateY(-10px);
  }
  .form-result.success {
    background: #63FF9B;
    color: #fff;
  }
  .form-result.error {
    background: #FF6C6C;
    color: #fff;
  }
  [data-aos] {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  [data-aos].aos-animate {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);