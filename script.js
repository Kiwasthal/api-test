'use strict';

const img = document.querySelector('img');
const errorDisplay = document.querySelector('span');
const input = document.querySelector('input');
const searchBtn = document.querySelector('button');

async function GetCats() {
  const response = await fetch(
    'https://api.giphy.com/v1/gifs/translate?api_key=TucjQQqfWk53eCLWY4cidBL0mlGL8f6s&s=cats',
    {
      mode: 'cors',
    }
  );
  const catData = await response.json();
  img.src = catData.data.images.original.url;
  errorDisplay.textContent = '';
}

let giphDisplay = async () => {
  let userInput = input.value;
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=TucjQQqfWk53eCLWY4cidBL0mlGL8f6s&s=${userInput}`,
      { mode: 'cors' }
    );

    const inputData = await response.json();
    img.src = inputData.data.images.original.url;
  } catch (error) {
    errorDisplay.textContent = 'Not Found';
  }
};

GetCats();

searchBtn.addEventListener('click', giphDisplay);
