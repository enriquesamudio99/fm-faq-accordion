document.addEventListener('DOMContentLoaded', () => {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const isActive = header.classList.contains('header--active');

      accordionHeaders.forEach(header => {
        header.classList.remove('header--active');
        header.lastElementChild.src = './assets/images/icon-plus.svg';
        header.nextElementSibling.style.maxHeight = null;
      });

      if (!isActive) {
        header.classList.add('header--active');
        const body = header.nextElementSibling;
        body.style.maxHeight = body.scrollHeight + 'px';
        header.lastElementChild.src = './assets/images/icon-minus.svg';
      }
    });
  });
});
