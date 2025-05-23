
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.fade-section');
  const triggerPoint = window.innerHeight * 0.85;

  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerPoint) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
});


window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-left');
  const triggerPoint = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerPoint) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
});


window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-right');
  const triggerPoint = window.innerHeight * 0.85;

  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerPoint) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
});
