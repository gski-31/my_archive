let html = '';

const randomValue = () => Math.floor(Math.random() * 256);

const randomRGB = () => `${randomValue()}, ${randomValue()}, ${randomValue()}`;

for (let i = 1; i <= 100; i++) {
        html += `<div style="background-color: rgb(${randomRGB()})">${i}</div>`;
        // console.log(randomRGB());
}

document.querySelector('main').innerHTML = html;
