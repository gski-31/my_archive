const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');
const overlayClose = overlay.querySelector('.close');

const generateHTML = ([h, v]) => {
    return `
    <div class="item h${h} v${v}">
      <img src="img/${randomNumber(12)}.jpg">
      <div class="item__overlay">
        <button>View →</button>
      </div>
    </div>
  `;
}

const randomNumber = (limit) => {
    return Math.floor(Math.random() * limit) + 1;
}

const handleClick = (e) => {
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
    overlay.classList.add('open');
}

const close = () => {
    overlay.classList.remove('open');
}

const digits = Array.from({ length: 50 }, () =>
    // CONCAT 1X1 AS FILLER
    [randomNumber(4), randomNumber(4)]).concat([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1], [1, 1]])

const html = digits.map(generateHTML).join('');
gallery.innerHTML = html;

const items = document.querySelectorAll('.item');

items.forEach(item => item.addEventListener('click', handleClick));

overlayClose.addEventListener('click', close);