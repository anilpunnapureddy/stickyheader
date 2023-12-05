// JavaScript to add a class when scrolling down and remove it when scrolling back to the top
window.addEventListener('scroll', function() {
  const header = document.querySelector('.sticky-header');
  const content = document.querySelector('.content');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    header.classList.add('sticky');
    content.classList.add('sticky-content');
  } else {
    header.classList.remove('sticky');
    content.classList.remove('sticky-content');
  }
});

  