// Night Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('night-mode');
 
  // Toggle button icon (optional)
  if (document.body.classList.contains('night-mode')) {
    themeToggle.textContent = '☀️'; // Change to sun icon
  } else {
    themeToggle.textContent = '🌙'; // Change to moon icon
  }
});




// bookmark
// Get all navbar links
const navLinks = document.querySelectorAll('.nav-link');

// Add scroll event listener
window.addEventListener('scroll', () => {
  let current = '';

  // Loop through sections to check which is currently in viewport
  document.querySelectorAll('section').forEach((section) => {
    const sectionTop = section.offsetTop - 50; // Adjust offset for navbar height
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  // Remove and add active class to links based on current section
  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Add click event to scroll smoothly to sections
navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});




// s-2
let currentIndex = 0;
const slides = document.querySelectorAll('.section2png');

// Function to go to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

// Function to go to the previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
}

// Function to update the carousel's position
function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  document.querySelector('.carousel-slide').style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Auto-slide functionality
setInterval(nextSlide, 3000); // Change every 3 seconds





// s-4
function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');

  items.forEach(item => {
    if (category === 'all') {
      item.style.display = 'block'; // Show all items
    } else if (item.classList.contains(category)) {
      item.style.display = 'block'; // Show matching items
    } else {
      item.style.display = 'none'; // Hide non-matching items
    }
  });
}

// Default: Show all featured items
filterGallery('all');




// s-6
const bullets = document.querySelectorAll('.bullet');
const testimonials = document.querySelectorAll('.testimonial');

bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    // Remove active class from all bullets and testimonials
    bullets.forEach(b => b.classList.remove('active'));
    testimonials.forEach(t => t.classList.remove('active'));

    // Add active class to clicked bullet and corresponding testimonial
    bullet.classList.add('active');
    testimonials[index].classList.add('active');
  });
});





// footer
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  const email = document.getElementById('email').value;

  // Validate the email input
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Redirect to a 404 error page
  window.location.href = '/404.html';
});

// Email validation function
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}



