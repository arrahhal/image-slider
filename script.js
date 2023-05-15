const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');

const imgs = document.querySelectorAll('.img');

let index = 0;

nextBtn.addEventListener('click', () => {
  index += 1;
  imgs.forEach((img) => {
    img.style.transform = `translateX(-${index * 100}%)`;
  });
  if (index > imgs.length - 1) {
    imgs.forEach((img) => (img.style.transform = 'translateX(0)'));
    index = 0;
  }
});

previousBtn.addEventListener('click', () => {
  index -= 1;
  imgs.forEach((img) => {
    img.style.transform = `translateX(-${index * 100}%)`;
  });
  if (index <= 0) {
    imgs.forEach((img) => (img.style.transform = 'translateX(0)'));
    index = 0;
  }
});
