// document.querySelectorAll('.drum').forEach(function(e) {
//         e.addEventListener('click', function() {
//                 const audio = new Audio('./sounds/kick-bass.mp3');
//                 audio.play();
//                 console.log(e.i)
//         });
// });

// GOOD LEARNING BUT SEE WES BOS SOLUTION FOR MODERN JS

function playSound(x) {
        switch (x) {
                case 'w':
                        const crash = new Audio('./sounds/crash.mp3');
                        crash.play();
                        break;
                case 'a':
                        const kick = new Audio('./sounds/kick-bass.mp3');
                        kick.play();
                        break;
                case 's':
                        const snare = new Audio('./sounds/snare.mp3');
                        snare.play();
                        break;
                case 'd':
                        const tom1 = new Audio('./sounds/tom-1.mp3');
                        tom1.play();
                        break;
                case 'j':
                        const tom2 = new Audio('./sounds/tom-2.mp3');
                        tom2.play();
                        break;
                case 'k':
                        const tom3 = new Audio('./sounds/tom-3.mp3');
                        tom3.play();
                        break;
                case 'l':
                        const tom4 = new Audio('./sounds/tom-4.mp3');
                        tom4.play();
                        break;
                default:
                        console.log(buttonInnerHTML);
        }
}

function animateMe(e) {
        const pressed = document.querySelector(`.${e}`);
        pressed.classList.toggle('pressed');
        setTimeout(function() {
                pressed.classList.toggle('pressed');
        }, 300);
}

const numberOfButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfButtons; i++) {
        document.querySelectorAll('.drum')[i].addEventListener('click', function() {
                const buttonInnerHTML = this.innerHTML;
                playSound(buttonInnerHTML);
                animateMe(buttonInnerHTML);
        });
}

document.addEventListener('keypress', function(e) {
        playSound(e.key);
        animateMe(e.key);
});
