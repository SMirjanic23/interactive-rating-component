let ratingContainer = document.querySelector('.rating-container');
let submitBtn = document.querySelector('.rating-numbers__submit');
let thankYouBox = document.querySelector('.thank-you');
let ratingNumber = document.querySelectorAll('.rating-numbers__item');

let ratingResult = document.querySelector('.thank-you__result');

for (let i = 0; i < ratingNumber.length; i++) {
  let rating = ratingNumber[i].value;
  ratingNumber[i].addEventListener('click', () => {
    console.log(rating);
    submitBtn.addEventListener('click', () => {
      ratingContainer.style.display = 'none';
      thankYouBox.style.display = 'flex';

      ratingResult.innerHTML = `You selected ${rating} out of 5`;
    });
  });
  //   console.log();
}
