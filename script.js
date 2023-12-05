// JavaScript to add a class when scrolling down and remove it when scrolling back to the top
window.addEventListener('scroll', function() {
    const header = document.querySelector('.sticky-header');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 50) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  