const body = document.querySelector('#background');
const h1 = document.querySelector('.joke');
const btn = document.getElementById('newJokeBtn');
const a = document.querySelector('#broughtToYouBy');
const linkItems = document.querySelectorAll('#link-items');
const linkItemDiv = document.querySelectorAll('#link-item-div');

const getNewJoke = async () => {
  const config = { headers: { Accept: 'application/json' } };
  const res = await fetch('https://icanhazdadjoke.com', config);
  const data = await res.json();
  h1.innerHTML = data.joke;

  body.style.opacity = '1';
  //Generate random RGB value on button click - (RGB goes from 0 - 255)
  const r1 = Math.floor(Math.random() * 255) + 1;
  const g1 = Math.floor(Math.random() * 255) + 1;
  const b1 = Math.floor(Math.random() * 255) + 1;
  const newRGB1 = `rgb(${r1},${g1},${b1})`;
  const bg = document.querySelector('#background');
  bg.style.backgroundColor = newRGB1;

  //Optional - Update the <a tag> and <h1> color depending on background color
  const brightness = Math.round((r1 * 299 + g1 * 587 + b1 * 114) / 1000);
  console.log(brightness);
  h1.style.color = brightness > 120 ? 'black' : 'white';
  a.style.color = brightness > 120 ? 'black' : 'white';

  // Update the color of the quick link icons and their backgrounds depending on the page background color

  for (div of linkItemDiv) {
    div.style.backgroundColor = brightness > 120 ? 'black' : 'white';
  }

  for (item of linkItems) {
    item.style.color = brightness > 120 ? 'white' : 'black';
  }
};

//Page load
window.addEventListener('DOMContentLoaded', getNewJoke);

//Event Listener
btn.addEventListener('click', getNewJoke);
