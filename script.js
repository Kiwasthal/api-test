const img = document.querySelector('img');
const errorDisplay = document.querySelector('span');
const input = document.querySelector('input');
const searchBtn = document.querySelector('button');
fetch(
  'https://api.giphy.com/v1/gifs/translate?api_key=TucjQQqfWk53eCLWY4cidBL0mlGL8f6s&s=cats',
  {
    mode: 'cors',
  }
)
  .then(response => {
    return response.json();
  })
  .then(response => {
    img.src = response.data.images.original.url;
  });

let giphDisplay = () => {
  let userInput = input.value;
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=TucjQQqfWk53eCLWY4cidBL0mlGL8f6s&s=${userInput}`,
    { mode: 'cors' }
  )
    .then(response => {
      return response.json();
    })
    .then(response => {
      img.src = response.data.images.original.url;
    });
};
