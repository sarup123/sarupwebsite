
// Fade-in + slide-up animation function
function fadeSlideUp(element, delay = 0) {
  element.style.opacity = 0;
  element.style.transform = 'translateY(20px)';
  element.style.transition = `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`;
  setTimeout(() => {
    element.style.opacity = 1;
    element.style.transform = 'translateY(0)';
  }, 50);
}

// Animate header elements
fadeSlideUp(document.querySelector('h1'), 0.2);
fadeSlideUp(document.querySelector('p'), 0.5);
document.querySelectorAll('nav a').forEach((el, i) => fadeSlideUp(el, 0.7 + i * 0.2));

// 3D tilt effect on info boxes
const boxes = document.querySelectorAll('.info-box');
boxes.forEach(box => {
  box.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

  box.addEventListener('mousemove', (e) => {
    const rect = box.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;

    box.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    box.style.boxShadow = '0 15px 40px rgba(0,0,0,0.4)';
  });

  box.addEventListener('mouseleave', () => {
    box.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    box.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)';
  });
});

// Button bounce animation on hover (JS way)
const buttons = document.querySelectorAll('.btn-3d');
buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transition = 'transform 0.4s ease';
    btn.style.transform = 'translateY(-8px) scale(1.1)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translateY(0) scale(1)';
  });
});

// Social buttons continuous pulse effect (scale animation)
const socialBtns = document.querySelectorAll('.social-buttons a');
socialBtns.forEach(btn => {
  let growing = true;
  let scale = 1;
  setInterval(() => {
    if (growing) {
      scale += 0.005;
      if (scale >= 1.1) growing = false;
    } else {
      scale -= 0.005;
      if (scale <= 1) growing = true;
    }
    btn.style.transform = `scale(${scale})`;
  }, 30);

// Typing animation for your name
const typedText = document.getElementById('typed-text');
const textToType = "Sarup Shrestha";
let idx = 0;

function type() {
  if (idx < textToType.length) {
    typedText.textContent += textToType.charAt(idx);
    idx++;
    setTimeout(type, 150);
  } else {
    setTimeout(() => {
      typedText.textContent = '';
      idx = 0;
      type();
    }, 2000);
  }
}
type();

// Create floating circles background
const container = document.getElementById('heart-animation-container'); // Or your main container id

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

for(let i=0; i<10; i++) {
  const circle = document.createElement('div');
  circle.classList.add('floating-circle');
  circle.style.width = circle.style.height = randomBetween(20, 60) + 'px';
  circle.style.background = `hsl(${randomBetween(0, 360)}, 70%, 60%)`;
  circle.style.left = randomBetween(0, container.offsetWidth) + 'px';
  circle.style.top = randomBetween(0, container.offsetHeight) + 'px';
  circle.style.animationDuration = randomBetween(4, 8) + 's';
  circle.style.animationDelay = randomBetween(0, 5) + 's';
  container.appendChild(circle);
}

function animateHearts() {
  smallHearts.forEach((heart, i) => {
    heart.style.animation = `heartJoin 2s ease forwards`;
    heart.style.animationDelay = `${i * 0.2}s`;
  });

  setTimeout(() => {
    bigHeart.style.animation = 'bigHeartBlow 1s forwards';
    nameEl.style.opacity = '1';
    nameEl.classList.add('pulse');
  }, 2200);

  setTimeout(() => {
    smallHearts.forEach(heart => {
      heart.style.animation = '';
      heart.style.opacity = '0';
      heart.style.transform = 'scale(0) translate(0,0) rotate(0deg)';
      heart.style.filter = 'hue-rotate(0deg)';
    });
    bigHeart.style.animation = '';
    bigHeart.style.opacity = '1';
    bigHeart.style.transform = 'translate(-50%, -50%) scale(1)';
    bigHeart.style.filter = 'drop-shadow(0 0 3px #e63946)';
    nameEl.style.opacity = '0';
    nameEl.classList.remove('pulse');
  }, 3500);
}
// Scroll fade in effect
const infoRows = document.querySelectorAll('.info-row');
function checkScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  infoRows.forEach(row => {
    const top = row.getBoundingClientRect().top;
    if(top < triggerBottom) {
      row.classList.add('visible');
    } else {
      row.classList.remove('visible');
    }
  });
}
window.addEventListener('scroll', checkScroll);
checkScroll();

// Floating shapes background
const floatingBg = document.createElement('div');
document.body.appendChild(floatingBg);

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

for(let i=0; i<15; i++) {
  const shape = document.createElement('div');
  shape.classList.add('floating-shape');
  const size = randomBetween(30, 80);
  shape.style.width = shape.style.height = size + 'px';
  shape.style.background = `hsl(${randomBetween(0, 360)}, 70%, 50%)`;
  shape.style.top = randomBetween(0, window.innerHeight) + 'px';
  shape.style.left = randomBetween(0, window.innerWidth) + 'px';
  shape.style.animationDuration = randomBetween(5, 10) + 's';
  shape.style.animationDelay = randomBetween(0, 5) + 's';
  shape.style.borderRadius = (Math.random() < 0.5) ? '50%' : '20%';
  floatingBg.appendChild(shape);
}
const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  const triggerBottom = window.innerHeight * 0.9;
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

});

});

