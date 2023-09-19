// 1. Declare variables and capture input.
const adj = prompt('enter and adjective');
const name = prompt('enter a name');
const item = prompt('enter a thing here');

// 2. Combine the input with other words to create a story.
const story = `The ${adj} giveaway that tells you when ${name} is giving you a better ${item} than other retailers.`;

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = story;
