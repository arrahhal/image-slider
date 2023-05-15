const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');
const dotsContainer = document.getElementById('dots');
const images = document.querySelectorAll('.img');
const dots = [];

let currentIndex = 0;

function translateToIndex() {
  images.forEach((image, index) => {
    const translateX = (index - currentIndex) * 100;
    image.style.transform = `translateX(${translateX}%)`;
  });

  if (currentIndex >= images.length) {
    currentIndex = 0;
    translateToIndex();
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
    translateToIndex();
  }

  updateDots();
}

function updateIndex(offset) {
  currentIndex += offset;
  translateToIndex();
}

nextBtn.addEventListener('click', () => {
  updateIndex(1);
});

previousBtn.addEventListener('click', () => {
  updateIndex(-1);
});

function createDot(index) {
  const dot = document.createElement('span');
  dot.classList.add('dot', 'text-slate-50', 'cursor-pointer');
  dot.dataset.index = index;
  dot.innerHTML = `<i class="fa-regular fa-circle"></i>`;
  dot.addEventListener('click', () => {
    currentIndex = index;
    translateToIndex();
  });
  return dot;
}

function createDots() {
  images.forEach((image, index) => {
    const dot = createDot(index);
    dotsContainer.appendChild(dot);
    dots.push(dot);
  });
}

function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('filled');
      dot.innerHTML = `<i class="fa-solid fa-circle"></i>`;
    } else {
      dot.classList.remove('filled');
      dot.innerHTML = `<i class="fa-regular fa-circle"></i>`;
    }
  });
}

createDots();
translateToIndex();
